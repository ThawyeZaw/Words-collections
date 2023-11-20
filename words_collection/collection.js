const list = document.querySelector(".list")
let fetchedData, currentWords, htmlValue

const displayWords = (word, meaning, category, synonyms) => {
  htmlValue += `
      <li class="word" id ="${word}">
      <p style="display: flex;">
        <b>${word}</b>
        <span>--- ${meaning}</span>
      <p>
					<ul class="about">
						<li>
							<i>categories</i>
							<ul>
              ${category}
							</ul>
						</li>
						<li>
							<i>synonyms</i>
							<ul>
              ${synonyms}
							</ul>
						</li>
					</ul>
          <hr>
				</li>`
}

/* --------- fetch the collection json -------- */
fetch("/./assets/words.json")
  .then(res => res.json())
  .then(json => {
    fetchedData = json
    currentWords = fetchedData
    htmlValue = ''
    for (const word in json) {
      /* ------------- declare variables ------------ */
      let { meaning, category, synonyms } = json[word],
        categories = [], synonym = []
      /* ----- display the catgory and synonyms ----- */
      synonyms.map(s => synonym.push(`<li>${s}</li>`))
      category.map(c => categories.push(`<li>${c}</li>`))
      let output_1 = categories.join(""),
        output_2 = synonym.join("")
      /* ------------ show result in html ----------- */
      displayWords(word, meaning, output_1, output_2)
    }
    list.innerHTML += htmlValue
  })
  /* ------ check error and alert if found ------ */
  .catch(err => {
    alert("An error has occured!")
    console.log(err)
  })

/* --------- filter by chosen category -------- */
function filterWords() {
  let selectedWords = []
  let checkedCategory = document.querySelectorAll("input[name='category']:checked"),
    chosenCategories = []

  checkedCategory.forEach(c => chosenCategories.push(c.value))
  for (const word in fetchedData) {
    let ifExist = chosenCategories.every(value => {
      return fetchedData[word].category.includes(value);
    });
    if (ifExist) {
      let text = [word, fetchedData[word]]
      selectedWords.push(text)
    }
  }
  list.innerHTML = ""
  htmlValue = ''
  selectedWords.forEach(word => {
    console.log(word)
    displayWords(word[0], word[1].meaning, word[1].category, word[1].synonyms)
  })
  list.innerHTML += htmlValue
  toggleDefinition()
  currentWords = {}
  selectedWords.forEach((word) => {
    currentWords[word[0]] = word[1]
  })
}
/* ------- removing the filter function ------- */
function removeFilter() {
  list.innerHTML = ''
  htmlValue = ''
  for (const word in fetchedData) {
    /* ------------- declare variables ------------ */
    let { meaning, category, synonyms } = fetchedData[word],
      categories = [], synonym = []
    /* ----- display the catgory and synonyms ----- */
    synonyms.map(s => synonym.push(`<li>${s}</li>`))
    category.map(c => categories.push(`<li>${c}</li>`))
    let output_1 = categories.join(""),
      output_2 = synonym.join("")
    /* ------------ show result in html ----------- */
    displayWords(word, meaning, output_1, output_2)
    toggleDefinition()
  }
  list.innerHTML += htmlValue
  currentWords = fetchedData
}

/* - function to toggle definiton of one word - */
function toggleDefinition() {
  const words = document.querySelectorAll('.word')

  words.forEach(word => {
    word.addEventListener('click', e => {
      /* --------- show defintion if hidden --------- */
      if (!(word.classList.contains('shown'))) {
        word.classList.add('shown')
        document.querySelectorAll(`#${word.id} span`).forEach(a => {
          a.style.display = 'flex'
        })
        document.querySelectorAll(`#${word.id} .about`).forEach(a => {
          a.style.display = 'flex'
        })
        document.querySelectorAll(`#${word.id} hr`).forEach(a => {
          a.style.display = 'flex'
        })
        /* ---------- hide defintion if shown --------- */
      } else if (word.classList.contains('shown')) {
        word.classList.remove('shown')
        document.querySelectorAll(`#${word.id} span`).forEach(a => {
          a.style.display = 'none'
        })
        document.querySelectorAll(`#${word.id} .about`).forEach(a => {
          a.style.display = 'none'
        })
        document.querySelectorAll(`#${word.id} hr`).forEach(a => {
          a.style.display = 'none'
        })
      } else {
        alert('error')
      }
    })
  })
}
/* ------ add toggle function after load ------ */
setTimeout(() => {
  toggleDefinition()
  console.log(currentWords)
}, 1000)

/* ----- sort words by alphabetical order ----- */
let wait = document.querySelector('.wait')
function sort(order) {
  // wait.style.display = 'block'
  list.innerHTML = ''
  let keys = Object.keys(currentWords),
    sortedData = {}, htmlValue = ''

  keys.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  })

  if (order == 'za') {
    keys.reverse()
  }

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    sortedData[k] = fetchedData[k]
  }
  htmlValue = ''
  for (const key in sortedData) {
    // displayWords(key, sortedData[key].meaning, sortedData[key].category, sortedData[key].synonyms)
    /* ------------- declare variables ------------ */
    let { meaning, category, synonyms } = sortedData[key],
      categories = [], synonym = []
    /* ----- display the catgory and synonyms ----- */
    synonyms.map(s => synonym.push(`<li>${s}</li>`))
    category.map(c => categories.push(`<li>${c}</li>`))
    let output_1 = categories.join(""),
      output_2 = synonym.join("")
    htmlValue += `
    <li class="word" id ="${key}">
    <p style="display: flex;">
      <b>${key}</b>
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
        </ul>
        <hr>
      </li>`
    // console.log(key, sortedData[key])
    // list.innerHTML += `${key} : ${sortedData[key]}`
  }
  list.innerHTML = htmlValue
  toggleDefinition()
}
