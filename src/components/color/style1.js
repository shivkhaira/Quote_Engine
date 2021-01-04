import React from 'react'
import color1 from '../../images/Window Images/color thumbnail/1.png'
import color2 from '../../images/Window Images/color thumbnail/2.png'
import color3 from '../../images/Window Images/color thumbnail/3.png'
import color4 from '../../images/Window Images/color thumbnail/4.png'

import cwindow1 from '../../images/Window Images/STYLE 1/Windows color/1.png'
import cwindow2 from '../../images/Window Images/STYLE 1/Windows color/2.png'
import cwindow3 from '../../images/Window Images/STYLE 1/Windows color/3.png'
import cwindow4 from '../../images/Window Images/STYLE 1/Windows color/4.png'

const Style1=props=>{

    const Change=(n,price)=>{
        if(n===1)
        {
        props.ColorHandler(1,cwindow1,price)
        }
        else if(n===2)
        {
            props.ColorHandler(2,cwindow2,price)
        }
        else if(n===3)
        {
            props.ColorHandler(3,cwindow3,price)
        }
        else if(n===4)
        {
            props.ColorHandler(4,cwindow4,price)
        }
    }

    return(
        <div>
        <img src={color1} className={props.color===1 ? "bod":""} onClick={()=>Change(1,20)} alt="Color 1" />
        <img src={color2} className={props.color===2 ? "bod":""} onClick={()=>Change(2,50)} alt="Color 2" />
        <img src={color3} className={props.color===3 ? "bod":""} onClick={()=>Change(3,80)} alt="Color 3" />
        <img src={color4} className={props.color===4 ? "bod":""} onClick={()=>Change(4,100)} alt="Color 4" />
        </div>
    )
}

export default Style1