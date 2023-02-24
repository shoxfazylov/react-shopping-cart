import {API} from 'core'

import {transformMe, transformRequisite, transformAddress} from './account.transformers'

import {
    User,
    ChangeUser,
    ShippingAddress,
    CreateShippingAddress,
    RequisiteItem,
    CreateRequisite,
    ChangeRequisite,
    Address,
    CreateAddress,
    ChangeAddress,
    VerifyChangeUser,
    ActivateAccount,
    ResetPasswordConfirm
} from './account.types'

const root = '/account'

export const getMe = async () => {
    const {data: me} = await API.get<User>(`${root}/me`)

    return transformMe(me)
}

export const changeUser = ({
                               userId,
                               firstName,
                               middleName,
                               lastName,
                               phone,
                               email
                           }: ChangeUser) => {
    return API.patch<User>(`${root}/${userId}/`, {
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email,
        phone
    })
}

export const getShippingAddresses = async () => {
    const {data: shippingAddresses} = await API.get<ShippingAddress[]>('/user-shipping-address/')

    return shippingAddresses
}

export const createShippingAddress = ({
                                          userId,
                                          city,
                                          state,
                                          house,
                                          building,
                                          apartment,
                                          name
                                      }: CreateShippingAddress) => {
    return API.post('/user-shipping-address/', {
        index: 1,
        user: userId,
        city,
        street: state,
        name,
        house,
        building,
        apartment
    })
}

export const getRequisites = async () => {
    const {data: requisites} = await API.get<RequisiteItem[]>(`${root}/requisites/`)

    return requisites.map(transformRequisite)
}

export const createRequisite = ({userId, name, accountNumber, bik}: CreateRequisite) => {
    return API.post(`${root}/requisites/`, {
        user: userId,
        title: name,
        account_number: accountNumber,
        bik
    })
}

export const changeRequisite = ({id, userId, name, accountNumber, bik}: ChangeRequisite) => {
    return API.patch(`${root}/requisites/${id}/`, {
        user: userId,
        title: name,
        account_number: accountNumber,
        bik
    })
}

export const deleteRequisite = (id: number) => {
    return API.delete(`${root}/requisites/${id}/`)
}

export const getAddresses = async () => {
    const {data: addresses} = await API.get<Address[]>('/user-shipping-address/')

    return addresses.map(transformAddress)
}

export const createAddress = ({
                                  userId,
                                  name,
                                  postalCode,
                                  city,
                                  street,
                                  house,
                                  building,
                                  apartment
                              }: CreateAddress) => {
    return API.post('/user-shipping-address/', {
        user: userId,
        title: name,
        index: postalCode,
        city,
        street,
        house,
        building,
        apartment
    })
}

export const changeAddress = ({
                                  id,
                                  userId,
                                  name,
                                  postalCode,
                                  city,
                                  street,
                                  house,
                                  building,
                                  apartment
                              }: ChangeAddress) => {
    return API.patch(`/user-shipping-address/${id}/`, {
        user: userId,
        title: name,
        index: postalCode,
        city,
        street,
        house,
        building,
        apartment
    })
}

export const deleteAddress = (id: number) => {
    return API.delete(`/user-shipping-address/${id}/`)
}

export const verifyChangeUser = ({phone, code}: VerifyChangeUser) => {
    return API.post(`${root}/verify-edit-user/`, {phone, code})
}

export const activateAccount = ({uid, token}: ActivateAccount) => {
    return API.post(`${root}/activation/`, {
        uid,
        token
    })
}

export const resetPassword = (email: string) => {
    return API.post(`${root}/reset_password/`, {
        email
    })
}

export const resetPasswordConfirm = ({uid, token, newPassword}: ResetPasswordConfirm) => {
    return API.post(`${root}/reset_password_confirm/`, {
        uid,
        token,
        new_password: newPassword
    })
}
