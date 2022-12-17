import React from 'react';
import { NavbarContainer, TitleNavbar, DropdownContainer } from './Navbar.style';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

library.add(faLightbulb);





export default function Navbar () {
    const options = [
        'one', 'two', 'three'
      ];




  return (
    <NavbarContainer>
        <TitleNavbar>
            <FontAwesomeIcon icon={faLightbulb} color="white" style={{
                marginTop: "0.4em"
            }}/>
            <h4>6 Suggestion</h4>
        </TitleNavbar>
        <DropdownContainer>
            <p>Sort by: </p>
            <Dropdown options={options}  placeholder="Most Up Votes"  />;
        </DropdownContainer>
        <button>+ Add FeedBack</button>
    </NavbarContainer>
  )
}
