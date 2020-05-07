class GradeTable {
  constructor (tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tBody = document.querySelector(".tbody");
    for (var i = 0; i < grades.length; i++){
      var row = document.createElement("tr");
      var col1 = document.createElement("td");
      var col2 = document.createElement("td");
      var col3 = document.createElement("td");
      col1.textContent = grades[i].name;
      col2.textContent = grades[i].course;
      col3.textContent = grades[i].grade;
      row.append(col1, col2, col3);
      tBody.append(row);
    }
  }
}
