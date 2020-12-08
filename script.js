// Get quote from API
async function getQuote() {
  // optional proxy url for local host configuration
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // store api url in const variable
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  // Try Catch statement to catch errors
  try {
    const response = await fetch(proxyUrl + apiUrl); // response request will wait to fetch proxy & api url
    const data = await response.json(); // data will wait for a repaonse from reponse variable & store it as json data
    console.log(data); // console log data
  } catch (error) {
    getQuote(); // if error occurs, get another quote
    console.log('Whooops, no quote', error); // log & read error message
  }
}

// When page loads, run function
getQuote();
