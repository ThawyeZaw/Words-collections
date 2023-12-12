const list = document.querySelector('.list'),
  ol = document.querySelector('.wrapper > ol'),
  tips_lists = [
    {
      name: 'Exaggeration/hyperbole', notes: `
    Extreme kind of <b>exaggeration</b> in speech is the literary device known as hyperbole. <br /><br />
    Take this statement for example:
    <blockquote>"I'm so hungry, I could eat a horse."</blockquote>
    In truth, you wouldn't be able to eat a whole horse. But you use the phrase to show people you're extremely hungry.
  ` },
    {
      name: 'Exclamation', notes: `
    An exclamation point is a punctuation mark that shows emphasis or <b>emotion</b> in a written sentence.
    <blockquote>Such as: <i>worry, anger, amazement, disappointment, shock, etc</i>.</blockquote>
    <ul>
      <li>"I got into college." (Calm tone)</li>
      <li>"I got into college!" (Excited tone)</li>
    </ul>
    <br>
    <ul>
      <li>"Take out the trash." (Calm tone)</li>
      <li>"Take out the trash!" (Angry tone)</li>
    </ul>` },
    {
      name: 'Humour', notes: `
    Humour makes the writing more <b>lively</b> and appealing. It grabs <i>readers' attention</i> and helps in <i>reducing tension and stress</i>.
    <blockquote>“Can I get you anything? Coffee? Doughnut? A better attitude?”</blockquote>
    ` },
    {
      name: 'Sarcasm', notes: `
    Sarcasm is used to <b>mock</b> the subject under discussion.
    <blockquote>
    "I work 40 hours a week for me to be this poor."
    <br><br>
    "Nice perfume. How long did you marinate in it?"
    </blockquote>
    ` },
    {
      name: 'Rhetorical questions', notes: `
    Rhetorical questions are used to <b>make the reader think</b>.<br>
    People ask rhetorical questions without expecting an answer, usually to make a point.
    <blockquote>
      "Can we continue to support this case?"
      <br><br>
      "Do you think the uniform make you smart?"
    </blockquote>
    ` },
    {
      name: 'Repetition', notes: `
    In writing, repetition - with individual letters and sounds, single words, phrases, or even ideas - are used 
    to emphasize a point and to <b>show the importance</b> of somthing from the contents.
    <blockquote>
      "The day at the beach was fun, fun, fun."<br><br>
      "We <i>resolve</i> to be brave. We <i>resolve</i> to be good. We <i>resolve</i> to uphold the law according to our oath."
    </blockquote>
    ` },
    {
      name: 'Connetives', notes: `
    Connetives are words or phrases that link sentences or clauses together. Connectives can be 
    <i>conjunctions, prepositions, or adverbs</i>. They <b>improve writing's flow</b>.
    <blockquote>
    <table>
      <tr>
        <th>Adding</th><th>Time</th><th>Cause/effect</th><th>Contrast</th>
      </tr>
      <tr>
        <td>and</td><td>then</td><td>because</td><td>unless</td>
      </tr>
      <tr>
        <td>moreover</td><td>eventually</td><td>therefore</td><td>however</td>
      </tr>
      <tr>
        <td>furthermore</td><td>meanwhile</td><td>consequently</td><td>although</td>
      </tr>
      </table>
    </blockquote>
    Read more about Connectives here : <a href="https://www.twinkl.com/teaching-wiki/connectives" target="_blank">link</a>
    ` },
    {
      name: 'Variety of sentence structures', notes: `
    Varied sentence structures - simple, compound, complex - engage reader's interest.
		<blockquote>
			<table class="sentence">
				<tr>
					<th>Minor</th>
					<td>- does not necessarily have a main verb in it, but which can be understood as a complete unit of meaning.</td>
					<td rowspan="5" style="width: 5ch; text-align: center; line-height: 2">Least to Most used</td>
				</tr>
				<tr>
					<th>Simple</th>
					<td>- contains one subject and one main verb <br />- punch line providing dramatic effects</td>
				</tr>
				<tr>
					<th>Compound</th>
					<td>- contains two balanced clauses<br />- Use coordinating conjunctions - FANBOYS: For, And, Nor, But, Or, Yet, So.</td>
				</tr>
				<tr>
					<th>Multi-clause</th>
					<td>- Longer sentences provide details and are particularly useful for descriptions</td>
				</tr>
				<tr>
					<th>Complex</th>
					<td>- made up of a main clause and a subordinate clause connected to each other with a subordinating conjunction
						<br>- subordinating conjunctions are not FANBOYS nor conjunctive adverbs</td>
				</tr>
			</table>
		</blockquote>
    Read more about Sentence Structures here : <a href="/./sentence_structure/sentence_structure.html" target="_blank">link</a>
    ` },
    {
      name: 'Use of punctuation', notes: `
    Punctuation control how you read the text.
    <blockquote>
      <p>Period ( . )</p>
      <p>Question Mark ( ? )</p>
      <p>Exclamation Point ( ! )</p>
      <p>Comma ( , )</p>
      <p>Semicolon ( ; )</p>
      <p>Colon ( : )</p>
      <p>Em Dash ( — )</p>
      <p>En Dash ( – )</p>
      <p>Hyphen ( - )</p>
      <p>Parentheses ( )</p>
      <p>Brackets [ ]</p>
      <p>Braces { }</p>
      <p>Apostrophe ( ‘ )</p>
      <p>Quotation Marks (“ ”)</p>
      <p>Single Quotation Marks (‘ ’)</p>
      <p>Ellipsis (...)</p>
    </blockquote>
    Read more about Punctuations here : <a href="https://www.yourdictionary.com/articles/english-punctuation-marks" target="_blank">link</a>

    ` },
    {
      name: 'Paragraphing', notes: `
    Variety in paragraphing add interest for the reader. 
    <blockquote>You may use a different paragraph for different topic.</blockquote>
    ` },
    {
      name: 'Descriptive terms', notes: `
    Descriptive words describes or gives us more information about things. They can paint a picture in the readers' mind's eyes.
    <blockquote><b>Show, Don’t Tell!</b></blockquote>
    Descriptive terms may refer to <br><br>
    <ul>
      <li><b>Sensory Words</b> and Sentences: Sight, Sound, Smell, Taste and Touch.<br><br></li>
      <li><b>Figurative languages:</b> Alliteration, Metaphor, Simile, Onomatopeia...<br><br></li>
    </ul>
    Read more here about descriptive languages here: <a href="/./Descriptive/descriptive.html" target="_blank">link</a>
    ` },
    {
      name: 'Superlatives', notes: `
    Superlatives suggest that something is the best (or worst).
    <blockquote>
      "That’s the <b>most boring</b> class I’ve ever attended."
      <br><br>"He only wears the <b>finest</b> clothes."
      <br><br>"Kerry is the <b>least friendly</b> of all your sisters."
    </blockquote>
    ` },
    {
      name: 'Shock tactics', notes: `
    You shall include details or imagery in your writings that will <b>shock or surprise the reader</b> and <b>get their attention</b>.
    <blockquote>
      "For the first time since the destruction of the dinosaurs, we face a global mass extinction of wildlife."
      <br><br>"It's a terrible accident waiting to happen.
    "</blockquote>
      ` },
    {
      name: 'Assertive language', notes: `
    Assertiveness means expressing your point of view in a way that is clear and direct, while still respecting others.
    <blockquote>Everybody knows / Without questions / It is undeniable that....</blockquote>
    It shows the confidence and affirmation of the writer in topic under discussion.
    ` },
    {
      name: 'Imagery', notes: `
      <b>Similes and metaphor</b> create vivid images. It helps reader visualize and understand writer's point of view.
      <blockquote>"The autumn leaves are a blanket on the ground."<br><br>
      "The houses look like frosted cakes in winter."<br><br>
      "I came inside because the house smells like a chocolate brownie."</blockquote>
      People frequently use imagery as a means of communicating feelings, thoughts, and ideas through descriptive language.
      `
    },
    {
      name: 'Alliteration', notes: `
      Alliteration is a <b>repetition of consonant sounds</b> in the beginnings of multiple words.<br>
      It makes certain words stand out.
      <blockquote>"I feel like making melodies in my heart."<br><br>
      "Can you keep the cat from clawing the couch? It's creating chaos."<br><br>
      "Hannah's home has heat now, hopefully."</blockquote>
      Alliteration creates a flow and music in the verses. When sounds are similar, they seem soothing to the ears and facilitate reading.`
    },
    {
      name: 'Onomatopoeia', notes: `
      Onomatopoeia is used to evoke sounds through the use of words.
      <blockquote>"Squeak", "Crack", "Tweet", "Chirp", "Meow"</blockquote>
      Onomatopoetic words are descriptive and provide a sensory effect and vivid imagery in terms of sight and sound.<br><br>
    Read more about Onomatopoeia here : <a href="https://www.yourdictionary.com/articles/sound-onomatopoeia-examples" target="_blank">link</a>

      `
    },
    {
      name: 'Emotive langauge', notes: `
      Emotive language is the term used when certain word choices are made to evoke an emotional response from a reader.<br>
      Noun, verb, adjective and adverb works together to create <b>a dramatic effect.</b>
      <blockquote><table class="emotive">
      <tr><td>Adjectives</td><td> - </td><td>appalling, wonderful, magical, and tragic.</td></tr>
			<tr><td>Abstract Nouns</td><td> - </td><td>freedom, pride, justice, love, and terror.</td></tr>
			<tr><td>Verbs</td><td> - </td><td>destroyed, vindicated, saved, betrayed, and adored.</td></tr>
			<tr><td>Emotive Adverbs</td><td> - </td><td>angrily, defiantly, proudly, and beautifully.</td></tr>
		  </table></blockquote>

      <ul class="emotive">
        <li>"Can you really abandon these puppies to life in such filthy kennels?"</li><br>
        <li>"An innocent bystander was murdered in cold blood in Downtown Chicago."</li><br>
        <li>"One hundred years later the life of the Negro is still badly crippled by the manacles of segregation and the chains of discrimination. 
        One hundred years later the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity."</li>
      </ul>
      `
    },
    {
      name: 'Puns and Jokes', notes: `
      A pun is a play on words, centering on <b>a word with more than one meaning or words that sound alike.</b><br>
      <blockquote>"Do you want to ketchup?"<br><br>
      "Enjoy your pizza while it lasts. It's here today, gone tomato."<br><br>
      "Dogs are such good companions because they're so paw-sitive."</blockquote>
      Puns and Jokes <b>provide humour.</b><br><br>
      "The soccer player bring string to the game, so they could tie the score!"
      `
    },
    {
      name: 'Statistics or facts', notes: `
      <b>Figures</b> are used to reinforce opinion and add athenticity to the writing.<br>
      Statistics and facts <b>make writing more reliable</b> and make reader agree.
      <blockquote>"There has been a 50% increase in number of chocolate bars sold over the past year."</blockquote>
      <ul class="stats">
      <li>Textual analysis</li>
      <li>Character analysis</li>
      <li>Historical context</li>
      <li>Comparative analysis</li>
      <li>Reader response</li>
    </ul>`
    },
    {
      name: 'Expert Opinion', notes: `
      A belief or judgment about something given by an expert on the subject, expert opinion, <b>makes the writing more convincing.</b>
      <blockquote>
      "According to nutrition experts, incorporating a variety of colorful vegetables into your diet is essential for optimal health."<br><br>
      "Effective communication skills are fundamental for success in today's workplace, as emphasized by renowned HR specialists."<br><br>
      
"Dr. Jane Smith, a renowned psychologist, emphasizes the importance of self-care for mental well-being."</blockquote>`
    },
    {
      name: 'Reference to satisfied customers', notes: ``
    },
    {
      name: 'Irony', notes: `
      Irony occurs when what actually happens turns out to be completely different from what would be expected.
      <br>In writing or speaking, irony involves using words so the intended meaning is the opposite of the literal meaning.
      <blockquote></blockquote>
      <ul>
      <li><b>Dramatic Irony</b><br><br></li>
      <li><b>Situational Irony</b><br><br></li>
      <li><b>Verbal Irony</b><br><br></li>
      </ul>
      Read more here about Irony here: <a href="https://www.yourdictionary.com/articles/examples-irony-types-meanings" target="_blank">link</a>
      `
    },
    {
      name: "Use of 'I'", notes: `
      Writing in first person means writing from the author's point of view or perspective.
      <blockquote>
      "I couldn't help but feel an overwhelming sense of awe as I stood beneath the star-studded night sky, each twinkling light a reminder of the vastness of the universe."<br>
      <br>"I felt an overwhelming sense of joy as I watched the sun dip below the horizon, painting the sky in hues of fiery orange and pink."
      </blockquote>
      Writing in the first person helps an author <b>put the audience inside the character's head.</b><br>
      It makes the speaker more relatable and sympathetic.
      `
    },
    {
      name: 'Personal anecdote', notes: `
      Personal anecdotes refer to a short story or account about <b>a person or event</b> that is typically amusing, informative, entertaining, or biographical in nature.
      <blockquote>
      "I remember learning how to swim. I took lessons at the community pool in the town where I grew up."<br><br>
      "In that quaint café, I discovered my love for storytelling, fueled by the aroma of freshly brewed coffee and the lively chatter of fellow dreamers."
      </blockquote>
      It provide interest for the audience through recounting <b>a personal exprience.</b>
      `
    },
    {
      name: 'Coversational tone', notes: `
      To connect with your audience as much as possible, you must make your content relatable. That is where a conversational tone can be helpful.
      <blockquote><b>Write the Way You Talk</b></blockquote>
      It add a personal quality to the writing and <b>create a positive rapport</b> between the writer and the reader.
      `
    },
    {
      name: 'Inclusive pronoun', notes: `
      Writers use 'we' or 'our' to <b>persuade the reader</b> to agree with them.
      <blockquote>"With this faith, <b>we</b> will be able to hew out of the mountain of despair a stone of hope. With this faith, <b>we</b> will be able to transform the jangling discords of <b>our</b> nation into a beautiful symphony of brotherhood. With this faith, <b>we</b> will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that <b>we</b> will be free one day."</blockquote>
      It creates a sense of togetherness and blurs the author-reader divide.
      `
    },
    {
      name: 'Personal pronoun', notes: `
      Writers use 'you' to make the reader feel writer is directly talking to them;<br>
      therefore, it is highly personal and effective.
      <blockquote>
      "My fellow Americans, ask not what your country can do for you, ask what you can do for your country." - John F. Kennedy<br></blockquote>
      `
    },
    {
      name: 'Indirect involvement', notes: ``
    },
    {
      name: 'Graphic language', notes: ``
    },
    {
      name: 'Creating a rapport with readers', notes: ``
    },
    {
      name: 'Groups of three', notes: ``
    }
  ]

const button = document.querySelector('.toTop'),
  suggestion = document.querySelector('#tips'),
  tipToFind = document.querySelector('.hero input')

tips_lists.forEach(tip => {
  list.innerHTML += `<li><a href="#${tip.name}">${tip.name}</a></li>`

  suggestion.innerHTML += `<option value="${tip.name}"></option>`

  ol.innerHTML += `<li class="tip" id="${tip.name}">
  <h2 class="name">${tip.name}</h2>
  <div class="notes">
  ${tip.notes}
    </div>
</li>`
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
}
button.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

tipToFind.addEventListener("keyup", () => {
  document.querySelector(".find a").href = "#" + tipToFind.value
})