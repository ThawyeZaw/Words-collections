const words_ = document.querySelector('#words'),
  showPlace = document.querySelector('p')
let collection = [], values = {}

fetch('/./assets/words.json')
  .then(res => res.json())
  .then(words => {
    values = words
    for (const word in words) {
      collection.push(word)
      words_.innerHTML += `<option>${word}</option>`
    }
    console.log(collection)
  })
  .catch(err => {
    alert("An error has occured")
    console.log(err)
  })

function findWord() {
  let word = document.querySelector("#word").value
  console.log(word)
  if (collection.includes(word)) {
    const { meaning, category, synonyms } = values[word]
    let categories = [], synonym = []
    synonyms.map(s => synonym.push(`<li>${s}</li>`))
    category.map(c => categories.push(`<li>${c}</li>`))
    let output_1 = categories.join(""),
      output_2 = synonym.join("")
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
  } else { console.log("no") }
}