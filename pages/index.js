import { getPostData } from '../lib/posts';

export async function getStaticProps() {
  const post = getPostData();
  return {
    props: {
      post,
    },
  };
}

export default function Home({ post }) {
  const { data, content } = post;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
