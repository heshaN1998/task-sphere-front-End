import { useEffect, useState } from "react";
import dashbordApi from "../api/dashbordApi";
import { PageHeader, StatCard, Spinner, Alert } from "../components/ui";
import { getErrorMessage } from "../utils/formatters";

export default function Dashbord() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSummary();
  }, []);

  async function loadSummary() {
    setLoading(true);
    setError("");
    try {
      const { data } = await dashbordApi.getSummary();
      setSummary(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <PageHeader
        title="Dashbord"
        subtitle="A quick look at this week's team activity"
      />

      <Alert variant="error">{error}</Alert>

      {loading ? (
        <Spinner />
      ) : (
        summary && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Reports Submitted This Week"
              value={summary.totalReportsSubmittedThisWeek}
            />
            <StatCard label="Total Team Members" value={summary.totalTeamMembers} />
            <StatCard
              label="Pending Reports"
              value={summary.pendingCount}
              accent="text-amber-600"
            />
            <StatCard
              label="Open Bugs"
              value={summary.openBugsCount}
              accent="text-rose-600"
            />
            <StatCard
              label="Submission Completion Rate"
              value={`${Math.round(summary.submitionCompletedRate * 100)}%`}
              accent="text-emerald-600"
            />
          </div>
        )
      )}
    </div>
  );
}
