const list = document.querySelector(".list")
let fetchedData

const displayWords = (word, meaning, category, synonyms) => {
  list.innerHTML += `
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
  })
  /* ------ check error and alert if found ------ */
  .catch(err => {
    alert("An error has occured!")
    console.log(err)
  })

/* --------- filter by chosen category -------- */
function filterWords() {
  let selectedWords = []
  for (const word in fetchedData) {
    let chosenCategory = document.querySelector("input[name='category']:checked")
    if (fetchedData[word].category.includes(chosenCategory.value)) {
      let text = [word, fetchedData[word]]
      selectedWords.push(text)
    }
  }
  list.innerHTML = ""
  selectedWords.forEach(word => {
    console.log(word)
    let synonyms = word[1].synonyms, category = word[1].category,
      synonym = [], categories = []
    synonyms.map(s => synonym.push(`<li>${s}</li>`))
    category.map(c => categories.push(`<li>${c}</li>`))
    let output_1 = categories.join(""),
      output_2 = synonym.join("")
    displayWords(word[0], word[1].meaning, output_1, output_2)
    toggleDefinition()
  })
}
/* ------- removing the filter function ------- */
function removeFilter() {
  list.innerHTML = ''
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
}

/* ~~~~~~~~~ display codes start here ~~~~~~~~~ */

/* ----- show the definitions of all words ---- */
const show = () => {
  const words = document.querySelectorAll('.word')
  words.forEach(word => word.classList.add('shown'))

  document.querySelectorAll('span').forEach(a => {
    a.style.display = 'flex'
  })
  document.querySelectorAll('.about').forEach(a => {
    a.style.display = 'flex'
  })
  document.querySelectorAll('hr').forEach(a => {
    a.style.display = 'flex'
  })
},
/* ----- hide the definitions of all words ---- */
  hide = () => {
    const words = document.querySelectorAll('.word')
    words.forEach(word => word.classList.remove('shown'))

    document.querySelectorAll('span').forEach(a => {
      a.style.display = 'none'
    })
    document.querySelectorAll('.about').forEach(a => {
      a.style.display = 'none'
    })
    document.querySelectorAll('hr').forEach(a => {
      a.style.display = 'none'
    })
  }
/* ---------- show the filter buttons --------- */
document.querySelector('#showfilter').addEventListener('click', e => {
  document.querySelector('#filter').style.display = "block"
})
/* ---------- hide the filter buttons --------- */
document.querySelector('#hidefilter').addEventListener('click', e => {
  document.querySelector('#filter').style.display = "none"
})

/* - function to toggle definiton of one word - */
function toggleDefinition () {
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
      }else if (word.classList.contains('shown')) {
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
}, 1000);