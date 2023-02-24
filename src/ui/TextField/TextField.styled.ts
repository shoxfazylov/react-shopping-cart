import styled from '@emotion/styled'
import { css } from '@emotion/react'
import MuiTextField from '@mui/material/TextField'

export const TextField = styled(MuiTextField)`
  position: relative;
  width: 100%;

  label,
  .text-field-label,
  .input-label-shrink,
  .input-label-focused {
    font-family: 'TTCommons';
    font-size: 18px;
    color: #55556d;
    transform: translate(20px, 12px) scale(1);
    transition: 0.3s;
  }

  label[data-shrink='true'],
  .input-label-focused-focused {
    font-size: 14px;
    color: #55556d;
    transform: translate(20px, -8px) scale(1);
  }

  .text-field-input-root {
    border-radius: 6px;
    padding: 0 10px;
    background: #fff;

    .text-field-input {
      height: auto;
      font-size: 18px;
      color: var(--color-black);
      padding: 16px 4px 11px 10px;
      line-height: 18px;
      box-sizing: border-box;

      &::placeholder {
        color: #55556d;
        opacity: 1;
      }
    }
  }

  fieldset {
    border-width: 1px !important;
    border-color: #dedee2 !important;

    legend {
      margin-left: 6px;
      font-size: 14px;
    }
  }

  ${({ error }) =>
    error &&
    css`
      background: rgba(255, 104, 104, 0.05);

      label,
      .text-field-label-error {
        color: #55556d;
      }

      fieldset {
        border-color: #ff6868 !important;
      }
    `}
`
