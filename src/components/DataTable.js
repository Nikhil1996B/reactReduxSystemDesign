import React, { Component } from "react";
import "carbon-components/css/carbon-components.min.css";
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import { rowData, headerData } from "../mock";
import { fetchData } from "../HTTP/http";
import { connect } from "react-redux";

class DataTableComponent extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.props.fetchData();
    this.state.laoding = true;
  }

  render() {
    const { records } = this.props.records;
    console.log("records", records);
    return this.props.loading ? (
      "...Loading"
    ) : (
      <DataTable
        rows={rowData}
        headers={headerData}
        render={({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="JSON TYPICODE DATA TABLE">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  records: state.records,
});
export default connect(mapStateToProps, { fetchData })(DataTableComponent);
