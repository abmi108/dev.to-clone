import '../css/main.css';

const Header = () => {
    return (
        <header className="flex-container">
            <div className="logo-container flex-container">
                <span className="menu">
                    <i className="fa-solid fa-bars fa-lg"></i>
                </span>
                <img src="../images/logo.png" alt="logo" />
            </div>
            <nav className="flex-container">
                <span className="search">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </span>
                <button className="create-account">Create account</button>
            </nav>
        </header>
    );
};

export default Header;