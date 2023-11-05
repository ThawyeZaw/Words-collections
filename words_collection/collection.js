const list = document.querySelector(".list")

fetch("/./assets/words.json")
  .then(res => res.json())
  .then(json => {
    for (const word in json) {
      console.log(word, json[word].category)
      let { meaning, category, synonyms } = json[word],
      categories = [], synonym = []
      synonyms.map(s => synonym.push(`<li>${s}</li>`))
      category.map(c => categories.push(`<li>${c}</li>`))
      let output_1 = categories.join(""),
      output_2 = synonym.join("")

      list.innerHTML += `
      <li class="word">
					<b>${word}</b>
          <span>--- ${meaning}</span>
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
					</ul>
          <hr>
				</li>`
    }
  })
  .catch(err => {
    alert("An error has occured!")
    console.log(err)
  })


// console.log(object)