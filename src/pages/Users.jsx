import { useEffect, useState } from "react";
import userApi from "../api/userApi";
import { PageHeader, Card, Button, Select, Badge, Spinner, Alert } from "../components/ui";
import { formatDate, getErrorMessage } from "../utils/formatters";
import { ROLES } from "../utils/constants";

const roleOptions = [
  { value: ROLES.TEAM_MEMBER, label: "Team Member" },
  { value: ROLES.MANAGER, label: "Manager" },
];

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);
    setError("");
    try {
      const { data } = await userApi.getAll();
      setUsers(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleRoleChange(user, newRole) {
    try {
      await userApi.updateRole(user.id, newRole);
      loadUsers();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  async function handleToggleActive(user) {
    try {
      await userApi.setActive(user.id, !user.active);
      loadUsers();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  return (
    <div>
      <PageHeader title="Team Members" subtitle="Manage roles and account status" />

      <Alert variant="error">{error}</Alert>

      {loading ? (
        <Spinner />
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500">
                  <th className="py-2 pr-4 font-medium">Name</th>
                  <th className="py-2 pr-4 font-medium">Email</th>
                  <th className="py-2 pr-4 font-medium">Role</th>
                  <th className="py-2 pr-4 font-medium">Status</th>
                  <th className="py-2 pr-4 font-medium">Joined</th>
                  <th className="py-2 pr-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-slate-50 last:border-0">
                    <td className="py-3 pr-4 font-medium text-slate-800">{user.fullName}</td>
                    <td className="py-3 pr-4 text-slate-500">{user.email}</td>
                    <td className="py-3 pr-4">
                      <Select
                        name={`role-${user.id}`}
                        value={user.role}
                        onChange={(e) => handleRoleChange(user, e.target.value)}
                        options={roleOptions}
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <Badge
                        className={
                          user.active
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }
                      >
                        {user.active ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4 text-slate-500">{formatDate(user.createdAt)}</td>
                    <td className="py-3 pr-4">
                      <Button
                        size="sm"
                        variant={user.active ? "danger" : "secondary"}
                        onClick={() => handleToggleActive(user)}
                      >
                        {user.active ? "Deactivate" : "Activate"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
