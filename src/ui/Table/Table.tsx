import { useTable, Column, useSortBy } from 'react-table'

import { Skeleton } from 'ui'

import * as S from './Table.styled'

import SortIcon from 'public/icons/sort.svg'

interface TableProps<T> {
  headGray?: boolean
  columns: Column<any>[]
  data: any[]
  isLoading?: boolean
  noDataText?: string
  onRowClick?: (row: T) => void
}

export const Table = <T extends {}>({
  headGray = false,
  columns,
  data,
  isLoading,
  noDataText = 'Данные отсутствуют',
  onRowClick
}: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )

  return (
    <S.Table {...getTableProps()} shrink={headGray}>
      <S.TableHead gray={headGray}>
        {headerGroups.map((headerGroup) => (
          <S.TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <S.TableHeadCell
                  // @ts-ignore
                  {...column.getHeaderProps(column.sortable ? column.getSortByToggleProps() : {})}
                >
                  <S.HeadCellText>
                    {column.render('Header')}

                    <S.SortIcon>
                      {/* @ts-ignore */}
                      {column.isSorted ? (
                        // @ts-ignore
                        column.isSortedDesc ? (
                          <S.SortDesc>
                            <SortIcon />
                          </S.SortDesc>
                        ) : (
                          <S.SortAsc>
                            <SortIcon />
                          </S.SortAsc>
                        )
                      ) : (
                        ''
                      )}
                    </S.SortIcon>
                  </S.HeadCellText>
                </S.TableHeadCell>
              )
            })}
          </S.TableRow>
        ))}
      </S.TableHead>

      {!isLoading ? (
        <S.TableBodyContainer>
          <S.TableBody {...getTableBodyProps()}>
            {data && data?.length ? (
              rows.map((row) => {
                prepareRow(row)

                return (
                  <S.TableRow
                    {...row.getRowProps()}
                    onClick={() => {
                      if (onRowClick) {
                        // @ts-ignore
                        onRowClick(row.original)
                      }
                    }}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <S.TableCell {...cell.getCellProps()}>{cell.render('Cell')}</S.TableCell>
                      )
                    })}
                  </S.TableRow>
                )
              })
            ) : (
              <S.NoDataText>{noDataText}</S.NoDataText>
            )}
          </S.TableBody>
        </S.TableBodyContainer>
      ) : (
        <Skeleton height={200} />
      )}
    </S.Table>
  )
}
