import './CSS/NavBar.css'
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
                <h3 className="text-2xl font-bold tracking-wider text-[#171d32] cursor-pointer bg-gradient-to-r from-[#171d32] to-[#4a5568] bg-clip-text text-transparent">
                    Portfolio
                </h3>

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
                                    className="link flex items-center justify-center gap-2 font-medium text-base transition-all duration-300 ease-in-out hover:bg-[#171d32] hover:text-white rounded-lg px-4 py-2"
                                >
                                    <i className={`${item.icon} text-lg`}></i>
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