
var hourDays = [
  {
  h:09,
  ap:'AM',
  index:9},
  {
  h:10,
  ap:'AM',
  index:10},
  {
  h:11,
  ap:'AM',
  index:11},{
  h:12,
  ap:'PM',
  index:12},{
  h:01,
  ap:'PM',
  index:13},{
  h:02,
  ap:'PM',
  index:14},{
  h:03,
  ap:'PM',
  index:15},{
  h:04,
  ap:'PM',
  index:16},{
  h:05,
  ap:'PM',
  index:17}
];
//------------------------------
var timeTable = document.getElementById('timeTable');
var Table = document.getElementById('table');
var calendarRow = document.getElementById('textBox');
//------------------------------
var localSchdularObj = [{
  // index,
  // time,
  // content
}];
//------------------------------
// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
// var projectTypeInputEl = $('#project-type-input');
// var hourlyRateInputEl = $('#hourly-rate-input');
// var dueDateInputEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  for(var j=1; j<=10; j++)
  {
    document.write("<th><label style='color:red;'>"+i+"</label></th>");
  }
  var projectRowEl = $('<tr>');

  var projectNameTdEl = $('<td>').addClass('p-2').text(name);

  // var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

  // var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

  // var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

  // var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');
  // var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  // var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

  // You can also chain methods onto new lines to keep code clean
  // var totalTdEl = $('<td>')
  //   .addClass('p-2')
  //   .text('$' + totalEarnings);

  var deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  // projectRowEl.append(
  //   projectNameTdEl,
  //   projectTypeTdEl,
  //   rateTdEl,
  //   dueDateTdEl,
  //   daysLeftTdEl,
  //   totalTdEl,
  //   deleteProjectBtn
  // );
  projectRowEl.append(
    projectNameTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');
}

// function calculateTotalEarnings(rate, days) {
//   var dailyTotal = rate * 8;
//   var total = dailyTotal * days;
//   return total;
// }

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();

  // var projectType = projectTypeInputEl.val().trim();
  // var hourlyRate = hourlyRateInputEl.val().trim();
  // var dueDate = dueDateInputEl.val().trim();

  // printProjectData(projectName, projectType, hourlyRate, dueDate);
  printProjectData(projectName);

  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
// dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);


//-------------------------------------
function createDayTable(){
  var nOw=false,pAst=false,fUture=false;
  var table;
  var row;
  var dataCell;
  var hourNow = parseInt(moment().format('HH'));
  hourNow = 10;
  console.log('hournow',hourNow)
  for (var i = 0; i < 9; i++) {
    table = document.createElement('tr');
    row = document.createElement('th');
    dataCell = document.createElement('td');
    dataCell2 = document.createElement('td');

    // table.setAttribute('class','future');
    row.setAttribute('id','calendar-row');
    row.setAttribute('style','width: 5%');
    table.setAttribute('id','table');
    dataCell.setAttribute('class','future');
    dataCell2.setAttribute('class','saveBtn');
    
    var textbox;
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute('class','textarea');

    var btn = document.createElement("button");
    btn.data = "hi";
    btn.innerHTML = 'Save';
    btn.onclick = function()
      {
          alert("hello, world");
      }
    btn.setAttribute('class','saveBtn');

    if(hourNow>hourDays[i].index){
      dataCell.setAttribute('class','past');
      textbox.disabled = "disabled";  //when time is passed
      btn.disabled = "disabled";
      pAst = true;
      now = false;
      fUture = false;
    } else if(hourNow<hourDays[i].index){
      dataCell.setAttribute('class','future');
      pAst = false;
      now = false;
      fUture = true;    
    } else if(hourNow=hourDays[i].index){
      dataCell.setAttribute('class','present');
      pAst = false;
      now = true;
      fUture = false;
    }
    console.log(pAst,fUture,nOw);

    row.textContent = hourDays[i].h + ':' + hourDays[i].ap;
    timeTable.appendChild(table);
    table.appendChild(row);
    table.appendChild(dataCell);

    dataCell.appendChild(textbox); 
    table.appendChild(dataCell2);
//-------------------------------------

    dataCell2.appendChild(btn);
//-------------------------------------

  }
}
//-------------------------------------
createDayTable();
