// write your DOM code here.

// DOM element references
//Passengers
const passengerCount = document.querySelector(".passenger_queue_count");
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");

//Taxis
const taxiCount = document.querySelector(".taxi_queue_count");
const taxiJoinBtn = document.querySelector(".join_taxi_queue");

//Departing
const departBtn = document.querySelector(".depart");
// create Factory Function instance
const taxiQueue = TaxiQueue();

// DOM events
//Retrieve local storage
if (localStorage["passCount"]) {
  let newCount = JSON.parse(localStorage.getItem("passCount"));
  taxiQueue.newPeopleCount(newCount);
  passengerCount.innerHTML = newCount;
}
if (localStorage["taxiCount"]) {
  let myCount = JSON.parse(localStorage.getItem("taxiCount"));
  taxiQueue.newTaxiCount(myCount);
  taxiCount.innerHTML = myCount;
}

//Passenger join
joinBtn.addEventListener("click", function () {
  taxiQueue.joinQueue();
  passengerCount.innerHTML = taxiQueue.queueLength();
  //local storage
  let theCount = taxiQueue.queueLength();
  stringCount = JSON.stringify(theCount);
  localStorage.setItem("passCount", stringCount);
});

//Passenger leave
leaveBtn.addEventListener("click", function () {
  taxiQueue.leaveQueue();
  passengerCount.innerHTML = taxiQueue.queueLength();

  let thisCount = taxiQueue.queueLength();

  localStorage.setItem("passCount", thisCount);
});

//Taxi join
taxiJoinBtn.addEventListener("click", function () {
  taxiQueue.joinTaxiQueue();
  taxiCount.innerHTML = taxiQueue.taxiQueueLength();

  //localStorage
  let myTaxiCount = taxiQueue.taxiQueueLength();
  let stringTaxiCount = JSON.stringify(myTaxiCount);
  localStorage.setItem("taxiCount", stringTaxiCount);
});

departBtn.addEventListener("click", function () {
  taxiQueue.taxiDepart();

  taxiCount.innerHTML = taxiQueue.taxiQueueLength();
  passengerCount.innerHTML = taxiQueue.queueLength();

  let countPassenger = taxiQueue.queueLength();

  localStorage.setItem("passCount", countPassenger);

  let newTaxiCount = taxiQueue.taxiQueueLength();

  localStorage.setItem("taxiCount", newTaxiCount);
});
