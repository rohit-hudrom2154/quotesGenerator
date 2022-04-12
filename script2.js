// const localQuotes = [
//       {
//             text: "Apna Time AAyega",
//             author: "Ranveer Singh"
//       },
//       {
//             text: "Rang de toh mohe Gerua",
//             author: "Sharukh Khan"
//       }
// ]
function showQuotes() {
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
      console.log(quote)
}

showQuotes()