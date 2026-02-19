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
  const [count, _setCount] = Retool.useStateNumber({
    name: 'count',
    initialValue: 5
  })
  // Click Event
  const onClick = Retool.useEventCallback({name: "click"})

  return (
    <div style={{
      overflow: "hidden",
      width: "100%",
      height: "100%",
      alignItems: "center",
    }}>
      <div style={{
        // Containing image to container
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}>
        <img src={filename} onClick={() => console.log("Image clicked!")} alt="Sample Image" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          overflow: "hidden",
          zIndex: 10
        }}></img>
      
        <div
          style={{
            width: "20%",
            height: "30%",
            borderRadius: "50%",
            backgroundColor: circleColour,     // color of the circle
            color: "white",                 // text color
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            overflow: "hidden",
            top: 0,
            right: "10%",                    
            zIndex: 20
          }}>
          <div style={{
            aspectRatio: "1 / 1",
            fontSize: "1.5em",
          }}>
            {count}
          </div>
        </div>
      </div>
    </div>
  )
}