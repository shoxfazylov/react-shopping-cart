import {UserRoleType} from 'types/account'

export interface User {
    id: number
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    email: string
    user_roles: {
        id: number
        title: UserRoleType
    }[]
}

export interface ChangeUser {
    userId: number
    firstName: string
    middleName: string
    lastName: string
    phone: string
    email: string
}

export interface ShippingAddress {
    id: number
    city: string
    state: string
    house: string
    building: string
    apartment: string
    comment: string
    user: number
}

export interface CreateShippingAddress {
    city: string
    state: string
    house: string
    building: string
    apartment: string
    name: string
    userId?: number
}

interface RequisitesUser {
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    email: string
    id: number
}

export interface RequisiteItem {
    id: number
    user: RequisitesUser
    title: string
    account_number: string
    bik: string
}

export interface CreateRequisite {
    userId: number
    name: string
    accountNumber: string
    bik: string
}

export interface ChangeRequisite {
    id: number
    userId: number
    name: string
    accountNumber: string
    bik: string
}

export interface Address {
    id: number
    title: string
    index: string
    city: string
    street: string
    house: string
    building?: string
    apartment: string
    user: number
}

export interface CreateAddress {
    userId: number
    name: string
    postalCode: string
    city: string
    street: string
    house: string
    building?: string
    apartment: string
}

export interface ChangeAddress {
    id: number
    userId: number
    name: string
    postalCode: string
    city: string
    street: string
    house: string
    building?: string
    apartment: string
}

export interface VerifyChangeUser {
    phone: string
    code: string
}

export interface ActivateAccount {
    uid: string
    token: string
}

export interface ResetPasswordConfirm {
    uid: string
    token: string
    newPassword: string
}
