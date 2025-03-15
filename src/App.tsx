import React from 'react';
import { Newspaper } from 'lucide-react';
import { useGetPostsQuery } from './store/api';

function App() {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Error loading posts</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Simple Blog</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {posts?.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;