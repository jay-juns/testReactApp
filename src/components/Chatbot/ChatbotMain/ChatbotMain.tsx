import React, { useState } from "react";
import Chats from '../Chat/Chat';
import { analyzeNextSteps } from "../Analyze/Analyze";
import { Icon } from '@iconify/react';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface ResponseBotObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const ChatbotMain: React.FC = () => {
  const [userResponse, setUserResponse] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    purpose: "",
    message: "",
    sender: "bot"
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
  const setNextStep = (response: string) => {
    setStep(prevState => prevState + 1);
    setSendUserResponse(response);
    let res = analyzeNextSteps(step, response);
    setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(userResponse);
  };

  return (
      <div className="chat-container">
        <Scrollbars>
          <div className="chat-inside__wrapper">
            <Chats
              userResponse={userResponse}
              botResponse={botResponse}
              sendUserResponse={sendUserResponse}
              optionClick={optionClick}
            />
            <form onSubmit={e => handleSubmit(e)} className="form-container">
              <input
                onChange={e => handleInputChange(e)}
                value={userResponse}
                placeholder="메세지를 입력하세요"
              />
              <button className="btn">
                <Icon icon="carbon:send-alt" />  
              </button>
            </form>
          </div>
        </Scrollbars>
      </div>
  );
};

export default ChatbotMain;
