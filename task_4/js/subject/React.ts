namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }

  export class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
