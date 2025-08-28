
// import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <div></div>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.darkMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.btnmode}</label>
                    </div>
                </div>
            </nav>

        </>
    );
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string,
// };


// Navbar.defaultProps= {
// title: "Set title here",
// };

export default Navbar;