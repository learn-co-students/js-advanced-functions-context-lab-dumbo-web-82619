const createEmployeeRecord = (arr) => {
  return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
  }    
}

const createEmployeeRecords = (arr) => {
  return arr.map(record => createEmployeeRecord(record)) 
}

function createTimeInEvent(timeStamp) {
  let [date, hour] = timeStamp.split(' ')
  this.timeInEvents.push({
    type: 'TimeIn',
    date,
    hour: parseInt(hour, 10)
  })
  return this
}

function createTimeOutEvent(timeStamp) {
  let [date, hour] = timeStamp.split(' ')
  this.timeOutEvents.push({
    type: 'TimeOut',
    date,
    hour: parseInt(hour, 10)
  })
  return this
}

function hoursWorkedOnDate(date) {
  let punchIn = this.timeInEvents.find(event => event.date === date)
  let punchOut = this.timeOutEvents.find(event => event.date === date)  
  return !!punchOut ? (punchOut.hour - punchIn.hour) / 100 : 0
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour   
}

function calculatePayroll(arr) {
  return arr.reduce((total, record) => total += allWagesFor.call(record), 0)
}

function findEmployeeByFirstName(arr, name) {
    return arr.find(record => record.firstName === name)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
    return payable
  }