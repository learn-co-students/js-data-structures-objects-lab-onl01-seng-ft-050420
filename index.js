const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
  let newDriver = { ...driverObj }
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driverObj[key] = value
  return driverObj
}

function deleteFromDriverByKey(driverObj, key) {
  let newDriver = Object.assign({}, driverObj)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
  delete driverObj[key]
  return driverObj
}
