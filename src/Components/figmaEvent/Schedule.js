export default function Schedule() {
  return (
    <section className="event-schedule" id="schedule">
      <h2>Schedule</h2>
      <div class="timeline text-black font-bold">
        <div class="flex">
          <div class="timeline-item timeline-item-1 border-2 border-black bg-white relative text-center">
            <div className="border-2 border-b-black">
              <div className="flex items-center justify-center">
                <h4 className=" text-xl">10:00AM</h4>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <p>
                  Check-in Starts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="timeline-item timeline-item-2 h-24 border-2 border-black bg-white relative">
            <div className="border-2 border-b-black">
              <div className="flex items-center justify-center">
                <h4 className=" text-xl">10:30AM</h4>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <p>
                  Inaguration Ceremony
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="timeline-item timeline-item-1 h-24 border-2 border-black bg-white relative">
            <div className="border-2 border-b-black">
              <div className="flex items-center justify-center">
                <h4 className=" text-xl">11:30AM</h4>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <p>
                  Speaker Session starts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="timeline-item timeline-item-2 timeline-item-last h-24 border-2 border-black bg-white relative">
            <div className="border-2 border-b-black">
              <div className="flex items-center justify-center">
                <h4 className=" text-xl">5:30AM</h4>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center">
                <p>
                  Event Ends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
