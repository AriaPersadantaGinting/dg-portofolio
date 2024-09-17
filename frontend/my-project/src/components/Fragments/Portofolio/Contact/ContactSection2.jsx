import { useState } from "react";
import { motion } from "framer-motion";
import authService from "../../../../service/auth-service";

const ContactSection2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleContact = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    try {
      await authService.fetchPostContact(data, (status, res) => {
        if (status) res.data.data;
      });
    } catch (error) {
      throw new error();
    }
  };
  const variants = {
    animate1: {
      background: "linear-gradient(to right, #1CD8D2, #24639b, #93EDC7)",
    },
    animate2: {
      color: "#ffffff",
    },
  };
  return (
    <>
      <section className="py-32">
        <div className="flex flex-wrap w-full sm:justify-center text-white">
          <div className="bg-[rgba(61,58,60,0.5)] flex lg:w-[15.5rem] md:w-[15.5rem] md:mb-3 py-3 rounded-xl sm:w-[15.5rem] sm:mb-3 mb-3 ml-2">
            <img
              className="w-5 h-5 mt-1 lg:ml-6 md:ml-6 sm:ml-6 ml-3 mr-1"
              src="/src/assets/phone.svg"
              alt=""
            />
            whatsapp: 082168470920
          </div>
          <div className="bg-[rgba(61,58,60,0.5)] flex lg:w-[15.5rem] lg:ml-2 md:w-[15.5rem] md:mb-3 md:ml-2 sm:w-[15.5rem] sm:mb-3 sm:ml-2 mb-3 w-[14rem] ml-2 py-3 rounded-xl">
            <img
              className="w-5 h-5 mt-1 lg:ml-8 md:ml-8 sm:ml-8 ml-3  mr-1"
              src="/src/assets/number.svg"
              alt=""
            />
            number: 082168470920
          </div>
          <div className="bg-[rgba(61,58,60,0.5)] flex lg:w-[19rem] lg:ml-2 md:w-[19rem] ml-2 m:w-[19rem] w-[17.5rem] mb-3 py-3 h-12 rounded-xl">
            <img
              className="w-5 h-5 mt-1 ml-3 mr-1 md:ml-6 sm:ml-6"
              src="/src/assets/email.svg"
              alt=""
            />
            email: persadanta13@gmail.com
          </div>
        </div>
        <form onSubmit={handleContact}>
          <div className="bg-[rgba(61,58,60,0.5)] lg:w-[95vw] lg:mx-[1.3rem] md:w-[95vw] md:mx-[1.1rem] sm:w-[95vw] sm:mx-[0.75rem] w-[92vw] mx-[0.72rem]  mt-8 flex flex-wrap justify-center pb-10 rounded-xl">
            <div className="mt-4">
              <label htmlFor="name" className="text-white block mb-5 ml-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name..."
                className="lg:w-[29vw] lg md:w-[28vw] sm:w-[40vw] sm:mr-2 w-[86vw] px-2 py-4 rounded-xl pl-4"
              ></input>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-white ml-1 mb-5 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email..."
                className="lg:w-[29vw] md:w-[28vw] sm:w-[40vw] w-[86vw] pl-4 px-2 py-4 rounded-xl"
              ></input>
            </div>
            <div className="mt-4">
              <label
                htmlFor="subject"
                className="text-white sm:ml-4 ml-1 mb-5 block"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject..."
                className=" lg:w-[29vw] md:w-[28vw] sm:w-[82vw] sm:mx-2  w-[86vw] pl-4 px-2 py-4 rounded-xl"
              ></input>
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="text-white lg:ml-[1.5rem] md:ml-[0.7rem] sm:ml-4 ml-1 mt-8 mb-5 block"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Write Your Message..."
                className="lg:w-[89vw] md:w-[87vw] md:mx-[0.5rem] sm:w-[82vw] sm:mx-2 w-[86vw] px-2 h-[8rem] pb-20 rounded-xl"
              ></input>
            </div>
            <motion.div
              initial={{ background: "#ffffff" }}
              animate={isHovered ? "animate1" : "initial"}
              variants={variants}
              onClick={() => {}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-white w-64 px-2 py-4 rounded-xl mt-8   flex justify-center cursor-pointer"
            >
              <motion.button
                initial={{ color: "#000000" }}
                animate={isHovered ? "animate2" : "initial"}
                variants={variants}
                className="text-black font-bold mt-1"
                type="submit"
              >
                SEND ME MESSAGE
              </motion.button>
              <img
                src="/src/assets/email2.svg"
                alt="phone"
                className="lg:w-5 lg:h-5 lg:ml-2 lg:mt-[7px] md:w-5 md:h-5 md:ml-2 md:mt-[7px] sm:w-5 sm:h-5 sm:ml-2 sm:mt-[7px] w-5 h-5 ml-2 mt-[7px]" // Adjust size as needed
              />{" "}
            </motion.div>
          </div>
        </form>
      </section>
    </>
  );
};
export default ContactSection2;
