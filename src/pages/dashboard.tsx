"use client";

import { useState, ChangeEvent } from "react";
import { BookOpen, ClipboardList, FileText, LucideIcon } from "lucide-react";
import clsx from "clsx";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// ✅ Set the workerSrc with type-safe workaround
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;

// ---------------- Types ----------------
type TabName = "Results" | "Assignments" | "Projects";

interface User {
  role: "teacher" | "student";
  name: string;
}

interface Result {
  subject: string;
  score: number;
}

interface SidebarProps {
  currentTab: TabName;
  setCurrentTab: (tab: TabName) => void;
}

const dummyResults: Result[] = [
  { subject: "Mathematics", score: 85 },
  { subject: "English", score: 78 },
  { subject: "Biology", score: 92 },
];

// ---------------- Sidebar ----------------
const Sidebar = ({ currentTab, setCurrentTab }: SidebarProps) => {
  const tabs: { name: TabName; icon: LucideIcon }[] = [
    { name: "Results", icon: BookOpen },
    { name: "Assignments", icon: ClipboardList },
    { name: "Projects", icon: FileText },
  ];

  return (
    <aside className="bg-blue-900 text-white min-h-screen w-64 p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-8">Student Dashboard</h2>
      <nav className="flex flex-col gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setCurrentTab(tab.name)}
            className={clsx(
              "flex items-center gap-3 p-2 rounded hover:bg-blue-700",
              currentTab === tab.name && "bg-blue-700"
            )}
          >
            <tab.icon className="w-5 h-5" /> {tab.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

// ---------------- Dashboard ----------------
export default function Dashboard({
  user = { role: "teacher", name: "John Doe" },
}: {
  user: User;
}) {
  const [currentTab, setCurrentTab] = useState<TabName>("Results");
  const [pdfText, setPdfText] = useState<string>("");
  const isTeacher = user.role === "teacher";

  const handlePdfUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();

      reader.onload = async function () {
        const typedArray = new Uint8Array(this.result as ArrayBuffer);
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const text = content.items.map((item: any) => item.str).join(" ");
          fullText += `\n\nPage ${i}:\n${text}`;
        }

        setPdfText(fullText);
      };

      reader.readAsArrayBuffer(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-auto">
        <div className="md:hidden mb-4">
          <select
            className="w-full p-2 rounded border border-gray-300"
            value={currentTab}
            onChange={(e) => setCurrentTab(e.target.value as TabName)}
          >
            <option value="Results">Results</option>
            <option value="Assignments">Assignments</option>
            <option value="Projects">Projects</option>
          </select>
        </div>

        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>

        {currentTab === "Results" && (
          <section>
            <div className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-semibold mb-4">Results</h2>
              <table className="w-full text-left border">
                <thead>
                  <tr>
                    <th className="border p-2">Subject</th>
                    <th className="border p-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyResults.map((result, i) => (
                    <tr key={i}>
                      <td className="border p-2">{result.subject}</td>
                      <td className="border p-2">{result.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {isTeacher && (
                <div className="mt-4 flex flex-col gap-2">
                  <label className="block font-medium text-gray-700">
                    Upload Results PDF
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfUpload}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  />
                </div>
              )}

              {isTeacher && pdfText && (
                <div className="mt-6 bg-gray-100 p-4 rounded shadow">
                  <h3 className="font-semibold mb-2">Extracted PDF Content:</h3>
                  <pre className="whitespace-pre-wrap text-sm text-gray-800">
                    {pdfText}
                  </pre>
                </div>
              )}
            </div>
          </section>
        )}

        {currentTab === "Assignments" && (
          <section>
            <div className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Assignments</h2>
              <p>Assignment content or upload form goes here.</p>
            </div>
          </section>
        )}

        {currentTab === "Projects" && (
          <section>
            <div className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              <p>Project submissions and evaluations go here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
