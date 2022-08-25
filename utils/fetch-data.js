const postEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/articles?populate=*'
const worksEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/works?populate=*'

export async function fetchPosts() {
  // Call an external API endpoint to get posts
  const postsFromServer = await fetch(postEndPoint)
  const posts = await postsFromServer.json()
  return posts
}

export async function fetchWorks() {
  // Call an external API endpoint to get works
  const worksFromServer = await fetch(worksEndPoint)
  const works = await worksFromServer.json()
  return works
}