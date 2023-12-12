export default function TimeCard({ time, info, key }) {

  return (
    <div class="flex" data-aos="fade-in" key={key}>
      <div class="timeline-item timeline-item-1 border-2 border-black bg-white relative text-center">
        <div className="time">
          <div className="flex items-center justify-center">
            <h4 className=" text-xl">{time}</h4>
          </div>
        </div>
        <div className="time-info">
          <div className="flex items-center justify-center">
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
