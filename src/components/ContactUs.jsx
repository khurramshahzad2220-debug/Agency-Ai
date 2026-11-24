import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <div

      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ amount: 0.5, once: true }}

        className="grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-5"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.person_icon} alt="person-icon" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.email_icon} alt="email-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-primary flex w-max cursor-pointer gap-2 rounded-full px-10 py-3 text-sm text-white hover:scale-103"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow-icon" className="w-4" />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactUs;
