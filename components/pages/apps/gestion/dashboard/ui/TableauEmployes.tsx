"use client";

import React from "react";

const EmployeesTable = ({ title, employees }: any) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl p-6 text-white">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-blue-800/50">
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Employé
                </p>
              </th>
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Fonction
                </p>
              </th>
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Créneaux Horaire
                </p>
              </th>
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Absence Cumulée
                </p>
              </th>
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Status
                </p>
              </th>
              <th className="text-left py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Embauché le
                </p>
              </th>
              <th className="text-right py-4 px-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Action
                </p>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={`border-b border-blue-800/30 hover:bg-blue-900/30 transition-colors ${
                  index === employees.length - 1 ? "border-b-0" : ""
                }`}
              >
                {/* Employé (Avatar + Info) */}
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {employee.name}
                      </p>
                      <p className="text-xs text-blue-300">{employee.email}</p>
                    </div>
                  </div>
                </td>

                {/* Fonction */}
                <td className="py-4 px-2">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {employee.role}
                    </p>
                    <p className="text-xs text-blue-300">
                      {employee.department}
                    </p>
                  </div>
                </td>

                {/* Créneaux Horaire */}
                <td className="py-4 px-2">
                  <div>
                    <p className="text-sm text-white">{employee.schedule}</p>
                    <p className="text-xs text-blue-300">
                      {employee.workDays}
                    </p>
                  </div>
                </td>

                {/* Absence Cumulée */}
                <td className="py-4 px-2">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {employee.absenceHours}h
                    </p>
                    <p className="text-xs text-blue-300">
                      {employee.absenceDays} jours
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      employee.status === "Online"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                {/* Embauché le */}
                <td className="py-4 px-2">
                  <p className="text-sm text-white">{employee.hiredDate}</p>
                </td>

                {/* Action */}
                <td className="py-4 px-2 text-right">
                  <button className="text-sm text-blue-300 hover:text-white transition-colors font-medium">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Exemple d'utilisation avec données de démo
export default function EmployeesTableDemo() {
  const employeesData = [
    {
      id: 1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "Manager",
      department: "Organization",
      schedule: "09:00 - 18:00",
      workDays: "Lun - Ven",
      absenceHours: 8,
      absenceDays: 1,
      status: "Online",
      hiredDate: "14/06/21",
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      role: "Programmer",
      department: "Developer",
      schedule: "10:00 - 19:00",
      workDays: "Lun - Ven",
      absenceHours: 16,
      absenceDays: 2,
      status: "Offline",
      hiredDate: "14/06/21",
    },
    {
      id: 3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "Executive",
      department: "Projects",
      schedule: "08:00 - 17:00",
      workDays: "Lun - Sam",
      absenceHours: 0,
      absenceDays: 0,
      status: "Online",
      hiredDate: "14/06/21",
    },
    {
      id: 4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=4",
      role: "Manager",
      department: "Organization",
      schedule: "09:00 - 18:00",
      workDays: "Lun - Ven",
      absenceHours: 24,
      absenceDays: 3,
      status: "Online",
      hiredDate: "14/06/21",
    },
    {
      id: 5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Programmer",
      department: "Developer",
      schedule: "10:00 - 19:00",
      workDays: "Mar - Sam",
      absenceHours: 40,
      absenceDays: 5,
      status: "Offline",
      hiredDate: "14/06/21",
    },
    {
      id: 6,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=6",
      role: "Designer",
      department: "UI/UX Design",
      schedule: "09:00 - 18:00",
      workDays: "Lun - Ven",
      absenceHours: 8,
      absenceDays: 1,
      status: "Offline",
      hiredDate: "14/06/21",
    },
  ];

  return (
    <div className="min-h-full">
      <EmployeesTable
        title="Tableau des Employés"
        employees={employeesData}
      />
    </div>
  );
}

export { EmployeesTable };