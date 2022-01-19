//@ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
const GITHUB_BASE_URL = "https://api.github.com";


export interface RepositoryCommitMessage {
  date: {
    day: string;
    time: string;
  };
  commitMessage: string;
  url: string;
  username: string;
}
interface RepositoryCommitMessages extends Array<RepositoryCommitMessage> {}

export const useFetch = (
  repositoryOwner: string,
  repositoryName: string,
  fireCommitFetch: boolean
): Promise<RepositoryCommitMessages> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      setLoading(true);
      try {
        const commits = await axios.get(
          `${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(
            repositoryName
          )}/commits`
        );
        const items = commits.data;
        const RepositoryCommitMessages = normalizeData(items, normalizeCommitData);
        setData(RepositoryCommitMessages);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, [fireCommitFetch]);
  return { data, loading, error };
};

const normalizeData = (input: any, normalizedDataShape: any) => {
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
  username: data.author.login,
});

const normalizeDate = (data: string) => {
  const shorterDate = data.split("").splice(4, 20);
  const date = {
    day: shorterDate.join("").slice(0, 11),
    time: shorterDate.join("").slice(12),
  };
  return date;
};
