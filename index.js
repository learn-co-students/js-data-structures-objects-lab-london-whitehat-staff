// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
   return newDriver = {...driver, [key]: value}
}
const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
     driver[key] = value
     return driver
 }

 const deleteFromDriverByKey = (driver, key) => {
    const driver2 = {...driver}
    delete driver2[key]
    return driver2
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {

    delete driver[key]
    return driver
}