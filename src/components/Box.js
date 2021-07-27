import React from 'react'

const Box=({items,newFlag,showCell})=> {
  const handleClick=()=>{
    showCell(items.x,items.y);  
  }    
  const handleRightClick=(e)=>{
    newFlag(e,items.x,items.y)
  }    
  return (
    <div className="box" style={{backgroundColor:items.revealed && items.value!==0?items.value==='X'?'red':' green':items.revealed&&items.value===0?'#00ff60ad':'darkblue'}} onClick={handleClick} onContextMenu={handleRightClick}>
        {!items.revealed && items.flagged ? ("🚩") : items.revealed && items.value !== 0 ? (items.value === "X" ? ("💣") : (items.value)) : ("")}
    </div>
  )
}
export default Box;