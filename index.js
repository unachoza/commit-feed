const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const GITHUB_BASE_URL = "https://api.github.com";

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('working')
})
app.get('/commits', (req,res) => {
 
  const fetchCommits = async () => {
    try {
      const commits = await axios.get(
        `${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(
          repositoryName
        )}/commits`,
        {
          headers: {
            Authorization: `token ${Process.env.REACT_APP_KEY}`,
          },
        }
      );
      const items = commits.data;
      const RepositoryCommitMessages = normalizeData(items, normalizeCommitData);
      res.json(RepositoryCommitMessages);
    } catch (err) {
      console.log(err)
    } 
  };
  fetchCommits();
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
