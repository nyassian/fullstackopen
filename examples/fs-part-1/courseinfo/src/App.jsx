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
   <div>

   <Part part={part}  exercises={exercises}/>
  


   </div>
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
      <Header  course={course}/>
      <Content part={part1} exercises={exercise1} />
      <Content part={part2} exercises={exercise2} />
      <Content part={part3} exercises={exercise3} />
      <Total   exercises={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App