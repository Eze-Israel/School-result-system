import React, { useState, useEffect, ChangeEvent } from 'react';

interface CurriculumMap {
  [level: string]: {
    classes: string[];
    subjects: string[];
  };
}

const curriculum: CurriculumMap = {
  'Lower Primary': {
    classes: ['Basic 1', 'Basic 2', 'Basic 3'],
    subjects: [
      'English',
      'Mathematics',
      'Basic Science',
      'Civic Education',
      'Yoruba',
      'Verbal Reasoning',
      'Quantitative Reasoning',
      'Handwriting',
    ],
  },
  'Upper Primary': {
    classes: ['Basic 4', 'Basic 5', 'Basic 6'],
    subjects: [
      'English',
      'Mathematics',
      'Basic Science & Tech',
      'Social Studies',
      'Civic Education',
      'Yoruba',
      'Agricultural Science',
      'Home Economics',
      'CRS/IRS',
    ],
  },
  'Junior Secondary': {
    classes: ['JSS1', 'JSS2', 'JSS3'],
    subjects: [
      'English',
      'Mathematics',
      'Basic Science',
      'Basic Technology',
      'Social Studies',
      'Civic Education',
      'Yoruba',
      'Agricultural Science',
      'Home Economics',
      'Business Studies',
      'Computer Studies',
      'CRS/IRS',
    ],
  },
  'Senior Secondary': {
    classes: ['SS1', 'SS2', 'SS3'],
    subjects: [
      'English',
      'Mathematics',
      'Biology',
      'Chemistry',
      'Physics',
      'Literature-in-English',
      'Government',
      'CRS/IRS',
      'Agricultural Science',
      'Economics',
      'Geography',
      'Yoruba',
      'Further Mathematics',
      'Civic Education',
      'Computer Studies',
      'Technical Drawing',
    ],
  },
};

const DependentSelects: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [classOptions, setClassOptions] = useState<string[]>([]);
  const [subjectOptions, setSubjectOptions] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (selectedLevel && curriculum[selectedLevel]) {
      setClassOptions(curriculum[selectedLevel].classes);
      setSubjectOptions(curriculum[selectedLevel].subjects);
      setMessage('');
    } else {
      setClassOptions([]);
      setSubjectOptions([]);
      setSelectedClass('');
      setSelectedSubject('');
      if (selectedLevel === '') {
        setMessage('Please select a school level first.');
      }
    }
  }, [selectedLevel]);

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
  };

  const handleClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block mb-1 font-medium">Select Level</label>
        <select
          value={selectedLevel}
          onChange={handleLevelChange}
          className="border p-2 rounded w-full"
        >
          <option value="">-- Select Level --</option>
          {Object.keys(curriculum).map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Select Class</label>
        <select
          value={selectedClass}
          onChange={handleClassChange}
          className="border p-2 rounded w-full"
          disabled={!selectedLevel}
        >
          <option value="">-- Select Class --</option>
          {classOptions.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Select Subject</label>
        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="border p-2 rounded w-full"
          disabled={!selectedLevel}
        >
          <option value="">-- Select Subject --</option>
          {subjectOptions.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
      </div>

      {message && (
        <p className="text-red-600 font-medium">{message}</p>
      )}

      {/* 🔌 Backend integration point (e.g. fetch students or submit result) */}
      {/* Use selectedLevel, selectedClass, selectedSubject to load students */}
    </div>
  );
};

export default DependentSelects;







