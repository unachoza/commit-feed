import React, {useState} from 'react';
import './App.css';
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
      </header>
    </div>
  );
}

export default App;
