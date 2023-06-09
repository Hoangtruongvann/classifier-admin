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
import { userServices } from "../../services";

const Table = () => {
  const [pending, setPending] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setPending(true);
    const { data } = await userServices.getAll();
    setUsers(data);
    setPending(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.username,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Status",
      button: true,
      cell: (row) => (
        <>
          {row.is_active ? (
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
              active
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
              Inactive
            </span>
          )}
        </>
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
          to="/users/create"
        >
          <FontAwesomeIcon icon={faAdd} className="mr-2" />
          <span>Create</span>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={users}
        direction="auto"
        fixedHeader
        fixedHeaderScrollHeight="800px"
        selectableRows
        dense
        pagination
        responsive
        progressPending={pending}
        title={"Users "}
      />
    </>
  );
};
export default Table;
