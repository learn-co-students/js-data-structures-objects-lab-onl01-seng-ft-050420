let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const changes = { [key]: value }
  return Object.assign({}, obj, changes);
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  function deleteFromDriverByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  }
  function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
  }