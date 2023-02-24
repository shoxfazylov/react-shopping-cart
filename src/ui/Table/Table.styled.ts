import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { NoDataText } from 'styled/components'

import { SkeletonItem } from 'ui/Skeleton/Skeleton.styled'

interface TableHeadProps {
  gray: boolean
}

interface TableProps {
  shrink: boolean
}

export { NoDataText }

export const TableCell = styled.div`
  display: flex;
  align-items: center;
`

export const TableRow = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(41px, auto);
  grid-gap: 40px;
  padding: 10px 20px;
  box-sizing: border-box;

  &:not(:last-child):before {
    content: '';
    position: absolute;
    left: 20px;
    bottom: 0;
    width: calc(100% - 40px);
    height: 1px;
    background: #e3e3e8;
  }
`

export const TableHead = styled.div<TableHeadProps>`
  border-bottom: 1px solid #dedee2;
  box-sizing: border-box;

  ${TableRow} {
    grid-template-rows: 50px;
    padding: 0 20px;
  }

  ${({ gray }) =>
    gray &&
    css`
      background: #f4f5f7;
      border-bottom: none;
      border-radius: 8px;
    `}
`

export const TableHeadCell = styled.div`
  display: flex;
  align-items: center;
  color: #55556d;
`

export const TableBody = styled.div`
  ${TableRow} {
    position: relative;

    ${TableCell}:first-child {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      color: var(--color-primary);
    }

    &:hover {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.05);
      transition: 0.3s;

      &::before {
        background: transparent;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: -1px;
        width: 100%;
        height: 1px;
        background: #fff;
      }
    }
  }
`

export const Table = styled.div<TableProps>`
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 14px;
  overflow: hidden;

  ${SkeletonItem} {
    & > span {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  ${({ shrink }) =>
    shrink &&
    css`
      padding: 0 20px;
      box-sizing: border-box;
    `}
`

export const SortIcon = styled.div`
  position: absolute;
  top: 50%;
  right: -21px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`

export const SortDesc = styled.div``

export const SortAsc = styled.div`
  transform: rotate(180deg) scaleX(-1) translateY(4px);
`

export const HeadCellText = styled.div`
  position: relative;
`

export const TableBodyContainer = styled.div``
