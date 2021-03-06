// Write your JavaScript code here!
// Event listener for page load
window.addEventListener("load", function() {
   // TODO: fetch planets JSON
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      // response is a promise so we need to return json from it first before accessing the data
      response.json().then(function (json) {
         // once we have the data, find the missionTarget element on the page
         const missionTarget = document.getElementById("missionTarget");
         let index =Math.floor(Math.random()*5);
         
         missionTarget.innerHTML =`
            <h2>Mission Destination</h2>
         
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `
         //console.log(response);
         
      })
               
            } );
   let form = document.querySelector('form');
   let pilotName = document.querySelector('input[name="pilotName"]');
   let copilotName = document.querySelector('input[name="copilotName"]');
   let fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
   let cargoMassInput = document.querySelector('input[name="cargoMass"]');
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      //validate for emty fields
      if (pilotName.value === "" || copilotName.value === "" || cargoMassInput.value === "" || fuelLevelInput.value === "") {
         alert("Plese all fields are required!");
         //event.preventDefault();
         //validate pilot name and co pilat name is a string
      }else if(!isNaN(pilotName.value)  || !isNaN(copilotName.value) ) {
         alert("Please enter valid name for Pilot  and Co-pilot.");
         //event.preventDefault();
         //validate cargo and fuel inputs are numbers
      }else if(isNaN(cargoMassInput.value) || isNaN(fuelLevelInput.value)) {
         alert("Please enter valid number for Fuel Level and Cargo Mass.");
         //event.preventDefault();
      }else{
      document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " Ready.";
      document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotName.value + " Ready.";
      
      //validate the fuel range
      if(fuelLevelInput.value <= 10000){
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("faultyItems").style.visibility = "visible";
      }else{
         document.getElementById("fuelStatus").innerHTML = "Fuel level enough for launch.";
      }
      // validate the cargo range
      if(cargoMassInput.value >= 10000){
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("faultyItems").style.visibility = "visible";
      }else{
         document.getElementById("cargoStatus").innerHTML = "Cargo mass good for launch.";
      }
      // update launch status
      if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch.";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass good for launch.";
         document.getElementById("faultyItems").style.visibility = "hidden";
      }
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
