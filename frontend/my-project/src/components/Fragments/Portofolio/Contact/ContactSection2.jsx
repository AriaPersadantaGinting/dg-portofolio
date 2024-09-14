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
      <section className="lg:mb-20 lg:pt-48">
        <div className="flex text-white ml-12">
          <div className="flex bg-[rgba(61,58,60,0.5)] lg:w-64 lg:px-2 lg:py-3 lg:rounded-lg lg:text-[14px] lg:ml-4">
            <img
              src="/src/assets/phone.svg"
              alt="phone"
              className="lg:w-5 lg:h-5 lg:ml-4 lg:mr-1 lg:mt-1" // Adjust size as needed
            />{" "}
            <span className="lg:mt-1">Whatsapp: 6282174100654</span>
          </div>
          <div className="flex bg-[rgba(61,58,60,0.5)] lg:w-64 lg:px-2 lg:py-3 lg:rounded-lg lg:text-[14px] lg:ml-4">
            <img
              src="/src/assets/number.svg"
              alt="phone"
              className="lg:w-5 lg:h-5 lg:mt-1 lg:ml-4 lg:mr-1" // Adjust size as needed
            />{" "}
            <span className="lg:mt-1">Number: 6281398710738</span>
          </div>
          <div className="flex bg-[rgba(61,58,60,0.5)] lg:w-64 lg:px-2 lg:py-3 lg:rounded-lg lg:text-[14px] lg:ml-4">
            <img
              src="/src/assets/email.svg"
              alt="email"
              className="lg:w-5 lg:h-5 lg:mt-0.5 lg:ml-4 lg:mr-1" // Adjust size as needed
            />{" "}
            <span className="lg:mt-1 lg:text-[12px]">
              Email: persadanta13@gmail.com
            </span>
          </div>
        </div>
        <form onSubmit={handleContact}>
          <div className="bg-[rgba(61,58,60,0.5)] mt-8 flex flex-wrap w-[68rem] ml-16 pb-10 rounded-xl">
            <div className="mt-4">
              <label
                htmlFor="name"
                className="text-white block mb-5 ml-[1.5rem]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name..."
                className="w-[21rem] ml-[1.5rem] mr-4 px-2 py-4 rounded-xl pl-4"
              ></input>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-white mb-5 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email..."
                className=" w-[21rem] pl-4 px-2 py-4 rounded-xl"
              ></input>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="text-white ml-2 mb-5 block">
                Subject
              </label>
              <input
                type="subject"
                name="subject"
                id="subject"
                placeholder="subject..."
                className=" w-[21rem] pl-4 px-2 py-4 ml-4 rounded-xl"
              ></input>
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="text-white ml-[1.5rem] mt-8 mb-5 block"
              >
                Message
              </label>
              <input
                type="message"
                name="message"
                id="message"
                placeholder="Write Your Message..."
                className=" w-[65rem] pl-4 px-2 py-12 ml-[1.5rem] rounded-xl"
              ></input>
            </div>
            <motion.div
              initial={{ background: "#ffffff" }}
              animate={isHovered ? "animate1" : "initial"}
              variants={variants}
              onClick={() => {}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-white w-64 px-2 py-4 rounded-xl mt-8 ml-6 flex justify-center cursor-pointer"
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
                className="lg:w-5 lg:h-5 lg:ml-2 lg:mt-[7px]" // Adjust size as needed
              />{" "}
            </motion.div>
          </div>
        </form>
      </section>
    </>
  );
};
export default ContactSection2;
