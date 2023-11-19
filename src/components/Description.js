import React from "react";
import imageDes1 from "../assets/description1.jpeg";
import imageDes2 from "../assets/description2.jpeg";

const services = [
  "Bez względu na warunki atmosferyczne, szybko dojedziemy we wskazane przez Ciebie miejsce i pomożemy.",
  "Jeśli kłopoty spotkały Cię na trasie S3  między Gorzowem Wlkp a Szczecinem, błyskawicznie pojawimy się na miejscu.",
  "Wyróżnia nas flota aut specjalistycznych pracujących w trudnym terenie, miła i profesjonalna obsługa oraz konkurencyjne ceny.",
  "W naszej ofercie, oprócz profesjonalnej pomocy drogowej, znajdą Państwo także monitorowany całodobowy parking, gdzie Twoje auto może przeczekać do czasu odholowania do naprawy.",
  "Dodatkowo, z dużym rabatem, wynajmiesz u nas auto zastępcze osobowe " +
    "oraz dostawcze. Jeżeli masz coś do przewiezienia a nie masz czym – " +
    "tym też się zajmiemy.",
];

const areas = [
  "Gorzów Wlkp.",
  "Barlinek",
  "Myślibórz",
  "Dębno",
  "Cała trasa S3 pomiędzy Gorzowem Wlkp. a Szczecinem",
];

const Description = () => {
  return (
    <>
      <div
        id="oferta"
        className="flex flex-col md:flex-row py-8 items-center md:items-start mx-4 md:mx-8 my-6 md:my-10 border-b-2 border-black"
      >
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={imageDes1}
            alt="Zdjęcie na drodze S3"
            className="w-full h-auto rounded-lg"
          />
          <p className="italic font-light text-justify">
            Każde zdarzenie drogowe, awaria auta, rozładowany akumulator czy
            brak paliwa w baku, zawsze spada na nas w najmniej oczekiwanym
            momencie. Pamiętaj, że w takich chwilach jesteśmy po to, by Ci
            pomóc. Nasze usługi świadczymy{" "}
            <span className="text-amber-500 font-semibold">24h/dobę</span>.
          </p>
        </div>

        <div className="md:w-1/2 md:ml-6">
          <h2 className="text-center text-3xl italic mb-4 font-bold">
            Oferujemy usługi w szerokim zakresie
          </h2>
          <ul className="flex flex-wrap items-center justify-center list-none p-0">
            {services.map((service, index) => (
              <li key={index} className="flex items-center text-lg mr-4 mb-2">
                <span className="mr-2">&#8226;</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-8 items-center md:items-start mx-4 md:mx-8 my-6 md:my-10">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-center text-3xl italic mb-4 font-bold  text-amber-500">
            Nasze główne obszary działania
          </h2>
          <ul className="flex flex-wrap items-center justify-center list-none p-0 uppercase font-semibold  text-amber-500">
            {areas.map((area, index) => (
              <li
                key={index}
                className="flex items-center text-center mr-4 mb-2 text-xl"
              >
                <span className="mr-2">&#8226;</span>
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg space-y-4 font-light text-center">
            <p>Obsługujemy kolizje drogowe, wypadki, awarie.</p>
            <p>
              Oferujemy usługi związane z autami osobowymi, ciężarowymi i
              dostawczymi.
            </p>
            <p>Serdecznie zapraszamy do kontaktu.</p>
            <p>W razie pytań, służymy pomocą.</p>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-6">
          <img
            src={imageDes2}
            alt="Zdjęcie w lesie."
            className="w-full h-auto rounded-lg"
          />
          <p className="italic font-light text-justify">
            Aby ułatwić naszym Klientom kontakt, wszystkie nasze usługi można
            załatwić dzwoniąc tylko pod jeden numer telefonu. Pomoc drogowa 24h,
            ratownictwo drogowe, holowanie, assistance, parking, transport
            ładunków, wynajem auta zastępczego – dzwoń pod numer{" "}
            <a href="tel:+48729339051">
              <span className="text-amber-500 font-semibold">729 339 051</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
