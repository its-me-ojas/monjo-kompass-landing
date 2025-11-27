import { getPageMap } from 'nextra/page-map'

export async function getPosts() {
  const pageMap = await getPageMap()
  
  // Find the blog folder
  const blogFolder = pageMap.find((item: any) => item.name === 'blog' || item.route === '/blog')
  
  let posts: any[] = []
  
  if (blogFolder && blogFolder.children) {
    posts = blogFolder.children
      .filter((item: any) => {
        return item.frontMatter && item.route !== '/blog'
      })
      .map((item: any) => ({
        ...item.frontMatter,
        route: item.route,
        name: item.name
      }))
  } else {
    // Fallback for flat structure or if blog folder not found as expected
    posts = pageMap
      .filter((item: any) => {
        const isBlogPost = item.route?.startsWith('/blog/') && item.route !== '/blog'
        return isBlogPost && item.kind === 'MdxPage' && item.frontMatter
      })
      .map((item: any) => ({
        ...item.frontMatter,
        route: item.route,
        name: item.name
      }))
  }

  return posts.sort((a: any, b: any) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })
}
