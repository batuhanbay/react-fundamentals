// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className='', style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}`: '';
  return <div className={`box ${className} ${sizeClassName}`} style={{fontStyle:'italic', ...style}} {...otherProps}/>
}
const smallBox = <Box size="small" style={{backgroundColor:"red"}} >small lightblue box</Box>
const mediumBox = <Box className="box--medium" style={{backgroundColor:"orange"}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor:"pink"}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
