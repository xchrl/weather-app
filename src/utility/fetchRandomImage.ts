import { UNSPLASH_CLIENT_ID } from '../data/config.json'

export default async function fetchRandomImage(query: string) {
  query.split(" ").length != 1 ? (query = query.split(" ").join(",")) : query;

  const data = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=1&client_id=${UNSPLASH_CLIENT_ID}`
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));

    return data.results[0].urls.full;
}
