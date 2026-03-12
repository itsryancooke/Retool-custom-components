import React from 'react'

import { type FC } from 'react'

import { Retool } from '@tryretool/custom-component-support'

export const ImageIcon: FC = () => {

  // Component Variables
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })
  const [filename, _setFileName] = Retool.useStateString({
    name: 'filename',
    initialValue: "https://purepng.com/public/uploads/large/purepng.com-messages-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596080zgne4.png"
  })
  const [circleColour, _setCircleColour] = Retool.useStateString({
    name: 'circle hex value',
    initialValue: "#ff4d4d"

  })
  // Allocates location of circle to corner
  const circlePosition = Retool.useStateEnumeration({ 
    name: 'Circle Position',
    initialValue: 'Right',
    enumDefinition: ['Left', 'Right'],
  })

  const [count, _setCount] = Retool.useStateNumber({
    name: 'count',
    initialValue: 5
  })
  // Click Event
  const clickEvent = Retool.useEventCallback({name: "click"})


  // Click Event
  const clickEvent = Retool.useEventCallback({name: "click"})

  // Caps the upper dislay number at 99
  var num = count > 99 ? "99+" : count
  
  var isRight = (circlePosition[0] === 'Right')
  

  return (
    <div onClick={() => clickEvent()} style={{
      position: "relative",
      height: "100%",        // stretches to container height
      aspectRatio: "1 / 1", 
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: 0, left: 0, // defaults to left side
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}>
        <img src={filename} alt="Sample Image" style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }} />

      <div style={{
          position: "absolute",
          top: 0,
          ...(isRight ? { right: 0 } : { left: 0 }),
          zIndex: 20,
          width: "25%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          backgroundColor: circleColour,
          color: "white",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
        }}>
         {num}
      </div>
  </div>
</div>
  )
}