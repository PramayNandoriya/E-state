import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea11520d-b800-465c-9d76-dcc49b625288");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className='flex flex-col justify-center items-center container mx-auto p-14 mb:px-20 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 pr-3'>Contact
        <span className='underline underline-offset-4 decoration-1 under font-light pl-4'>With Us</span></h1>
      <p className='text-grey-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let’s Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2x2 mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'> Your Name
            <input type='text' placeholder='Enter Your Name' name='name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
          </div>
          <div className='w-full md:w-1/2  text-left md:pl-4'> Your Email
            <input type='email' placeholder='Enter Your Email' name='email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
          </div>
        </div>

        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='message' placeholder='Enter Your Message' required></textarea>
        </div>

        <div className='text-center'>
          <button className='bg-blue-600 text-white p-2 w-50 border-none rounded cursor-pointer'>{result ? result : "Send Message"}</button>
        </div>
      </form>

    </motion.div>
  );
}

export default ContactUs;