const ContactForm = () => (
  <form
    title="Contact Ryan Killeen"
    name="contact"
    data-netlify="true"
    className="contact-form"
  >
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="from">From</label>
      <input
        id="from"
        name="from"
        placeholder="eg. Meghan, or luna@bestdog.com"
      ></input>

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Send me questions, comments, or unsolicited praise!"
      ></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default ContactForm;
