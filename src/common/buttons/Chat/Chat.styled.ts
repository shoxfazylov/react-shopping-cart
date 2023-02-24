import styled from '@emotion/styled'

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #c5c3c8;
  padding: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  svg path {
    transition: 0.3s;
  }

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);

    svg path {
      stroke: #fff;
    }
  }
`
