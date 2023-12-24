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

const Total = ({parts}) =>{
  return(
    <div>
      <p>
        Number of exercises {parts}
      </p>
    </div>
  )
}





const App = () =>{
  const course ={ 
  name : 'Half Stack application development',

  parts :[

 
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
  
  }

  return (
    <div>
      <Header  title={course.name}/>
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises}
      part2={course.parts[1].name} exercise2={course.parts[1].exercises} 
      part3={course.parts[2].name} exercise3={course.parts[2].exercises}/>
    
      <Total   parts={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App
