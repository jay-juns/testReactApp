import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme } : {theme: any}) => theme.body};
    color: ${({ theme } : {theme: any}) => theme.text};
    transition: all 0.25s linear;
  }
  .btn {
    color: ${({ theme } : {theme: any}) => theme.text};
  }
  .btn:disabled {
    color: ${({ theme } : {theme: any}) => theme.disableColor};
  }
  .toggle-btn {
    position: fixed;
    width: 20px;
    height: 20px;
    right: 40px;
    font-size: 20px;
    top: 25px;
    color: ${({ theme } : {theme: any}) => theme.text};
    overflow: hidden;
    z-index:101;
  }
  .toggle-btn > svg {
    position: absolute;
    left:0;
    top:0;
    transform: translateY(0);
    transition: all ease-in-out .3s;
  }

  .toggle-btn > svg.sun {
    transform: translateY(100px);
  }
  .toggle-btn > svg.moon {
    transform: translateY(-100px);
  }
  .nav {
    width: 100%;
    height: 64px;
    position: fixed;
    background-color:  ${({ theme } : {theme: any}) => theme.navBg};
    z-index: 100;
  }
  .nav__left > a,
  .nav__right > a {
    min-width: 80px;
    margin-right: 40px;
    font-size: 18px;
    padding: 20px 0;
    color: ${({ theme } : {theme: any}) => theme.navBgFont};
    font-weight: 500;
  }
  .nav__left > a:hover,
  .nav__left > a.active,
  .nav__right > a:hover,
  .nav__right > a.active {
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
    font-weight: 700;
  }
  .left-dashboard__wrapper {
    position:fixed;
    left:10px;
    top: 70px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme } : {theme: any}) => theme.navBg};
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
  .left-dashboard__wrapper > ul > li > a {
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
  .left-dashboard__wrapper > ul > li > a:hover,
  .left-dashboard__wrapper > ul > li > a:active,
  .left-dashboard__wrapper > ul > li > a.active {
    color: ${({ theme } : {theme: any}) => theme.colorRed};
  }
  .slick-dots li button:before {
    opacity: 1;
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${({ theme } : {theme: any}) => theme.colorRed};
  }
  .footer {
    background-color: ${({ theme } : {theme: any}) => theme.footerBg};
  }
  .footer-contents__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-container {
    background-color:${({ theme } : {theme: any}) => theme.navBg};
  }
  .post-card__items > p {
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
  .about-btn {
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
  .about-btn:hover {
    background-color:${({ theme } : {theme: any}) => theme.navBg};
  }
  .chat-bot-btn {
    background-color:${({ theme } : {theme: any}) => theme.chatbotBg};
  }
  .chat-container {
    background-color:${({ theme } : {theme: any}) => theme.navBg};
  }
  .form-container > input,
  .form-container > input::placeholder {
    color: ${({ theme } : {theme: any}) => theme.navBgHoverFont};
  }
`;