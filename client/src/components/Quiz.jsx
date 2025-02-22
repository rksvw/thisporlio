import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [quizData, setQuizData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!quizData.QUname || !quizData.animalLove) {
        console.log("Enter all the required fields");
    } else {
        navigate("/fgpass");
    }
    // if (){}
  };

  const handleChange = (e) => {
    setQuizData({...quizData, [e.target.name]: e.target.value.trim()});
    console.log(quizData);
  };

  return (
    <form
      id="qzC"
      className="fixed w-1/2 bottom-50% left-50% bg-amber-50"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-3xl" id="qzH">
        Quiz
      </h1>
      <p className="font-medium text-2xl qs">What's your name?</p>
      <input type="text" name="QUname" id="quiz0" onChange={handleChange} />
      <p className="font-medium text-2xl qs">You love animals?</p>
      <div className="font-medium text-2xl flex justify-around w-90" id="quiz1">
        <label htmlFor="animalLove">
          <input
            type="radio"
            name="animalLove"
            id="Yes"
            value="Yes"
            onClick={handleChange}
          />
          <span>Yes</span>
        </label>

        <label htmlFor="animalLove">
          <input
            type="radio"
            name="animalLove"
            id="No"
            value="No"
            onClick={handleChange}
          />
          <span>No</span>
        </label>
      </div>
      <button type="submit" id="qzBtn">
        Submit
      </button>
    </form>
  );
}

export default Quiz;
