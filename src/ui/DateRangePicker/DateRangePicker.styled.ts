import styled from '@emotion/styled'

export const DateRangePicker = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  padding: 10px 25px 10px 15px;
  background: #fff;
  border: 1px solid #c5c3c8;
  border-radius: 6px;
  box-sizing: border-box;

  & > svg {
    flex-shrink: 0;
  }

  .react-datepicker {
    border: 1px solid #c5c3c8;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    font-family: 'TTCommons';
    font-size: 16px;
    color: var(--color-black);

    &__day--today,
    &__month-text--today,
    &__quarter-text--today,
    &__year-text--today,
    &__current-month,
    &-time__header,
    &-year-header {
      font-weight: 400;
    }

    &-wrapper {
      margin-top: 2px;
      margin-left: 10px;

      input {
        width: 170px;
        border: none;
        padding: 0;
        font-family: 'TTCommons';
        font-size: 16px;
        color: var(--color-black);

        &:focus {
          outline: none;
        }
      }
    }

    &-popper {
      margin-left: -46px;
      z-index: 100;

      &[data-placement^='bottom'] {
        padding-top: 24px;
      }

      &[data-placement^='top'],
      &[data-placement^='bottom'] {
        .react-datepicker__triangle::before,
        .react-datepicker__triangle::after {
          left: -59px;
        }

        .react-datepicker__triangle::after {
          border-bottom-color: #fff;
        }
      }
    }

    &__current-month {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 41px;
      padding: 11px 4px 4px;
      border-bottom: 1px solid #efefef;
      text-transform: capitalize;
      box-sizing: border-box;
    }

    &__month,
    &__day {
      margin: 0;
    }

    &__day {
      width: 34px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      border-radius: 0;
      transition: 0.3s;

      &--today {
        color: var(--color-primary);
        background: #fff;

        &:hover {
          background-color: #f0f0f0;
        }
      }

      &--selecting-range-start,
      &--selecting-range-end {
        background: var(--color-primary);
        border-radius: 6px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        color: #fff;

        &:hover {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
          color: #fff;
        }
      }

      &--in-range,
      &--in-selecting-range {
        background: rgba(107, 89, 204, 0.1);
        color: var(--color-gray);
      }

      &--in-selecting-range:hover {
        background: var(--color-primary);
        border-radius: 6px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #fff;
      }
    }

    &__month {
      padding: 0 4px 4px;
    }

    &__day-names {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      margin: 8px 0 3px;
      padding: 0 4px;
    }

    &__day-name {
      width: auto;
      line-height: normal;
      margin: 0;
      font-size: 12px;
      text-transform: uppercase;
      color: orange;
    }

    &__header {
      padding: 0;
      background: #fff;
      border-bottom: none;
    }

    &__navigation {
      &-icon::before {
        width: 6px;
        height: 6px;
        border-width: 2px 2px 0 0;
        top: 50%;
        left: 50%;
        right: auto;
        transform: translate(-50%) rotate(225deg);
      }

      &-icon--next::before {
        transform: translate(-50%) rotate(45deg);
      }
    }
  }

  .react-datepicker__day--selecting-range-start.react-datepicker__day--in-selecting-range,
  .react-datepicker__day--range-start.react-datepicker__day--in-range,
  .react-datepicker__day--selecting-range-end.react-datepicker__day--in-selecting-range,
  .react-datepicker__day--range-end.react-datepicker__day--in-range {
    background: var(--color-primary);
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: #fff;
  }

  .react-datepicker__day--selecting-range-end.react-datepicker__day--in-selecting-range,
  .react-datepicker__day--range-end.react-datepicker__day--in-range {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start:hover {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .react-datepicker__day--range-start.react-datepicker__day--range-end {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`

export const ResetButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  transform: translateY(-50%);
  cursor: pointer;
`
