import * as S from './StepNav.styled'

import SignRightIcon from 'public/icons/arrows/sign-right.svg'

interface StepNavProps {
  step: number
  loading: boolean
  isShopAdded: boolean
  onNextStep: () => void
}

export const StepNav = ({ step, loading, isShopAdded, onNextStep }: StepNavProps) => {
  const isShopStep = step === 4

  const nextButton = !isShopStep ? (
    <S.StepNextButton type="submit" loading={loading} endIcon={<SignRightIcon />}>
      Далее
    </S.StepNextButton>
  ) : (
    <S.StepNextButton
      type="button"
      loading={loading}
      disabled={!isShopAdded}
      endIcon={<SignRightIcon />}
      onClick={(e) => {
        e.preventDefault()
        if (isShopAdded) {
          onNextStep()
        }
      }}
    >
      Далее
    </S.StepNextButton>
  )

  return (
    <S.StepNav>
      {step !== 6 ? (
        <S.StepNextButton
          type="submit"
          loading={loading}
          disabled={isShopStep && !isShopAdded}
          endIcon={<SignRightIcon />}
          onClick={(e) => {
            if (isShopStep && isShopAdded) {
              e.preventDefault()
              onNextStep()
            }
          }}
        >
          Далее
        </S.StepNextButton>
      ) : (
        <S.CompleteButton type="submit">Завершить заполнение</S.CompleteButton>
      )}
    </S.StepNav>
  )
}
