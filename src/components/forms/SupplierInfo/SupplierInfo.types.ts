export interface EmailFields {
  subject: string
  emailReply: string
  message: string
}

export interface EmailSendProps extends EmailFields {
  files?: File[]
}

export type OwnershipFormType = 'private' | 'public'

export interface ContactPersonFields {
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
}

export interface LegalPersonFields {
  ownershipForm: OwnershipFormType | null
  name: string
  inn: number
  kpp: number | null
  ogrn: number
  address: string
  phone: string | null
  website: string | null
  email: string | null
}

export interface ContactPersonFormProps {
  contactPerson?: ContactPersonFields
  isChanging: boolean
  onSubmit: (fields: ContactPersonFields) => void
}

export interface LegalPersonFormProps {
  legalPerson?: LegalPersonFields
  isChanging: boolean
  onSubmit: (fields: LegalPersonFields) => void
  onSendEmailModalOpen: () => void
}

export interface SupplierInfoFormProps {
  contactPerson?: ContactPersonFields
  legalPerson?: LegalPersonFields
  supplierId: number
}
