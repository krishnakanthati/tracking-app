import React from "react";
import "./Chatbot.css";
import * as BiIcons from "react-icons/bi";

function Chatbot() {
  return (
    <div className="chatbot">
      <b>
        AI Chatbot <BiIcons.BiBot className="bot-icon" />
      </b>
    </div>
  );
}

export default Chatbot;
