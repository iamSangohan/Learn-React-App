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
            <header className="d-flex flex-row justify-content-around align-items-center bg-black">
                <div className="titre-page d-flex align-items-center fs-1 fw-bold">
                    <img src={logo} alt="Logoipsum" />
                </div>

                <div className="ps-5 bug">
                    <div className="menuBurger">
                        <div className="btnBurger"></div>
                    </div>
                </div>

                <nav className="d-flex flex-row justify-content-center align-items-center">
                    <ul className="d-flex flex-row align-items-center text-center">
                        <li className="m-3">
                            <a href="" className="text-light">Accueil</a>
                        </li>
                        <li className="m-3">
                            <a href="" className="text-light">A propos</a>
                        </li>
                        <li className="m-3">
                            <a href="" className="text-light">Contactez-nous</a>
                        </li>
                        <li>
                            <button
                                className="nav-btn nav-close-btn"
                                onClick={showNavbar}>
                                <FontAwesomeIcon icon="fa-solid fa-times" style={{color: "#FFD43B",}} />
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#FFD43B",}} />
                </button>
            </header>
        </>
    );
}

export default Navbar