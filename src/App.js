import React,{ useState,useEffect } from 'react';
import './App.css';
import Style1 from './components/color/style1'
import Style2 from './components/color/style2'
import Style3 from './components/color/style3'

import Hardware1 from './components/hardware/style1'
import Hardware2 from './components/hardware/style2'
import Hardware3 from './components/hardware/style3'

import style1 from './images/Window Images/Window Style thumbnail/style1.png'
import style2 from './images/Window Images/Window Style thumbnail/style2.png'
import style3 from './images/Window Images/Window Style thumbnail/style3.png'

import Measure from './components/measure/measure'

import LoadingSpinner from './components/LoadSpin/loading'

const App=()=>{

  const [step,setStep]=useState(1)
  const [style,setStyle]=useState('')
  const [hardware,setHardware]=useState(null)
  const [active,setActive]=useState(false)
  const [image,setImage]=useState(0)
  const [color,setColor]=useState(null)
  const [price,setPrice]=useState(0)
  const [p_price,setP]=useState(0)
  const [width,setWidth]=useState('')
  const [height,setHeight]=useState('')
  const [measure,setMeasure]=useState(false)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
  if(step===4)
  {

 
    if(color!==null && hardware!==null && style!=='')
    {
      setMeasure(true)
    }

    if(width!=='' && height!=='')
    {
      setActive(true)
     
    }
    else
    {
      setActive(false)
    }
  }
 

  },[width,height,active,step,color,hardware,style])

  const StyleSwitch=()=>{
    switch(style){
      case 1:
        return(<Style1 ColorHandler={ColorHandler} hardware={hardware} color={color} price={price} />)
      case 2:
        return(<Style2 ColorHandler={ColorHandler} hardware={hardware} color={color} price={price} />)
      case 3:
        return(<Style3 ColorHandler={ColorHandler} hardware={hardware} color={color} price={price} />)
      default:
      return(
        <h1>Select Something</h1>
      )
    }
  }

  const HandleSwitch=()=>{
    switch(style){
      case 1:
        return(<Hardware1 HarwareHandler={HardwareHandler} hardware={hardware} color={color} price={price} />)
      case 2:
        return(<Hardware2 HarwareHandler={HardwareHandler} hardware={hardware} color={color} price={price} />)
      case 3:
        return(<Hardware3 HarwareHandler={HardwareHandler} hardware={hardware} color={color} price={price} />)
    
      default:
      return(
        <h1>Select Something</h1>
      )
    }
  }

  const RenderSwitch=()=>{
    switch(step) {
      case 1:
        return (
          <React.Fragment>
         <img src={style1} alt="Style 1" className={style===1 ? "bod":""} onClick={()=>ClickHandler(1,style1,100)} /><br />
         <img src={style2} alt="Style 2" className={style===2 ? "bod":""} onClick={()=>ClickHandler(2,style2,150)} /><br />
         <img src={style3} alt="Style 3" className={style===3 ? "bod":""} onClick={()=>ClickHandler(3,style3,320)} /><br />
          </React.Fragment>
        );

      case 2:
        return(
         <StyleSwitch />
        );
      case 3:
        return (
        <HandleSwitch />
        )
       
      default:
        return '';
    }
  }




  const ClickHandler=(n,style,price)=>{
    setStyle(n)
    setActive(true)
    setImage(style)
    setPrice(price)
  }

  const HardwareHandler=(n,style,priced)=>{
    setLoading(true)
    setHardware(n)
    setActive(true)
    const img = new Image();
    img.src = style; // by setting an src, you trigger browser download
  
    img.onload = () => {
      setLoading(false)
      // when it finishes loading, update the component state
      console.log("dgd")
    }
    setImage(style)
    let prices=price-p_price+priced
    setPrice(prices)
    setP(priced)
  }

  const ColorHandler=(n,style,priced)=>{
    setLoading(true)
    const img = new Image();
    img.src = style; // by setting an src, you trigger browser download
  
    img.onload = () => {
      // when it finishes loading, update the component state
      setLoading(false)
      setImage(style)
    }
    setColor(n)
    setActive(true)
    
    let prices=price-p_price+priced
    setPrice(prices)
    setP(priced)

  }

  const changeStep=(n)=>{
    setStep(n)
    if(n===1)
    {
      if (style==='')
      {
        setActive(false)
      }
      else
      {
        setActive(true)
      }
    }
  }

  const nextHandler=()=>{
    setStep(c=>c+1)
    setActive(false)
  }

  const Restart=()=>{
    setStep(1)
    setColor(null)
    setHardware(null)
    setImage(0)
    setPrice(0)
    setP(0)
    setWidth('')
    setHeight('')
    setStyle('')
    setActive(false)
    setMeasure(false)
  }

  if(step===5)
  {
    return(
      <div className="App left">
      <header className="App-header">
      <ul>
          <li className={step===1 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(1)}>Frame Style</li>
          <li className={step===2 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(2)}>Color</li>
          <li className={step===3 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(3)}>Hardware</li>
          <li className={step===4 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(4)}>Measurements</li>
        </ul>
      <div>
        <h1>Details:</h1>

        <h4>Finished Choice</h4>
        <img src={image} alt="Final Result" className="image_t" />
        <h4>Measurements</h4>
        <p>Width: {width}m / Height: {height}m</p>
        <p>Price: {price}</p>
        <button onClick={Restart}>Restart</button>
      </div>
      </header>
      </div>
    )
  }

  return (
    <React.Fragment>
      {loading && <LoadingSpinner asOverlay />}
    <div className="App left">
      <header className="App-header">
       <div className="left">
        <ul>
          <li className={step===1 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(1)}>Frame Style</li>
          <li className={step===2 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(2)}>Color</li>
          <li className={step===3 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(3)}>Hardware</li>
          <li className={step===4 ? "active":""} style={{cursor:'pointer'}} onClick={()=>changeStep(4)}>Measurements</li>
        </ul>
        </div>
       <div>
         <RenderSwitch />

         {step===4 && (measure? <Measure height={height} setHeight={setHeight} width={width} setWidth={setWidth} />:"Select all details")}
       </div>
      {image!==0 && <div className="right">
      <img src={image} className="image_t" alt="Window" /><br />
      {width!=='' && "Width: "+width+" m"} {height!=='' && "Height: "+height+" m"}
      <h4>Price: {price}</h4>
      </div>  }
       <button onClick={nextHandler} disabled={active?false:true}>Next</button>
      </header>
    </div>
    </React.Fragment>
  );
}



export default App;
