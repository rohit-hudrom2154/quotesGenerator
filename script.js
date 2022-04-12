

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('newQuote')
const loader = document.getElementById('loader')

function loading() {
      loader.hidden = false
      quoteContainer.hidden = true
}

function complete() {
      loader.hidden = true
      quoteContainer.hidden = false
}

let apiQuotes = []

//show new quotes from apiQuotes
function newQuotes() {
      loading()
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
      if (!quote.author)
            quoteAuthor.textContent = "Unknown"
      else
            quoteAuthor.textContent = quote.author

      if (quote.text.length > 120)
            quoteText.classList.add('long-quote')
      else
            quoteText.classList.remove('long-quote')
      quoteText.textContent = quote.text
      complete()
}

// get quotes from API
async function getQuotes() {
      loading()
      const apiUrl = 'https://type.fit/api/quotes'
      try {
            const response = await fetch(apiUrl)
            apiQuotes = await response.json()
            newQuotes()

      } catch (error) {
            //catch error here
      }
}

function tweetQuote() {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
      window.open(twitterUrl, '_blank')
}

twitterBtn.addEventListener('click', tweetQuote)
newQuoteBtn.addEventListener('click', newQuotes)


//onLoad
getQuotes()


