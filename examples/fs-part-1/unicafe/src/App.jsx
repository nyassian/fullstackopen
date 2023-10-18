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
     All {all}

    </div>
  )
}

const Average = (props) => {
  return(
    <div>
      Average {props.average}
    </div>
  )
}

const Positive = (props) =>{
  
 
  
  return(
    <div>
       positive {props.positive}%
    </div>
  )
}


const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

const handleGoodClick = (goodValue) =>{
  // console.log(goodValue)
  setGood(goodValue)

  }


const handleNeutralClick = (neutralValue) =>{
  // console.log(neutralValue)
  setNeutral(neutralValue)

  }

  const handleBadClick = (badValue) =>{
    // console.log(badValue)
    setBad(badValue)
  
    }

 
        
  return(
    <div>
     <FeedBack title='give feedback' />

     <Button good={() => handleGoodClick(good  + 1)}
       neutral={() => handleNeutralClick(neutral + 1)} 
     bad={() => handleBadClick(bad + 1)}/>

     <Statistics title = 'statistics'/>  
     <Statistics text = 'good' value={good} />
     <Statistics text = 'neutral' value={neutral} />
     <Statistics text = 'bad' value={bad} />

     <Total  all={good + neutral + bad} />
     
     <Average average={(good + neutral + bad) / 3 }/>


     <Positive positive={((good + 0 - bad) / 3) * 100}/>

       

    


    </div>
  )
}

export default App 