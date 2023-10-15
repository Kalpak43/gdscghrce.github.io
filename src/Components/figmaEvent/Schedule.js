import TimeCard from "./TimeCard";

export default function Schedule() {
  return (
    <section className="event-schedule" id="schedule">
      <h2>Schedule</h2>
      <div class="timeline text-black font-bold">
        <TimeCard time={"8:30AM"} info={"Registration starts"} />
        <TimeCard time={"9:00-10:00AM"} info={"Breakfast"} />
        <TimeCard time={"10:00AM-12:00PM"} info={"Session 1 - Figma (Ek Design Ki Kahani)"} />
        <TimeCard time={"12:00-12:20PM"} info={"Sponsor Talk 1"} />
        <TimeCard time={"12:30-2:00PM"} info={"Lunch"} />
        <TimeCard time={"2:00-4:00PM"} info={"Session 2 - Illustrator (Design Ki Duniya Ka Papa)"} />
        <TimeCard time={"4:00-4:20PM"} info={"Sponsor Talk 2"} />
        <TimeCard time={"4:30-5:00PM"} info={"Talk by speaker (Revealing soon)"} />
        <TimeCard time={"5:00-6:00PM"} info={"Valedictory + Price Distribution"} />
      </div>
    </section>
  );
}
