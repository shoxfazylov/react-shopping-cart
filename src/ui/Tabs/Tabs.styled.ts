import styled from '@emotion/styled'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import MuiTabPanel from '@mui/lab/TabPanel'

import { media } from 'styled/media'
import { scrollStyles } from 'styled/scroll'

export const Tabs = styled(MuiTabs)`
  width: 100%;
  min-height: 39px;
  box-sizing: border-box;
  overflow-x: auto;

  ${scrollStyles('gray')}

  &::-webkit-scrollbar {
    height: 5px;
  }

  .tabs-indicator {
    height: 3px;
    bottom: -1px;
    background: var(--color-primary);
  }

  .tabs-scroller {
    overflow: visible !important;
  }

  .tabs-flex-container {
    position: absolute;
  }
`

export const Tab = styled(MuiTab)`
  justify-content: flex-start;
  max-width: 100%;
  min-width: auto;
  height: 100%;
  min-height: 40px;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-black);
  text-transform: none;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.tab-selected {
    color: var(--color-primary);
  }

  ${media.mobile} {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`

export const TabPanel = styled(MuiTabPanel)`
  padding: 0;
`

export const TabsBox = styled.div`
  margin-bottom: 20px;
  padding: 20px 15px 0;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(38, 34, 45, 0.03);
  border-radius: 6px 6px 0px 0px;
  border-bottom: 1px solid #dedee2;
`
