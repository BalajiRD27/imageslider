import React, { useState } from 'react'
import {ArrowBigRight,ArrowBigLeft} from 'lucide-react';
import "./App.css"

type ImageSliderProps={
  imageUrls:String[]
}

const ImageSlider = ({imageUrls}:ImageSliderProps) => {
    const[imageIndex,setImageIndex]=useState(0)

    function nextImage(){
         setImageIndex(index=>{
          if(index===imageUrls.length-1) return 0
          return index+1
         })
    }
    
    function prevImage(){
       setImageIndex(index=>{
        if(index===0) return imageUrls.length-1
        return index-1 } )
      }

  return (
    <div style={{width:"100%",height:"100%",position:'relative'}} >
     
     <div style={{width:"100%",height:"100%",display:"flex",overflow:'hidden'}}>
     {imageUrls.map((url)=>( 
     <img key={url} src={url} style={{translate:` ${-100*imageIndex}%`}} className='image-slider-image' />
      ))}
    </div>
     <button onClick={nextImage} className='image-slider-btn' style={{right:"0"}}> <ArrowBigRight /> </button>
     <button  onClick={prevImage} className='image-slider-btn' style={{left:"0"}}><ArrowBigLeft /></button>
     <div  style={{position:"absolute",left:"50%",translate:"-50%",bottom:"0.2rem",display:'flex',gap:'0.3rem'}}>
      {imageUrls.map((_,index)=>(
        <button key={index} className='indexbtn' onClick={()=>setImageIndex(index)}>{index}</button>
      ))}
     </div>
    </div>
  )
}

export default ImageSlider