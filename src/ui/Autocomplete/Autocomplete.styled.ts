import styled from '@emotion/styled'

import { TextField } from 'ui/TextField/TextField.styled'

import { scrollStyles } from 'styled/scroll'

interface Autocomplete {
  open?: boolean
}

export { TextField }

export const Autocomplete = styled.div<Autocomplete>`
  .autocomplete {
    .autocomplete-input-root {
      border-radius: 6px;
      padding: 5.5px 12px 6.5px 10px;

      .autocomplete-input {
        padding: 6.5px 4px 6.5px 10px;
        line-height: 18px;

        &::placeholder {
          font-family: 'TTCommons';
          color: #55556d;
          opacity: 1;
        }
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

  label {
    font-family: 'TTCommons';
    font-size: 18px;
    color: #55556d;
    transform: translate(20px, 12px) scale(1);

    &[data-shrink='true'] {
      font-size: 14px;
      color: #55556d;
      transform: translate(20px, -8px) scale(1);
    }
  }

  .autocomplete-popper {
    .autocomplete-paper {
      max-height: 200px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      border: 1px solid #dedee2;
      border-radius: 6px;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      background-color: #fff;
      color: var(--color-black);
      line-height: 20px;

      ${scrollStyles()}
    }

    .autocomplete-listbox {
      overflow: visible;
    }
  }

  .chip {
    display: flex;
    align-items: center;
    height: 26px;
    margin: 5px 3px;
    background: var(--color-primary);
    color: #fff;

    &-label {
      padding-top: 3px;
      font-size: 14px;
    }

    &-delete-icon {
      border-radius: 50%;
    }
  }

  .autocomplete-focused {
    .text-field-root {
      fieldset {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`
