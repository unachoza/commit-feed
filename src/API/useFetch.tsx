//@ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
const GITHUB_BASE_URL = 'https://api.github.com';


export const repositoryFetch = async( queryText: string)  => {
  const data = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}`);
  const items = data.data.items
  const repositoryChoices = shapeData(items, normalizeRepoData)
  return repositoryChoices
};


export const useFetch = (repositoryOwner: string, repositoryName: string, fire: boolean) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchCommits= async () => {
      setLoading(true)
      try {
        const commits = await axios.get(`${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(repositoryName)}/commits`);
        const items = commits.data
        const repositoryCommitMessages = shapeData(items, normalizeCommitData)
        setData(repositoryCommitMessages)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    }
    fetchCommits()
  }, [fire])
  return {data, loading, error}
}
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
