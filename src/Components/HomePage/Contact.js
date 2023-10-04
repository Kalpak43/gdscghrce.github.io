const Contact = () => {
  return (
    <div className="Contact text-center">

      <div
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
        data-aos="fade-down"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 text-center sm:text-xl">
          Want to send feedback? Need details about events? Let us know.
        </p>

        <a className="about-btn" href="/contactus">
          Drop Us a Mail
        </a>
      </div>
    </div>
  );
};

export default Contact;
