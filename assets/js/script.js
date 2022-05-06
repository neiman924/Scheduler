
// var Button1 = $('#saveBtn0');
// var Button2 = $('#saveBtn1');
// var Button3 = $('#saveBtn2');
// var Button4 = $('#saveBtn3');
// var Button5 = $('#saveBtn4');
// var Button6 = $('#saveBtn5');
// var Button7 = $('#saveBtn6');
// var Button8 = $('#saveBtn7');
// var Button9 = $('#saveBtn8');

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

var projectFormEl = $('#text-area');

var projectNameInputEl = $('#project-name-input');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}





//-------------------------------------
function createDayTable(){
  var nOw=false,pAst=false,fUture=false;
  var table;
  var row;
  var dataCell;
  var hourNow = parseInt(moment().format('HH'));
  hourNow = 9;
  console.log('hournow',hourNow)
  for (var i = 0; i < hourDays.length; i++) {
    var test = '#text-area'+i;
    console.log(test);
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
    //textbox
    var textbox;
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute('class','textarea');
    textbox.setAttribute('id','text-area'+i);
    //button
    var btn = document.createElement("button");
    btn.data = "hi";
    btn.innerHTML = 'Save';
        btn.onclick = function(event)
          {
              // var test = '#text-area'+i;
              console.log(test);
              var aTag = event.target.querySelector("#text-area");
              const val = document.querySelector(test).value;
              console.log(val,aTag);
              // projectFormEl = $('#text-area');
              console.log('new function line 139',event.target);
          }
    btn.setAttribute('class','saveBtn');
    btn.setAttribute('id','saveButton'+i);
//check time
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
//create elements
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

var btnProject = $('#saveButton2');

console.log(btnProject);
function handleButton(event) {
  const val = document.querySelector("#text-area2").value;
  var aTag = event.target.querySelector("#text-area2");
  console.log(val);
  console.log('test handle button function',event.target);
  var btnClicked = $(event.target);
  console.log(btnClicked);
}

btnProject.on('click', handleButton);

