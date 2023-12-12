import { useEffect } from "react";
import TimeCard from "./TimeCard";
import { useState } from "react";
import axios from "axios";

export default function Schedule() {

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getSchedule();
  }, [])

  const getSchedule = async () => {
    const { data } = await axios.get("https://script.google.com/macros/s/AKfycbyQWGIH2C58dZmTmJsye0jFWAy78irCDG65y__J5aMO9osghhw0wbTJvt16l20XSq8V/exec");
    setSchedule(data.map((item, index) => {
      return <TimeCard time={item.time} info={item.info} key={index} />
    }));
  }


  return (
    <section className="event-schedule" id="schedule">
      <h2>Schedule</h2>
      <div class="timeline text-black font-bold">
        {schedule}
      </div>
    </section>
  );
}
