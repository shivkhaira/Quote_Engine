import React from 'react'
import Inputs from '../Inputs/input'

const Measure=({width,setWidth,height,setHeight})=>{

   
    return(
        <div>
        <Inputs type="number" value={width} onChange={(e)=>setWidth(e.target.value)} placeholder="Width" /><br />
        <Inputs type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Height" />
        </div>
    )
}
export default Measure