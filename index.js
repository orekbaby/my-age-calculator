//  Step 1: Get the user inputs for day, month, and year
//  Step 2: Create Date objects for the current date and the user's birthdate

//   // Step 3: Calculate the difference in milliseconds between the current date and the birthdate
//  Step 4: Update the content of the result elements with the day, month, and year of birth
//   // Step 5: Show the result section by removing the 'hidden' class
// step 1
// function calculateAge () {
//   let day = document.getElementById("dayInput").value;
//   let month = document.getElementById("monthInput").value;
//   let year = document.getElementById("yearInput").value;
//   // step 2
//   let currentDate = new Date();
//   let birthDate = new Date(`${year}-${month}-${day}`);
//   // step3
//   let ageDiff = new Date(currentDate - birthDate);

//   // step 4
//  document.getElementById("yearResult").innerText=birthDate.getFullYear();
//  document.getElementById("monthResult").innerText = birthDate.getMonth()+1;
//  document.getElementById("dayResult").innerText= birthDate.getDay();
// // step 5
//   document.getElementById('result').classList.remove('hidden');

// }


function calculateAge() {
  const dayInput = parseInt(document.getElementById("dayInput").value);
  const monthInput = parseInt(document.getElementById("monthInput").value);
  const yearInput = parseInt(document.getElementById("yearInput").value);

  const currentDate = new Date();
  const birthDate = new Date(yearInput, monthInput - 1, dayInput); // Month is 0-based in JavaScript Date

  if (currentDate < birthDate) {
    alert("Please enter a valid date of birth.");
    return;
  }

  let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonth = currentDate.getMonth() - birthDate.getMonth();
  let ageDay = currentDate.getDate() - birthDate.getDate();

  if (ageDay < 0) {
    ageMonth--;
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageDay += daysInLastMonth;
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  const ageYearsString = `${ageYear} years`;
  const ageMonthsString = `${ageMonth} months`;
  const ageDaysString = `${ageDay} days`;

  document.getElementById("yearResult").innerText = ageYearsString;
  document.getElementById("monthResult").innerText = ageMonthsString;
  document.getElementById("dayResult").innerText = ageDaysString;

  document.getElementById("result").classList.remove("hidden");
}
