import { useEffect, useRef } from 'react';
import '../assets/css/global.scss';
import '../assets/css/animation.css';
import { HeaderContainer } from '../assets/HeaderStyle';
import HeaderSwiper from './HeaderSwiper';
/* 헤더 메뉴 리스트 */
import HeaderAbout from './header/HeaderAbout';
import HeaderService from './header/HeaderService';
import HeaderPortfolio from './header/HeaderPortfolio';
import HeaderBoard from './header/HeaderBoard';
import HeaderContact from './header/HeaderContact';
import HeaderElement from './header/HeaderElement';

// const nav = document.querySelecter('nav');
// const slider = document.querySelector('#header_main_slide');
    

function Header() {    
    const path = process.env.PUBLIC_URL;
    const movBox = useRef(null);
    
   
    const moveDeep = () => {
        
    }
    /* useEffect(() => {
        chanNav.addEventListener('scroll', () => {
            if(scrollY > 300){
                chanNav.current.style.backgroundColor='#fff';
            }else if(scrollY <= 300){
                chanNav.current.style.backgroundColor='tarnspart';
            }
        })
    }, []); */


   return (
      <HeaderContainer>
         <nav>
            <h1 className="h1_logo">
               <a href="#!">
                  <img src={path + "/img/Logo.png"} alt="logo" />
               </a>
            </h1>
               <ul className="nav_list">
                <li>
                    <a href="#!">about</a>
                    <ul className="list_sub">
                        {HeaderAbout.map(item => (
                            <li key={item.id}>
                                <a href="#!">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">service</a>
                    <ul className="list_sub">
                        {HeaderService.map(item => (
                            <li key={item.id}>
                            <a href="#!">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">portfolio</a>
                    <ul className="list_sub">
                        {HeaderPortfolio.map(item => (
                            <li key={item.id}>
                            <a href="#!">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">board</a>
                    <ul className="list_sub">
                        {HeaderBoard.map(item => (
                            <li key={item.id}>
                            <a href="#!">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">contact</a>
                    <ul className="list_sub">
                        {HeaderContact.map(item => (
                            <li key={item.id}>
                            <a href="#!">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">element</a>
                    <ul className="list_sub">
                        {HeaderElement.map(item => (
                            <li key={item.id}>
                            <a href="#!">
                                {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#!">shop</a>
                </li>
            </ul>
            <div className="btn_wrapper">
                <a className="nav_btn" href="#!">contact us</a>
            </div>
        </nav>
        <section id='header_main_slide' ref={movBox}>
            <HeaderSwiper />
            <div className="down_btn">
                <a href="#!" onClick={moveDeep}>
                    <span className="hidden_word">아래 문단으로 이동</span> 
                </a>
            </div>
        </section>   
      </HeaderContainer>
   );
}

export default Header;