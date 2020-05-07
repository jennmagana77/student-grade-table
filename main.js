var tableBody = document.querySelector(".table");
var newGradeTable = new GradeTable(tableBody);
var newApp = new App(newGradeTable);

newApp.start();
