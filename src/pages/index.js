import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  // faGoogle,
  faInstagram,
  faTwitter,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { faShareSquare, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../styles/global.scss";
import * as info from "../data/info";
import { Helmet } from "react-helmet";

const calculateExperience = (
  startDate = new Date(),
  dateToCalculate = new Date()
) => {
  const startTime = new Date(startDate).getTime();
  const dateToCompare = new Date(dateToCalculate).getTime();
  const totalYears = (dateToCompare - startTime) / (365 * 24 * 60 * 60 * 1000);
  const [year, month] = Math.abs(totalYears).toFixed(1).split(".");
  const yfix = parseInt(year) > 1 ? "Years" : "Year";
  const mfix = parseInt(month) > 1 ? "Months" : "Month";
  return `${year} ${yfix}, ${month} ${mfix}`;
};

const IndexPage = () => {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${info.name} | ${info.designation}`,
          text: `Check out ${info.name} profile`,
          url: document.location.href,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the blog", error);
        });
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {info.name} - {info.designation} | Profile
        </title>
        <link rel="canonical" href={info.website} />
        <script
          src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
          user-profile="https://topmate.io/embed/profile/santhoshc?theme=e3e3e3"
          btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
          embed-version="v1"
          button-text="Schedule Appointment"
          position-right="30px"
          position-bottom="30px"
          custom-padding="0px"
          custom-font-size="16px"
          custom-font-weight="500"
          custom-width="200px"
          async="true"
          defer=""
        ></script>
      </Helmet>
      <div className="container mx-auto my-10 sm:px-20  flex justify-center">
        <div className=" rounded-xl overflow-hidden border w-full lg:w-4/12 md:w-4/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-2xl">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-center overflow-hidden">
                <img src={info.photo} alt="profilepic" />
              </div>
              <span className="pt-1 ml-2 font-bold text-purple-700 text-sm">
                {info.name}
                <p className="font-normal text-gray-500 text-sm">
                  {info.designation}, {calculateExperience(info.startdate)}
                </p>
              </span>
            </div>
          </div>
          <img className="h-100 w-full" src={info.photo} alt={info.name} />
          <div className="px-3 pb-2">
            <div className="pt-2">
              <a
                href={`mailto:${info.social.mail}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
              </a>
              <a href={info.social.linkedin} target="_blank" rel="noreferrer">
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href={info.social.github} target="_blank" rel="noreferrer">
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
              <a href={info.social.blog} target="_blank" rel="noreferrer">
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faChrome} />
                </i>
              </a>
              <a href={info.social.twitter} target="_blank" rel="noreferrer">
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a href={info.social.instagram} target="_blank" rel="noreferrer">
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>

              <button className="float-right" onClick={handleOnClick}>
                <i className="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faShareSquare} />
                </i>
              </button>
            </div>
            <div className="pt-1">
              <div className="mb-2 text-sm">
                {/* <span className="font-medium mr-2">{info.name}</span> */}
                {info.stack.map((t, i) => (
                  <span className="text-sm text-blue-700 font-medium" key={i}>
                    #{t}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
