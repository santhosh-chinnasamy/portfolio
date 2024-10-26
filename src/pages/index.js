import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTwitter,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Helmet } from "react-helmet";
import * as info from "../data/info";
import "../styles/global.scss";

const calculateExperience = (
  startDate = new Date(),
  dateToCalculate = new Date()
) => {
  const startTime = new Date(startDate).getTime();
  const dateToCompare = new Date(dateToCalculate).getTime();
  const totalYears = (dateToCompare - startTime) / (365 * 24 * 60 * 60 * 1000);
  const [year, month] = Math.abs(totalYears).toFixed(1).split(".");
  const yearSuffix = parseInt(year) > 1 ? "Years" : "Year";
  const monthSuffix = parseInt(month) > 1 ? "Months" : "Month";
  return `${year} ${yearSuffix}, ${month} ${monthSuffix}`;
};

const IndexPage = () => {
  const handleShare = () => {
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
          console.error("Something went wrong sharing the profile", error);
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
                <img src={info.photo} alt={info.name} />
              </div>
              <span className="pt-1 ml-2 font-bold text-gray-700 text-sm">
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
                title="email"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
              </a>
              <a
                href={info.social.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a
                href={info.social.github}
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
              <a
                href={info.social.stackoverflow}
                target="_blank"
                rel="noreferrer"
                title="Stack Overflow"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faStackOverflow} />
                </i>
              </a>
              <a
                href={info.social.blog}
                target="_blank"
                rel="noreferrer"
                title="Bleedbytes Blog"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faWordpress} />
                </i>
              </a>
              <a
                href={info.social.twitter}
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a
                href={info.social.instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>

              <button
                className="float-right"
                onClick={handleShare}
                title="Share"
              >
                <i className="p-2 cursor-pointer text-xl text-gray-700">
                  <FontAwesomeIcon icon={faShareSquare} />
                </i>
              </button>
            </div>
            <div className="pt-1">
              <div className="mb-2 text-sm">
                {info.skills.map((skill, i) => (
                  <span className="text-sm text-blue-700 font-medium" key={i}>
                    #{skill}{" "}
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
