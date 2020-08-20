import React, {useState} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const width = 200

export default function Slider(){
  const [val,setVal] = useState(50)

  function onChange(e,position){
    const x = Math.round(position.x/width*100)
    setVal(x)
  }
  return <Wrap>
    <GreyBar />
    <BlueBar style={{width:val+'%'}} />
    <Draggable
      axis="x"
      bounds={{left:0,right:width}}
      position={{x:val/100*width,y:0}}
      onDrag={onChange}
      onStop={onChange}>
      <Dot />
    </Draggable>
    <Number style={{left:val/100*width-9}} className="slider-number-box">
      {val}
    </Number>
  </Wrap>
}

const Wrap = styled.div`
  width:${width}px;
  height:32px;
  position:relative;
  margin-top:45px;
  opacity:0.85;
  transition:opacity 0.2s;
  &:hover{
    opacity:1;
  }
  &:hover .slider-number-box{
    visibility:visible;
  }
`
const GreyBar=styled.div`
  width:100%;
  height:5px;
  position:absolute;
  left:0px;
  top:10px;
  background:grey;
  border-radius:3px;
`
const BlueBar=styled.div`
  width:100%;
  height:5px;
  position:absolute;
  left:0px;
  top:10px;
  background:#236eff;
  border-radius:3px;
`
const Dot=styled.div`
  height:14px;
  width:14px;
  margin-left:-7px;
  border-radius:10px;
  position:absolute;
  top:4px;
  background:white;
  border:2px solid #236eff;
  cursor:pointer;
`
const Number=styled.div`
  top:-22px;
  background:black;
  color:white;
  padding:4px;
  border:1px solid grey;
  position:absolute;
  font-size: 10px;
  border-radius: 3px;
  visibility:hidden;
`