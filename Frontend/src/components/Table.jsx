import React from "react";
import { useTable } from "react-table";

export const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Overhead", accessor: "Overhead" },
      { Header: "January", accessor: "Jan" },
      { Header: "February", accessor: "Feb" },
      { Header: "March", accessor: "March" },
      { Header: "April", accessor: "April" },
      { Header: "May", accessor: "May" },
      { Header: "June", accessor: "June" },
      { Header: "July", accessor: "July" },
      { Header: "August", accessor: "August" },
      { Header: "September", accessor: "September" },
      { Header: "October", accessor: "October" },
      { Header: "November", accessor: "November" },
      { Header: "December", accessor: "December" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
