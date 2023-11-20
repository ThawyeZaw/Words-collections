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
      name: 'Repition', notes: `
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
    Read more about Connectives here : <a href="/./Connetives/connetives.html">link</a>
    ` },
    {
      name: 'Variety of sentence structures', notes: `
    Varied sentence structures - simple, compound, complex - engage reader's interest.
		<blockquote>
			<table>
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
    Read more about Sentence Structures here : <a href="/./sentence_structure/sentence_structure.html">link</a>
    ` },
    { name: 'Use of punctuation', notes: `
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
    Read more about Punctuations here : <a href="/./punctuation/punctuation.html">link</a>

    ` },
    { name: 'Paragraphing', notes: `
    Variety in paragraphing add interest for the reader. 
    <blockquote>You may use a different paragraph for different topic.</blockquote>
    ` },
    { name: 'Descriptive terms', notes: `
    Descriptive words describes or gives us more information about things. They can paint a picture in the readers' mind's eyes.
    <blockquote><b>Show, Don’t Tell!</b></blockquote>
    Descriptive terms may refer to <br><br>
    <ul>
      <li><b>Sensory Words</b> and Sentences: Sight, Sound, Smell, Taste and Touch.<br><br></li>
      <li><b>Figurative languages:</b> Alliteration, Metaphor, Simile, Onomatopeia...<br><br></li>
    </ul>
    Read more here about descriptive languages here: <a href="/./Descriptive/descriptive.html">link</a>
    ` },
    { name: 'Superlatives', notes: `
    Superlatives suggest that something is the best (or worst).
    <blockquote>
      "That’s the <b>most boring</b> class I’ve ever attended."
      <br><br>"He only wears the <b>finest</b> clothes."
      <br><br>"Kerry is the <b>least friendly</b> of all your sisters."
    </blockquote>
    ` },
    { name: 'Shock tactics', notes: `
    You shall include details or imagery in your writings that will <b>shock or surprise the reader</b> and <b>get their attention</b>.
    <blockquote>
      "For the first time since the destruction of the dinosaurs, we face a global mass extinction of wildlife."
      <br><br>"It's a terrible accident waiting to happen.
    "</blockquote>
      ` },
    { name: 'Assertive language', notes: `
    Assertiveness means expressing your point of view in a way that is clear and direct, while still respecting others.
    <blockquote>Everybody knows / Without questions / It is undeniable that....</blockquote>
    It shows the confidence and affirmation of the writer in topic under discussion.
    ` },
  ]

tips_lists.forEach(tip => {
  list.innerHTML += `<li><a href="#${tip.name}">${tip.name}</a></li>`

  ol.innerHTML += `<li class="tip" id="${tip.name}">
  <h2 class="name">${tip.name}</h2>
  <div class="notes">
  ${tip.notes}
    </div>
</li>`
})
