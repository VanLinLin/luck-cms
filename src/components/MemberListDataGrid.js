import React from "react";

import { DataGrid } from "@mui/x-data-grid";
const MemberListDataGrid = (props) => {
  return (
    <>
      <DataGrid
        sx={{ border: 0 }}
        rows={props.adminList}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[3]}
        hideFooter
      />
    </>
  );
};

export default MemberListDataGrid;
