import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import { supplierAPI } from 'api'

export const useSupplierSignUp = () => {
  const handleError = {
    onError: () => {
      toast.error('Ошибка')
    }
  }

  const addPersonalData = useMutation(
    'supplier-add-personal-data',
    supplierAPI.addPersonalData,
    handleError
  )

  const addCompanyData = useMutation(
    'supplier-add-company-data',
    supplierAPI.addCompanyData,
    handleError
  )

  const addSupplierData = useMutation(
    'supplier-add-supplier-data',
    supplierAPI.addSupplierData,
    handleError
  )

  const addDeliveryData = useMutation(
    'supplier-add-delivery-data',
    supplierAPI.addDeliveryData,
    handleError
  )

  const addStore = useMutation('supplier-add-store', supplierAPI.addStore, {
    ...handleError,
    onSuccess: () => {
      toast.success('Магазин успешно добавлен')
    }
  })

  const addPriceListType = useMutation(
    'supplier-add-price-list',
    supplierAPI.addPriceListType,
    handleError
  )

  const addConclusion = useMutation(
    'supplier-add-conclusion',
    supplierAPI.addConclusion,
    handleError
  )

  return {
    addPersonalData,
    addCompanyData,
    addSupplierData,
    addDeliveryData,
    addStore,
    addPriceListType,
    addConclusion
  }
}
