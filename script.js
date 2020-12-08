const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

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
    // if author is black, add unknown
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.quoteAuthor; // get & store authors name
    }

    // reduce font size to long quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    // console.log(data); // console log data
    quoteText.innerText = data.quoteText; // get & store quote
  } catch (error) {
    getQuote(); // if error occurs, get another quote
    console.log('Whooops, no quote', error); // log & read error message
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// When page loads, run function
getQuote();
