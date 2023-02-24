import styled from '@emotion/styled'

export const TableCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(38, 34, 45, 0.03), 0px 2px 10px rgba(38, 34, 45, 0.02);
  border-radius: 6px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TableCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0 20px;
  border-bottom: 1px solid #dedee2;
`

export const TableCardContent = styled.div`
  padding: 20px;
`

export const TableCardRows = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-start;
  grid-gap: 15px 30px;

  p {
    font-size: 14px;
    white-space: normal;

    &:nth-child(odd) {
      color: #55556d;
      line-height: 18px;
    }
  }
`

export const TableCardActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`
