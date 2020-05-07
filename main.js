var tableBody = document.querySelector(".table");
var newGradeTable = new GradeTable(tableBody);

var header = document.querySelector(".header");
var newPageHeader = new PageHeader(header);

var newApp = new App(newGradeTable, newPageHeader);

newApp.start();
