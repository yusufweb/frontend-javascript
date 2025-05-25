namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }

  export class Java {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
