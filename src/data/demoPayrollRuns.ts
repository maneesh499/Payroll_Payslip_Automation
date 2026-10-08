export interface PayrollRun {
  id: string;
  period: string;
  month: string;
  year: number;
  employees: number;
  grossPayroll: number;
  payslipsGenerated: number;
  emailsSent: number;
  emailsFailed: number;
  status: "Completed" | "Processing" | "Failed";
  date: string;
}

export const demoPayrollRuns: PayrollRun[] = [
  {
    id: "PR-2026-08",
    period: "August 2026",
    month: "August",
    year: 2026,
    employees: 48,
    grossPayroll: 1842600,
    payslipsGenerated: 48,
    emailsSent: 46,
    emailsFailed: 2,
    status: "Completed",
    date: "2026-08-31",
  },
  {
    id: "PR-2026-07",
    period: "July 2026",
    month: "July",
    year: 2026,
    employees: 46,
    grossPayroll: 1795200,
    payslipsGenerated: 46,
    emailsSent: 45,
    emailsFailed: 1,
    status: "Completed",
    date: "2026-07-31",
  },
  {
    id: "PR-2026-06",
    period: "June 2026",
    month: "June",
    year: 2026,
    employees: 45,
    grossPayroll: 1720400,
    payslipsGenerated: 45,
    emailsSent: 45,
    emailsFailed: 0,
    status: "Completed",
    date: "2026-06-30",
  },
  {
    id: "PR-2026-05",
    period: "May 2026",
    month: "May",
    year: 2026,
    employees: 43,
    grossPayroll: 1640800,
    payslipsGenerated: 43,
    emailsSent: 43,
    emailsFailed: 0,
    status: "Completed",
    date: "2026-05-31",
  },
];

export const monthlyChartData = [
  { month: "May", employees: 43, grossPayroll: 16.4, deliveryRate: 100 },
  { month: "Jun", employees: 45, grossPayroll: 17.2, deliveryRate: 100 },
  { month: "Jul", employees: 46, grossPayroll: 17.95, deliveryRate: 97.8 },
  { month: "Aug", employees: 48, grossPayroll: 18.43, deliveryRate: 95.8 },
];
