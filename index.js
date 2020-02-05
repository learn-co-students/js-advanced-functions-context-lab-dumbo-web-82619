/* Your Code Here */

function createEmployeeRecord(e) {
    let r = {}
    r.firstName = e[0]
    r.familyName = e[1]
    r.title = e[2]
    r.payPerHour = e[3]
    r.timeInEvents = []
    r.timeOutEvents = []
    return r
}

function createEmployeeRecords(employees) {
    return employees.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(time) {
    let [date, hour] = time.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour)
    })
    return this
}

function createTimeOutEvent(time) {
    let [date, hour] = time.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour)
    })
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(t => t.date === date)
    let timeOut = this.timeOutEvents.find(t => t.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employees) {
    return employees.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
}

function findEmployeeByFirstName(emps, name) {
    return emps.find( e => e.firstName === name)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}