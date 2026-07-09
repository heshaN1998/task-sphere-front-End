import { useEffect, useState } from "react";
import projectApi from "../api/projectApi";
import { useAuth } from "../context/AuthContext";
import ProjectFormModal from "../project/ProjectFormModal";
import {PageHeader,Card,Button,Spinner,Alert,EmptyState,} from "../components/ui";
import { formatDate, getErrorMessage } from "../utils/formatters";

export default function Projects() {
  const { isManager } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);
    setError("");
    try {
      const { data } = await projectApi.getAll();
      setProjects(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  function openCreateModal() {
    setEditingProject(null);
    setModalOpen(true);
  }

  function openEditModal(project) {
    setEditingProject(project);
    setModalOpen(true);
  }

  async function handleSave(formValues) {
    if (editingProject) {
      await projectApi.update(editingProject.id, formValues);
    } else {
      await projectApi.create(formValues);
    }
    loadProjects();
  }

  async function handleDelete(project) {
    if (!window.confirm(`Delete project "${project.name}"?`)) return;
    try {
      await projectApi.remove(project.id);
      loadProjects();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="All projects your team is working on"
        actions={
          isManager && <Button onClick={openCreateModal}>+ New Project</Button>
        }
      />

      <Alert variant="error">{error}</Alert>

      {loading ? (
        <Spinner />
      ) : (
        <Card>
          {projects.length === 0 ? (
            <EmptyState
              message="No projects yet."
              actionLabel={isManager ? "Create your first project" : undefined}
              onAction={isManager ? openCreateModal : undefined}
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500">
                    <th className="py-2 pr-4 font-medium">Name</th>
                    <th className="py-2 pr-4 font-medium">Description</th>
                    <th className="py-2 pr-4 font-medium">Created</th>
                    {isManager && <th className="py-2 pr-4 font-medium">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-slate-50 last:border-0">
                      <td className="py-3 pr-4 font-medium text-slate-800">{project.name}</td>
                      <td className="py-3 pr-4 text-slate-500">
                        {project.description || "—"}
                      </td>
                      <td className="py-3 pr-4 text-slate-500">
                        {formatDate(project.createdAt)}
                      </td>
                      {isManager && (
                        <td className="py-3 pr-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => openEditModal(project)}
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleDelete(project)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      )}

      <ProjectFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSave}
        project={editingProject}
      />
    </div>
  );
}
