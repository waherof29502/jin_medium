import React from 'react';
import { ReadersNav, Recommendations, ArticleMain } from '../../components';

const styles = {
  content: `flex`,
};

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
};

export default Post;
