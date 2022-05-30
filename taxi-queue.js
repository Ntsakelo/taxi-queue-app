function TaxiQueue() {
  let peopleCount = 0;
  let taxiCount = 0;

  function joinQueue() {
    peopleCount += 1;
  }

  function leaveQueue() {
    if (peopleCount > 0) {
      peopleCount--;
    }
  }

  function joinTaxiQueue() {
    taxiCount += 1;
  }

  function queueLength() {
    return peopleCount;
  }

  function taxiQueueLength() {
    return taxiCount;
  }

  function taxiDepart() {
    if (queueLength() >= 12 && taxiQueueLength() > 0) {
      taxiCount--;
      peopleCount -= 12;
    }
  }
  function newPeopleCount(val) {
    peopleCount = val;
  }
  function newTaxiCount(val) {
    taxiCount = val;
  }
  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
    newPeopleCount,
    newTaxiCount,
  };
}
