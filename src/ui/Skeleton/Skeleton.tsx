import RLSkeleton, { SkeletonProps } from 'react-loading-skeleton'

import * as S from './Skeleton.styled'
import 'react-loading-skeleton/dist/skeleton.css'

export const Skeleton = (props: SkeletonProps) => {
  return (
    <S.Skeleton>
      <RLSkeleton inline={true} {...props} wrapper={S.SkeletonItem} />
    </S.Skeleton>
  )
}
