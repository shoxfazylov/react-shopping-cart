import { FormEventHandler } from 'react'
import Typography from '@mui/material/Typography'

import {
  PersonalDataStep,
  CompanyDataStep,
  SupplierDataStep,
  DeliveryTypesStep,
  ShopesStep,
  PriceListInformationStep,
  FinalPostionStep
} from './steps'
import { StepNav } from './components'

import { ImageFile } from 'types/common'

import * as S from './SupplierSignUp.styled'

export interface SupplierSignUpFormProps {
  step: number
  stepLabels: string[]
  shopImages: ImageFile[]
  isStepLoading: boolean
  isShopAdded: boolean
  onShopImagesChange: (images: ImageFile[]) => void
  onNextStep: () => void
  onStepSubmit: FormEventHandler<HTMLFormElement>
}

export const SupplierSignUpForm = ({
  step,
  stepLabels,
  shopImages,
  isStepLoading,
  isShopAdded,
  onNextStep,
  onShopImagesChange,
  onStepSubmit
}: SupplierSignUpFormProps) => {
  const getStepFields = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalDataStep />
      case 1:
        return <CompanyDataStep />
      case 2:
        return <SupplierDataStep />
      case 3:
        return <DeliveryTypesStep />
      case 4:
        return <ShopesStep shopImages={shopImages} onShopImagesChange={onShopImagesChange} />
      case 5:
        return <PriceListInformationStep />
      case 6:
        return <FinalPostionStep />
      default:
        return null
    }
  }

  return (
    <S.StepBox as="form" onSubmit={onStepSubmit}>
      <S.StepTop>
        <Typography variant="h2">{stepLabels[step]}</Typography>
        <Typography component="span">Шаг {step + 1} из 7</Typography>
      </S.StepTop>

      <S.StepFields>{getStepFields(step)}</S.StepFields>

      <StepNav
        step={step}
        loading={isStepLoading}
        isShopAdded={isShopAdded}
        onNextStep={onNextStep}
      />
    </S.StepBox>
  )
}
