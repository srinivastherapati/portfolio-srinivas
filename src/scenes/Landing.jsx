import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
<div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
  {isAboveLarge ? (
    <div
      className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
      before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
    >
      <img
        alt="profile"
        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-auto max-w-[400px] md:max-w-[600px] object-cover "
        src="assets/image2.jpg"
      />
    </div>
  ) : (
    <img
      alt="profile"
      className="z-10 w-full h-auto max-w-[400px] md:max-w-[600px] object-cover"
      src="assets/image2.jpg"
    />
  )}
</div>


      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
         <motion.p
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="font-playfair font-semibold text-5xl text-center md:text-start
             bg-gradient-rainblue 
             bg-clip-text text-transparent animate-pulse hover:bg-blue"
>
  Therapati Srinivas
</motion.p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Hi there! 👋
          Welcome to my portfolio, I'm a Full Stack Developer with 2+ years of experience building scalable applications using Java, Spring Boot, React, and AWS following clean code principles and system design best practices.

I’ve worked on distributed systems in enterprise environments, freelanced on-demand websites for professionals and students, and sharpened my problem-solving skills through LeetCode.

A Computer Science graduate from the University of Central Missouri, I’m quick to adapt, love solving real-world challenges, and always eager to build something impactful.
          Want to know more about me? Feel free to reach out by clicking the button below.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
