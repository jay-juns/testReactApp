import React, { useState } from 'react';
import Navi from '../../components/Header/Navi';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ChatbotMain from '../../components/Chatbot/ChatbotMain/ChatbotMain';
import { Icon } from '@iconify/react';

const Main = ():JSX.Element => {
  const [showChatbot, setChatbot] = useState<boolean>(false);
  const handleChatbot = () => {
    const isShow = showChatbot;
    setChatbot(!isShow);
  }

    return ( 
      <div className='wrapper'>
        <Navi />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
        {showChatbot && (
          <ChatbotMain /> 
        )}
        
        <button className={showChatbot ? 'btn chat-bot-btn active' : 'btn chat-bot-btn'} onClick={() => handleChatbot()}>
          <Icon className='message' icon="bx:bx-message-square-dots" />
          <Icon className="close" icon="ci:close-small" />
        </button>
      </div>
    )
}

export default Main