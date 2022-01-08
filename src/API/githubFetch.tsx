import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

export const repositoryFetch = async( queryText: string): Promise<any> => {
  const data = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}`);
  const items = data.data.items
  const repositoryChoices = shapeData(items, normalizeRepoData)
  console.log({repositoryChoices})
  return repositoryChoices
};
// api.github.com/repos/unachoza/susan-says/commits
export const commitFetch = async( repositoryOwner: string, repositoryName: string): Promise<any> => {
  const data = await axios.get(`${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(repositoryName)}/commits`);
  const items = data.data
  const repositoryCommitMessages = shapeData(items, normalizeCommitData)
  console.log({repositoryCommitMessages})
  return repositoryCommitMessages
};

 //Make fetched data easier to work with
 const shapeData = (input: any, normalizedDataShape: any) => {
  let shapedData = [];
  for (let el of input) {
   shapedData.push(normalizedDataShape(el));
 }
 return shapedData;
 };

const normalizeCommitData = (data: any) => ({
  date: new Date(data.commit.author.date).toString(),
  commitMessage: data.commit.message, 
  url: data.html_url,
  username: data.author.login
})
const normalizeRepoData = (data: any) => ({
  repositoryName: data.name, 
  repositoryOwner: data.owner.login 
})