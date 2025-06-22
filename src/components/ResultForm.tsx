import React, { useState, ChangeEvent } from 'react';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

interface Student {
  id: number;
  name: string;
}

interface ResultFormValues {
  Level?: string;
  Session?: string;
  Term?: string;
  Class?: string;
  Subject?: string;
}

interface BehaviourRatings {
  [key: string]: string;
}

interface StudentScores {
  [key: number]: {
    error: any;
    test: string;
    exam: string;
  };
}

const sections = [
  'New Result',
  'New Social Behaviour',
  'New Result Comment',
  'New Mock Results'
];

const behaviours = ['Punctuality', 'Neatness', 'Obedience', 'Cooperation','Honesty', 'Sincerity', 'Intelligence'];

const allStudents: Student[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' },
  { id: 4, name: 'Chinwe Okoro' },
  { id: 5, name: 'Ahmed Musa' }
];

const ResultForm: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('New Result');
  const [formValues, setFormValues] = useState<ResultFormValues>({});
  const [behaviourRatings, setBehaviourRatings] = useState<BehaviourRatings>({});
  const [students, setStudents] = useState<Student[]>([]);
  const [studentScores, setStudentScores] = useState<StudentScores>({});

  const levelOptions: string[] = ['junior secondary', 'senior secondary', 'primary'];
  const sessionOptions: string[] = ['2023/2024', '2024/2025'];
  const termOptions: string[] = ['First', 'Second', 'Third'];
  const classOptions: string[] = ['jss1', 'jss2', 'ss1', 'ss2'];
  const subjectOptions: string[] = ['Math', 'English', 'Biology', 'Civic'];


  const isReadyToLoad = Object.values(formValues).every((val) => val);

  const handleChange = (field: keyof ResultFormValues, value: string) => {
    setFormValues({ ...formValues, [field]: value });
    setStudentScores({});
    setStudents([]);
  };

  const handleBehaviourChange = (trait: string, value: string) => {
    setBehaviourRatings({ ...behaviourRatings, [trait]: value });
  };

    const handleLoadStudents = () => {
    const selectedClass = formValues.Class;
    const selectedSubject = formValues.Subject;

    if (selectedClass && selectedSubject) {
      const filteredStudents = allStudents;
      setStudents(filteredStudents);
    }
  };



  
    const handleScoreChange = (id: number, type: 'test' | 'exam', value: string) => {
    let num = parseFloat(value);
    if (isNaN(num)) num = 0;

    if ((type === 'test' && num > 40) || (type === 'exam' && num > 60) || num < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Score',
        text: type === 'test'
          ? 'Test score must be between 0 and 40'
          : 'Exam score must be between 0 and 60'
      });
      num = 0;
    }

    setStudentScores((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            [type]: num.toString(),
          },
        }));
      };

  const resetScore = (id: number) => {
    setStudentScores((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const getTotal = (id: number): number => {
    const scores = studentScores[id];
    const test = parseFloat(scores?.test || '0');
    const exam = parseFloat(scores?.exam || '0');
    return test + exam;
  };

  const generateComment = (score: number): string => {
  if (score >= 80) return 'Excellent';
  if (score >= 70) return 'Very good';
  if (score >= 65) return 'Good';
  if (score >= 50) return 'Credit';
  if (score >= 40) return 'Pass';
  return 'Fail';
};


   const handleSubmitResults = () => {
    const resultPayload = students.map((student) => {
      const score = studentScores[student.id] || { test: '0', exam: '0' };
      const total = getTotal(student.id);

      return {
        studentId: student.id,
        name: student.name,
        test: score.test,
        exam: score.exam,
        total: total, // number type retained
        comment: generateComment(Number(total)),
        ...formValues,
        behaviour: behaviourRatings
      };
    });

    console.log(resultPayload);
    Swal.fire({
      icon: 'success',
      title: 'Results submitted!'
    });

    setStudentScores({});
    setStudents([]);
    setFormValues({});
  };

  

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4 bg-black p-6">
        {sections.map((section) => (
          <button
            key={section}
            className={`px-4 py-4 mb-4 border border-bottom-4 rounded ${
              activeSection === section ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {activeSection === 'New Result' && (
        <div>
           <div className="flex flex-col md:flex-row gap-4">
            {(['Level', 'Session', 'Term', 'Class', 'Subject'] as (keyof ResultFormValues)[]).map((field) => (
              <div key={field} className="flex flex-col w-full md:w-1/5">
                <label className="mb-1">{field}</label>
                <select
                  className="border p-2 rounded"
                  value={formValues[field] || ''}
                  onChange={(e) => handleChange(field, e.target.value)}
                >
                  <option value="">Select {field}</option>
                  {(field === 'Level' ? levelOptions :
                    field === 'Session' ? sessionOptions :
                    field === 'Term' ? termOptions :
                    field === 'Class' ? classOptions :
                    subjectOptions).map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className=" mt-4">
            <div className='bg-gray-300 p-2 block mb-4 text-center'>
                <h3 className='font-bold text-xl'>Select Social Behavioural information:</h3>
                <p>Key: 1- Very Poor, 2- Poor, 3- Fair, 4- Good, 5- Excellent</p>
            </div>
            {behaviours.map((trait) => (
              <div key={trait} className="flex flex-col">
                <label>{trait}</label>
                <select
                  className="border p-2 rounded w-25 text-center"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleBehaviourChange(trait, e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            ))}
          </div>

          <button
            className={`mt-6 px-4 py-2 bg-green-600 text-white rounded ${
              isReadyToLoad ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isReadyToLoad}
            onClick={handleLoadStudents}
          >
            Load Students
          </button>

        {students.length > 0 && (
            <div className="overflow-x-auto mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Result Entry for {formValues.Subject} - Class {formValues.Class}
              </h3>
              <table className="w-full border text-left">
                <thead>
                  <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Test (40)</th>
                    <th className="p-2 border">Exam (60)</th>
                    <th className="p-2 border">Total (100)</th>
                    <th className="p-2 border">Comment</th>
                    <th className="p-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                {students.map((student) => {
                    const scores = studentScores[student.id] || { test: '', exam: '' };
                    const total = getTotal(student.id);
                    return (
                      <tr key={student.id}>
                        <td className="p-2 border">{student.name}</td>
                        <td className="p-2 border">
                          <input
                            type="number"
                            min={0}
                            max={40}
                            className="border p-1 rounded w-24"
                            value={scores.test}
                            onChange={(e) => handleScoreChange(student.id, 'test', e.target.value)}
                          />
                        </td>
                        <td className="p-2 border">
                          <input
                            type="number"
                            min={0}
                            max={60}
                            className="border p-1 rounded w-24"
                            value={scores.exam}
                            onChange={(e) => handleScoreChange(student.id, 'exam', e.target.value)}
                          />
                        </td>
                        <td className="p-2 border">{total}</td>
                        <td className="p-2 border">{generateComment(total)}</td>
                        <td className="p-2 border">
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => resetScore(student.id)}
                            title="Reset Score"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}



          {students.length > 0 && (
            <button
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded"
              onClick={handleSubmitResults}
            >
              Send Results
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultForm;
