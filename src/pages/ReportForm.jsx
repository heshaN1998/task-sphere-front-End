import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import reportApi from "../api/reportApi";
import projectApi from "../api/projectApi";
import { PageHeader, Card, Input, Textarea, Select, Button, Alert, Spinner } from "../components/ui";
import { getErrorMessage } from "../utils/formatters";

const emptyForm = {
  weekStartDate: "",
  weekEndingDate: "",
  projectId: "",
  taskPlanned: "",
  taskCompleted: "",
  hoursWorked: "",
  bugs: "",
  notes: "",
};

export default function ReportForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [projectOptions, setProjectOptions] = useState([]);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProjects();
    if (isEditing) loadReport();
  }, [id]);

  async function loadProjects() {
    try {
      const { data } = await projectApi.getAll();
      setProjectOptions(data.map((p) => ({ value: p.id, label: p.name })));
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  async function loadReport() {
    setLoading(true);
    try {
      const { data } = await reportApi.getById(id);
      setForm({
        weekStartDate: data.weekStartDate || "",
        weekEndingDate: data.weekEndingDate || "",
        projectId: data.projectId || "",
        taskPlanned: data.taskPlanned || "",
        taskCompleted: data.taskCompleted || "",
        hoursWorked: data.hoursWorked ?? "",
        bugs: data.bugs || "",
        notes: data.notes || "",
      });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      ...form,
      projectId: form.projectId ? Number(form.projectId) : null,
      hoursWorked: form.hoursWorked === "" ? null : Number(form.hoursWorked),
    };

    try {
      if (isEditing) {
        await reportApi.update(id, payload);
      } else {
        await reportApi.create(payload);
      }
      navigate("/reports");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <Spinner />;

  return (
    <div>
      <PageHeader
        title={isEditing ? "Edit Report" : "New Weekly Report"}
        subtitle="Fill in what you planned and completed this week"
      />

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Alert variant="error">{error}</Alert>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Week Start Date"
              name="weekStartDate"
              type="date"
              value={form.weekStartDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Week Ending Date"
              name="weekEndingDate"
              type="date"
              value={form.weekEndingDate}
              onChange={handleChange}
              required
            />
          </div>

          <Select
            label="Project"
            name="projectId"
            value={form.projectId}
            onChange={handleChange}
            options={projectOptions}
            placeholder="No project"
          />

          <Textarea
            label="Task Planned"
            name="taskPlanned"
            value={form.taskPlanned}
            onChange={handleChange}
            placeholder="What did you plan to work on this week?"
            required
          />
          <Textarea
            label="Task Completed"
            name="taskCompleted"
            value={form.taskCompleted}
            onChange={handleChange}
            placeholder="What did you actually complete?"
            required
          />

          <Input
            label="Hours Worked"
            name="hoursWorked"
            type="number"
            value={form.hoursWorked}
            onChange={handleChange}
            placeholder="e.g. 32.5"
          />

          <Textarea
            label="Bugs"
            name="bugs"
            value={form.bugs}
            onChange={handleChange}
            placeholder="Any bugs found? (optional)"
          />
          <Textarea
            label="Notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Anything else to mention? (optional)"
          />

          <div className="mt-2 flex justify-end gap-2">
            <Button variant="secondary" type="button" onClick={() => navigate("/reports")}>
              Cancel
            </Button>
            <Button type="submit" loading={saving}>
              {isEditing ? "Save Changes" : "Save as Draft"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
