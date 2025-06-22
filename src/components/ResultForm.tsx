import React, { useState, ChangeEvent, useEffect } from 'react';
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
    error?: string;
    test: string;
    exam: string;
  };
}

const curriculum: Record<string, { classes: string[]; subjects: string[] }> = {
  'Lower Primary': {
    classes: ['Basic 1', 'Basic 2', 'Basic 3'],
    subjects: [
      'English', 'Mathematics', 'Basic Science', 'Civic Education', 'Yoruba',
      'Verbal Reasoning', 'Quantitative Reasoning', 'Handwriting'
    ],
  },
  'Upper Primary': {
    classes: ['Basic 4', 'Basic 5', 'Basic 6'],
    subjects: [
      'English', 'Mathematics', 'Basic Science & Tech', 'Social Studies', 'Civic Education',
      'Yoruba', 'Agricultural Science', 'Home Economics', 'CRS/IRS'
    ],
  },
  'Junior Secondary': {
    classes: ['JSS1', 'JSS2', 'JSS3'],
    subjects: [
      'English', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies',
      'Civic Education', 'Yoruba', 'Agricultural Science', 'Home Economics',
      'Business Studies', 'Computer Studies', 'CRS/IRS'
    ],
  },
  'Senior Secondary': {
    classes: ['SS1', 'SS2', 'SS3'],
    subjects: [
      'English', 'Mathematics', 'Biology', 'Chemistry', 'Physics',
      'Literature-in-English', 'Government', 'CRS/IRS', 'Agricultural Science',
      'Economics', 'Geography', 'Yoruba', 'Further Mathematics',
      'Civic Education', 'Computer Studies', 'Technical Drawing'
    ],
  },
};

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

  const sessionOptions: string[] = ['2023/2024', '2024/2025', '2022/2023'];
  const termOptions: string[] = ['First', 'Second', 'Third'];
  const levelOptions: string[] = Object.keys(curriculum);
  const [classOptions, setClassOptions] = useState<string[]>([]);
  const [subjectOptions, setSubjectOptions] = useState<string[]>([]);

  useEffect(() => {
    const level = formValues.Level;
    if (level && curriculum[level]) {
      setClassOptions(curriculum[level].classes);
      setSubjectOptions(curriculum[level].subjects);
    } else {
      setClassOptions([]);
      setSubjectOptions([]);
    }
  }, [formValues.Level]);

  const isReadyToLoad = Object.values(formValues).every((val) => val);

  const handleChange = (field: keyof ResultFormValues, value: string) => {
    setFormValues({ ...formValues, [field]: value });
    setStudentScores({});
    setStudents([]);
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

    if ((type === 'test' && num > 40) || (type === 'exam' && num > 60) || num < 0 || isNaN(num)) {
      Swal.fire({
        icon: 'error',
        timer:3000,
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
        total,
        comment: generateComment(Number(total)),
        ...formValues,
        behaviour: behaviourRatings
      };
    });

    console.log(resultPayload);
    Swal.fire({ icon: 'success', title: 'Results submitted!' });
    setStudentScores({});
    setStudents([]);
    setFormValues({});
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap mb-4 bg-black p-6 md:mx-30 justify-center">
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
                    <th className="p-2 border">Reset</th>
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
      
       {activeSection === 'New Social Behaviour' && (
  <div>
     <div className='bg-gray-300 p-2 block mb-4 text-center'>
          <h3 className='font-bold text-xl'>Select Social Behavioural information:</h3>
          <p>Key: 1- Very Poor, 2- Poor, 3- Fair, 4- Good, 5- Excellent</p>
        </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-1">Level</label>
          <select
            className="border p-2 rounded"
            value={formValues.Level || ''}
            onChange={(e) => handleChange('Level', e.target.value)}
          >
            <option value="">Select Level</option>
            {levelOptions.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-1">Class</label>
          <select
            className="border p-2 rounded"
            value={formValues.Class || ''}
            onChange={(e) => handleChange('Class', e.target.value)}
          >
            <option value="">Select Class</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-1">Session</label>
          <select
            className="border p-2 rounded"
            value={formValues.Session || ''}
            onChange={(e) => handleChange('Session', e.target.value)}
          >
            <option value="">Select Session</option>
            {sessionOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        className={`mt-4 px-4 py-2 bg-green-600 text-white rounded ${
          formValues.Level && formValues.Class && formValues.Session ? '' : 'opacity-50 cursor-not-allowed'
        }`}
        disabled={!formValues.Level || !formValues.Class || !formValues.Session}
        onClick={() => setStudents(allStudents)} // load all students based on class (mocked for now)
      >
        Load Students
      </button>

      {students.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            Behavioural Ratings - Class {formValues.Class}
          </h3>
          <table className="w-full border text-left">
            <thead>
              <tr>
                <th className="p-2 border">Student</th>
                {behaviours.map((trait) => (
                  <th key={trait} className="p-2 border text-center">{trait}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="p-2 border">{student.name}</td>
                  {behaviours.map((trait) => (
                    <td key={trait} className="p-2 border">
                      <select
                        className="border p-1 rounded w-full text-center"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          setBehaviourRatings(prev => ({
                            ...prev,
                            [`${student.id}-${trait}`]: e.target.value
                          }))
                        }
                      >
                        <option value="">--</option>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="mt-4 px-6 py-2 bg-blue-700 text-white rounded"
            onClick={() => {
              const behaviouralPayload = students.map((student) => {
                const data: Record<string, string> = {};
                behaviours.forEach((trait) => {
                  const key = `${student.id}-${trait}`;
                  data[trait] = behaviourRatings[key] || '';
                });

                return {
                  studentId: student.id,
                  name: student.name,
                  class: formValues.Class,
                  level: formValues.Level,
                  session: formValues.Session,
                  behaviour: data
                };
              });

              console.log('Submitting Behavioural Traits:', behaviouralPayload);
              Swal.fire({ icon: 'success', title: 'Behavioural data submitted!' });

              setBehaviourRatings({});
              setStudents([]);
            }}
          >
            Submit Behavioural Ratings
          </button>
        </div>
      )}
    </div>
  )}

  {activeSection === 'New Result Comment' && (
    <div className='bg-gray-200 text-black text-center'>
      
      <h2 className='font-bold mb-3 text-2xl'>Here is the general updated comments for 2024/2025 Academic section</h2>
        <p>If score is 80 or above &apos;Excellent&apos;</p>
        <p>If score is 70 or above &apos;Very good&apos;</p>
        <p>If score is 65 or above &apos;Good&apos;</p>
        <p>If score is 50 or above &apos;Credit&apos;</p>
        <p>If score is 40 or above &apos;Pass&apos;</p>
        <p>If score is below 40 &apos;Fail&apos;</p>

    </div>

  )}


      </div>
    );
  };

export default ResultForm;

