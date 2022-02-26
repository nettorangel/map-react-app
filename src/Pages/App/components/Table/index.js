import React from "react";
import { useTable, usePagination } from "react-table";
import { TableStyle, CardWrapper}  from "./styles";
import {ReactComponent as Left} from '../../../../assets/images/left.svg'
import {ReactComponent as Right} from '../../../../assets/images/right.svg'
function Table({ columns, data, revenueValue }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    
      <TableStyle>
        <CardWrapper>
          <table {...getTableProps()}>
            <thead>
              { headerGroups.map(( headerGroup ) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {                
                const status = row.cells[1] ? row.cells[1].value < revenueValue : false;
                prepareRow(row);
                return (
                  <tr 
                  className={( status ? 'invalid' : 'valid')}
                  {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardWrapper>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <Left/>
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <Right/>
          </button>
        </div>
      </TableStyle>
  );
}

export default Table;
