export interface Employee {
  id: string;
  name: string;
  department: string;
  email: string;
  grossSalary: number;
  netSalary: number;
  status: "Active" | "Inactive";
}

export const demoEmployees: Employee[] = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "Engineering",
    email: "rahul@example.com",
    grossSalary: 85000,
    netSalary: 72500,
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Reddy",
    department: "HR",
    email: "priya@example.com",
    grossSalary: 62000,
    netSalary: 52800,
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Anil Kumar",
    department: "Finance",
    email: "anil@example.com",
    grossSalary: 74000,
    netSalary: 63200,
    status: "Active",
  },
  {
    id: "EMP004",
    name: "Sneha Rao",
    department: "Operations",
    email: "sneha@example.com",
    grossSalary: 58000,
    netSalary: 49500,
    status: "Active",
  },
  {
    id: "EMP005",
    name: "Vikram Singh",
    department: "Sales",
    email: "vikram@example.com",
    grossSalary: 68000,
    netSalary: 57800,
    status: "Active",
  },
  {
    id: "EMP006",
    name: "Kiran Patel",
    department: "Engineering",
    email: "kiran@example.com",
    grossSalary: 91000,
    netSalary: 77400,
    status: "Active",
  },
  {
    id: "EMP007",
    name: "Meera Nair",
    department: "Marketing",
    email: "meera@example.com",
    grossSalary: 55000,
    netSalary: 47000,
    status: "Active",
  },
  {
    id: "EMP008",
    name: "Suresh Iyer",
    department: "Finance",
    email: "suresh@example.com",
    grossSalary: 79000,
    netSalary: 67300,
    status: "Active",
  },
  {
    id: "EMP009",
    name: "Divya Menon",
    department: "HR",
    email: "divya@example.com",
    grossSalary: 61000,
    netSalary: 52000,
    status: "Active",
  },
  {
    id: "EMP010",
    name: "Arjun Kapoor",
    department: "Sales",
    email: "arjun@example.com",
    grossSalary: 72000,
    netSalary: 61200,
    status: "Active",
  },
];
