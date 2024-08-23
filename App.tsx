import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [currentChat, setCurrentChat] = useState([]);
    const [selectedChatId, setSelectedChatId] = useState(null);
  
export default App;
