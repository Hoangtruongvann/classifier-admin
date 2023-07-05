import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/authentications";
import { Profile } from "./pages/profile";
import { ProjectsCreate, ProjectsTable } from "./pages/projects";
import { UsersCreate, UsersTable } from "./pages/users";
import { RolesCreate, RolesTable } from "./pages/roles";
import { SamplesCreate, SamplesTable } from "./pages/samples";
import { NotFoundPage } from "./pages/errors";
import { TypesCreate, TypesTable } from "./pages/types";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsTable />} />
          <Route path="projects/create" element={<ProjectsCreate />} />
          <Route path="types" element={<TypesTable />} />
          <Route path="types/create" element={<TypesCreate />} />
          <Route path="projects/:id/samples" element={<SamplesTable />} />
          <Route
            path="projects/:id/samples/create"
            element={<SamplesCreate />}
          />
          <Route path="users" element={<UsersTable />} />
          <Route path="users/create" element={<UsersCreate />} />
          <Route path="roles" element={<RolesTable />} />
          <Route path="roles/create" element={<RolesCreate />} />
          <Route path="settings" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
