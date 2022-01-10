//@ts-nocheck
import React, { useState, useRef, useCallback } from "react";
import { repositoryFetch, commitFetch } from "./API/githubFetch";
import Loading from "./Components/PulseLoader/PulseLoader";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import TextInput from "./Components/Input/TextInput";
import CardList from "./Components/CardList/CardList";

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
console.log({repositoryQueryOwner}, {repositoryQueryTitle})
  const searchRepositories = () => {
    setRepositoryChoices(repositoryFetch(repositoryQuery));
    setSelectedRepo(repositoryChoices[0])
  };
  console.log(repositoryChoices[0])
  const fetchCommits = (owner, title) => {
    console.log({ repositoryChoices })
    setCommits(commitFetch(owner, title));
  };
  
  console.log({ repositoryChoices }); 
  return (
    <div className="App">
      <Header text="Github Commit Feed" />
      <div className="search-container">
        <TextInput placeholder="Repository Owner" setSearchValue={setRepositoryQueryOwner} />
        <TextInput placeholder="Repository Title " setSearchValue={setRepositoryQueryTitle} />
        <Button text="Find" onClick={() => searchRepositories()} />
      </div>
      <>
        {/* {repositoryChoices.length > 0 ? (
          <> */}
            <CardList loading={loadingState} repositoryChoices={repositoryChoices[0]} />
            <Button text="Load More" onClick={() => fetchCommits(repositoryQueryOwner, repositoryQueryTitle)} />
          {/* </>
        ) : (
            null
          // <Loading />
        )} */}
      </>
      <div className="button-container"></div>
    </div>
  );
};

export default App;
