import Link from 'next/link';
import './Header.css';
import logo from '../images/logo.jpg'

const userIcon = "https://cdn.iconscout.com/icon/free/png-256/free-user-1885-840228.png?f=webp";

const Header = ({user}) => {
    return (
        <div className ="header">
            <img src={'https://assets.themuse.com/uploaded/companies/901/small_logo.png?v=bc386caca24fd3bd38c400fa365214bc861f681b4dc997a9d4ec4c1e35f46679'} alt={"FinLit Logo"} className="logo"></img>
            <div className="title">FinLit</div>
            <div className="link1">
                <Link href="/credit">Credit</Link>
            </div>
            <div className="link2">
                <Link href="/budgeting">Budgeting</Link>
            </div>
            <div className="link3">
                <Link href="/loans">Loans</Link>
            </div>
            <img src={userIcon} alt={"User Icon"} className="userIcon"></img>
            <div className="username">{user}</div>
        </div>
    );  
}

export default Header;