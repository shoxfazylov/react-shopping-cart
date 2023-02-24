import styled from '@emotion/styled'
import MuiModal from '@mui/material/Modal'

import { Box } from 'styled/components'
import { media } from 'styled/media'

export const Modal = styled(MuiModal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled(Box)`
  width: 450px;
  padding: 24px 30px 30px;
  box-sizing: border-box;

  ${media.mobile} {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    overflow-y: auto;
  }
`

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    white-space: normal;
  }
`

export const ModalBody = styled.div`
  margin-top: 20px;
`

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #e3e3e8;
  cursor: pointer;
`
