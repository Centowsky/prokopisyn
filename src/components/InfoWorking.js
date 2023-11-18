import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faPhone,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

const InfoWorking = () => {
  const infoData = [
    {
      icon: faPhoneVolume,
      title: "1. Kontakt",
      description: "Zadzwoń do nas i zgłoś problem",
    },
    {
      icon: faClock,
      title: "2. Organizacja pomocy",
      description:
        "Organizujemy dla Ciebie pomoc, a ty możesz w tym czasie się odprężyć.",
    },
    {
      icon: faPhone,
      title: "3. Potwierdzenie",
      description:
        "Skontaktujemy się z tobą i potwierdzimy czas przybycia pomocy.",
    },
    {
      icon: faFlagCheckered,
      title: "4. Realizacja",
      description: "Realizujemy zamówioną przez Ciebie usługę.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around items-top py-8 text-base md:text-lg lg:text-xl xl:text-2xl">
      {infoData.map((info, index) => (
        <div
          key={index}
          className="text-center mb-8 md:mb-0 md:w-1/4 lg:w-1/5 xl:w-1/6 mx-auto"
        >
          <div className="bg-amber-400 p-6 rounded-full mx-auto inline-block aspect-ratio-square">
            <FontAwesomeIcon icon={info.icon} className="text-black text-xl" />
          </div>
          <h2 className="font-bold mt-2 text-lg md:text-xl ">{info.title}</h2>
          <p className="mt-1 px-2 text-xs md:text-sm lg:text-base xl:text-lg">
            {info.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoWorking;
