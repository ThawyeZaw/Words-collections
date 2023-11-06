const words_ = document.querySelector('#words'),
  showPlace = document.querySelector('p')
let collection = [], values = {}

/* --------- fetch the collection json -------- */
fetch('/./assets/words.json')
  .then(res => res.json())
  .then(words => {
    values = words
    /* ------- work thorough the collection ------- */
    for (const word in words) {
      collection.push(word)
      words_.innerHTML += `<option>${word}</option>`
    }
    console.log(collection)
  })
  /* ------ check error and alert if found ------ */
  .catch(err => {
    alert("An error has occured")
    console.log(err)
  })

/* ------- function for finding the word ------ */
function findWord() {
  /* --------------- get the word --------------- */
  let word = document.querySelector("#word").value
  /* ---- check if the word is in collection ---- */
  if (collection.includes(word)) {
    const { meaning, category, synonyms } = values[word]
    let categories = [], synonym = []
    synonyms.map(s => synonym.push(`<li>${s}</li>`))
    category.map(c => categories.push(`<li>${c}</li>`))
    let output_1 = categories.join(""),
      output_2 = synonym.join("")
    /* ---------- show the result in html --------- */
    showPlace.innerHTML = `
            <p style="display: flex;">
              <b>${word}</b>
              <span>--- ${meaning}</span>
            <p>
						<ul class="about">
							<li>
								<i>categories</i>
								<ul>
								${output_1}
								</ul>
							</li>
							<li>
								<i>synonyms</i>
								<ul>
								${output_2}
								</ul>
							</li>
						</ul>`
      
  }
  /* --------- if the word is not found --------- */
  else { console.log("no") }
}