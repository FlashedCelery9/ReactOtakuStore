import logo from "../../assets/logo.svg";
import "./Header.css";
import LoginComponent from "../forms/AunteficationForm/Login.tsx";
import {useContext, useState} from "react";
import RegisterForm from "../forms/AunteficationForm/Register.tsx";
import {AuthContext} from "../../context/AuthContext.ts";

function Header(){
    const [showComponent, setShowComponent] = useState(false);
    const [showRegisterComponent, setShowRegisterComponent] = useState(false);
    const context = useContext(AuthContext);
    if(!context) throw new Error("No auth context.");

    return (
        <>
            <header className="App-header">
                <div className="flex">
                    <img className="navLogo" src={logo} alt="OtakuStore"/>
                    <ul className="navMenu flex w-full items-center">
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contacts">Contacts</a></li>

                        <div className="navMenu flex w-full items-center">
                            {context.isAuthenticated ? (<p>{context.currentUser?.email}</p>) : (
                                <>
                                    <li className="ml-auto">
                                        <button className="hover:cursor-pointer hover:text-white" onClick={() => setShowComponent(true)}>
                                            Login
                                        </button>
                                    </li>
                                    <li className="ml-4 mr-4">
                                        <button className="hover:cursor-pointer hover:text-white" onClick={() => setShowRegisterComponent(true)}>
                                            Register
                                        </button>
                                    </li>
                                </>
                            )}
                        </div>
                    </ul>
                </div>


            </header>
            <div className="menu-line"></div>
            <div className="shadow"></div>
            {showComponent && <LoginComponent setShowComponent={setShowComponent}></LoginComponent>}
            {showRegisterComponent && <RegisterForm setRegisterFormShow={setShowRegisterComponent}></RegisterForm>}
        </>
    )
}

export default Header;