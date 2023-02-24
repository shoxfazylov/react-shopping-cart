interface Address {
  city: string
  street: string
  house: string
  building?: string
  apartment: string
}

export const getFullAddressStr = ({ city, street, house, building, apartment }: Address) => {
  return `г. ${city}, ул. ${street}, ${house}${
    building && building !== '0' ? ` кор. ${building},` : ','
  } кв. ${apartment}`
}
