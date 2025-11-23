import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import { getPageMap } from 'nextra/page-map'
import { ReactNode } from 'react'
import 'nextra-theme-blog/style.css'
import './blog.css'

export default async function BlogLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  console.log('Blog PageMap:', JSON.stringify(pageMap, null, 2))
  return (
    <Layout>
      <Navbar pageMap={pageMap} />
      {children}
      <Footer>MIT 2025 © Monjo Kompass.</Footer>
    </Layout>
  )
}
