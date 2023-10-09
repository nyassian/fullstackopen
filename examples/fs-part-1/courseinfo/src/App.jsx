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
  const parts = [ 
    {
    name : 'Fundamental of react',
    exercises : 10
  },

   {
    name : 'Using props to pass data',
    exercises : 7
  },
   {
    name : 'State of a component',
    exercises : 14
  }
]

console.log(parts)
  return (
    <div>
      <Header  title={course}/>
      <Content part1={parts[0].name} exercise1={parts[0].exercises}
      part2={parts[1].name} exercise2={parts[1].exercises} 
      part3={parts[2].name} exercise3={parts[2].exercises}/>
    
      <Total   exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
