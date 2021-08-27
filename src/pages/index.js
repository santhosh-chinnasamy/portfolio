import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faGoogle,
  faInstagram,
  faTwitter,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import "../styles/global.scss";
import * as info from "../data/info";

const calculateExperience = (
  startDate = new Date(),
  dateToCalculate = new Date()
) => {
  const startTime = new Date(startDate).getTime();
  const dateToCompare = new Date(dateToCalculate).getTime();
  const totalYears = (dateToCompare - startTime) / (365 * 24 * 60 * 60 * 1000);
  const postfix = parseInt(totalYears) > 1 ? "Years" : "Year";
  return `${Math.abs(totalYears).toFixed(1)} ${postfix} of experience`;
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
      <div class="container mx-auto my-10 sm:px-20  flex justify-center">
        <div class=" rounded-xl overflow-hidden border w-full lg:w-4/12 md:w-4/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-2xl">
          <div class="w-full flex justify-between p-3">
            <div class="flex">
              <div class="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-center overflow-hidden">
                <img src={info.photo} alt="profilepic" />
              </div>
              <span class="pt-1 ml-2 font-bold text-purple-700 text-sm">
                {info.name}
                <p class="font-normal text-gray-500 text-sm">
                  {info.designation}, {calculateExperience(info.startdate)}
                </p>
              </span>
            </div>
          </div>
          <img class="h-100 w-full" src={info.photo} alt={info.name} />
          <div class="px-3 pb-2">
            <div class="pt-2">
              <a
                href={`mailto:${info.social.mail}`}
                target="_blank"
                rel="noreferrer"
              >
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faGoogle} />
                </i>
              </a>
              <a href={info.social.linkedin} target="_blank" rel="noreferrer">
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href={info.social.github} target="_blank" rel="noreferrer">
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
              <a href={info.social.twitter} target="_blank" rel="noreferrer">
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faChrome} />
                </i>
              </a>
              <a href={info.social.blog} target="_blank" rel="noreferrer">
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a href={info.social.instagram} target="_blank" rel="noreferrer">
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>

              <button class="float-right" onClick={handleOnClick}>
                <i class="p-2 cursor-pointer text-xl text-purple-700">
                  <FontAwesomeIcon icon={faShareSquare} />
                </i>
              </button>
            </div>
            <div class="pt-1">
              <div class="mb-2 text-sm">
                {/* <span class="font-medium mr-2">{info.name}</span> */}
                {info.stack.map((t, i) => (
                  <span class="text-sm text-blue-700 font-medium" key={i}>
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
