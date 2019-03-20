// Write your solution in this file!
driver = {}
const updateDriverWithKeyAndValue = (driver, key, value) => {
    return {[key]: value, ...driver}
}
const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => Object.assign(driver, {[key]: value})
const deleteFromDriverByKey = (driver, key) => {
    const newDriver = {...driver}
    return delete newDriver[key]
}
const destructivelyDeleteFromDriverByKey = (driver, key) => delete driver[key]