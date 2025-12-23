import { useEffect, useState } from "react";
import "./App.css";
import { Admission } from "./features/admission/interfaces";
import { AdmissionCard, AdmissionService } from "./features";

function App() {
  const [data, setData] = useState<Admission[]>([]);

  const fetchAdmissionData = async () => {
    const admissions = await AdmissionService.getAdmissionData();
    setData(admissions);
  };

  useEffect(() => {
    fetchAdmissionData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading admission data...</p>
      ) : (
        <div className="admission-list">
          {data.map((admission) => (
            <AdmissionCard key={admission.id} data={admission} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
