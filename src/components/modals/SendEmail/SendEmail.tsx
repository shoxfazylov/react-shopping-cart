import { useDropzone } from 'react-dropzone'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { TextField, EmailField, Button, Textarea } from 'ui'
import Typography from '@mui/material/Typography'

import * as S from './SendEmail.styled'

import ClipIcon from 'public/icons/clip.svg'

interface FormFields {
  subject: string
  emailReply: string
  message: string
}

interface SendEmailModalProps {
  files: File[]
  open: boolean
  isSending: boolean
  onFilesChange: (files: File[]) => void
  onClose: () => void
  onSubmit: ({ subject, emailReply, message }: FormFields) => void
}

export const SendEmailModal = ({
  open,
  files = [],
  isSending = false,
  onFilesChange,
  onClose,
  onSubmit
}: SendEmailModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.docx,.pdf,.xls',
    multiple: true,
    onDrop: (uploadedFiles: File[]) => {
      uploadedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.addEventListener('load', () => {
          onFilesChange([...files, file])
        })
      })
    }
  })

  useEffect(() => {
    reset()
    onFilesChange([])
  }, [open, onFilesChange, reset])

  const fileNames = files.map(({ name }) => <span key={name}>{name}</span>)

  const onFormSubmit = ({ subject, emailReply, message }: FormFields) => {
    onSubmit({ subject, emailReply, message })
  }

  return (
    <FormProvider {...useFormProps}>
      <S.SendEmailModal
        title="Отправка сообщения на email"
        open={open}
        onClose={() => {
          onFilesChange([])
          onClose()
        }}
      >
        <S.Form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField name="subject" label="Тема сообщения" />

          <EmailField name="emailReply" label="Обратный адрес для ответа" />

          <Textarea name="message" placeholder="Сообщение" />

          <S.Dropzone {...getRootProps()}>
            <input {...getInputProps()} />

            {files.length ? (
              <S.Files>{fileNames}</S.Files>
            ) : (
              <>
                <ClipIcon />

                <Typography>
                  Прикрепить файлы <span>(docx, pdf, xls)</span>
                </Typography>
              </>
            )}
          </S.Dropzone>

          <Button type="submit" fullWidth loading={isSending}>
            Отправить
          </Button>
        </S.Form>
      </S.SendEmailModal>
    </FormProvider>
  )
}
