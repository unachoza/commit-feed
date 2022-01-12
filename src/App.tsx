//@ts-nocheck
import React, { useState, useRef, useCallback } from "react";
import Loading from "./Components/PulseLoader/PulseLoader";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import TextInput from "./Components/Input/TextInput";
import CardList from "./Components/CardList/CardList";
import {useFetch} from './API/useFetch'


import "./scss/main.scss";
export interface LoadingState {
  onLoading: boolean;
  onError: boolean;
}

const INITIALSTATE: LoadingState = { onLoading: false, onError: false };
const loadingStatus: { LoadingState: any } | any = {};

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(INITIALSTATE);
  const [repositoryChoices, setRepositoryChoices] = useState([]);
  const [repositoryQuery, setRepositoryQuery] = useState("");
  const [selectedRepo, setSelectedRepo] = useState({})
  const [repositoryQueryOwner, setRepositoryQueryOwner] = useState("")
  const [repositoryQueryTitle, setRepositoryQueryTitle] = useState("")
  const [commits, setCommits] = useState([]);
  const [fire, setFire] = useState(false);

const {data, error, loading} = useFetch(repositoryQueryOwner,repositoryQueryTitle, fire )

  return (
    <div className="App">
      <Header text="Github Commit Feed" />
      <div className="search-container">
        <TextInput placeholder="Repository Owner" setSearchValue={setRepositoryQueryOwner} />
        <TextInput placeholder="Repository Title " setSearchValue={setRepositoryQueryTitle} />
        <Button text="Load More" onClick={() => setFire(prevFire => !prevFire)} />
      </div>
      <>
        {loading ? <Loading /> : null}
        <CardList loading={loadingState} data={data} title={repositoryQueryTitle}/>
      </>
    </div>
  );
};

export default App;
