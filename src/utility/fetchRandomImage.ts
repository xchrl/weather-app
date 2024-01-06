export default async function fetchRandomImage(query: string) {
  query.split(" ").length != 1 ? (query = query.split(" ").join(",")) : query;

  const data = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=1&client_id=${
      import.meta.env.VITE_UNSPLASH_CLIENT_ID
    }`
  ).then((resp) => resp.json());

  if (data && data.total != 0) {
    return data.results[0].urls.full;
  } else throw new Error("Image can't be fetched");
}
