import React, { useEffect, useState, useReducer } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const orderDescAsc = (columnHeader, sortBy, isAscending) => {
    if (sortBy === columnHeader) {
        return (
            <Box component="span" sx={visuallyHidden}>
                {isAscending ? "sorted descending" : "sorted ascending"}
            </Box>
        );
    }
    return null;
};

export const SorTable = () => {
    const [sortBy, setSortBy] = useState("last");
    const [isAscending, setIsAscending] = useState(true);
    const [tableData, setTableData] = useState([{last: "Doe", first: "John"}, {last: "Pham", first: "Andrew"}]);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const handleColumnHeaderClick = (clickedHeader) => {
        if (clickedHeader === sortBy) setIsAscending(!isAscending);
        setSortBy(clickedHeader);
    };

    useEffect(() => {
        setTableData(
            tableData.sort(function compare(a, b) {
                if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1;
                if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1;
                return 0;
            }),
        );
        if (!isAscending) setTableData(tableData.reverse());
        forceUpdate();
    }, [sortBy, isAscending]);
    
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={sortBy === "last"}
                                direction={isAscending ? "asc" : "desc"}
                                onClick={() => handleColumnHeaderClick("last")}
                            >
                                Last Name {orderDescAsc("last", sortBy, isAscending)}
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortBy === "first"}
                                direction={isAscending ? "asc" : "desc"}
                                onClick={() => handleColumnHeaderClick("first")}
                            >
                                First Name {orderDescAsc("first", sortBy, isAscending)}
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.map((data) => {
                        return (
                            <TableRow data-testid="row">
                                <TableCell>{data.last}</TableCell>
                                <TableCell>{data.first}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};