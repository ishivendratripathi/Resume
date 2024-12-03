import "@/styles/App.css";
import { useState } from "react";
import ProfileEditor from "@/components/ProfileEditor/ProfileEditor";
import { BaseTemplate } from "@/components/CV/Templates/Base/BaseTemplate";
import { Button } from "./components/ui/Button/Button";
import { Printer } from "lucide-react";
import PropTypes from "prop-types";

function App() {
  const initialData = {
    profile: {
      firstName: "Shivendra",
      lastName: "Tripathi",
      email: "tripathi@gmail.com",
      phone: "+91 041 234 5678",
      address: "New Delhi, India",
      jobTitle: "Software Engineer",
    },
    education: [
      {
        id: 1,
        institution: "Some University",
        degree: "Master of Computer Application",
        fieldOfStudy: "Computer Science",
        startDate: "2015-01",
        endDate: "2008-06",
      },
      {
        id: 2,
        institution: "XYZ College",
        degree: "High School Diploma",
        fieldOfStudy: "General Education",
        startDate: "2000-01",
        endDate: "2004-06",
      },
    ],
    work: [
      {
        id: 1,
        company: "AQI Delhi",
        position: "Software Developer",
        startDate: "2020-07",
        endDate: "2021-12",
        responsibilities: `
          - Developed and maintained web applications
          - Provided technical support to clients
          - Implemented new features and enhancements`,
      },
      {
        id: 2,
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2015-07",
        endDate: "2020-12",
        responsibilities: `
          - Developed and maintained web applications
          - Provided technical support to clients
          - Implemented new features and enhancements`,
      },
    ],
  };

  const [cvData, setCvData] = useState(initialData);

  return (
    <div className="body">
      <div className="input-section">
        <ProfileEditor data={cvData} setData={setCvData} />
      </div>
      <div className="output-section">
        <PrintableCV data={cvData} />
      </div>
    </div>
  );
}

const PrintableCV = ({ data }) => (
  <div className="cv-container">
    <div className="print-hidden">
      <Button
        onClick={() => window.print()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "1rem",
        }}
      >
        <Printer size={16} />
        Print CV
      </Button>
    </div>
    <div className="cv-content">
      <BaseTemplate data={data} />
    </div>
    <style>{`
      @media print {
        @page {
          size: A4;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .body {
          display: flex;
          justify-content: center;
          background: none;
        }
        .input-section, .print-hidden {
          display: none !important;
        }
        .cv-container {
          width: 21cm;
          min-height: 29.7cm;
          margin: 0;
          background: white;
        }
        .cv-content {
          width: 100%;
          height: 100%;
        }
        .output-section {
          width: 100%;
          margin: 0;
          padding: 0;
          box-shadow: none;
        }
      }
    `}</style>
  </div>
);

PrintableCV.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
