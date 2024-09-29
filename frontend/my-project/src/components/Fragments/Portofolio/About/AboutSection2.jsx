/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutSection2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    // Set to mobile view if window width is less than 768px (Tailwind's md breakpoint)
    setIsMobile(window.innerWidth > 600);
  };

  useEffect(() => {
    // Initial check for window size
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const variants = {
    initial1: {
      x: -500,
      opacity: 0,
    },
    animate1: {
      x: [0, 70, 0],
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    initial2: {
      x: 500,
      opacity: 0,
    },
    animate2: {
      x: [0, -15, 0],
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    initila3: {
      x: [0],
      opacity: 1,
    },
    animate4: {
      x: [0],
      opacity: 1,
    },
  };
  return (
    <>
      <section className="flex flex-wrap pb-28 mb-24 overflow-hidden">
        <div className="lg:ml-[6vw] lg:mr-20 md:ml-[14vw] md:mr-20 md:mb-2 sm:ml-[14vw] sm:mr-20 sm:mb-2 mx-4  mb-4">
          <motion.img
            src="/src/assets/bg32.jpg"
            initial={isMobile ? "initial1" : ""}
            whileInView={isMobile ? "animate1" : ""}
            variants={variants}
            className="lg:w-[35vw] lg:h-[32rem] md:w-[70vw] md:h-[40rem] sm:w-[70vw] sm:h-[40rem] w-[87vw] ml-2 h-[35rem] rounded-xl"
            alt="profile.img"
          />
        </div>
        <div className="lg:w-[45vw] lg:ml-8 md:w-[70vw] md:ml-[14vw] sm:w-[70vw] sm:ml-[14vw] sm:pb-4 w-[90vw] ml-[3.5vw]  pb-4">
          <motion.article
            initial={isMobile ? "initial2" : ""}
            whileInView={isMobile ? "animate2" : ""}
            variants={variants}
            className="lg:mt-5 md:mt-4 md:leading-[1.7rem] text-white lg:text-[1rem] ml-2 text-[1rem]"
          >
            <h2 className="lg:text-[2.6rem] md:text-[2.6rem] sm:text-[2.6rem] text-[2.4rem] tracking-tight mb-4 font-suse py-3 bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200]">
              Approach And Philosophy
            </h2>
            <p className="mb-8">
              Halo, saya Aria Persadanta Ginting, biasa dipanggil Danta. Saya
              tinggal di Medan dan saat ini sedang menempuh studi di jurusan
              Manajemen Bisnis di sebuah universitas swasta, sudah memasuki
              semester akhir. Di luar perkuliahan, saya aktif sebagai personal
              trainer di sebuah gym, terlibat dalam organisasi Permata GBKP, dan
              sesekali menikmati waktu nongkrong seperti anak muda pada umumnya.
            </p>
            <p>
              Saya mulai mengenal dunia pemrograman sekitar setahun yang lalu,
              berkat sahabat saya yang sering bercerita dan menunjukkan
              project-project buatannya. Rasa penasaran pun tumbuh—bagaimana
              sebuah website dan aplikasi dibuat? Akhirnya, daripada
              menghabiskan malam hanya bermain Valorant, saya memutuskan untuk
              mempelajari pemrograman. Lambat laun, rutinitas ini semakin
              menarik bagi saya. Kini, saya bisa menghabiskan 5-8 jam setiap
              malam untuk belajar. Pemrograman menjadi hal ketiga, selain gym
              dan bermain game, yang membuat saya betah dan terus ketagihan
              melakukannya.
            </p>
          </motion.article>
        </div>
      </section>
    </>
  );
};
export default AboutSection2;
