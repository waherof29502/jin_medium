import React from 'react';
import Image from 'next/image';
import Jin from '../static/jin.gif';
import Banner from '../static/banner.png';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineLink } from 'react-icons/hi';
import { BiBookmarks } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen overflow-scroll w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878] `,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem] `,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: `flex flex-col gap-[1rem] `,
  image: `object-cover`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={`object-cover`}
                src={Jin}
                alt='jin_logo'
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Jin Wang</div>
              <div className={styles.postDetails}>
                <span>Jun 15・ 7 min read・ </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
            <div className={styles.socials}>
              <IoLogoTwitter />
              <FaFacebook />
              <GrLinkedin />
              <HiOutlineLink />
              <div className={styles.space} />
              <BiBookmarks />
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
        {/* article container*/}
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              src={Banner}
              height={100}
              width={100}
              className={styles.image}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>
            7 free tools that will make u more productive
          </h1>
          <h4 className={styles.subtitle}>
            <div>Jin Wang, June 15, 2022</div>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>I love that</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
