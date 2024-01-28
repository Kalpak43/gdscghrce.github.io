import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function EventCard(props) {
  const data = props.data;

  const sDateObject = new Date(data.startDate);
  const sday = sDateObject.getDate();
  const smonth = sDateObject.toLocaleString('default', { month: 'short' });
  const syear = sDateObject.getFullYear();

  const eDateObject = new Date(data.endDate);
  const eday = eDateObject.getDate();
  const emonth = eDateObject.toLocaleString('default', { month: 'short' });
  const eyear = eDateObject.getFullYear();

  const sString = `${sday} ${smonth}, ${syear}`;
  const eString = `${eday} ${emonth}, ${eyear}`;

  return (
    <div className="mcard" key={data.key}>
      <div className="flex flex-col items-center">
        <div className="member-img mx-auto">
          <img src={data.img} className="" alt={data.title + " logo"}/>
        </div>
        <h3 className="text-center text-lg font-semibold mt-3">{data.title}</h3>
        <p className="text-center my-1 flex gap-2 items-center justify-center">
          {
            eString === sString ? (
              <span className="text-center">{sString}</span>
            ) : (
              <span className="text-center">{sString} - {eString}</span>
            )
          }
        </p>
        {data.description ? (
          <p className="text-center my-2 flex gap-2 items-center justify-center">
            {data.description}
          </p>
        ) : null}
        <p className="text-center mb-4">
          <FaLocationDot className="inline text-lg mb-1" /> {data.location}
        </p>
        {
          data.learnMoreLink ? (
            <a href={data.learnMoreLink} className="btn">
              Learn More
            </a>
          ) : null
        }
        {
          data.registerLink ? (
            <a href={data.registerLink} className="btn">
              Register Now
            </a>
          ) : null
        }

      </div>
    </div>
  );
}
