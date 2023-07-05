import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { projectServices, typeServices } from "../../services";

const Create = () => {
  const { id } = useParams();
  const cookies = new Cookies();
  const user = cookies.get("user");
  const navigate = useNavigate();
  const [sample, setSample] = useState("");
  const [label, setLabel] = useState("");
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await projectServices.getAll();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const submit = async (e) => {
    toast.info("Creating sample...");
    e.preventDefault();
    const form = new FormData();

    form.append("label", label);
    form.append("sample", sample);
    form.append("project_id", project);
    form.append("user_id", user.id);
    const { status, data } = await projectServices.create(form);
    if (status === 200) {
      toast.success("Create project successfully!");
      navigate("/projects/" + id + "/samples");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="mb-6">
        <label
          htmlFor="label"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Label
        </label>
        <input
          type="text"
          id="label"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="sample"
          className="block mb-2 text-sm font-bold text-gray-900 "
        >
          Sample
        </label>
        <input
          type="text"
          id="sample"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          onChange={(e) => setSample(e.target.value)}
        />
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
          onChange={(e) => setProject(e.target.value)}
          defaultValue={id}
        >
          <option value="">Choose a projects</option>
          {projects.map((item, index) => (
            <option value={item.projectId} key={index}>
              {item.projectName}
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
