
//reference: https://commons.wikimedia.org/wiki/File:Netflix-avatar.png
import React from 'react'; 
import "./Nav.css"; 

function Nav() {
  return (
    <div className="nav">
        <img 
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix_logo"
        />
        <img 
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar logo"
        />
    </div>
  )
}

export default Nav