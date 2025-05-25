namespace Subjects {
    export interface Subject {
        teacher: Teacher;
    }

    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class SubjectClass implements Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}