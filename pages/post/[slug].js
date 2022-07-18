import React, { useContext, useEffect, useState } from 'react';
import { ReadersNav, Recommendations, ArticleMain } from '../../components';
import { MediumContext } from '../../context/MediumContext';
import { useRouter } from 'next/router';
import Head from 'next/head';

const styles = {
  content: `flex`,
};

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  // useEffect(() => {
  //   //guard clause to prevent error when no post is found
  //   if (posts.length === 0) {
  //     return;
  //   }
  //   // console.log(router.query.slug, '🔫');
  //   setPost(posts.find((post) => post.id === router.query.slug));

  //   // console.log(users, '❤️‍🔥');
  //   setAuthor(users.find((user) => user.id === post.data?.author));
  // }, [post]);

  useEffect(() => {
    if (!(posts.length === 0)) {
      setPost(posts.find((post) => post.id === router.query.slug));
    }
  }, [posts, router.query.slug]);

  useEffect(() => {
    if (!(post.length === 0 || users.length === 0)) {
      setAuthor(users.find((user) => user.id === post.data?.author));
    }
  }, [users, post, users.length]);

  return (
    <div>
      <Head>
        <title>Medium | Jin Wang Dev</title>
        <link rel='icon' href='/jindev01.png' />
      </Head>
      <main className={styles.content}>
        <ReadersNav />
        <ArticleMain post={post} author={author} />
        <Recommendations />
      </main>
    </div>
  );
};

export default Post;
