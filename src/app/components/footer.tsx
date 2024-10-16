"use client"

import { FaEnvelope } from 'react-icons/fa';
import SocialMediaIcons from './common/socialMediaIcons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#0e0f10]'>
      <section className='max-w-[1100px] mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-justify-between pt-12 pb-16 px-4 lg:px-0'>
        <div className='px-[15px]'>
          <h2 className='text-white text-[24px] font-semibold tracking-[1px] leading-[28px] mb-5'><span className='text-[#5e0e8f]'>About</span> Us</h2>
          <p className='max-w-[285px] text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf]'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. lacinia eget consectetur sed, convallis at tellus..</p>
        </div>
        <div className='px-[15px]'>
          <h2 className='text-white text-[24px] font-semibold tracking-[1px] leading-[28px] mb-5'><span className='text-[#5e0e8f]'>Latest</span> News</h2>
          <p className='max-w-[285px] text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] '>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. lacinia eget consectetur sed, convallis at tellus..</p>
        </div>
        <div className='px-[15px]'>
          <h2 className='text-white text-[24px] font-semibold tracking-[1px] leading-[28px] mb-5'><span className='text-[#5e0e8f]'>Quick</span> Links</h2>
          <ul>
            <Link href={'/'}>
              <li className='text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] cursor-pointer w-fit'>Home</li>
            </Link>
            <Link href={'/about'}>
              <li className='text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] cursor-pointer w-fit'>About</li>
            </Link>
            <Link href={'/services'}>
              <li className='text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] cursor-pointer w-fit'>Services</li>
            </Link>
            <Link href={'/resources'}>
              <li className='text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] cursor-pointer w-fit'>Resources</li>
            </Link>
            <Link href={'/contact'}>
              <li className='text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] cursor-pointer w-fit'>Contact</li>
            </Link>
          </ul>
        </div>
        <div className='px-[15px]'>
          <h2 className='text-white text-[24px] font-semibold tracking-[1px] leading-[28px] mb-5'><span className='text-[#5e0e8f]'>Subscribe</span> Us</h2>
          <p className='max-w-[285px] text-[15px] font-normal tracking-[0.5px] leading-[27px] text-[#bfbfbf] mb-4'>Vivamus magna justo, lacinia eget consectetur sed.</p>
          <div className='flex'>
            <input
              id='Email'
              type='email'
              placeholder='Your email...'
              className='bg-[#0b0c0c] px-[15px] py-[13px] font-normal text-[14px] text-[#bfbfbf] rounded-tl-[12px] rounded-bl-[12px] border-b-[1px] border-t-[1px] border-l-[1px] border-[#bfbfbf] cursor-text outline-none'
            />
            <div className='h-full bg-[#a40eff] rounded-tr-[12px] rounded-br-[12px] border-b-[1px] border-t-[1px] border-r-[1px] p-4'>
              <FaEnvelope size={20} fill='white' />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className='max-w-[1100px] mx-auto px-[15px] py-4 flex flex-col-reverse gap-2 md:flex-row justify-between text-white'>
        <p className='font-normal text-[15px] tracking-[1px] text-center md:text-left'>@ 2024 Union Group Tutorials. All Right Reserved</p>
        <div className='flex flex-col items-center md:flex-row gap-5'>
          <span className='font-normal text-[15px] tracking-[1px]'>Follow us on:</span>
          <SocialMediaIcons />
        </div>
      </section>
    </footer>
  )
}

export default Footer;