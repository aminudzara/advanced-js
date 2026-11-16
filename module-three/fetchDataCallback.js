// Define a function to asynchronously fetch data with a callback function
function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      // Simulate a dynamic error condition
      let isError = true;

      if (isError) {
        throw new Error("Fetch failed");
      }

      // If no error, pass null for the error argument, and data for the second argument
      const data = "Data fetched";
      callback(null, data);
    } catch (error) {
      // Pass the error object directly to the callback to handle it downstream
      callback(error, null);
    }
  }, 2000);
}

// Define the callback function to handle both error and success results
function getData(error, result) {
  if (error) {
    // Log error message to the console
    console.error("Error: " + error.message);
    return;
  }

  // Log the successful data if no error occurred
  console.log(result);
}

// Calling the asynchronous function
fetchDataWithCallback(getData);
