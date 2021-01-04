import React from 'react'

const Inputs=({type,value,onChange,placeholder})=>{

    return(
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export default Inputs