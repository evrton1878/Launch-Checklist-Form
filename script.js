// Write your JavaScript code here!
// Event listener for page load
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector('input[name="pilotName"]');
   let copilotName = document.querySelector('input[name="copilotName"]');
   let fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
   let cargoMassInput = document.querySelector('input[name="cargoMass"]');
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      //validate for emty fields
      if (pilotName.value === "" || copilotName.value === "" || cargoMassInput.value === "" || fuelLevelInput.value === "") {
         alert("Plese all fields are required!");
      }
      //validate pilot name and co pilat name is a string
      if (!isNaN(pilotName.value)  || !isNaN(copilotName.value) ) {
         alert("Please enter valid name for Pilot  and Co-pilot");
      }
     //validate teh cargo and fuel inputs are numbers
      if (isNaN(cargoMassInput.value) || isNaN(fuelLevelInput.value)) {
         alert("Please enter valid number for Fuel Level and Cargo Mass");
      } 
   })

})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
