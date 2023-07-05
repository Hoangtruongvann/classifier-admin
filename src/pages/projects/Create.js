import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { projectServices, typeServices } from "../../services";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState("");

  const getTypes = async () => {
    const { data } = await typeServices.getAll();
    setTypes(data);
  };

  useEffect(() => {
    getTypes();
  }, []);

  const submit = async (e) => {
    toast.info("Creating project...");
    e.preventDefault();
    const form = new FormData();
    form.append("projectName", name);
    form.append("projectType", type);
    form.append("description", description);
    form.append("status", "active");
    const { status, data } = await projectServices.create(form);
    if (status === 200) {
      toast.success("Create project successfully!");
      navigate("/projects");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Project name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Description
        </label>
        <textarea
          rows={8}
          placeholder="Descriptions for project"
          className="w-full p-2 border-2 rounded"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-6">
        <label
          hmtlFor="countries"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Select a type
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => setType(e.target.value)}
          defaultValue=""
        >
          <option value="">Choose a type</option>
          {types.map((item, index) => (
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
