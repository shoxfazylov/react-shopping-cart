import styled from '@emotion/styled'
import MuiStepper from '@mui/material/Stepper'
import MuiStep from '@mui/material/Step'
import MuiStepLabel from '@mui/material/StepLabel'

export const Stepper = styled(MuiStepper)`
  .step-connector {
    &-root {
      margin-left: 20px;
    }

    &-line {
      min-height: 30px;
      border-color: #f4f5f7;
    }
  }
`

export const Step = styled(MuiStep)`
  &.step-completed {
    .step-label-icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(56, 168, 101, 0.1);
    }
  }
`

export const StepLabel = styled(MuiStepLabel)`
  padding: 0;

  .step-label {
    color: #3d3d4b;

    &-active {
      color: var(--color-primary);
    }

    &-completed {
      color: var(--color-green-100);
    }

    &-icon-container {
      margin-right: 15px;
      padding: 0;
    }

    &-icon {
      width: 40px;
      height: 40px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
      border-radius: 50%;
      fill: #fff;

      &-text {
        font-weight: 500;
        fill: var(--color-black);
      }

      &-active {
        fill: var(--color-primary);
        box-shadow: none;

        .step-label-icon-text {
          fill: #fff;
        }
      }

      &-completed {
      }
    }
  }
`
