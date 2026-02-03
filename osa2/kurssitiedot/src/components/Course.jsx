const Course = ({ course }) => {

  const Header = (props) => {
    return <h1>{props.course.name}</h1>
  }

  const Content = (props) => {
    return (
        <div>
          {props.parts.map(part => 
            <Part key={part.id} part={part} />
          )}
        </div>
    )
  }

  const Part = (props) => {
    console.log(props)
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }

    const Total = (props) => {
    console.log(props)
    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>Number of exercises in total: {total}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course