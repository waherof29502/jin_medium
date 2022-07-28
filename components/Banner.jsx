import React from 'react';
import Image from 'next/image';
import Logo from '../public/banner.png';

const styles = {
  wrapper: `h-max-[10rem] flex items-center justify-center bg-[#fcc017] border-y border-black`,
  content: `max-w-7xl flex-1 flex items-center justify-between`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-[3]'>
          <h1 className='max-w-xl text-[6rem] font-mediumSerif'>Banner</h1>
          <h3 className='text-2xl'>
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>

        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={`banner.png`}
          width={500}
          height={400}
          alt='logo'
        />
      </div>
    </div>
  );
};

export default Banner;
