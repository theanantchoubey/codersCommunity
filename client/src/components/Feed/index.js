import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import Main from "./Main/Main";
import axios from "axios";
import { DATABASE_URL } from "../../helper";
function Index() {
  const [questions, setQuestions] = useState([]);

  async function getQuestion(isCancelled) {
    await axios.get(`${DATABASE_URL}/api/question`).then((res) => {
      if (!isCancelled) setQuestions(res.data.reverse());
    });
  };

  useEffect(() => {
    let isCancelled = false;
    
    getQuestion(isCancelled);
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
