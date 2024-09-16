import React from 'react'
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
    title: string;
    styles?: string;
    link: string;
}

const NavButton: React.FC<NavButtonProps> = ({title, styles, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };


  return (
    <button className={`font-medium uppercase transition ease-in-out duration-100 hover:text-[#777] ${styles}`} onClick={handleClick}>{title}</button>
  )
}

export default NavButton;