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

const Total = ({all}) =>{
  return(
    <div>
     All is  {all}

    </div>
  )
}

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

const handleGoodClick = (goodValue) =>{
  console.log(goodValue)
  setGood(goodValue)

  }


const handleNeutralClick = (neutralValue) =>{
  console.log(neutralValue)
  setNeutral(neutralValue)

  }

  const handleBadClick = (badValue) =>{
    console.log(badValue)
    setBad(badValue)
  
    }

 
        
  return(
    <div>
     <FeedBack title='give feedback' />

     <Button handleClick={() => handleGoodClick(good  + 1)} text='good'/>
     <Button handleClick={() => handleNeutralClick(neutral + 1)} text='neutral'/>
     <Button handleClick={() => handleBadClick(bad + 1)} text='bad'/>

     <Statistics title = 'statistics'/>  
     <Statistics text = 'good' value={good} />
     <Statistics text = 'neutral' value={neutral} />
     <Statistics text = 'bad' value={bad} />

     <Total  all={good + neutral + bad} />
     


    


    </div>
  )
}

export default App 