const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
   <div className="stats">

  <article className="card purple">
    <h3>{characters}</h3>
    <p>Characters</p>
  </article>

  <article className="card yellow">
    <h3>{words}</h3>
    <p>Words</p>
  </article>

  <article className="card orange">
    <h3>{sentences}</h3>
    <p>Sentences</p>
  </article>

  <article className="card blue">
    <h3>~{readingTime}</h3>
    <p>Reading Time (min)</p>
  </article>

</div>
  )
}

export { Stats }