//@ts-nocheck
import React, { useState, useRef, useCallback } from 'react';
import Loading from "./Components/PulseLoader/PulseLoader"
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import TextInput from './Components/Input/TextInput'
import CardList from './Components/CardList/CardList'
import "./scss/main.scss"
export interface LoadingState {
  onLoading: boolean;
  onError: boolean;
}

const INITIALSTATE: LoadingState = { onLoading: false, onError: false };
const loadingStatus: { LoadingState: any } | any = {};


const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(INITIALSTATE);
  return (
    <div className="App">
      <Header text="Github Commit Feed" />
      <div className="search-container">
        <TextInput placeholder="Search for Repository ... "/>
        <Button text="Find"/>
      </div>
         <CardList loading={loadingState} />
        {/* <Loading /> */}
    </div>
  );
}

export default App;
