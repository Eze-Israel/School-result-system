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
  Menu,
  GraduationCapIcon,
} from "lucide-react";
import clsx from "clsx";
import UserProfile from "@/components/UserProfile";
import Barchart from "@/components/Barchart";
import Calendar from "@/components/Calender";
import { motion, AnimatePresence } from 'framer-motion'


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
  show: boolean;
  onClose: () => void;
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
      { show && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={onClose}
        />
      )}
   

      <aside
       className={clsx(
          "bg-[#090342] text-white min-h-screen w-64 p-4  transition-transform duration-300 md:px-10 z-50",
          "fixed md:relative",
          show ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:block"
          
        )}
        
      >
         
        <motion.img
            className="text-2xl font-bold mb-10 mx-auto rounded-full"
            src="/images/cap2.jpg"
            alt="graduationcap"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
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
      setCurrentTab={(tab) => {
        setCurrentTab(tab);
        setShowSidebar(false);
      }}
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
           {/* {MOBILE ICON} */}
            <Menu/>
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
        <div className="px-6 block md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] px-3 border text-white border-gray-300 rounded-[10px] bg-gray-800 md:mb-4"
          />
        </div>

        {/* Tabs Content */}
        {currentTab === "Dashboard" && (
          <AnimatePresence>
          <motion.section  
            initial={{ opacity: 0, x: +200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                // viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-[#090342] text-white p-4 rounded h-40 md:mt-10 mt-4 mx-4 md:mx-10 mb-12 rounded-[20px] flex justify-between">
              <div className="mx-2 md:mx-10">
                {dayOfWeek}, {currentDate} {currentMonth} {currentYear}
                <h1 className="font-bold my-4 md:text-2xl">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-white text-sm">
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
            
             {/* Cards for Students Data */}
            <div className="flex flex-col md:flex-row justify-between gap-3 md:mx-10 mx-4 ">
              {/* first */}
                <div className="bg-green-400 md:w-60 w-full h-40 rounded-[10] md:ml-5">
                  <h2 className="mb-4 ml-4 font-semibold">Student</h2>
                  <div className="flex justify-between flex-col md:ml-4">
                  <div className="flex items-left flex-col">
                  <GraduationCapIcon className="h-[40] w-[50] text-black rounded-full mr-2"/>
                  <span className="text-md">500{"(active)"}</span>
                  </div>

                  <div className="flex items-end flex-col">
                 <div className="flex items-center mr-6 ">
                  <img src="images/StandMan.png" alt="cap" className="h-[25] w-[25]"/>
                   <span>{"(250)"}</span>
                   </div>

                 <div className="flex items-center mr-6">
                  <img src="images/Woman.png" alt="cap" className="h-[25] w-[25] mr-1"/> 
                  <span>{"(250)"}</span>
                  </div>
                 </div>
                 </div>
                </div>
                {/* end of first */}

                {/* Second Div */}
                  <div className="flex justify-between flex-col bg-blue-500 md:w-60 w-full h-40 rounded-[10]">
                  <h2 className="mb-4 ml-4 font-semibold">Staff</h2>
                  <div className="flex items-left flex-col ml-2">
                  <img src="/images/Bossman.png" className="h-[30] w-[30] text-black rounded-full "/>
                  <span className="text-md">25 {"(active)"}</span>
                  </div>

                  <div className="flex items-end flex-col mr-6">
                 <div className="flex items-center ">
                   <span>{"(10)"}</span>
                   </div>
                 <div className="flex items-center">
                  <span>{"(15)"}</span>
                  </div>
                 </div>
                </div>
                  {/* End of Second Div */}

                  {/* Third Div */}
                <div className="bg-green-400 md:w-60 w-full h-40 rounded-[10] ">
                  <h2 className="mb-4 ml-4 font-semibold">Classes</h2>
                  <img src="images/Students.png" alt="cap" className="h-[25] w-[25] ml-4"/>
                  <p className="text-center left-[50%] ">10</p>
                </div>
                {/* end of third div */}

                {/* Fourth div */}
               <div className="bg-yellow-300 md:w-60 w-full h-40 rounded-[10] ">
                  <h3 className="mb-4 ml-4 font-semibold">Subjects</h3>
                  <img src="images/ReturnBook.png" alt="cap" className="h-[25] w-[25] ml-4"/>
                  <p className="text-center left-[50%] ">40</p>
                </div>
                {/* end */}
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-25 gap-4 md:mx-10 mx-4 mt-6">
                <Barchart />
                <Calendar />
           </div>
          </motion.section>
          </AnimatePresence>
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
        {currentTab === "Profile" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
              <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
            </div>
          </section>
        )}
        {currentTab === "Messages" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
              <h2 className="text-xl font-semibold mb-2">Message</h2>
              <p>Messages go here.</p>
            </div>
          </section>
        )}
        {currentTab === "Settings" && (
          <section>
            <div className="bg-white shadow rounded p-4 mx-4 md:mx-10">
              <h2 className="text-xl font-semibold mb-2">Settings</h2>
              <p>Editing and Setting tools goes here go here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
