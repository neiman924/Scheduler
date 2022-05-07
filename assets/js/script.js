//------------local storage variable define--------------------------
eventTracker = [];
//-------------check if local variable is already created or not-----
if(localStorage.getItem('eventTracker') === null || localStorage.getItem('eventTracker') === undefined)
{
  localStorage.setItem("eventTracker" ,JSON.stringify([eventTracker]));
} else eventTracker = JSON.parse(localStorage.getItem('eventTracker'));
//----------------object to hold day----------------------------------
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
var timeDisplayEl = $('#time-display');
//var projectFormEl = $('#text-area');//used for anoder tries 
//----------------------display time function-------------------------------
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
//----------------------create day table------------------------------------
function createDayTable(){
  var nOw=false,pAst=false,fUture=false;
  var table;
  var row;
  var dataCell;
  var hourNow = parseInt(moment().format('HH'));
  //-----------------to set time manually -----------------------------------
  //  hourNow = 11;
  //---------------------------------------------------------------------- 
  console.log('hournow',hourNow)

  for (var i = 0; i < hourDays.length; i++) {

    table = document.createElement('tr');
    row = document.createElement('th');
    dataCell = document.createElement('td');
    dataCell2 = document.createElement('td');

    row.setAttribute('id','calendar-row');
    row.setAttribute('style','width: 5%');
    table.setAttribute('id','table');
    dataCell.setAttribute('class','future');
    dataCell2.setAttribute('class','saveBtn');
    //textbox
    var textbox;
    textbox = document.createElement('input');
    textbox.type = 'text';
    if (eventTracker[i] != undefined) textbox.value = eventTracker[i];
    // textbox.value = eventTracker[i];
    console.log(eventTracker[i],i,'X');
    textbox.setAttribute('class','textarea');
    textbox.setAttribute('id','text-area'+i);
    //button
    var btn = document.createElement("button");
    btn.data = "hi";
    btn.innerHTML = 'Save';
//----------function to load btn in the for loop but it didnt work------------------------
        // btn.onclick = function(event)
        //   {
        //       var test = "#text-area"+i;
        //       console.log(i);
        //       console.log('X',document.querySelector(test).value);
        //       var aTag = document.querySelector("#text-area"+i);
        //       projectFormEl = $('#text-area');
        //       console.log('new function line 139',aTag);
        //   }
//----------------------------------------------------------------------
    btn.setAttribute('class','saveBtn');
    btn.setAttribute('id','saveButton'+i);
//-----------------check time to select right class---------------------
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
//-------------------append the table----------------------------------
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
//----------calling the createdaytable function-------------------
createDayTable();
//-------------------handeling the buttons manually------------------
var btnProject0 = $('#saveButton0');
function handleButton0(event) {
  const val = document.querySelector("#text-area0").value;
  console.log(val);
  eventTracker[0]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject0.on('click', handleButton0);
//-------------------------------------
var btnProject1 = $('#saveButton1');

function handleButton1(event) {
  const val = document.querySelector("#text-area1").value;
  console.log(val);
  eventTracker[1]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject1.on('click', handleButton1);
//-------------------------------------
var btnProject2 = $('#saveButton2');
function handleButton2(event) {
  const val = document.querySelector("#text-area2").value;
  console.log(val);
  eventTracker[2]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject2.on('click', handleButton2);
//-------------------------------------
var btnProject3 = $('#saveButton3');
function handleButton3(event) {
  const val = document.querySelector("#text-area3").value;
  console.log(val);
  eventTracker[3]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject3.on('click', handleButton3);
//-------------------------------------
var btnProject4 = $('#saveButton4');
function handleButton4(event) {
  const val = document.querySelector("#text-area4").value;
  console.log(val);
  eventTracker[4]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject4.on('click', handleButton4);
//-------------------------------------
var btnProject5 = $('#saveButton5');

function handleButton5(event) {
  const val = document.querySelector("#text-area5").value;
  console.log(val);
  eventTracker[5]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject5.on('click', handleButton5);
//-------------------------------------
var btnProject6 = $('#saveButton6');
function handleButton6(event) {
  const val = document.querySelector("#text-area6").value;
  console.log(val);
  eventTracker[6]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject6.on('click', handleButton6);
//-------------------------------------
var btnProject7 = $('#saveButton7');
function handleButton7(event) {
  const val = document.querySelector("#text-area7").value;
  console.log(val);
  eventTracker[7]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject7.on('click', handleButton7);
//-------------------------------------
var btnProject8 = $('#saveButton8');
function handleButton8(event) {
  const val = document.querySelector("#text-area8").value;
  console.log(val);
  eventTracker[8]=val;
  localStorage.setItem("eventTracker" ,JSON.stringify(eventTracker));
}
btnProject8.on('click', handleButton8);
//---------handeling the live time in the page --------------------
setInterval(displayTime, 1000);
//----------------------------------------------------------------------

