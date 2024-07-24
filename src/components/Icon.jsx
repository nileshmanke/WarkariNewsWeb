import React, { useState } from 'react';

const Icon = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const styles = {
    social: {
      transform: 'translate(-150px, 0)',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      margin: '5px',
      backgroundColor: hovered ? 'blanchedalmond' : 'blue',
      width: '200px',
      textAlign: 'right',
      padding: '10px',
      borderRadius: '0 30px 30px 0',
      transition: 'all 1s',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
    },
    icon: {
      marginLeft: '10px',
      color: 'chocolate',
      background: '#fff',
      padding: '10px',
      borderRadius: '50%',
      width: '40px',
      aspectRatio: '1/1',
      fontSize: '20px',
      background: '#ffffff',
      textAlign: 'center',
      transform: 'rotate(0deg)',
      transition: 'all 1s',
    },
    iconHover: {
      color: '#fff',
      backgroundColor: 'brown',
      transform: 'rotate(360deg)',
    },
  };

  return (
    <div>
      <div style={styles.social}>
        <ul style={styles.list}>
          <li
            style={styles.listItem}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <a href="#" style={styles.link}>
              Twitter<i className="fa-brands fa-x-twitter" style={hovered ? { ...styles.icon, ...styles.iconHover } : styles.icon}></i>
            </a>
          </li>
          {/* Add other list items here */}
        </ul>
      </div>
    </div>
  );
}

export default Icon;
