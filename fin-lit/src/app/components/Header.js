import Link from 'next/link';
import './Header.css';
import logo from '../images/logo.jpg'

const userIcon = "https://cdn.iconscout.com/icon/free/png-256/free-user-1885-840228.png?f=webp";

const Header = ({user}) => {
    return (
        <div className ="header">
            <img src={logo} alt={"FinLit Logo"} className="logo"></img>
            <div className="links">
                <Link href="/credit">Credit</Link>
                <Link href="/budgeting">Budgeting</Link>
                <Link href="/loans">Loans</Link>
            </div>
            <img src={userIcon} alt={"User Icon"} className="userIcon"></img>
            <div className="username">{user}</div>
        </div>
    );  
}

export default Header;