import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { FormProvider, useForm } from 'react-hook-form'

import { SendEmailModal } from 'components/modals'
import { PersonFields } from 'components/forms'
import {
  TextField,
  PhoneField,
  EmailField,
  InnField,
  OgrnField,
  KppField,
  Button,
  Select,
  Skeleton
} from 'ui'

import { useManagerSupplier } from 'hooks'

import {
  ContactPersonFields,
  LegalPersonFields,
  ContactPersonFormProps,
  LegalPersonFormProps,
  SupplierInfoFormProps,
  EmailFields
} from './SupplierInfo.types'

import * as S from './SupplierInfo.styled'

const ContactPersonForm = ({ contactPerson, isChanging, onSubmit }: ContactPersonFormProps) => {
  const useFormProps = useForm<ContactPersonFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (isChanging || !contactPerson) return

    reset(contactPerson)
  }, [contactPerson, reset, isChanging])

  const onFormSubmit = ({ firstName, middleName, lastName, phone, email }: ContactPersonFields) => {
    onSubmit({ firstName, middleName, lastName, phone, email })
  }

  return (
    <FormProvider {...useFormProps}>
      <S.ContactPersonForm onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="body2">Контактное лицо</Typography>

        {!isChanging ? (
          <PersonFields />
        ) : (
          <S.SkeletonGrid>
            <Skeleton count={5} height={48} />
          </S.SkeletonGrid>
        )}

        {/* для админов */}
        {/* <Textarea name="contactPerson.additionally" placeholder="Дополнительно" /> */}

        <Button type="submit" loading={isChanging}>
          Сохранить
        </Button>
      </S.ContactPersonForm>
    </FormProvider>
  )
}

const LegalPersonForm = ({
  legalPerson,
  isChanging,
  onSubmit,
  onSendEmailModalOpen
}: LegalPersonFormProps) => {
  const useFormProps = useForm<LegalPersonFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (isChanging || !legalPerson) return

    reset(legalPerson)
  }, [legalPerson, reset, isChanging])

  const ownershipFormTypes = [
    { label: 'Приватная', value: 'private' },
    { label: 'Публичная', value: 'public' }
  ]

  const onFormSubmit = ({
    ownershipForm,
    name,
    inn,
    kpp,
    ogrn,
    address,
    phone,
    website,
    email
  }: LegalPersonFields) => {
    onSubmit({ ownershipForm, name, inn, kpp, ogrn, address, phone, website, email })
  }

  return (
    <FormProvider {...useFormProps}>
      <S.LegalPersonForm onSubmit={handleSubmit(onFormSubmit)}>
        <Typography variant="body2">Юридическое лицо</Typography>

        {!isChanging ? (
          <>
            <Select name="ownershipForm" label="Форма собственности" options={ownershipFormTypes} />
            <TextField name="name" label="Наименование" rules={{ required: false }} />
            <InnField name="inn" rules={{ required: false }} />
            <KppField name="kpp" rules={{ required: false }} />
            <OgrnField name="ogrn" label="ОГРН/ОГРНИП" rules={{ required: false }} />
            <TextField name="address" label="Юр. адрес" rules={{ required: false }} />
            <PhoneField name="phone" label="Phone" rules={{ required: false }} />
            <TextField name="website" label="Site" rules={{ required: false }} />
            <EmailField name="email" label="E-mail" rules={{ required: false }} />
          </>
        ) : (
          <S.SkeletonGrid>
            <Skeleton count={9} height={48} />
          </S.SkeletonGrid>
        )}

        <S.ActionsRow>
          <Button type="submit" loading={isChanging}>
            Сохранить
          </Button>

          <Button styled="transparent" onClick={onSendEmailModalOpen}>
            Отправить email
          </Button>
        </S.ActionsRow>
      </S.LegalPersonForm>
    </FormProvider>
  )
}

export const SupplierInfoForm = ({
  contactPerson,
  legalPerson,
  supplierId
}: SupplierInfoFormProps) => {
  const [isSendEmailModalOpen, setSendEmailModalOpen] = useState(false)
  const [mailFiles, setMailFiles] = useState<File[]>([])

  const { supplier, sendEmailToSupplier, editSupplierContactPerson, editSupplierEntityPerson } =
    useManagerSupplier({
      supplierId,
      onSendEmailSuccess: () => {
        setSendEmailModalOpen(false)
      }
    })

  const onEmailSubmit = ({ subject, emailReply, message }: EmailFields) => {
    sendEmailToSupplier.mutate({ supplierId, subject, emailReply, message, files: mailFiles })
  }

  return (
    <S.SupplierInfoForm>
      <ContactPersonForm
        contactPerson={contactPerson}
        isChanging={editSupplierContactPerson.isLoading}
        onSubmit={(fields) => {
          editSupplierContactPerson.mutate({ supplierId, ...fields })
        }}
      />

      <LegalPersonForm
        legalPerson={legalPerson}
        isChanging={editSupplierEntityPerson.isLoading}
        onSubmit={(fields) => {
          // исправить после того как уберут тестовых пользователей созданных через админку (legalPerson всегда есть)
          if (!supplier?.legalPerson) return
          const { id, type } = supplier.legalPerson

          editSupplierEntityPerson.mutate({ id, type, supplierId, ...fields })
        }}
        onSendEmailModalOpen={() => {
          setSendEmailModalOpen(true)
        }}
      />

      <SendEmailModal
        open={isSendEmailModalOpen}
        files={mailFiles}
        isSending={sendEmailToSupplier.isLoading}
        onFilesChange={setMailFiles}
        onSubmit={onEmailSubmit}
        onClose={() => {
          setSendEmailModalOpen(false)
        }}
      />
    </S.SupplierInfoForm>
  )
}
