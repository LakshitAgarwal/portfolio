import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .min(3, "Name must be 3 characters or more")
        .max(20, "Name must be 20 characters or less")
        .required("Name Is Required*"),
      from_email: Yup.string()
        .email("Invalid email address*")
        .required("Email Is Required*"),
      message: Yup.string().required("Message Is Required*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("access_key", "6b501cef-4db1-4aa1-b516-badbbf0c80c9"); // Your Web3 Forms API key
      formData.append("name", values.from_name);
      formData.append("email", values.from_email);
      formData.append("message", values.message);

      const json = JSON.stringify(Object.fromEntries(formData));

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
          setMessageSent(true);
          resetForm();
          console.log("Success:", res);
        } else {
          console.log("Error:", res);
        }
      } catch (error) {
        console.error("Failed to send message:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="py-20">
      <div className="text-white w-fit mx-auto text-5xl my-5 mb-20">
        <span className="josefin-sans-light">Contact </span>
        <span className="josefin-sans-font">Me</span>
      </div>
      <div className="w-[90%] mx-auto mt-10 mb-36 lg:w-[85%]">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <motion.h1
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-3xl my-4 font-bold text-purple-50"
            >
              I'm open to new projects and opportunities. Feel free to reach
              out!
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-300 my-6 mb-10"
            >
              Have questions or need assistance? I am here to help. Reach out to
              me for inquiries or any information you need.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col lg:flex-row"
            >
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-600 mb-1 border-b-[3px] border-purple-500">
                  Address
                </h1>
                <p className="text-lg w-4/5 text-gray-300 mt-4 my-1">
                  Agarwal Enterprises, near ITO, Bikaner
                </p>
              </div>
              {/* <div>
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-600 mb-1 border-b-[3px] border-purple-500">
                  Working Hours
                </h1>
                <p className="text-lg text-gray-300 mt-4 mb-3">
                  Mon-Fri: 10:00am - 5:00pm
                </p>
                <p className="text-lg text-gray-300 my-3">
                  Saturday: 9:00 am - 4:00 pm
                </p>
                <p className="text-lg text-gray-300 my-3">Sunday: Closed</p>
              </div> */}
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col lg:flex-row mt-5"
            >
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-600 mb-1 border-b-[3px] border-purple-500">
                  Details
                </h1>
                <p className="text-lg text-gray-300 my-2 mt-4">
                  +91-9511517845
                </p>
                <p className="text-lg text-gray-300 ">lakshit7811@gmail.com</p>
              </div>
              <div className="md:mx-auto">
                <p className="text-2xl dm-sans-bold w-fit text-purple-600 mb-1 border-b-[3px] border-purple-500">
                  Follow Me On
                </p>
                <div className="flex text-3xl mt-4 gap-6">
                  <a
                    href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="https://github.com/LakshitAgarwal" target="_blank">
                    <FaGithub className="text-white" />
                  </a>
                  <a
                    href="https://x.com/LakshitAgarwal7"
                    target="_blank"
                    className="text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/lakshit.7811/"
                    target="_blank"
                    className="text-pink-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Form */}
          <motion.div
            viewport={{ once: true }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 my-auto"
          >
            <form
              className="bg-purple-50 p-5 rounded-lg"
              onSubmit={formik.handleSubmit}
            >
              <h1 className="text-2xl dm-sans-bold text-purple-900 mb-5">
                Send a Message
              </h1>

              <label
                className={`block ${
                  formik.touched.from_name && formik.errors.from_name
                    ? `text-red-500`
                    : `text-purple-700`
                }`}
              >
                {formik.touched.from_name && formik.errors.from_name
                  ? formik.errors.from_name
                  : "Name"}
              </label>
              <input
                className="text-purple-900 w-full p-2 bg-purple-200 rounded-lg my-3"
                type="text"
                name="from_name"
                placeholder="Name"
                value={formik.values.from_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label
                className={`block ${
                  formik.touched.from_email && formik.errors.from_email
                    ? `text-red-500`
                    : `text-purple-700`
                }`}
              >
                {formik.touched.from_email && formik.errors.from_email
                  ? formik.errors.from_email
                  : "Email"}
              </label>
              <input
                className="w-full p-2 bg-purple-200 text-purple-900 rounded-lg my-3"
                type="text"
                name="from_email"
                placeholder="Email"
                value={formik.values.from_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label
                className={`block ${
                  formik.touched.message && formik.errors.message
                    ? `text-red-500`
                    : `text-purple-700`
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Message"}
              </label>
              <textarea
                className="w-full bg-purple-200 text-purple-900 p-2 rounded-lg h-40 my-3"
                name="message"
                placeholder="Your Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <button
                type="submit"
                className="w-full btn-grad bg-purple-800 text-white text-lg font-semibold px-5 py-2 rounded-lg hover:bg-purple-900 transition-all ease-in-out duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {messageSent && (
                <p className="text-green-500 mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
