# Commit Feed

## [View Deployed App here!](https://commit-feed-c7lx-nootqp75b-unachoza.vercel.app/)

This project is a take home build for Chronosphere
The goal was to fetch github repository commits from Github API and display them like a 'twitter feed'.

## Strategy

I used react hooks to keep state close to the component where needed. I made a custom useFetch hook to make a request from the api. I tried to bring in Chronosphere's styling and colors where I could. I added some Typescript, it definitely needs work.

## Future Itterations

If I had more time I would write some tests and make the backend functional. Currently I just have it demonstrating that I did think about using a key. I which I would write the results to /commits, then fetch the data that I wrote there.

There could always be more user feed back, like describing error messages and telling a use they have no results and should double check spelling of repository. I also though about adding a repository search function for this reason. It got to be too many inputs and hiding them when one is not in use. I would also add a load more button and pagination. Some repositories have more than 30 commits. I know some of mine do :)

Thank you for taking the time to look at my code :)

## How to run

### `npm run start:frontend`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
