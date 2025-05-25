// Teacher interface definition
interface Teachers {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional property
  location: string;
  [index: string]: any;
}

const teacher1: Teachers = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher1);

// Director interfcae extending the Teacher interface
interface Directors extends Teachers {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Function to print teacher's full name(with destructuring)
const printTeacher = ({ firstName, lastName }: Teachers): string => {
  return `${firstName[0]}. ${lastName}`;
};

// printing the teacher's full name
console.log(printTeacher(teacher1)); // Output: J. Doe


// Interface describing the class structure
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Student class with interface implementation
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;       
  }

  // workonHomework method
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display first name of the student
  displayName(): string {
    return `${this.firstName}`;
  }
}

const newStudent = new StudentClass("John", "Doe");
console.log(newStudent.workOnHomework());
console.log(newStudent.displayName());
