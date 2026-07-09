import { useEffect, useState } from "react";
import profileApi from "../api/profileApi";
import { PageHeader, Card, Badge, Spinner, Alert } from "../components/ui";
import { formatDate, getErrorMessage, toTitleCase } from "../utils/formatters";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);
    setError("");
    try {
      const { data } = await profileApi.getMyProfile();
      setProfile(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Your account details" />

      <Alert variant="error">{error}</Alert>

      {loading ? (
        <Spinner />
      ) : (
        profile && (
          <Card className="max-w-md">
            <dl className="flex flex-col gap-4">
              <div>
                <dt className="text-xs uppercase text-slate-400">Full Name</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{profile.fullName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-400">Email</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{profile.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-400">Role</dt>
                <dd className="mt-1">
                  <Badge className="bg-primary-50 text-primary-700">
                    {toTitleCase(profile.role)}
                  </Badge>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-400">Account Status</dt>
                <dd className="mt-1">
                  <Badge
                    className={
                      profile.active
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }
                  >
                    {profile.active ? "Active" : "Inactive"}
                  </Badge>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-400">Member Since</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">
                  {formatDate(profile.createdAt)}
                </dd>
              </div>
            </dl>
          </Card>
        )
      )}
    </div>
  );
}
