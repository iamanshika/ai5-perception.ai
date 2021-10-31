import { useState, useEffect, Fragment, createRef } from "react";
import { BASE_API_URL } from "./Common";
import { Transition } from "@headlessui/react";
import { RefreshIcon } from "@heroicons/react/solid";
import { createPopper } from "@popperjs/core";

function DisplayImage({
  image,
  featureMap,
  setfeatureMap,
  setshowFeatureMap,
  showFeatureMap,
}) {
  useEffect(() => {
    setfeatureMap([featureImg.props.src]);
  }, [showFeatureMap]);

  const img =
    image &&
    image.map((item, idx) => (
      <img
        key={idx}
        className="fit-picture"
        src={BASE_API_URL + "/get_image?path=" + item.image_path}
        alt="bird image"
      />
    ));

  let f_path = image[0]["image_path"].split("/");
  f_path[-1] = "0_s_0_a1.png";
  f_path = f_path.join("/");
  const featureImg = (
    <Transition
      show={true}
      appear={true}
      enter="ease-in duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-out duration-200"
    >
      <img
        className="object-contain transition transition-all"
        src={BASE_API_URL + "/get_feature_image?path=" + f_path}
        alt="bird feature map"
      />
    </Transition>
  );

  const [toolLefttipShow, setToolLefttipShow] = useState(false);
  const btnLRef = createRef();
  const toolLtipRef = createRef();
  const openLeftTooltip = () => {
    createPopper(btnLRef.current, toolLtipRef.current, {
      placement: "top",
    });
    setToolLefttipShow(true);
  };
  const closeLeftTooltip = () => {
    setToolLefttipShow(false);
  };

  function handleSubmit() {
    setshowFeatureMap(!showFeatureMap);
  }

  return (
    <div className="grid place-items-center w-9/12">
      {img}
      <div className="grid place-items-center">
        <div className="flex flex-row mt-2 space-x-6">
          <RefreshIcon
            className="h-10 w-10 inline-block text-blue-500 cursor-pointer hover:text-blue-700"
            onClick={() => window.location.reload()}
          ></RefreshIcon>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded self-center"
            onClick={handleSubmit}
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={btnLRef}
          >
            {showFeatureMap ? "Hide Perception" : "Perception"}
          </button>
        </div>
        <div
          className={
            (toolLefttipShow ? "" : "hidden ") +
            "bg-gray-400 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
          }
          ref={toolLtipRef}
        >
          <div>
            <div className="text-white p-3">
              See how Perception.AI interpreted your words
            </div>
          </div>
        </div>
      </div>

      {showFeatureMap ? featureImg : ""}
    </div>
  );
}

export default DisplayImage;
