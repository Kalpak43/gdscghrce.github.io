import Backgroound from "../Components/Background";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex jsutify-center items-center flex-col py-20 md:px-20 px-4">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
        Drop a Mail
      </h2>
      <form
        action="https://submit-form.com/ORVh6bP2"
        className="space-y-8 md:w-1/2 w-full"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="shadow-sm border border-gray-300 bg-gray-100 text-sm text-black rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button type="submit" className="about-btn">
          Send email
        </button>
      </form>

      <Backgroound/>    
    </div>
  );
}
