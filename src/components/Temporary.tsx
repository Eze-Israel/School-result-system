"use client";

import { useState } from "react";
import {
  BookOpen,
  Folder,
  ClipboardList,
  LucideIcon,
  MessageSquare,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Bell,
  X,
  Menu,
} from "lucide-react";
import clsx from "clsx";
import UserProfile from "@/components/UserProfile";

// ---------------- Types ----------------
type TabName =
  | "Dashboard"
  | "Profile"
  | "Projects"
  | "Results"
  | "Assignments"
  | "Settings"
  | "Messages"
  | "Logout";

interface Result {
  subject: string;
  score: number;
}

interface SidebarProps {
  currentTab: TabName;
  setCurrentTab: (tab: TabName) => void;
  mobile?: boolean;
  show?: boolean;
  onClose?: () => void;
}

// ---------------- Dummy Data ----------------
const dummyResults: Result[] = [
  { subject: "Mathematics", score: 85 },
  { subject: "English", score: 78 },
  { subject: "Biology", score: 92 },
  { subject: "CRS", score: 90 },
  { subject: "Computer", score: 50 },
];

// ---------------- Sidebar ----------------
const Sidebar = ({
  currentTab,
  setCurrentTab,
  mobile,
  show,
  onClose,
}: SidebarProps) => {
  const tabs: { name: TabName; icon: LucideIcon }[] = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Profile", icon: User },
    { name: "Results", icon: BookOpen },
    { name: "Messages", icon: MessageSquare },
    { name: "Assignments", icon: ClipboardList },
    { name: "Projects", icon: Folder },
    { name: "Settings", icon: Settings },
    { name: "Logout", icon: LogOut },
  ];

  return (
    <>
      {/* Backdrop */}
      {mobile && show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={clsx(
          "bg-[#090342] text-white w-64 p-4 z-50 transform transition-transform duration-300 fixed md:relative top-0 left-0 h-full",
          mobile
            ? show
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        )}
      >
        <img
          className="text-2xl font-bold mb-10 mx-auto rounded-full"
          src="/images/cap2.jpg"
        />
        <nav className="flex flex-col gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => {
                setCurrentTab(tab.name);
                if (onClose) onClose(); // Close sidebar on mobile
              }}
              className={clsx(
                "flex items-center gap-3 p-2 rounded hover:bg-blue-700",
                currentTab === tab.name &&
                  "bg-gradient-to-r from-[#999999] to-[#ffffff] text-gray-800"
              )}
            >
              <tab.icon className="w-5 h-5" /> {tab.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

// ---------------- Dashboard ----------------
export default function Dashboard({ user = { name: "King Israel" } }) {
  const [currentTab, setCurrentTab] = useState<TabName>("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);

  const date = new Date();
  const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
  const currentDate = date.getDate();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();

  const mockUser = {
    id: "user_12345",
    profilePic: "/images/passport.jpg",
  };

  return (
    <div className="flex overflow-hidden relative">
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        mobile={true}
        show={showSidebar}
        onClose={() => setShowSidebar(false)}
      />

      <main className="flex-1 bg-gray-100 overflow-auto min-h-screen">
        {/* Mobile Top Bar */}
        <div className="bg-[#090342] flex justify-between items-center md:px-10 px-4 py-2 mb-6">
          <button
            className="text-white p-2 md:hidden"
            onClick={() => setShowSidebar(true)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Search"
            className="w-96 h-[40px] px-4 border text-white border-gray-300 rounded-[10px] bg-gray-800 my-2 hidden md:block"
          />

          <div className="flex flex-row md:gap-6 gap-3">
            <Bell className="text-blue-500 mr-3" />
            <MessageSquare className="text-blue-500" />
            <UserProfile
              userId={mockUser.id}
              profilePicUrl={mockUser.profilePic}
            />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 block md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] px-3 border text-white border-gray-300 rounded-[10px] bg-gray-800 mb-4"
          />
        </div>

        {/* Tabs Content */}
        {currentTab === "Dashboard" && (
          <section>
            <div className="bg-[#090342] text-white p-4 rounded h-40 mt-10 mx-4 md:mx-10 mb-12 rounded-[20px] flex justify-between">
              <div className="mx-2 md:mx-10">
                {dayOfWeek}, {currentDate} {currentMonth} {currentYear}
                <h1 className="font-bold my-4 md:text-2xl">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-white">
                  Because Great Teaching Deserves Great Online Presence
                </p>
              </div>
              <div>
                <img
                  src="/images/fireworks.png"
                  alt="fireworks"
                  className="w-40 h-35"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 mx-4 md:mx-10">
              {["green", "blue", "green", "yellow"].map((color, i) => (
                <div
                  key={i}
                  className={`bg-${color}-400 w-60 h-40 rounded-[10px] flex flex-col justify-center items-center text-white`}
                >
                  <span>Student</span>
                  <img src="/images/cap.png" alt="cap" className="h-6 w-6" />
                  <User />
                </div>
              ))}
            </div>
          </section>
        )}

        {currentTab === "Results" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
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
            </div>
          </section>
        )}

        {currentTab === "Assignments" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
              <h2 className="text-xl font-semibold mb-2">Assignments</h2>
              <p>Assignment content or upload form goes here.</p>
            </div>
          </section>
        )}

        {currentTab === "Projects" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              <p>Project submissions and evaluations go here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
