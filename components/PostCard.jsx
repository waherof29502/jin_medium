import React from 'react';
import Image from 'next/image';
import Logo from '../static/logo.png';
import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#f2f3f2] p-1 rounded-full`,
  bookmarkContainer: `cursor-pointer`,
  thumbnailContainer: `object-contain`,
};

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorImage}
                src={Logo}
                width={40}
                height={40}
                alt='logo'
              />
            </div>
            <div className={styles.authorName}>Jin Wang Dev</div>
          </div>
          <h1 className={styles.title}>dafdfaddafadf</h1>
          <div className={styles.briefing}>adadfagagagagag</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              Jun 15 ・ 5 min read・
              <span className={styles.category}>productivity</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image height={100} width={100} src={Logo} alt='logo' />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
