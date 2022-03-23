import React, { useRef } from 'react';
import styles from 'components/navbar/navbar.module.css';
import youtube from 'image/youtube.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({onSearch}) => {
  let inputRef = useRef();

  const searchVideo = () => {
    // alert("searchVideo!! : " + inputValue.current.value);
    onSearch(inputRef.current.value);
  }

  const clickHandler = () => {
    searchVideo();
  }

  const enterEventHandler = (event) => {
    if (event.key == 'Enter') searchVideo();
  }

  return (
    <navbar className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={youtube}
          alt="youtube logo" />
        <h1>Youtube</h1>
      </div>
      <input className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="검색어를 입력하세요"
        onKeyPress={enterEventHandler}
      />
      <button className={styles.button} type='submit' onClick={clickHandler}>
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faMagnifyingGlass} />
      </button>
    </navbar>
  )
}


