const Header = (props) =>{
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) =>{
  
  return(
    <div>

      <p>
        {props.part} {props.exercises}
      </p>
    
    </div>
  )
}

const Content = ({part,exercises}) =>{

  return(
   <>
   <Part  part1={part} exercise1={exercises}  />
   <Part  part2={part} exercise2={exercises}  />
   <Part  part3={part} exercise3={exercises}  />

   </>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises {props.exercises}
      </p>
    </div>
  )
}





const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamental of react'
  const exercise1 = 10
  const part2 = 'using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercise1}
       part2={part2} exercise2={exercise2} 
       part3={part3} exercise3={exercise3} />
      <Total exercises={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App