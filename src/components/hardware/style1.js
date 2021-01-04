import React, { useEffect, useState } from 'react'

import hardware1 from '../../images/Window Images/window hardware Thumnail/1.png'
import hardware2 from '../../images/Window Images/window hardware Thumnail/2.png'
import hardware3 from '../../images/Window Images/window hardware Thumnail/3.png'
import hardware4 from '../../images/Window Images/window hardware Thumnail/4.png'



const Hardware1=props=>
{
  
    const [image1,setImage1]=useState('')
    const [image2,setImage2]=useState('')
    const [image3,setImage3]=useState('')
    const [image4,setImage4]=useState('')

    useEffect(()=>{
       if(props.color===1)
       {
        import("../../images/Window Images/STYLE 1/window hardware/1/1.png").then(image => {
           setImage1(image.default)
         });
        import("../../images/Window Images/STYLE 1/window hardware/1/2.png").then(image => {
            setImage2(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/1/3.png").then(image => {
            setImage3(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/1/4.png").then(image => {
           setImage4(image.default)
         });
       }
       else if(props.color===2)
       {
        import("../../images/Window Images/STYLE 1/window hardware/2/1.png").then(image => {
           setImage1(image.default)
         });
        import("../../images/Window Images/STYLE 1/window hardware/2/2.png").then(image => {
            setImage2(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/2/3.png").then(image => {
            setImage3(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/2/4.png").then(image => {
           setImage4(image.default)
         });
       }
       else if(props.color===3)
       {
        import("../../images/Window Images/STYLE 1/window hardware/3/1.png").then(image => {
           setImage1(image.default)
         });
        import("../../images/Window Images/STYLE 1/window hardware/3/2.png").then(image => {
            setImage2(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/3/3.png").then(image => {
            setImage3(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/3/4.png").then(image => {
           setImage4(image.default)
         });
       }

       else if(props.color===4)
       {
        import("../../images/Window Images/STYLE 1/window hardware/4/1.png").then(image => {
           setImage1(image.default)
         });
        import("../../images/Window Images/STYLE 1/window hardware/4/2.png").then(image => {
            setImage2(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/4/3.png").then(image => {
            setImage3(image.default)
          });
        import("../../images/Window Images/STYLE 1/window hardware/4/4.png").then(image => {
           setImage4(image.default)
         });
       }
    },[props.color])

    const Change=(n,price)=>{
        if(n===1)
        {
            props.HarwareHandler(n,image1,price)
        }
        else if(n===2)
        {
            props.HarwareHandler(n,image2,price)
        }
        else if(n===3)
        {
            props.HarwareHandler(n,image3,price)
        }
        else if(n===4)
        {
            props.HarwareHandler(n,image4,price)
        }
    }

    return(
       <div>
           <img src={hardware1} className={props.hardware===1 ? "bod":""} onClick={()=>Change(1,200)} alt="Hardware 1" />
           <img src={hardware2} className={props.hardware===2 ? "bod":""} onClick={()=>Change(2,250)} alt="Hardware 2" />
           <img src={hardware3} className={props.hardware===3 ? "bod":""} onClick={()=>Change(3,300)} alt="Hardware 3" />
           <img src={hardware4} className={props.hardware===4 ? "bod":""} onClick={()=>Change(4,400)} alt="Hardware 4" />
       </div>
    )
}

export default Hardware1