// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
 let new_obj = {...driver};
  new_obj[key] = value
  return new_obj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
  
}

function deleteFromDriverByKey(driver, key, value){
  let new_obj = {...driver};
  delete new_obj[key]
  return new_obj
}

function destructivelyDeleteFromDriverByKey(driver, key, value){
  delete driver[key]
  return driver
}


