import { ReactNode, useEffect, useState } from 'react';
import { get } from './utils/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>()

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsFetching(true);
        const data = (await get('https://jsonplaceholder.typicode.com/postmmmms')) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map(rawPost => {
          return { id: rawPost.id, title: rawPost.title, text: rawPost.body }
        });

        setFetchedPosts(blogPosts);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setError('Failed to load posts');
      } finally {
        setIsFetching(false);
      }
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />
  }

  if (fetchedPosts.length) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if (isFetching) {
    content = <p>Fetching post ...</p>
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
      {content}
    </main>
  )
}

export default App
