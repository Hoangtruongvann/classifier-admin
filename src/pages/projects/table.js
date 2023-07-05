import {
  faAdd,
  faEdit,
  faInfo,
  faListDots,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { projectServices } from "../../services";

const Table = () => {
  const [pending, setPending] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const getProjects = async () => {
    setPending(true);
    const { data } = await projectServices.getAll();
    setProjects(data);
    setPending(false);
  };
  useEffect(() => {
    getProjects();
  }, []);

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row.projectName,
    },
    {
      name: "Type",
      selector: (row) => row.projectType,
      sortable: true,
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
          {row.status}
        </span>
      ),
    },
    ,
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <>
          <FontAwesomeIcon
            icon={faListDots}
            className="mr-2"
            onClick={() => navigate("/projects/" + row.projectId + "/samples")}
          />
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
          to="/projects/create"
        >
          <FontAwesomeIcon icon={faAdd} className="mr-2" />
          <span>Create</span>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={projects}
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
    </>
  );
};
export default Table;
