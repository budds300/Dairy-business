const addShedButton= document.getElementById("addShed");
const calculateIncomeButton= document.getElementById("calculateIncomeButton");
const shedInput=document.getElementById("shedName");
const litreInput= document.getElementById("litersCapacity");
const listElProduction= document.getElementById("totalProduction");
const shed= "Shed";
let dataObj;
let dataArr=[];
let time, income;
let yearCalender= {
    "January":31,
    "February":29,
    "March":31,
    "April":30,
    "May":31,
    "June":30,
    "July":31,
    "August":31,
    "September":30,
    "October":31,
    "November":30,  
    "Debember":31
}
function addGoal(){
    const getShedInput=shedInput.value;
    const getLitreInput= litreInput.value;
    console.log("the input value for shadename is" + getShedInput);
    console.log("the input value for liter capacity is" +  getLitreInput);
    const listItemEl= document.createElement("li");
    listItemEl.textContent= "shed" + " " + getShedInput + ": " + getLitreInput;
    listElProduction.appendChild(listItemEl);
    shedInput.value="";
    litreInput.value="";
    data= {shed: getShedInput, capacity:getShedInput};
    dataArr.push(data);
    console.log(JSON.stringify(dataArr));
}
function calculateIncome(){
    let objvalue,
    totalLiters=0;
    const sellingPrice= document.getElementById("sellingPrice").value;
    const yearSelected= document.querySelector('input[name="year]:checked').value
    let totalIncomeWeekly, totalIncomeYearly, totalIncomeLeapYear;
  let monthListItemEl = document.createElement("li");
  if (sellingPrice === "") {
    alert("Please enter selling price to proceed");

    
}
