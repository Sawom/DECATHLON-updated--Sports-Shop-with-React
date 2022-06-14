import React from 'react';
import logo from '../../Data/deca_logo.jpg'
import './Header.css';
const Header = () => {
    return (
        <div>
            <br />
            <div  >
                <img className='logoStyle'  src={logo} alt="" />
                
            </div>
            <div className='description' >
                <p>
                    <h3 className='headings' ><u>About Us</u></h3>
                    <b>  DECATHLON.</b> It’s our privilege to introduce ourselves. We have 15 years' experience since we are specialists in Gym-Fitness Equipment & Sports Accessories Goods. We provide service and maintenance for all the products and services. 
                    We have been specialized in sports flooring facilities like basketball, volleyball, badminton, table tennis, long tennis coat facilities & also gym setup,  gym layouts, & operation planning. 
                </p>
                <p>
                    <h3 className='headings' ><u>Contact Us</u></h3>
                    Address : Plot - 16 and 17 (Ground Floor), Road - 12, Sector - 06,
                    Uttara, Dhaka, Bangladesh - 1230 <br />
                   <b>Email :</b>  care.dhaka@decathlon.com <br />
                   <b>Phone :</b>  +8801313084550
                </p>
            </div>
        </div>
    );
};
export default Header;