import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

export function Logo() {
  return (
    <div className='flex w-fit items-center gap-2'>
      <Link href='https://techapollos.com' className='flex items-center gap-2' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/apollo logo.png'
          width={40}
          height={40}
          priority
          quality={100}
          alt='Apollo logo mark'
        />
        <span className='font-alt text-xl text-white'>AI Twitter Banner Generator</span>
      </Link>
      <Link
        href='https://github.com/sostenesapollo'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-gray-300 transition-colors'
        aria-label='GitHub profile'
      >
        <IoLogoGithub size={40} />
      </Link>
    </div>
  );
}
