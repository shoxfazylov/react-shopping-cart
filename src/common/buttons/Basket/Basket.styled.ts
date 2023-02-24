import styled from '@emotion/styled'

export const BasketButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--color-primary);
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;
    transition: 0.3s;
  }

  &:hover {
    background: var(--color-primary);

    svg {
      stroke: #fff;
    }
  }
`
