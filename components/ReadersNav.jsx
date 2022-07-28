import Image from 'next/image';
import Link from 'next/link';
import SmallLogo from '../public/smallLogo.png';
import { HiOutlineHome } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import { BiBookmarks } from 'react-icons/bi';
import { RiArticleLine } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import Jin from '../public/jin.gif';

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoContainer: `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImage: `object-cover`,
  profileImageContainer: `v-[2.8rem] h-[2.8rem] rounded-full overflow-hidden place-items-center`,
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image
            src={`/medium/smallLogo.png`}
            alt='logo'
            height={40}
            width={40}
            objectFit='contain'
          />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>

      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={`jin.gif`}
          alt='jin_logo'
          height={40}
          width={40}
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default ReadersNav;
