import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { roleServices, typeServices, userServices } from "../../services";

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    const { data } = await roleServices.getAll();
    console.log(data);
    setRoles(data);
  };

  useEffect(() => {
    getRoles();
  }, []);

  const submit = async (e) => {
    toast.info("Creating user...");
    e.preventDefault();
    const form = new FormData();
    form.append("email", email);
    form.append("username", username);
    form.append("fullname", fullname);
    form.append("password", password);
    form.append("role", role);
    const { status, data } = await userServices.create(form);
    if (status === 200) {
      toast.success("Create user successfully!");
      navigate("/users");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Example@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          User name
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="fullname"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Fullname
        </label>
        <input
          type="text"
          id="fullname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          hmtlFor="countries"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Select a role
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => setRole(e.target.value)}
          defaultValue=""
        >
          <option value="">Choose a role</option>
          {roles.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end items-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Create;
