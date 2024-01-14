import React, { useRef } from 'react';
import logo from '../assets/logo.svg';
import "../styles/NavbarStyle.css"

function Navbar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="Logoipsum" />
                </div>

                <nav ref={navRef} className="navbar">
                    <ul className="">
                        <li className="">
                            <a href="" className="">Accueil</a>
                        </li>
                        <li className="">
                            <a href="" className="">A propos</a>
                        </li>
                        <li className="">
                            <a href="" className="">Contactez-nous</a>
                        </li>
                        <li>
                            <button
                                className="nav-btn nav-close-btn"
                                onClick={showNavbar}>
                                <i className="fa-solid fa-xmark" style={{color: '#FFD43B'}}></i>
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <i className="fa-solid fa-bars" style={{color: '#FFD43B'}}></i>
                </button>
            </header>
        </>
    );
}

export default Navbar