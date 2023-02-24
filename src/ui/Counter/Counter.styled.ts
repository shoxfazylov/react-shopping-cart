import styled from '@emotion/styled'

import { Button } from 'ui/Button/Button.styled'

export const Counter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #c5c3c8;
  box-sizing: border-box;
  overflow: hidden;

  input {
    margin-left: 21px;
    width: 100%;
    border: 0;
    padding: 0;
    margin-top: 4px;
    font-size: 16px;
    font-family: 'TTCommons';
    font-weight: 500;
    color: var(--color-black);
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  ${Button} {
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    padding: 0;
    transform: translateY(-50%);

    &:first-child {
      left: 8px;
    }

    &:last-child {
      right: 8px;
    }
  }
`
