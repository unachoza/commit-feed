//@ts-nocheck
import React, { useState } from "react";
import Loading from "./Components/PulseLoader/PulseLoader";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import TextInput from "./Components/Input/TextInput";
import CardList from "./Components/CardList/CardList";
import {useFetch} from './API/useFetch'
import "./scss/main.scss";

const App: React.FC = () => {
  const [repositoryQueryOwner, setRepositoryQueryOwner] = useState("")
  const [repositoryQueryTitle, setRepositoryQueryTitle] = useState("")
  const [fireCommitFetch, setFireCommitFetch] = useState(false);

const {data, loading} = useFetch(repositoryQueryOwner,repositoryQueryTitle, fireCommitFetch )

  return (
    <div className="App">
      <Header text="Github Commit Feed" />
      <div className="search-container">
        <TextInput placeholder="Repository Owner" label="Repository Owner" setSearchValue={setRepositoryQueryOwner} />
        <TextInput placeholder="Repository Title" label="Repository Title" setSearchValue={setRepositoryQueryTitle} />
        <Button text="Search" onClick={() => setFireCommitFetch(prevFireCommitFetch => !prevFireCommitFetch)} />
      </div>
      <>
        {loading ? <Loading /> : null}
        <CardList card={data} title={repositoryQueryTitle}/>
      </>
    </div>
  );
};

export default App;
