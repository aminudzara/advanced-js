// Define a function to asynchronously fetch data with a callback function
function fetchDataWithCallback(callback) {
  setTimeout(function () {
    const data = "Data fetched";
    callback(data);
  }, 2000);
}

// Define the callback function to handle fetching data
function getData(result) {
  console.log(result);
}

// Calling the asynchronous function
fetchDataWithCallback(getData);
