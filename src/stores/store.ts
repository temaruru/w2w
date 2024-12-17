import { defineStore } from 'pinia';

interface Employee {
  id: number;
  name: string;
  department: string;
  role: 'doctor' | 'nurse';
  isHead?: boolean;
}

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employees: [
      { id: 1, name: 'Анна Сергеевна Иванова', department: 'Кардиологическое', role: 'doctor', isHead: true },
      { id: 2, name: 'Дмитрий Александрович Петров', department: 'Хирургическое', role: 'doctor', isHead: false },
      { id: 3, name: 'Елена Викторовна Смирнова', department: 'Хирургическое', role: 'doctor', isHead: false },
      { id: 4, name: 'Михаил Андреевич Кузнецов', department: 'Кардиологическое', role: 'doctor', isHead: true },
      { id: 5, name: 'Ольга Николаевна Соколова', department: 'Кардиологическое', role: 'doctor', isHead: true },
      { id: 6, name: 'Сергей Владимирович Морозов', department: 'Хирургическое', role: 'doctor', isHead: false },
      { id: 7, name: 'Наталья Игоревна Ковалева', department: 'Кардиологическое', role: 'nurse' },
      { id: 8, name: 'Марина Павловна Лебедева', department: 'Хирургическое', role: 'nurse' },
      { id: 9, name: 'Светлана Юрьевна Фролова', department: 'Кардиологическое', role: 'nurse' },
      { id: 10, name: 'Ирина Владимировна Григорьева', department: 'Кардиологическое', role: 'nurse' },
    ] as Employee[],
  }),
  actions: {
    addEmployee(employee: Employee) {
      this.employees.push(employee);
    },
    updateEmployee(id: number, updatedEmployee: Partial<Employee>) {
      const index = this.employees.findIndex(emp => emp.id === id);
      if (index !== -1) {
        this.employees[index] = { ...this.employees[index], ...updatedEmployee };
      }
    },
    deleteEmployee(id: number) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    },
  },
});
