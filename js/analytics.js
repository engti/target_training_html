/* Accept on click parameters: populate datalayer and local storage */

/* const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', writeAnalyticsData); 
*/

function writeAnalyticsData(analyticsEventName,productName,productUnits,productUnitPrice) {
    adobeDataLayer.push({ 'event': analyticsEventName, 'product': { 'name': productName, 'unit': productUnits, 'price': productUnitPrice } })
    
    // json stuff here to create local storage array
    if (typeof (Storage) !== "undefined") {
        appendToStorageArray('atc_productName', productName);
        appendToStorageArray('atc_productUnits', productUnits);
        appendToStorageArray('atc_productPrice', productUnitPrice);
    } else {
        console.log("local storage not available")
    }

    // check if location is empty
    // if empty initialize an empty array and push received value into it


}

function appendToStorage(name, data) {
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + data);    
}


function appendToStorageArray(key,item) {
    var oldValue = localStorage.getItem(key);
    if (oldValue === null) {
        oldValue = []  
        oldValue.push(item)
        let newValue = JSON.stringify(oldValue)
        localStorage.setItem(key,newValue)
    } else {
        console.log("help");
        let parseValue = JSON.parse(oldValue);
        parseValue.push(item);
        stringValue = JSON.stringify(parseValue); 
        localStorage.setItem(key, stringValue);
    }
}