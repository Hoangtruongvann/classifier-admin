import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faInfo } from "@fortawesome/free-solid-svg-icons";
const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Fullname",
    selector: (row) => row.fullname,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.email,
  },
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

const data = [
  {
    id: 1,
    fullname: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
    phone: "555-555-5555",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    phone: "555-123-4567",
  },
  {
    id: 3,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 4,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 5,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 6,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 7,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 8,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 9,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 10,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 1,
    fullname: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
    phone: "555-555-5555",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    phone: "555-123-4567",
  },
  {
    id: 3,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 4,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 5,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 6,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 7,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 8,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 9,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 10,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 1,
    fullname: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
    phone: "555-555-5555",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    phone: "555-123-4567",
  },
  {
    id: 3,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 4,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 5,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 6,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 7,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 8,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 9,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 10,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 1,
    fullname: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
    phone: "555-555-5555",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    phone: "555-123-4567",
  },
  {
    id: 3,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 4,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 5,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 6,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 7,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 8,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 9,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 10,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 1,
    fullname: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
    phone: "555-555-5555",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    phone: "555-123-4567",
  },
  {
    id: 3,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 4,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 5,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 6,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 7,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 8,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 9,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
  {
    id: 10,
    fullname: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Oak Street",
    phone: "555-987-6543",
  },
];

export { columns, data };
