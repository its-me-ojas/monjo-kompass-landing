import { getPageMap } from 'nextra/page-map'

export async function getPosts() {
  // Try getting the full pageMap without filtering by route
  const pageMap = await getPageMap()
  
  console.log('Full PageMap:', JSON.stringify(pageMap, null, 2))
  
  // Filter to get only blog MDX pages
  const posts = pageMap
    .filter((item: any) => {
      const isBlogPost = item.route?.startsWith('/blog/') && item.route !== '/blog'
      console.log('Checking item:', {
        route: item.route,
        kind: item.kind,
        name: item.name,
        isBlogPost,
        hasFrontMatter: !!item.frontMatter
      })
      return isBlogPost && item.kind === 'MdxPage' && item.frontMatter
    })
    .map((item: any) => ({
      ...item.frontMatter,
      route: item.route,
      name: item.name
    }))
    .sort((a: any, b: any) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
  
  console.log('Filtered posts count:', posts.length)
  console.log('Filtered posts:', JSON.stringify(posts, null, 2))
  return posts
}
