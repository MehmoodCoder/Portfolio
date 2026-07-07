import '../CSS/NavBar.css'
import { Component } from "react";
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    };

    handleLinkClick = () => {
        this.setState({ clicked: false });
    };

    render() {
        return (
            <nav className="NavBarItems">
                <Link to="/" className="brand-link" onClick={this.handleLinkClick}>
                    <span className="brand-badge">
                        <i className="fa-solid fa-code"></i>
                    </span>
                    <span className="brand-text">
                        <span className="brand-name">Portfolio</span>
                        <span className="brand-role">Creative Developer</span>
                    </span>
                </Link>

                <button
                    type="button"
                    className={`nav-icon ${this.state.clicked ? "active" : ""}`}
                    onClick={this.handleClick}
                    aria-label={this.state.clicked ? "Close navigation menu" : "Open navigation menu"}
                >
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </button>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={`${item.cName} w-full min-[851px]:w-auto`}>
                                <Link
                                    to={item.url}
                                    onClick={this.handleLinkClick}
                                    className="link"
                                >
                                    <i className={`${item.icon}`}></i>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;