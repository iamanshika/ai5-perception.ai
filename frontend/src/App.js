import React, { useState, Fragment } from "react";
import "./App.css";
import Home from "./Home";
import TextInput from "./TextInput";
import DisplayImage from "./DisplayImage";
import Loading from "./Loading";
import DataService from "./DataService";
import birds_graphic from "./video/birds_graphic.mp4";
import birds_2 from "./video/birds_graphic.mp4";
import birds_small from "./video/birds_graphic.mp4";
import { Transition } from "@headlessui/react";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [isBirdText, setIsBirdText] = useState(false);
  const [text, setText] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [featureMap, setfeatureMap] = useState([]);
  const [showFeatureMap, setshowFeatureMap] = useState(false);

  function submit(text) {
    setisLoading(!isLoading);

    DataService.Text2Image({ text: text })
      .then(function (response) {
        console.log(response.data, "res from appjs");
        var ops = [...outputs];
        setOutputs([]);
        //ops.push(response.data);
        console.log(ops, "ops");
        ops.splice(0, 0, response.data);
        setOutputs(ops);
      })
      .then(() => {
        setisLoading(false);
        setIsBirdText(true);
      });
  }

  const displayComponent = isLoading ? (
    <Loading />
  ) : isBirdText ? (
    <DisplayImage
      image={outputs}
      setfeatureMap={setfeatureMap}
      setshowFeatureMap={setshowFeatureMap}
      showFeatureMap={showFeatureMap}
    />
  ) : (
    <TextInput submit={submit} />
  );

  return (
    <div className="grid place-items-center h-screen">
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        width="100%"
        // height="100%"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          objectFit: "cover",
          // position: "absolute",
          // width: "100%",
          // height: "100%",
          // left: "50%",
          // right: "50%",
          objectFit: "cover",
          // transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={birds_small} type="video/mp4" />
      </video>
      <div className="grid place-items-center shadow p-10 rounded-3xl mix-blend-normal bg-blue-100 bg-opacity-80 lg:max-w-3xl">
        {displayComponent}
      </div>
      <div></div>
    </div>
  );
}

export default App;
