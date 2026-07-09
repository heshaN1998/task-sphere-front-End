import { useEffect, useState } from "react";
import { Modal, Input, Textarea, Button, Alert } from "../components/ui";
import { getErrorMessage } from "../utils/formatters";

export default function ProjectFormModal({ isOpen, onClose, onSubmit, project }) {
  const [form, setForm] = useState({ name: "", description: "" });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm({
        name: project?.name || "",
        description: project?.description || "",
      });
      setError("");
    }
  }, [isOpen, project]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await onSubmit(form);
      onClose();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project ? "Edit Project" : "New Project"}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Alert variant="error">{error}</Alert>

        <Input
          label="Project Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Website Revamp"
          required
        />
        <Textarea
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="What is this project about?"
        />

        <div className="mt-2 flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit" loading={saving}>
            {project ? "Save Changes" : "Create Project"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
