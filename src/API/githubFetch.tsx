const GITHUB_BASE_URL = 'https://api.github.com';
const SORT_BY = 'stars';
const ORDER = 'desc';

export const repositoryFetch = (
  queryText: string,
  queryLicense: string,
  queryFork: boolean,
  queryStars: string
): Promise<any> => {
  return fetch(
    `${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}+license:${encodeURIComponent(
      queryLicense
    )}+stars:${encodeURIComponent(queryStars)}+fork:${queryFork}&sort=${SORT_BY}&order=${ORDER}`
  );
};