import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { DocumentsTable } from "./pages/documents";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/authentications";
import { Profile } from "./pages/profile";
import { ProjectsTable } from "./pages/projects";
import { UsersTable } from "./pages/users";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsTable />} />
          <Route path="documents" element={<DocumentsTable />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="settings" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
