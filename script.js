const addShedButton = document.getElementById("addShedButton");
const calculateIncomeButton = document.getElementById("calculateIncomeButton");
const shedInput = document.getElementById("shedName");
const litreInput = document.getElementById("litresCapacity");
const listElProduction = document.getElementById("totalProduction");
const listElIncomeList = document.getElementById("displayIncome");
const shed = "Shed";
let dataObj;
let dataArr = [];
let time, income;
let yearCalender = {
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

function addGoal() {
  const getShedInput = shedInput.value;
  const getLitreInput = litreInput.value;
  console.log("the input value for shedname is " + getShedInput);
  console.log("the input value for litre capacity is " + getLitreInput);
  const listItemEl = document.createElement("li");
  listItemEl.textContent = "shed" + " " + getShedInput + ": " + getLitreInput;
  listElProduction.appendChild(listItemEl);
  shedInput.value = "";
  litreInput.value = "";
  data = { shed: getShedInput, capacity: getLitreInput };
  dataArr.push(data);
  console.log(JSON.stringify(dataArr));
}

function calculateIncome() {
  let objvalue,
    totalLitres = 0;
  const sellingPrice = document.getElementById("sellingPrice").value;
  const yearSelected = document.querySelector('input[name="year"]:checked')
    .value;
  let totalIncomeWeekly, totalIncomeYearly, totalIncomeLeapYear;
  let monthListItemEl = document.createElement("li");

  if (sellingPrice === "") {
    alert("Please enter selling price to proceed");
  } else {
    for (let index = 0; index < dataArr.length; index++) {
      objvalue = dataArr[index].capacity;
      totalLitres += parseInt(objvalue);
      console.log(objvalue);
    }
    console.log(sellingPrice * totalLitres);
    if (yearSelected == "regular") {
      totalIncomeWeekly = sellingPrice * totalLitres * 7;
      totalIncomeYearly = sellingPrice * totalLitres * 365;
      document.getElementById("dailyIncome").innerHTML = sellingPrice * totalLitres;
      document.getElementById("WeeklyIncome").innerHTML = totalIncomeWeekly;
      document.getElementById("yearlyIncome").innerHTML = totalIncomeYearly;
    } else if (yearSelected == "leap") {
      totalIncomeWeekly = sellingPrice * totalLitres * 7;
      totalIncomeYearly = sellingPrice * totalLitres * 366;
      document.getElementById("dailyIncome").innerHTML = sellingPrice * totalLitres;
      document.getElementById("WeeklyIncome").innerHTML = totalIncomeWeekly;
      document.getElementById("yearlyIncome").innerHTML = totalIncomeYearly;
      for (const property in yearCalender) {
        // listElIncomeList
        console.log("Month of " + `${property}` + ":  " + (`${yearCalender[property]}`) *sellingPrice)
        
      }
    }
  }
}
// calculateIncome(90,89)
// document.getElementById("sellingPrice").addEventListener("input", calculateIncome);
calculateIncomeButton.addEventListener("click", calculateIncome); //incase you need to use the button to call the tocalculate total rather than the input evemt
document.querySelectorAll("input[name='year']").forEach((input) => {
  input.addEventListener("change", calculateIncome);
});
addShedButton.addEventListener("click", addGoal);
