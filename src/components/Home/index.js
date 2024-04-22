 


import './index.css';

import { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';  
import Products from '../Products';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";

function Home() {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showSidebar, setShowSidebar] = useState(false); 
    const navigate = useNavigate();
     
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken === undefined) {
        return navigate('/login');
    }
     
     
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleCategoryClick = (category) => {
            setSelectedCategory(category);
     };

       
    const handleSearch = (query) => {
        setSearchQuery(query);  
    };


    return (
        <>
            <div>
                <Header onSearch={handleSearch} className="position-fixed" />
                <div className="hamburger-container">
                    <div className='box' style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                        <FaBars className="hamburger-icon" onClick={toggleSidebar} />
                        <h2 style={{cursor:"pointer"}} onClick={()=> handleCategoryClick("All")}>All</h2>
                    </div>  
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('smartphones')}>Smartphones</h2>
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('laptops')}>Laptops</h2>
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('fragrances')}>Fragrances</h2>
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('skincare')}>Skincare</h2>
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('groceries')}>Groceries</h2>
                    <h2 className='heding-of-catagory' onClick={() => handleCategoryClick('home-decoration')}>Home-decoration</h2>
                </div>
                <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                    <div className="sidebar-header">
                        <FaTimes className="close-icon" onClick={toggleSidebar} />
                    </div>
                    <div className='hamburgerMenu-section'>
                        <div className='-icon'>
                            <FaCircleUser />
                            <h2>Hello , Sign in</h2>
                        </div>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('smartphones')}>Smartphones</h3>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('laptops')}>Laptops</h3>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('fragrances')}>Fragrances</h3>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('skincare')}>Skincare</h3>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('groceries')}>Groceries</h3>
                        <h3 className='heding-of-catagory' onClick={() => handleCategoryClick('home-decoration')}>Home-decoration</h3>
                    </div>
                </div>
                <Products onSearch={searchQuery} selectedCategory={selectedCategory}/>
            </div>
        </>
    );
}

export default Home;

