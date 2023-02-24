import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

import { RequisitesList, SkeletonList } from 'components/RequisitesList/RequisitesList.styled'
import { Skeleton } from 'ui/Skeleton/Skeleton.styled'
import { EditDeleteCard, Actions } from 'components/EditDeleteCard/EditDeleteCard.styled'
import { AccountPageTitle } from 'components/AccountPageTitle/AccountPageTitle.styled'

const media990 = media.createMedia(990)

export { Box }

export const RequisitesPageLayouts = styled.div`
  ${media990} {
    ${RequisitesList} {
      grid-template-columns: 1fr;
    }

    ${SkeletonList} {
      ${Skeleton} > span {
        grid-template-columns: 1fr;
      }
    }
  }

  ${media.mobile} {
    ${EditDeleteCard} {
      position: relative;

      ${Actions} {
        position: absolute;
        right: 10px;
        bottom: -10px;
      }
    }

    ${AccountPageTitle} {
      flex-direction: column;
      gap: 10px;
    }
  }
`
