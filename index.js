// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {
    [key]: value
  })
}

//drive.name = sam is defined inside the test. We then only have to add in one [key]: value hence that^.

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

//it is getting value from the test. driver[key] is saying look for the key (which = address, links to previous test), then take the value assigned to that key.

function deleteFromDriverByKey(driver, key) {
  let newdriver = Object.assign({}, driver)
  delete newdriver[key];
  return newdriver;
}

//key again has been passed by the test file so it know what you're talking about when you use 'key'

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}








 
