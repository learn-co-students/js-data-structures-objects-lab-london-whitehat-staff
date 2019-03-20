// Write your solution in this file!
const driver = {};
const updateDriverWithKeyAndValue = (object, key, value) => {
  const newObject = { ...object };
  newObject[key] = value;
 
  return newObject;
};

const destructivelyUpdateDriverWithKeyAndValue = (object, key, value) => {
  object[key] = value;
 
  return object;
}

const deleteFromDriverByKey = (object, key) => {
  const newObject = { ...object };
  delete newObject[key];
  return newObject;
}

const destructivelyDeleteFromDriverByKey = (object, key) => {
  delete object[key];
  return object;
}