// student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// first new Student object
const newStudent1 : Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "Nigeria"
}

// second new Student Object
const newStudent2 : Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 27,
    location: "Nigeria"
}

// Create an array of students
const studentsList: Student[] = [newStudent1, newStudent2];

// rendering a table to display the students in the array.
const table = document.createElement("table");

// Create table header
const header  = document.createElement("thead"); 
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");  
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

// Append text to the header cells
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

// Append the header row to the header
header.appendChild(headerRow);

// Append the header to the table
table.appendChild(header);

// Create table body
const body = document.createElement("tbody");

// Loop through the students array and create a row for each student
studentsList.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    body.appendChild(row);
});

table.appendChild(body);
document.body.appendChild(table);

// Add some basic styles to the table
table.style.width = "100%";