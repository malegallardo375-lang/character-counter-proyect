const ProgressBar = ({ letter }) => {
  return (
    <li className="progress-item">
      <span className="letter">{letter.letterName.toUpperCase()}</span>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${letter.percentage}%` }}
        ></div>
      </div>

      <span className="progress-info">
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </li>
  )
}

export { ProgressBar }