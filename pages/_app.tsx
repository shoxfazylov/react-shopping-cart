import { NextComponentType, NextPageContext } from 'next'
import React, { useState, useEffect } from 'react'
import { Hydrate, QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import Head from 'next/head'
import NProgress from 'nprogress'

import { PageLayout } from 'components/layouts'
import { Notifications } from 'components'
import { createEmotionCache } from 'core'

import { AuthProvider } from 'providers'

import { globalStyles, muiTheme } from 'styled'
import 'public/fonts/fonts.css'
import 'swiper/css'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { EmotionCache } from '@emotion/react'
import type { DehydratedState } from 'react-query'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
}

NProgress.configure({ showSpinner: false })

type AppPropsWithCache = AppProps<{ dehydratedState: DehydratedState }> & {
  Component: NextPage
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  router
}: AppPropsWithCache) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  // nprogress loading indicator
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const withLayout = (
    Component: NextComponentType<NextPageContext, any, {}>,
    pageProps: any,
    currentPathname: string
  ) => {
    const accountPathnames = ['/customer', '/supplier', '/manager']

    const withoutLayoutPathnames = [
      '/',
      '/original-spare-parts/models',
      '/non-original-spare-parts',
      '/models'
    ]

    const component = <Component {...pageProps} />

    if (withoutLayoutPathnames.some((pathname) => pathname === currentPathname)) {
      return component
    }

    return <PageLayout>{component}</PageLayout>
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Global styles={globalStyles} />

      <MuiThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <AuthProvider>{withLayout(Component, pageProps, router.pathname)}</AuthProvider>
          </Hydrate>
        </QueryClientProvider>

        <Notifications />
      </MuiThemeProvider>
    </CacheProvider>
  )
}
