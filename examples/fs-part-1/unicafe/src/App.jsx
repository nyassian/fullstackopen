import { useState } from "react";

const FeedBack = (props) =>{

  return(
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.handleGoodClick}>good</button>
      <button onClick={props.setGood}>neutral</button>
      <button onClick={props.setGood}>bad</button>


    </div>
  )


}

const Statistics = (props) =>{
 
  return(
    <div>
      <h1>{props.title}</h1>
      <p >good {props.setGood}</p>
      <p >neutral</p>
      <p >bad</p>


    </div>
  )

}


const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () =>{
  const newClicks= () =>{
  good + 1
  }
  setGood(newClicks)
}


const handleNeutralClick = () =>{
  const newClicks= () =>{
  neutral + 1
  }
  setNeutral(newClicks)
}

const handleBadClick = () =>{
  const newClicks= () =>{
  bad + 1
  }
  setBad(newClicks)
}




  



  return(
    <div>
     <FeedBack title='give feedback' />
     <Statistics title = 'statistics'/>

    </div>
  )
}

export default App 