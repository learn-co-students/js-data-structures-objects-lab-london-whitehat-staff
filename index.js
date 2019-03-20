// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {
    [key]: value
  })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address ='12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, name) {
  let newdriver = Object.assign({}, driver)
  delete newdriver[name];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver[name];
  return driver;
}








 
