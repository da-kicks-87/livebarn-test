import React from 'react'
import Tile from './Tile'

const TileSource = ({width, height} ) => {


  const board = [[]] ;

  for (let i = 0; i < width; i++) {
    
  }

  return (
    <>
    <div className ="mb-2">TileSource: W: {width} H: {height}</div>
    <Tile />
    <Tile />
    </>
  )
}

export default TileSource