class App {
  constructor(gradeTable, pageHeader) {
    this.pageHeader = pageHeader;
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "yWCk5Gwx"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades();
  }

}







// class APP {
//   constructor() {

//   }

//   handleGetGradesError(error) {
//     console.error(error);
//   },

//   handleGetGradesSuccess(grades) {
//     console.log(grades);
//   },

// }
