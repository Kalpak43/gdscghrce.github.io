import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import img_1 from "../../Images/certificateImages/certificate-image-1.jpeg";
import img_2 from "../../Images/certificateImages/certificate-image-2.jpeg";
import img_3 from "../../Images/certificateImages/certificate-image-3.jpeg";
import img_5 from "../../Images/certificateImages/certificate-image-5.jpeg";
import img_6 from "../../Images/certificateImages/certificate-image-6.jpeg";

export default function CloudStudyJamVolunteer () {
    let { refID } = useParams();

    //   const [schedule, setSchedule] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [fetched, setFetched] = useState(0);
  
    let imgArr = [img_1, img_2, img_3, img_5, img_6];
  
    let randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const { data } = await axios.get(
        `https://script.google.com/macros/s/AKfycbwm7tPnCfww-V5TC7QOoLN26-Q8aWe9K239DVI6K5VqCw-WgvXqLA-bbpF-6Roz6W9Bxg/exec?Reference=${refID}`
      );
  
      setFetched((x) => x + 1);
  
      setFetchedData((x) => [...x, ...data]);
    };
  
    console.log(fetchedData);

    return (
        <section className="Certificate-Page h-screen flex justify-center flex-col items-center gap-4">
        {fetched > 0 ? (
          fetchedData.length === 0 ? (
            <p className="text-center">No Certificate Found. Try Refreshing the Page.</p>
          ) : (
            <>
              <div className="h-40 aspect-square border-2 rounded-full">
                <img
                  src={randomImg}
                  className="object-cover rounded-full"
                  alt="avatar"
                />
              </div>
              <div className="grid md:w-1/2 h-fit place-items-center text-center">
                <p>Certificate ID</p>
                <p>{fetchedData[0].ID}</p>
                <p>Name</p>
                <p>{fetchedData[0].FullName}</p>
                {/* {fetchedData[0].Email !== "NULL" && (
                  <>
                    <p>Email</p>
                    <p>{fetchedData[0].Email}</p>
                  </>
                )} */}
                <p>Date of Event</p>
                <p>4 Sep - 2 Oct, 2023</p>
              </div>
              <p className="font-xl">GDSC Thanks you for your contribution in the event.</p>
            </>
          )
        ) : (
          <div className="m-auto font-xl">Loading...</div>
        )}
      </section>
    )
}