import { useState } from "react";

const FeedBack = ({title}) =>{

  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({handleClick,text}) =>{
  return( 
  <div>
    <button onClick={handleClick}>{text}</button>

  </div>

)

}
const Statistics = ({title,text,value}) =>{
 
  return(
    <div>
     <h1>{title}</h1>
      <div >{text} {value}</div>
    </div>
  )

}

const App = () =>{
  const [good, setGood] = useState(0)
  

const setToGood = (goodValue) =>{
  console.log(goodValue)
  setGood(goodValue)

  }

 
        
  return(
    <div>
     <FeedBack title='give feedback' />
     <Button handleClick={() => setGood(good  + 1)} text='good'/>
     
     <Statistics title = 'statistics'/>  
     <Statistics text = 'good' value={good} />
    


    </div>
  )
}

export default App 