import TabContext from '@mui/lab/TabContext'
import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

import * as S from './Tabs.styled'

interface Tab<T> {
  label: string
  value: T
}

interface TabsProps<T> {
  activeTab: T
  tabs: Tab<T>[]
  asLinks?: boolean
  onTabChange?: (value: T) => void
}

export const Tabs = <T extends string>({
  activeTab,
  tabs = [],
  onTabChange,
  children,
  asLinks = false
}: PropsWithChildren<TabsProps<T>>) => {
  const router = useRouter()

  const tabsList = tabs.map(({ label, value }) => {
    if (asLinks) {
      return (
        <S.Tab
          key={value}
          label={label}
          value={value}
          onClick={() => {
            router.push({
              ...router,
              query: { ...router.query, tab: value }
            })
          }}
        />
      )
    }

    return <S.Tab key={value} label={label} value={value} />
  })

  return (
    <TabContext value={activeTab}>
      <S.TabsBox>
        <S.Tabs
          value={activeTab}
          onChange={(_, value) => {
            if (onTabChange) {
              onTabChange(value)
            }
          }}
        >
          {tabsList}
        </S.Tabs>
      </S.TabsBox>

      {children}
    </TabContext>
  )
}
