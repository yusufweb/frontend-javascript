// Directors interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// director implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return " Getting to director tasks";
  }
}

// teacher implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create a new employee
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

// calling the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

// Function to create a new employee with a union type
const isDirector = (employee: number | string): boolean => {
  return createEmployee(employee) instanceof Director;
};

// executeWork function to execute the work of the employee
const executeWork = (employee: number | string): string => {
  if (isDirector(employee)) {
    return new Director().workDirectorTasks();
  } else {
    return new Teacher().workTeacherTasks();
  }
};

// Define string literal type
type Subjects = "Math" | "History";

// Define the function
const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
