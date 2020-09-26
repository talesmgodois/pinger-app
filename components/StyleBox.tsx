import React from 'react'

const StyleBox = (props: any) => {
  const {bgColor = 'rgb(21, 27, 50)', radiousSize = 3, children} = props;
  const style = {
    backgroundColor: bgColor,
    borderRadius: radiousSize
  }
  
  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}

export default StyleBox
