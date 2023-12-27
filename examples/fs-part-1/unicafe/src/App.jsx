import { useState } from "react";

const FeedBack = ({title}) =>{

  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({good,neutral,bad}) =>{
  return( 
  <div>
    <button onClick={good}>good</button>
    <button onClick={neutral}>neutral</button>
    <button onClick={bad}>bad</button>

  </div>

)

}


const Statistics = (props) =>{


 return(
    <div>
     <h1>{props.title}</h1>
      <div >{props.text} {props.value}</div>
    </div>
  )

 }



  const App = () =>{


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const handleGoodClick = (goodValue) =>{

  setGood(goodValue)

  }

 const handleNeutralClick = (neutralValue) =>{
  setNeutral(neutralValue)

  }

 const handleBadClick = (badValue) =>{
    setBad(badValue)
  
    }
       
  return(
    <div>
     <FeedBack title='give feedback' />

     <Button good={() => handleGoodClick(good  + 1)}
             neutral={() => handleNeutralClick(neutral + 1)} 
             bad={() => handleBadClick(bad + 1)} />

     <Statistics  title = 'statistics' />  
     <Statistics  text = 'good' value={good} />
     <Statistics  text = 'neutral' value={neutral} />
     <Statistics  text = 'bad' value={bad} />
     <Statistics  text = 'all' value={good + neutral + bad} />
     <Statistics  text = 'average' value={(good + neutral + bad) / 3 } />
     <Statistics  text = 'positive' value ={((good + 0 - bad) / 3) * 100}  />

    </div>
  )
}

export default App 