import React from 'react';
import 'components/navbar/navbar.css';
import youtube from 'image/youtube.jpg'

export const Navbar = () => {
  return (
    <div className='navbar_container'>
      <ul>
        <img className="logo" src={youtube}
        alt="video thumbnail"/>
        <input type="text" placeholder="검색어를 입력하세요"/>
      </ul>
    </div>
  )
}


