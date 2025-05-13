import React from 'react'
import "./Header.css"
import Netflix from "../../assets/Netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Header = () => {
  return (
    <div className='header-outer-container'>
       <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={Netflix} alt="" /></li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header-right">
        <ul>
          <li><SearchIcon/></li>
          <li><NotificationsIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </ul>
        </div>
       </div>
    </div>
  )
}

export default Header