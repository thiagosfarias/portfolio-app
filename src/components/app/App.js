import React, { Fragment, useEffect, useState } from 'react';
import GlobalStyle from '../../globalStyle'
import AboutMe from '../about-me';
import Education from '../education'
import { MenuContainer, MenuNav } from '../menu/style';
import { ButtonDarkMode, CanvasContainer, CanvasContent } from './style'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [switchBackgroud, setSwitchBackgroud] = useState(true);

  return (
    <Fragment>
      <GlobalStyle switch={switchBackgroud}/>
      <CanvasContainer>
          <CanvasContent >
            <Router>
              <Routes>
                <Route path='/' element={<AboutMe switch={switchBackgroud}/>}/>
                <Route path='/education' element={<Education switch={switchBackgroud}/>}/>
              </Routes>
            </Router>
            <ButtonDarkMode switch={switchBackgroud} onClick={() => setSwitchBackgroud(!switchBackgroud)}>{switchBackgroud ? "Dark Mode" : "Light Mode"}</ButtonDarkMode>
          </CanvasContent>
          <MenuContainer>
            <MenuNav>
              <button className="socialBt"><a href='/social'>Social</a></button>
              <button className='aboutMeBt'><a href='/'>About Me</a></button>
              <button className='educationBt'><a href='/education'>Education</a></button>
              <button className='projectsBt'><a href='/projects'>Projects</a></button>
            </MenuNav>
        </MenuContainer>
    </CanvasContainer>
    </Fragment>
  );
}

export default App;
