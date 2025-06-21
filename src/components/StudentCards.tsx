import React from 'react'
import { GraduationCapIcon } from 'lucide-react'

const StudentCards = () => {
  return (
            <div className="flex flex-col md:flex-row justify-between gap-3 md:mx-10 mx-4 ">
              {/* first */}
                <div className="bg-green-400 md:w-60 w-full h-40 rounded-[10] md:ml-5">
                  <h2 className="mb-4 ml-4 font-semibold">Student</h2>
                  <div className="flex justify-between flex-col md:ml-4">
                  <div className="flex items-left flex-col">
                  <GraduationCapIcon className="h-[40] w-[50] text-black rounded-full mr-2"/>
                  <span className="text-md ml-2">500{"(active)"}</span>
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
  )
}
export default StudentCards