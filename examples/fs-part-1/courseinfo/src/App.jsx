const Header = ({title}) =>{
  return(
    <div>
      <h1>
        {title}
      </h1>
    </div>
  )
}

const Part = ({part,exercises}) =>{
  
  return(
    <div>

      <p>
        {part} {exercises}
      </p>
    
   
    </div>
  )
}

const Content = ({part1,part2,part3,exercise1,exercise2,exercise3}) =>{
 
  return(
   <div>
   <Part part={part1}  exercises={exercise1}/>
   <Part part={part2}  exercises={exercise2} />
   <Part part={part3}  exercises={exercise3} />


 
   </div>
  )
}

const Total = ({exercises}) =>{
  return(
    <div>
      <p>
        Number of exercises {exercises}
      </p>
    </div>
  )
}





const App = () =>{
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamental of react',
    exercises : 10
  }

  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }

  return (
    <div>
      <Header  title={course}/>
      <Content part1={part1.name} exercise1={part1.exercises} 
      part2={part2.name} exercise2={part2.exercises}   part3={part3.name} exercise3={part3.exercises}/>
    
      <Total   exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
