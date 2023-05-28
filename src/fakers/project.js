import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Created by",
    selector: (row) => row.created_by,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Actions",
    button: true,
    cell: () => (
      <>
        <FontAwesomeIcon icon={faEdit} className="mr-2" />
        <FontAwesomeIcon icon={faTrash} />
      </>
    ),
  },
];

const data = [
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
  {
    id: 1,
    title: "Project A",
    created_by: "John Doe",
    status: "In progress",
  },
  {
    id: 2,
    title: "Project B",
    created_by: "Jane Smith",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project C",
    created_by: "Bob Johnson",
    status: "Pending",
  },
  {
    id: 4,
    title: "Project D",
    created_by: "Samantha Lee",
    status: "In progress",
  },
  {
    id: 5,
    title: "Project E",
    created_by: "Peter Brown",
    status: "In progress",
  },
  {
    id: 6,
    title: "Project F",
    created_by: "Emily Davis",
    status: "Completed",
  },
  {
    id: 7,
    title: "Project G",
    created_by: "Kevin Jones",
    status: "Pending",
  },
  {
    id: 8,
    title: "Project H",
    created_by: "Sarah Wilson",
    status: "In progress",
  },
  {
    id: 9,
    title: "Project I",
    created_by: "Chris Martinez",
    status: "Completed",
  },
  {
    id: 10,
    title: "Project J",
    created_by: "Alex Turner",
    status: "In progress",
  },
];

export { columns, data };
