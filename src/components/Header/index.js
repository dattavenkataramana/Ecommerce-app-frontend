import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Header = ({onSearch}) => {

     const [searchInput,setSearchInput] = useState('')

     
        const handleSearchInputChange = (e) => {
            const inputValue = e.target.value;
            setSearchInput(inputValue);
            onSearch(inputValue);  
        }
    
    
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="company-logo">
          <Link to="/home" className="nav-link">
            <img src="https://thetechrevolutionist.com/wp-content/uploads/2022/03/3d-memory.jpg" alt="Company Logo" />
          </Link>
        </div>
        <div className="search-input">
          <input type="text" value={searchInput} onChange={handleSearchInputChange} placeholder="Search..." />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/home" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="link-text">Cart</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="link-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
