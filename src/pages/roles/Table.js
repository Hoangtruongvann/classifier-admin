import {
  faAdd,
  faEdit,
  faInfo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { roleServices } from "../../services";

const Table = () => {
  const [pending, setPending] = useState(true);
  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    setPending(true);
    const { data } = await roleServices.getAll();
    setRoles(data);
    setPending(false);
  };
  useEffect(() => {
    getRoles();
  }, []);

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },

    {
      name: "Status",
      button: true,
      cell: (row) => (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          active
        </span>
      ),
    },
    ,
    {
      name: "Actions",
      button: true,
      cell: () => (
        <>
          <FontAwesomeIcon icon={faInfo} className="mr-2" />
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          <FontAwesomeIcon icon={faTrash} />
        </>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-end">
        <Link
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          to="/roles/create"
        >
          <FontAwesomeIcon icon={faAdd} className="mr-2" />
          <span>Create</span>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={roles}
        direction="auto"
        fixedHeader
        fixedHeaderScrollHeight="800px"
        selectableRows
        dense
        pagination
        responsive
        progressPending={pending}
        title={"Roles "}
      />
    </>
  );
};
export default Table;
