import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reportApi from "../api/reportApi";
import { PageHeader,Card,Button,Spinner,Alert,EmptyState,Badge,} from "../components/ui";
import { formatDate, getErrorMessage } from "../utils/formatters";
import { REPORT_STATUS, REPORT_STATUS_COLORS } from "../utils/constants";

export default function Reports() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    setLoading(true);
    setError("");
    try {
      const { data } = await reportApi.getMyReports();
      setReports(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitReport(report) {
    try {
      await reportApi.submit(report.id);
      loadReports();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  async function handleDelete(report) {
    if (!window.confirm("Delete this report?")) return;
    try {
      await reportApi.remove(report.id);
      loadReports();
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  return (
    <div>
      <PageHeader
        title="My Reports"
        subtitle="Your weekly progress reports"
        actions={<Button onClick={() => navigate("/reports/new")}>+ New Report</Button>}
      />

      <Alert variant="error">{error}</Alert>

      {loading ? (
        <Spinner />
      ) : (
        <Card>
          {reports.length === 0 ? (
            <EmptyState
              message="You haven't created any reports yet."
              actionLabel="Create your first report"
              onAction={() => navigate("/reports/new")}
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500">
                    <th className="py-2 pr-4 font-medium">Week</th>
                    <th className="py-2 pr-4 font-medium">Project</th>
                    <th className="py-2 pr-4 font-medium">Hours</th>
                    <th className="py-2 pr-4 font-medium">Status</th>
                    <th className="py-2 pr-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b border-slate-50 last:border-0">
                      <td className="py-3 pr-4 text-slate-700">
                        {formatDate(report.weekStartDate)} – {formatDate(report.weekEndingDate)}
                      </td>
                      <td className="py-3 pr-4 text-slate-500">
                        {report.projectName || "—"}
                      </td>
                      <td className="py-3 pr-4 text-slate-500">
                        {report.hoursWorked ?? "—"}
                      </td>
                      <td className="py-3 pr-4">
                        <Badge className={REPORT_STATUS_COLORS[report.reportStatus]}>
                          {report.reportStatus}
                        </Badge>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex flex-wrap gap-2">
                          {report.reportStatus === REPORT_STATUS.DRAFT && (
                            <>
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => navigate(`/reports/${report.id}/edit`)}
                              >
                                Edit
                              </Button>
                              <Button size="sm" onClick={() => handleSubmitReport(report)}>
                                Submit
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="danger" onClick={() => handleDelete(report)}>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
