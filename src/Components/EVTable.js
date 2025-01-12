import React from 'react';
import { useTable } from 'react-table';
import './EVTable.css';

const EVTable = ({ evData }) => {
    const columns = React.useMemo(
        () => [
            { Header: 'VIN', accessor: 'VIN (1-10)' },
            { Header: 'Model Year', accessor: 'Model Year' },
            { Header: 'Make', accessor: 'Make' },
            { Header: 'Model', accessor: 'Model' },
            { Header: 'Electric Range', accessor: 'Electric Range' },
            { Header: 'City', accessor: 'City' },
            { Header: 'State', accessor: 'State' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: evData });

    return (
        <div className="table-container">
            <h2>Electric Vehicle Data</h2>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EVTable;
