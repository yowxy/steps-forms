import { useState } from "react";

function App (){
  return(
    <>
      <Step/>
      <Step/>
      <Step/>
    </>
  )
}

function Step() {

  const items = ["Iklil","Alex","steven"]
  // const arr = useState({name:"iklil"})
  // console.log(arr);

  const [step, setStep]  = useState(1)
  const [test, setTest] = useState (true)
  // let step = 1;

  function NextPage (){

    if(test < 3){
      setStep((step) => step+1);
      // setStep((step) => step+1);
    }
    // step +=1;
    // if(step < 3) setStep(step +1);
    // console.log(step);
    // // bad practice 

    // // test.name = "Alex";
    
    // // best practice (tidak boleh menggunkan manual state)
    // setTest({ name:"Alex" });
  }


  
  function PrevPage (){
    if(step > 1) {
      setStep((step) => step-1);
    }
    // step +=1;
    // if(step > 1) setStep(step -1);
    // console.log(step);
  }


  return(
    <>
     <button className="close" onClick={() => setTest((setTest) => !setTest)}>
        &times;
      </button>
      {test && (
        <div className="steps">
        <div className="numbers">
          <div className={step>= 1 ? "active" : "" }>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message"> Step {step} : {items[step-1]}
        </p>
        <div className="buttons">
          <button style={{ backgroundColor:"#526D82", color:'white' }}  onClick={NextPage}>Next</button>
          <button style={{ backgroundColor:"#526D82", color:'white' }}  onClick={PrevPage} >Previous</button>
        </div>
      </div>
      )}
    </>
  )
}

export default App;
