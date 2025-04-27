import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again!");
      });
  };

  return (
    <div className='border-2 border-gray-500 px-20'>
      <div className='flex mx-10 justify-between items-center my-10'>
        <h1 className='text-5xl font-bold'>Let's Work Together</h1>
        <button className='bg-[#6244C5] text-white font-normal text-base py-4 px-6 rounded-md hover:bg-[#6958a2]'>Say Hello</button>
      </div>
      <div className='flex w-full'>
        <div className='mx-10 w-2/5'>
          <div>
            <p className='text-gray-600'>Email:</p>
            <p className='text-2xl'>theanuraaag@gmail.com</p>
          </div>
        </div>
        <form className="mx-10 space-y-4 w-3/5" onSubmit={handleSubmit}>

          <div className="flex space-x-4">

            <div className="relative z-0 w-1/2 group">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-[#ced4da] rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#6244C5] peer"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 duration-300 scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#6244C5]"
              >
                Your Name
              </label>
            </div>


            <div className="relative z-0 w-1/2 group">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-[#ced4da] rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#6244C5] peer"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 duration-300 scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#6244C5]"
              >
                Your Email
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-[#ced4da] rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#6244C5] peer"
            />
            <label
              htmlFor="subject"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 duration-300 scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#6244C5]"
            >
              Subject
            </label>
          </div>


          <div className="relative z-0 w-full group">
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-[#ced4da] rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#6244C5] peer"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 duration-300 scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#6244C5]"
            >
              Your Message
            </label>
          </div>


          <button
            type="submit"
            className="bg-[#6244C5] text-white font-normal text-base py-4 px-6 rounded-md hover:bg-[#6958a2]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
