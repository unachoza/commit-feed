//@ts-nocheck
import React, { useState } from 'react';
import Loading from "./Components/PulseLoader/PulseLoader"
import Button from './Components/Button/Button'
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
      <header className="App-header">
        YASSS TYPESCRIPT
        <Button text="Find"/>
        <Loading />
      </header>
    </div>
  );
}

export default App;
