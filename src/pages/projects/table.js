import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { columns, data } from "../../fakers/project";

const Table = () => {
  const [pending, setPending] = useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <DataTable
      columns={columns}
      data={data}
      direction="auto"
      fixedHeader
      fixedHeaderScrollHeight="800px"
      selectableRows
      dense
      pagination
      responsive
      progressPending={pending}
      title={"Projects"}
    />
  );
};
export default Table;
