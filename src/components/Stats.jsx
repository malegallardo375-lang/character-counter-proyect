const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <div className="stats">
      <div className="card purple">
        <h2>{characters}</h2>
        <p>Cantidad de caracteres</p>
      </div>
      <div className="card coral">
        <h2>{words}</h2>
        <p>Cantidad de palabras</p>
      </div>
      <div className="card orange">
        <h2>{sentences}</h2>
        <p>Cantidad de oraciones</p>
      </div>
    </div>
  )
}

export { Stats }