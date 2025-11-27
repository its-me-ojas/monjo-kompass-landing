import { getPosts } from './get-posts'
import Link from 'next/link'

export default async function BlogIndex() {
  let posts = await getPosts()
  
  // No fallback posts
  if (posts.length === 0) {
    console.log('No posts found')
  }
  
  return (
    <div className="min-h-screen w-full py-20 px-6 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-mongodb to-white animate-gradient-x">
          Blog
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Welcome to the Monjo Kompass blog. Here we share our thoughts on design, development, and the future of digital experiences.
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post: any, index: number) => (
          <Link 
            key={post.route} 
            href={post.route}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm transition-all duration-500 hover:border-mongodb/50 hover:shadow-2xl hover:shadow-mongodb/20"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-mongodb/0 via-mongodb/0 to-mongodb/0 group-hover:from-mongodb/10 group-hover:via-mongodb/5 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-mongodb/20 to-rust/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative p-8 flex flex-col h-full min-h-[320px]">
              {/* Tag */}
              {post.tag && (
                <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium rounded-full bg-mongodb/20 text-mongodb border border-mongodb/30 w-fit group-hover:bg-mongodb/30 group-hover:scale-110 transition-all duration-300">
                  {post.tag}
                </span>
              )}
              
              {/* Title */}
              <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-mongodb transition-colors duration-300 leading-tight">
                {post.title}
              </h2>
              
              {/* Date */}
              {post.date && (
                <time className="text-sm text-gray-500 mb-4 block font-mono">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              )}
              
              {/* Description */}
              {post.description && (
                <p className="text-gray-400 flex-grow leading-relaxed mb-6">
                  {post.description}
                </p>
              )}
              
              {/* Read more indicator */}
              <div className="flex items-center text-mongodb text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Read article</span>
                <svg className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
