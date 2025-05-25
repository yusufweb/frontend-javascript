const cpp = new Subjects.Cpp({
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 3,
});
const java = new Subjects.Java();
const react = new Subjects.React();

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(
  java.getAvailableTeacher({
    firstName: "John",
    lastName: "Doe",
    experienceTeachingJava: 2,
  })
);

console.log("React");
console.log(react.getRequirements());
console.log(
  react.getAvailableTeacher({
    firstName: "John",
    lastName: "Doe",
    experienceTeachingReact: 1,
  })
);
