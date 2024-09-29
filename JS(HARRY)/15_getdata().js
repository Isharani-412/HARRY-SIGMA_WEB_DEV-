/* getData() = used to retrieve data,from a local source (variable or local storage)
   or from an external source (API)
*/

//Retrieving Data from Local Storage:
function getData() {
    //retrive data
    const data = localStorage.getItem('myData');
    //check if data exist
    if (data) {
        console.log(JSON.parse(data));
        return JSON.parse(data);
    } else {
        console.log('No data found');
        return null;
    }
}

getData();      //call getdata



/*localStorage = web API(built-in ) that allows to --store key-value pairs in the browser.
 localStorage.getItem('myData') =  fetches the data associated with the key 'myData'.

 Data stored in localStorage is always in string format.
 If you're storing complex objects like arrays or objects, you must convert them back into their original format.
 JSON.parse(data)== converts the string data back into an object or array.
*/

//Fetching Data from an API (Asynchronous):
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        //if request fail--show a error
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //response.json()= used to parse string into object/array
        //await=wait until data is fully parsed
        const data = await response.json();
        console.log(data);
        return data;
        
    }catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    //to handle other error --network down,incureect api= use catch
}

getData();   //fun call

/*
 async = used to handle asynchronous operations
 async function=you can use the await keyword in it,
 await= allows the code to "wait" for a promise to be resolved or rejected without blocking the rest of the code.
 await= ensures that the code waits until the fetch() request is complete and returns the response.
 async = used to handle asynchronous operations
 response (object)= contains information about the request,(status and the body of the response)
 .ok =(property of the response object)= indicates if the request was successful
*/