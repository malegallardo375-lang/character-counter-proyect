const WriteArea = ({ handleChangeTextarea, text }) => {
  return (
    <textarea
      className="write-area"
      placeholder="Escribe tu texto..."
      onChange={handleChangeTextarea}
      value={text}
    ></textarea>
  )
}

export { WriteArea }