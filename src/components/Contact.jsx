import "../panth.css"; // Make sure to create and style this CSS file
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const ContactForm = () => {
  const [value, setValue] = useState({ value: "india", label: "India" });
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="p-contact">
      <div className="p-contact-text">
        <div className="p-contact-content">
          <h1>Contact Us</h1>
          <p>For inquiries or assistance, please reach out to us.</p>
        </div>
      </div>
      <form
        className="p-contact-form"
        action="https://formspree.io/f/xrgndjlp"
        method="post"
      >
        <div className="p-name">
          <div className="p-name-container">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              placeholder="John"
              type="text"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div className="p-name-container">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              placeholder="Doe"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            placeholder="you@company.com"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="p-phone-number">
          <label htmlFor="phoneNumber">
            Phone number <span>*</span>
          </label>

          <div className="p-selector">
            <Select options={options} value={value} onChange={changeHandler} />
            <input
              placeholder="+91 9999999999"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              style={{ width: "75%" }}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Type here"
            id="message"
            name="message"
            rows={5}
            style={{ height: "147px", resize: "none" }}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
