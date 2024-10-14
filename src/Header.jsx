import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import reactLogo from './assets/goldLogo.svg'; 
import './index.css';

/*
https://codepen.io/naturalclar/pen/zEwvbg

-Använde en färdig template från CodePen och modifierar koden så att den passar
applikationen "Orchid Travels" utseende mål.

- Modifierade koden så att den använder Font Awesome för ikonerna istället för ikoner
  skapade manuellt med CSS styling.
- Modifierade koden i menu array för navigations valen. I vår applikation har vi två val (Undersidor) i menyn: "About us" och "Our Hotels".
- Modifierade koden så att komponenten blir responsiv med VW and rem.
- Modifierade koden så att menyn går att öppnas med FontAwesome ikonerna.
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '99',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        width: '100%',
        height: '10vh',
        padding: '0 20px',
        fontFamily: 'Roboto, sans-serif !important',  
      },
      logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      logoImage: {
        width: '4rem',
        height: '4rem',
      },
      logoText: {
        fontSize: '1.6rem',
        marginLeft: '10px',
        color: 'black',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
        fontFamily: 'Roboto, sans-serif !important',  
      },
      menuButtonContainer: {
        position: 'absolute',
        left: '20px',
      },
    };

    const menu = ['Orchid Travels', 'About Us', 'Our Hotels'];
    const menuItems = menu.map((val, index) => (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        className={val === 'Orchid Travels' ? 'orchidTravelsText' : ''}
        onClick={() => {
          this.handleLinkClick();
        }}
      >
        {val} 
      </MenuItem>
    ));

    return (
      <div>
    
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

  
        {!this.state.menuOpen && (
          <div style={styles.container}>
            <div style={styles.menuButtonContainer}>
              <MenuButton
                open={this.state.menuOpen}
                onClick={() => this.handleMenuClick()}
              />
            </div>
            <div style={styles.logoContainer}>
              <img src={reactLogo} alt="React Logo" style={styles.logoImage} /> 
              <span style={styles.logoText}>Orchid Travels</span> 
            </div>
          </div>
        )}

   
        <Menu open={this.state.menuOpen} onClose={() => this.handleMenuClick()}>
          {menuItems}
        </Menu>
        <div style={styles.body}></div>
      </div>
    );
  }
}

class MenuButton extends React.Component {
  render() {
    const icon = this.props.open ? faTimes : faBars;
    const buttonSize = { fontSize: '3rem', color: 'black' };

    const buttonStyle = this.props.open
      ? { position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }
      : { cursor: 'pointer', marginRight: '10px' };

    return (
      <div onClick={this.props.onClick} style={buttonStyle}>
        <FontAwesomeIcon icon={icon} style={buttonSize} /> 
      </div>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Roboto', sans-serif !important`, 
        fontSize: '2rem', 
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        fontWeight: '800', 
        color: this.state.hover ? 'gray' : 'black',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          className={`menuItem ${this.props.className}`}
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children} 
        </div>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    const styles = {
      container: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: this.props.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
      menuList: {
        paddingTop: '3rem',
        visibility: this.props.open ? 'visible' : 'hidden',
      },
    };
    return (
      <div style={styles.container}>
    
        {this.props.open && (
          <MenuButton open={this.props.open} onClick={this.props.onClose} />
        )}
      
        {this.props.open && <div style={styles.menuList}>{this.props.children}</div>}
      </div>
    );
  }
}

export default Header;