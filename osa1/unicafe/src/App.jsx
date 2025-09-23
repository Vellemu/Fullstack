import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const StatLine = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return <p>No feedback given</p>
  }
  const average = (good - bad) / all
  const positivePercentage = (good / all) * 100

  return (
    <table>
      <tbody>
        <StatLine label="good" value={good} />
        <StatLine label="neutral" value={neutral} />
        <StatLine label="bad" value={bad} />
        <StatLine label="all" value={all} />
        <StatLine label="average" value={average.toFixed(2)} />
        <StatLine label="positive" value={positivePercentage.toFixed(1)} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleFeedback = (type) => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleFeedback('good')} text='good' />
      <Button onClick={() => handleFeedback('neutral')} text='neutral' />
      <Button onClick={() => handleFeedback('bad')} text='bad' />
      <h1>statistics</h1>
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
    </div>
  )
}

export default App