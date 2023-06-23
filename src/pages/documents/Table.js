import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, data } from "../../fakers/documents";

const Table = () => {
  const [pending, setPending] = useState(true);
  useEffect(() => {
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
      title={"Documents"}
    />
  );
};

export default Table;
