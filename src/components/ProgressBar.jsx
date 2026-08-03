const ProgressBar = ({ letter }) => {
  return (
    <li className="progress-item">
      <span>{letter.letterName.toUpperCase()}</span>

      <meter
        className="progress-bar"
        min="0"
        max="100"
        value={letter.percentage}
      ></meter>

      <span>
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </li>
  )
}

export { ProgressBar }