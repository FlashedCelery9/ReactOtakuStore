import logo from "../../assets/logo.svg";
import "./Header.css";

function Header(){
    return (
        <>
            <header className="App-header">
                <nav className="navBar">
                    <div className="navLogoBlock"></div>
                    <img className="navLogo" src={logo} alt="OtakuStore"/>
                    {/*<a className="navLogoBlock">OtakuStore</a>*/}
                    <ul className="navMenu">
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;