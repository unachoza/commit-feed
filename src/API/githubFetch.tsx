import { useEffect, useState } from 'react';
import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

export const repositoryFetch = async( queryText: string): Promise<any> => {
  const data = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}`);
  const items = data.data.items
  const repositoryChoices = shapeData(items)
  console.log(repositoryChoices)
  return repositoryChoices
};

 //Make fetched data easier to work with
 const shapeData = (input: any) => {
   let shapedData = [];
   for (let el of input) {
    shapedData.push(normalizeRepoData(el));
  }
  return shapedData;
};

const normalizeRepoData = (data: any) => ({
  repoName: data.name, 
  repoOwner: data.owner.login 
})