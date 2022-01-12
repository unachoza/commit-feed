import axios from "axios";

import { GITHUB_BASE_URL, useFetch } from "./useFetch";

jest.mock("axios");


describe("useFetch", () => {
  describe("when API call is successful", () => {
    it("should return commit list", async (repositoryName , repositoryOwner) => {
      // given
      const commits = [
        {
          date: { day: 'May 08 2020', time: '09:21:29' },
          commitMessage: "cleaning up code",
          url: "https://github.com/unachoza/Susan-Says/commit/4adfbd30d086e4149d4b06ba75b142e1a13e36f3",
          username: "unachoza"
        },
        {
          date: { day: 'May 02 2020', time: '09:31:29' },
          commitMessage: "testing code",
          url: "https://github.com/unachoza/Susan-Says/commit/4adfbd30d086e4149d4b06ba75b142e1a13e36f2",
          username: "sarah"
        }
      ];
      axios.get.mockResolvedValueOnce(commits);
   // when
   const result = await useFetch(repositoryName, repositoryOwner );

   // then
   expect(axios.get).toHaveBeenCalledWith(`${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(repositoryName)}/commits`);
   expect(result).toEqual(commits);
 });
});

describe("when API call fails", () => {
  it("should return empty users list", async (repositoryName, repositoryOwner ) => {
    // given
    const message = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(message));

    // when
    const result = await useFetch(repositoryName, repositoryOwner );;

    // then
    expect(axios.get).toHaveBeenCalledWith(`${GITHUB_BASE_URL}/repos/${encodeURIComponent(repositoryOwner)}/${encodeURIComponent(repositoryName)}/commits`);
    expect(result).toEqual([]);
  });
});
});