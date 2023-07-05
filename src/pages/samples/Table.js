import {
  faAdd,
  faEdit,
  faListDots,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { sampleServices } from "../../services";

const Table = () => {
  const { id } = useParams();

  const [pending, setPending] = useState(true);
  const [samples, setSamples] = useState([]);
  const navigate = useNavigate();

  const getSamples = async () => {
    setPending(true);
    const { data } = await sampleServices.getSamplesByProjectId(id);
    setSamples(data);
    setPending(false);
  };
  useEffect(() => {
    getSamples();
  }, []);

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Label",
      selector: (row) => row.label,
    },
    {
      name: "Sample",
      selector: (row) => row.sample,
      sortable: true,
    },
    {
      name: "Project ID",
      selector: (row) => row.project_id,
      sortable: true,
    },
    {
      name: "User ID",
      selector: (row) => row.created_user,
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
      cell: (row) => (
        <>
          <FontAwesomeIcon icon={faListDots} className="mr-2" />
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
          to={"/projects/" + id + "/samples/create"}
        >
          <FontAwesomeIcon icon={faAdd} className="mr-2" />
          <span>Create</span>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={samples}
        direction="auto"
        fixedHeader
        fixedHeaderScrollHeight="800px"
        selectableRows
        dense
        pagination
        responsive
        progressPending={pending}
        title={"Samples"}
      />
    </>
  );
};
export default Table;
