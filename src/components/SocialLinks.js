import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from './../assets/BKS-Resume.pdf';

const SocialLinks = () => {
  const links = [
    {
      id: 101,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/kaishan-baik/',
      style: 'rounded-tr-md',
    },
    {
      id: 102,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/kaishan-baik',
    },
    {
      id: 103,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:baik.kaishan@gmail.com',
    },
    {
      id: 104,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: Resume,
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg bg-gradient-to-r from-cyan-400 to-blue-700 hover:rounded-md hover:ml-[-10px] duration-300 ' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              // download={download}
              className="flex justify-between items-center w-full text-white "
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
