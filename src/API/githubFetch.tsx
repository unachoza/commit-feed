//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const GITHUB_BASE_URL = 'https://api.github.com';


// export const repositorySearch = (queryText: string) => {
//   const [repositoryChoices, setRepositoryChoices] = useState([])

//   useEffect(() => {
//     setRepositoryChoices(repositoryFetch(queryText))
//   }, [queryText])
// }

export const repositoryFetch = async( queryText: string)  => {
  const data = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}`);
  const items = data.data.items
  const repositoryChoices = shapeData(items, normalizeRepoData)
  console.log({repositoryChoices})
  return repositoryChoices
};

export const commitFetch = async( repositoryOwner: string, repositoryName: string)  => {
  let data = await axios.get(`${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(repositoryName)}/commits`);
  const items = data.data
  const repositoryCommitMessages = shapeData(items, normalizeCommitData)
  console.log({repositoryCommitMessages})
  return repositoryCommitMessages
};

// export const commitFetch = () => {
//   const [commitFetch, setommitFetch] = useState({})
// }

 //Make fetched data easier to work with
 const shapeData = (input: any, normalizedDataShape: any) => {
  let shapedData = [];
  for (let el of input) {
   shapedData.push(normalizedDataShape(el));
 }
 return shapedData;
 };

const normalizeCommitData = (data: any) => ({
  date: normalizeDate(new Date(data.commit.author.date).toString()),
  commitMessage: data.commit.message, 
  url: data.html_url,
  username: data.author.login
})
const normalizeRepoData = (data: any) => ({
  repositoryName: data.name, 
  repositoryOwner: data.owner.login 
})

const normalizeDate = (data: string) => {
  const shorterDate  = data.split("").splice(4, 20)
  const date = {
    day: (shorterDate.join("")).slice(0, 11), 
    time: (shorterDate.join("")).slice(12), 
  }
  return date
}

// const fetchCommits = (owner: string, repo: string, more: boolean) => {
//   const [commits, setCommits] = useState({})

// }