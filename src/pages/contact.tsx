import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact

// "use client";

// import { useState } from "react";
// import { BookOpen, Folder, ClipboardList,
//    LucideIcon,MessageSquare, User, Settings,LogOut,LayoutDashboard, Bell  } from "lucide-react";
// import clsx from "clsx";
// import UserProfile from '@/components/UserProfile';

// // ---------------- Types ----------------
// type TabName = "Dashboard" |"Profile"|"Projects"|"Results"|"Assignments"|"Settings"|"Messages"|"Logout";


// interface Result {
//   subject: string;
//   score: number;
// }

// interface SidebarProps {
//   currentTab: TabName;
//   setCurrentTab: (tab: TabName) => void;
// }

// // ---------------- Dummy Data ----------------
// const dummyResults: Result[] = [
//   { subject: "Mathematics", score: 85 },
//   { subject: "English", score: 78 },
//   { subject: "Biology", score: 92 },
//   { subject: "CRS", score: 90 },
//   { subject: "Computer", score: 50 },
// ];

// // ---------------- Sidebar ----------------
// const Sidebar = ({ currentTab, setCurrentTab }: SidebarProps) => {
//   const tabs: { name: TabName; icon: LucideIcon }[] = [
//     { name: "Dashboard", icon: LayoutDashboard },
//     { name: "Profile", icon: User },
//     { name: "Results", icon: BookOpen },
//     { name: "Messages", icon: MessageSquare},
//     { name: "Assignments", icon: ClipboardList },
//     { name: "Projects", icon: Folder },
//     { name: "Settings", icon:  Settings },
//     { name: "Logout", icon: LogOut},
    
//   ];

//   return (
//     <aside className="bg-[#090342] text-white min-h-screen w-64 p-4   md:px-10 z-50">
//       <img className="text-2xl font-bold mb-10  mx-auto rounded-full" src="/images/cap2.jpg"/>
//       <nav className="flex flex-col gap-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.name}
//             onClick={() => setCurrentTab(tab.name)}
//             className={clsx(
//               "flex items-center gap-3 p-2 rounded hover:bg-blue-700",
//               currentTab === tab.name && "bg-gradient-to-r from-[#999999] to-[#ffffff] text-gray-800"
//             )}
//           >
//             <tab.icon className="w-5 h-5" /> {tab.name}
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// // ---------------- Dashboard ----------------
// export default function Dashboard({ user = {  name: "King Israel" } }) {
//   const [currentTab, setCurrentTab] = useState<TabName>("Dashboard");
// const date = new Date();
// const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
// const currentDate = date.getDate();
// const currentMonth = date.toLocaleString('default', { month: 'long' });
// const currentYear = date.getFullYear();

//    const mockUser = {
//     id: 'user_12345',
//     profilePic: '/images/passport.jpg', // use actual URL from user data
//   };

//   return (
    
//     <div className="flex  overflow-hidden ">
//       <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab}  />

//       <main className="flex-1 bg-gray-100  overflow-auto">

//         {/* Mobile tab select */}
//         {/* <div className="hidden mb-4">
//           <select
//             className="w-full p-2 rounded border border-gray-300"
//             value={currentTab}
//             onChange={(e) => setCurrentTab(e.target.value as TabName)}
//           >
//             <option value="Dashboard">Dashboard</option>
//             <option value="Profile">Profile</option>
//             <option value="Results">Results</option>
//             <option value="Assignments">Assignments</option>
//             <option value="Projects">Projects</option>
//             <option value="Settings">Settings</option>
//           </select>
//         </div> */}

//         <div className="bg-[#090342] flex justify-between mb-6 items-center"> 
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-95 h-[40] px-4  border text-white 
//               border-gray-300 rounded-[10] ml-6 bg-gray-800 my-2 md:block hidden"
//             />
//             <div className="flex flex-row md:gap-6 gap-3 md:pr-8">
//               <Bell className="text-blue-500 mr-3"/>  <MessageSquare className="text-blue-500 "/>
           
//           <UserProfile  userId={mockUser.id} profilePicUrl={mockUser.profilePic} />
//             </div>
             
//         </div>
//         <div>
//            <input
//               type="text"
//               placeholder="Search"
//               className="w-70 h-[40] px-3  border text-white 
//               border-gray-300 rounded-[10] bg-gray-800 my-2 block md:hidden"
//             />
//         </div>

//         {currentTab === "Dashboard" && (
//           <section>
//          <div className="bg-[#090342] text-white p-4 rounded h-40 mt-20 mx-10 mb-12 rounded-[20] flex justify-between">
//             <div className="mx-10"> 
//             {dayOfWeek}, {currentDate} {currentMonth} {currentYear}
            
//             <h1 className=" font-bold my-4 md:text-2xl">Welcome back, {user.name}!</h1>
//             <p className="text-white "> Because Great Teaching Deserves Great Online Presence</p>
//           </div>
//           <div>
//             <img src="/images/fireworks.png" alt="fireworks photo" className=" w-40 h-35" />
//           </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between gap-3 mx-10">
//             <div className="bg-green-400 w-60 h-40 rounded-[10] ml-5">
//               <span>Student</span>
//               <img src="images/cap.png" alt="cap" className="h-[15] w-[15]"/>
//               <span><User/></span>
//             </div>

//              <div className="bg-blue-500 w-60 h-40 rounded-[10] ">
//               <span>Student</span>
//               <img src="images/cap.png" alt="cap" className="h-[15] w-[15]"/>
//               <span><User/></span>
//             </div>

//              <div className="bg-green-400 w-60 h-40 rounded-[10] ">
//               <span>Student</span>
//               <img src="images/cap.png" alt="cap" className="h-[15] w-[15]"/>
//               <span><User/></span>
//             </div>

//              <div className="bg-yellow-300 w-60 h-40 rounded-[10] mr-5">
//               <span>Student</span>
//               <img src="images/cap.png" alt="cap" className="h-[15] w-[15]"/>
//               <span><User/></span>
//             </div>

//           </div>
//           </section>
//         )}
        

//         {currentTab === "Results" && (
//           <section>
//             <div className="bg-white shadow rounded p-4">
//               <h2 className="text-xl font-semibold mb-4">Results</h2>
//               <table className="w-full text-left border">
//                 <thead>
//                   <tr>
//                     <th className="border p-2">Subject</th>
//                     <th className="border p-2">Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dummyResults.map((result, i) => (
//                     <tr key={i}>
//                       <td className="border p-2">{result.subject}</td>
//                       <td className="border p-2">{result.score}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//             </div>
//           </section>
//         )}

//         {currentTab === "Assignments" && (
//           <section>
//             <div className="bg-white shadow rounded p-4">
//               <h2 className="text-xl font-semibold mb-2">Assignments</h2>
//               <p>Assignment content or upload form goes here.</p>
//             </div>
//           </section>
//         )}

//         {currentTab === "Projects" && (
//           <section>
//             <div className="bg-white shadow rounded p-4">
//               <h2 className="text-xl font-semibold mb-2">Projects</h2>
//               <p>Project submissions and evaluations go here.</p>
//             </div>
//           </section>
//         )}
//       </main>
//     </div>
    
//   );
// }
