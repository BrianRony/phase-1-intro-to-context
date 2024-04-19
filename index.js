function createEmployeeRecord(arr){
    return{
            firstName:arr[0],
            familyName:arr[1],
            title:arr[2],
            payPerHour:arr[3],
            timeInEvents:[],
            timeOutEvents:[]
        }
}
function createEmployeeRecords(employeeData){
    return employeeData.map((arr) => {
        return createEmployeeRecord(arr)
    })
}
function createTimeInEvent(employee,dateStamp){
    let [date, hour] = dateStamp.split(" ")
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
    date,
})
return employee
}
function createTimeOutEvent(employee,dateStamp){
    let [date, hour] = dateStamp.split(" ")
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date,
    })
    return employee
    }
function hoursWorkedOnDate(employee,specificDate){
    let inEvent = employee.timeInEvents.find((e)=> e.date === specificDate)
    let outEvent = employee.timeOutEvents.find((e)=> e.date === specificDate)

    return (outEvent.hour - inEvent.hour)/100
}
function wagesEarnedOnDate(employee,specificDate){
    let pay = hoursWorkedOnDate(employee,specificDate)
    employee.payPerHour
    return (pay.toString())
}
