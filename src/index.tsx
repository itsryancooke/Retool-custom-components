import React from 'react'

import { type FC } from 'react'

import { Retool } from '@tryretool/custom-component-support'

export const IconInfo: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })
  // filename for background image
  const [filename, _setFileName] = Retool.useStateString({
    name: 'filename'

  })
  // colour for circle
  const [circleColour, _setCircleColour] = Retool.useStateString({
    name: 'circle hex value',
    initialValue: "#ff4d4d"

  })
  // text for inside circle
  const [count, _setCount] = Retool.useStateNumber({
    name: 'count',
    initialValue: 5
  })

  return (
    <div style={{aspectRatio: "1 / 1"}}>
      <div style={{
        // Containing image to container
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}>
        <img src={filename} alt="Sample Image" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 10
        }}></img>
      
        <div
          style={{
            aspectRatio: "1 / 1",
            width: "30%",
            height: "30%",
            borderRadius: "50%",
            backgroundColor: circleColour,     // color of the circle
            color: "white",                 // text color
            fontWeight: "bold",
            fontSize: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0.2em",
            right: "0.2em",                    
            zIndex: 20
          }}
        >
        {count}
        </div>
      </div>
    </div>
  )
}
