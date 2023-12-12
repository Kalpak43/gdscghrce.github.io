export default function Loader() {
  const hexGrp = (
    <div class="hexagon__group">
      <div class="hexagon__sector"></div>
      <div class="hexagon__sector"></div>
      <div class="hexagon__sector"></div>
      <div class="hexagon__sector"></div>
      <div class="hexagon__sector"></div>
      <div class="hexagon__sector"></div>
    </div>
  );

  const todayDate = new Date();
  const eventDate = new Date("Oct 21, 2023")

  let distance = eventDate - todayDate
  let days = (Math.floor(distance / (1000 * 60 * 60 * 24)));

  return (
    <div className="loader">
      <div class="hexagon" aria-label="Animated hexagonal ripples">
        {hexGrp}
        {hexGrp}
        {hexGrp}
        {hexGrp}
        {hexGrp}
        {hexGrp}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <p aria-label="Loading">Loading</p>
    </div>
  );
}
