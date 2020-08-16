function updateDriverWithKeyAndValue(driver, key, value) {
return Object.assign({}, driver, {[key]: value});
}

const driver = {
    keyname: {
        key: 'value'
}
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;
return driver;
}



function deleteFromDriverByKey(driver, key){
    let newObj = Object.assign({}, driver)
    delete newObj[key];
    return newObj;
}



function destructivelyDeleteFromDriverByKey(driver, key){
    //Object.keys(driver)
    delete driver[key]
    return driver;
    }