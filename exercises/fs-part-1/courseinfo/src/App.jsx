const Header = (props) =>{
  return(
    <h1>
      {props.title}
    </h1>
  )
}

const Part = (props) =>{
  return(
    <>
    <p>
      {props.part} {props.exercises}
    </p>
    </>
  )
}

const Content = ({part1, part2, part3, exercise1, exercise2, exercise3}) => {
return(
  <>
  <Part part={part1} exercises={exercise1} />
  <Part part={part2} exercises={exercise2} />
  <Part part={part3} exercises={exercise3} />
  
  </>
 
)
 
}

const Total = ({exercises}) =>{
  return(
    <>
    <p>
       Number of exercises are  {exercises}
    </p>
    </>
  )
}






const App = () =>{

  const course = {
    name :'Half Stack web development',
   parts:[

   {
    name :'Fundamental of React',
   exercises : 10
   },
   {
    name :'Using props to pass data',
    exercises :7
   } ,
   
   {
    name :'State of a component',
    exercises: 14
  }
 ]
}
  return (
    <div>
      <Header  title={course.name}/>
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises} 
      part2={course.parts[1].name} exercise2={course.parts[1].exercises}
       part3={course.parts[2].name} exercise3={course.parts[2].exercises} />
      <Total exercises ={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App 