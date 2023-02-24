import Typography from '@mui/material/Typography'
import { ModalProps as MuiModalProps } from '@mui/material/Modal'

import * as S from './Modal.styled'

import CrossIcon from 'public/icons/cross-circle.svg'

interface ModalProps extends MuiModalProps {
  title: string
  hideClose?: boolean
}

export const Modal = ({ title, open, children, onClose, hideClose = false }: ModalProps) => {
  return (
    <S.Modal open={open} onClose={onClose}>
      <S.ModalContent>
        <S.ModalTop>
          <Typography>{title}</Typography>

          {!hideClose && (
            <S.CloseButton
              onClick={(e) => {
                if (onClose) {
                  onClose(e, 'backdropClick')
                }
              }}
            >
              <CrossIcon />
            </S.CloseButton>
          )}
        </S.ModalTop>

        <S.ModalBody>{children}</S.ModalBody>
      </S.ModalContent>
    </S.Modal>
  )
}
