import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="Contact">
      <h2>Contact Us</h2>
      <div className="grid-l">
        <p>
        Want to send feedback? Need details about events? Let us know.
        </p>
        <Link to="/contact-us" className="btn">Drop us a Mail</Link>
      </div>
    </section>
  );
};

export default Contact;
