//initialize variable
var dayPlanner = []

//for loop to create array for loop
for (time = 9; time <= 17; time++) {
    //get index and set variable to store data in array
    var id = time - 9
    var dataPlanner = ""
   

   //Get display time 
   var displayHour = 0;
   var ampm = "";

    if (time === 12) {
        displayHour = 12
        ampm = "pm"
    } else if (time > 12) { 
       displayHour = time - 12;
       ampm = "pm";
   } else if (time < 12) {
       displayHour = time;
       ampm = "am";
   }

   displayHour = displayHour.toString()

   dataPlanner = {
       id: id,
       displayHour: displayHour,
       time: time,
       ampm: ampm,
       dataPlanner: dataPlanner
   }

   dayPlanner.push(dataPlanner)
}


