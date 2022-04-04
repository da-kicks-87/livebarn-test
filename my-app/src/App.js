import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import GameName from './components/GameName';
import UserID from './components/UserID';
import MovesLeft from './components/MovesLeft';
import TargetColor from './components/TargetColor';
import ClosestColor from './components/ClosestColor';
import TileSource from './components/TileSource';
import ColorDifference from './components/ColorDifference';




function App() {

  const [inital, setInital] = useState({});

  useEffect(() => {
    getInital();
  }, []);
  
  const getInital = async () => {
    const response = await axios.get('http://localhost:9876/init');
    console.log(response.data);
    setInital(response.data);
  };    

  //const {height, width, maxMoves, target, userId } = response.data;

  

  return (
    <>
    <div className="container mx-auto p-4">
      <GameName />
      <UserID  userId= {inital.userId}/>
      <MovesLeft maxMoves = {inital.maxMoves} />
      <TargetColor target = {inital.target} />
      <ClosestColor />
      <ColorDifference />
      <TileSource width={inital.width} height={inital.width} />

    </div>
    </>
  );
}

export default App;
