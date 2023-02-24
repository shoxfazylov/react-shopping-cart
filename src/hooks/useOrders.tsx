import { useQuery, useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import { ordersAPI } from 'api'
import { GetOrders } from 'api/orders/orders.types'

interface useOrdersProps {
  keys?: (string | number | undefined)[]
  props?: GetOrders
}

export const useOrders = ({ keys = [], props }: useOrdersProps = {}) => {
  const queryClient = useQueryClient()

  const { data: orders, isLoading: isOrdersLoading } = useQuery(['orders', ...keys], () =>
    ordersAPI.getOrders(props)
  )

  const archiveOrder = useMutation(ordersAPI.archiveOrder, {
    onError: () => {
      toast.error('Ошибка помещения в архив')
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['orders', ...keys])
      toast.success('Заказ помещён в архив')
    }
  })

  const unarchiveOrder = useMutation(ordersAPI.unarchiveOrder, {
    onError: () => {
      toast.error('Ошибка разахивирования заказа')
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['orders', ...keys])
      toast.success('Заказ разахивирован')
    }
  })

  const cancelOrder = useMutation(ordersAPI.cancelOrder, {
    onError: () => {
      toast.error('Ошибка отмены заказа')
    },
    onSuccess: () => {
      toast.success('Заказ успешно отменён')
    }
  })

  return { orders, isOrdersLoading, archiveOrder, unarchiveOrder, cancelOrder }
}

export const useOrder = (id: number) => {
  const queryClient = useQueryClient()

  const { data: order, isLoading: isOrderLoading } = useQuery(
    ['order', id],
    () => ordersAPI.getOrder(id),
    {
      enabled: Boolean(id)
    }
  )

  const changeOrder = useMutation(ordersAPI.changeOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['order', id])
    }
  })

  const cancelOrderProduct = useMutation(ordersAPI.cancelOrderProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['order', id])
    }
  })

  const changeOrderProduct = useMutation(ordersAPI.changeOrderProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['order', id])
    }
  })

  return { order, isOrderLoading, cancelOrderProduct, changeOrder, changeOrderProduct }
}
