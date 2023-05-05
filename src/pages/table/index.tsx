import React, { useEffect, useState } from "react";
import { MainNavigation } from "@/components/main-nav";

const data = [
  {
    "Student ID": 1,
    "Subject 1": 85,
    "Subject 2": 72,
    "Subject 3": 91,
    "Subject 4": 79,
    "Subject 5": 88,
  },
  {
    "Student ID": 2,
    "Subject 1": 63,
    "Subject 2": 68,
    "Subject 3": 77,
    "Subject 4": 84,
    "Subject 5": 72,
  },
  {
    "Student ID": 3,
    "Subject 1": 79,
    "Subject 2": 86,
    "Subject 3": 92,
    "Subject 4": 78,
    "Subject 5": 75,
  },
  {
    "Student ID": 4,
    "Subject 1": 0,
    "Subject 2": 6,
    "Subject 3": 92,
    "Subject 4": 8,
    "Subject 5": 75,
  },
  {
    "Student ID": 5,
    "Subject 1": 85,
    "Subject 2": 72,
    "Subject 3": 91,
    "Subject 4": 79,
    "Subject 5": 88,
  },
  {
    "Student ID": 6,
    "Subject 1": 6,
    "Subject 2": 68,
    "Subject 3": 77,
    "Subject 4": 84,
    "Subject 5": 72,
  },
  {
    "Student ID": 7,
    "Subject 1": 79,
    "Subject 2": 86,
    "Subject 3": 92,
    "Subject 4": 78,
    "Subject 5": 75,
  },
  {
    "Student ID": 8,
    "Subject 1": 0,
    "Subject 2": 6,
    "Subject 3": 92,
    "Subject 4": 8,
    "Subject 5": 75,
  },
  {
    "Student ID": 9,
    "Subject 1": 85,
    "Subject 2": 72,
    "Subject 3": 91,
    "Subject 4": 79,
    "Subject 5": 88,
  },
  {
    "Student ID": 10,
    "Subject 1": 63,
    "Subject 2": 68,
    "Subject 3": 77,
    "Subject 4": 84,
    "Subject 5": 72,
  },
  {
    "Student ID": 11,
    "Subject 1": 79,
    "Subject 2": 86,
    "Subject 3": 92,
    "Subject 4": 78,
    "Subject 5": 75,
  },
  {
    "Student ID": 12,
    "Subject 1": 0,
    "Subject 2": 6,
    "Subject 3": 92,
    "Subject 4": 8,
    "Subject 5": 75,
  },
  {
    "Student ID": 13,
    "Subject 1": 85,
    "Subject 2": 72,
    "Subject 3": 91,
    "Subject 4": 79,
    "Subject 5": 88,
  },
  {
    "Student ID": 14,
    "Subject 1": 63,
    "Subject 2": 68,
    "Subject 3": 77,
    "Subject 4": 84,
    "Subject 5": 72,
  },
  {
    "Student ID": 15,
    "Subject 1": 79,
    "Subject 2": 86,
    "Subject 3": 92,
    "Subject 4": 78,
    "Subject 5": 75,
  },
  {
    "Student ID": 16,
    "Subject 1": 0,
    "Subject 2": 6,
    "Subject 3": 92,
    "Subject 4": 8,
    "Subject 5": 75,
  },
  {
    "Student ID": 17,
    "Subject 1": 85,
    "Subject 2": 72,
    "Subject 3": 91,
    "Subject 4": 79,
    "Subject 5": 88,
  },
  {
    "Student ID": 18,
    "Subject 1": 63,
    "Subject 2": 68,
    "Subject 3": 77,
    "Subject 4": 84,
    "Subject 5": 72,
  },
  {
    "Student ID": 19,
    "Subject 1": 79,
    "Subject 2": 86,
    "Subject 3": 92,
    "Subject 4": 78,
    "Subject 5": 75,
  },
  {
    "Student ID": 20,
    "Subject 1": 0,
    "Subject 2": 6,
    "Subject 3": 92,
    "Subject 4": 8,
    "Subject 5": 75,
  },
];
function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(data);
  }, []);

  return (
    <>
      <MainNavigation />
      <div className="relative m-auto mt-5 flex  justify-center overflow-x-auto">
        <table className="  text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student ID
              </th>
              <th scope="col" className="px-6 py-3">
                Subject 1
              </th>
              <th scope="col" className="px-6 py-3">
                Subject 2
              </th>
              <th scope="col" className="px-6 py-3">
                Subject 3
              </th>
              <th scope="col" className="px-6 py-3">
                Subject 4
              </th>
              <th scope="col" className="px-6 py-3">
                Subject 5
              </th>
              <th scope="col" className="px-6 py-3">
                Average
              </th>
              <th scope="col" className="px-6 py-3">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const average =
                (student["Subject 1"] +
                  student["Subject 2"] +
                  student["Subject 3"] +
                  student["Subject 4"] +
                  student["Subject 5"]) /
                5;
              const result = average < 40 ? "Fail" : "Pass";
              return (
                <tr
                  key={student["Student ID"]}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4">{student["Student ID"]}</td>
                  <td className="px-6 py-4">{student["Subject 1"]}</td>
                  <td className="px-6 py-4">{student["Subject 2"]}</td>
                  <td className="px-6 py-4">{student["Subject 3"]}</td>
                  <td className="px-6 py-4">{student["Subject 4"]}</td>
                  <td className="px-6 py-4">{student["Subject 5"]}</td>
                  <td className="px-6 py-4">{average.toFixed(1)}</td>
                  <td className="px-6 py-4">{result}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentTable;
