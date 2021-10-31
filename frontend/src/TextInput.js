import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function TextInput({ submit }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
    // console.log('text', e.target.value)
  }

  function handleSubmit() {
    console.log(text);
    submit(text);
    setText("");
  }

  useEffect(() => {}, []);

  return (
    <div className="w-full grid">
      {/* <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> */}
      <label for="bird" className="text-xl">
        {/* <p className="text-lg">Tell us about a bird in your imagination:</p> */}
        <Typewriter
          options={{
            strings: [
              "Welcome to Perception.AI",
              "Describe a bird in your imagination",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </label>

      <textarea
        id="bird"
        name="bird"
        rows="2"
        cols="25"
        placeholder="What's on your mind?"
        className="mt-2 p-10 leading-normal rounded shadow-lg"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="mt-2 place-self-end">
        <button
          className={`{text? "cursor-not-allowed": ''} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded`}
          onClick={handleSubmit}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default TextInput;
