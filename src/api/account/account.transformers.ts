import * as ApiTypes from './account.types'

import {User, RequisitesItem, Address} from 'types/account'

export const transformMe = (me: ApiTypes.User): User => {
    const {
        id,
        phone,
        email,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        user_roles: roles
    } = me

    return {
        id,
        phone,
        email,
        firstName,
        middleName,
        lastName,
        role: roles[0]
    }
}

export const transformRequisite = (requisite: ApiTypes.RequisiteItem): RequisitesItem => {
    const {id, title: name, account_number: accountNumber, bik} = requisite

    return {
        id,
        name,
        accountNumber,
        bik
    }
}

export const transformAddress = (address: ApiTypes.Address): Address => {
    const {id, title: name, index: postalCode, city, street, house, building, apartment} = address

    return {
        id,
        name,
        postalCode: postalCode,
        city,
        street,
        house,
        building: building,
        apartment: apartment
    }
}
