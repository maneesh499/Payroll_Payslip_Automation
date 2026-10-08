export interface EmailLog {
  id: string;
  employeeName: string;
  email: string;
  payslipMonth: string;
  status: "Delivered" | "Failed" | "Pending";
  time: string;
  employeeId: string;
}

export const demoEmailLogs: EmailLog[] = [
  {
    id: "EL-001",
    employeeName: "Rahul Sharma",
    email: "rahul@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:14",
    employeeId: "EMP001",
  },
  {
    id: "EL-002",
    employeeName: "Priya Reddy",
    email: "priya@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:17",
    employeeId: "EMP002",
  },
  {
    id: "EL-003",
    employeeName: "Anil Kumar",
    email: "anil@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:21",
    employeeId: "EMP003",
  },
  {
    id: "EL-004",
    employeeName: "Sneha Rao",
    email: "sneha@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:25",
    employeeId: "EMP004",
  },
  {
    id: "EL-005",
    employeeName: "Vikram Singh",
    email: "vikram@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:29",
    employeeId: "EMP005",
  },
  {
    id: "EL-006",
    employeeName: "Kiran Patel",
    email: "kiran@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:33",
    employeeId: "EMP006",
  },
  {
    id: "EL-007",
    employeeName: "Meera Nair",
    email: "meera@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:38",
    employeeId: "EMP007",
  },
  {
    id: "EL-008",
    employeeName: "Suresh Iyer",
    email: "suresh@example.com",
    payslipMonth: "August 2026",
    status: "Failed",
    time: "2026-08-31 09:02:41",
    employeeId: "EMP008",
  },
  {
    id: "EL-009",
    employeeName: "Divya Menon",
    email: "divya@example.com",
    payslipMonth: "August 2026",
    status: "Delivered",
    time: "2026-08-31 09:02:45",
    employeeId: "EMP009",
  },
  {
    id: "EL-010",
    employeeName: "Arjun Kapoor",
    email: "arjun@example.com",
    payslipMonth: "August 2026",
    status: "Failed",
    time: "2026-08-31 09:02:49",
    employeeId: "EMP010",
  },
];
