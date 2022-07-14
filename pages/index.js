import { Header, Banner, PostCard } from '../components';
import { MediumContext } from '../context/MediumContext';
import { useContext } from 'react';

const styles = {
  wrapper: `mx-auto`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
  container: `max-w-7xl flex-1 `,
  main: `flex justify-center `,
};

export default function Home() {
  const { posts } = useContext(MediumContext);
  console.log(posts, '🔥');
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
