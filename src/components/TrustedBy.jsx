import { company_logos } from "../assets/assets";
import { motion, stagger } from "motion/react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const TrustedBy = () => {
  return (
    <div
      className="flex flex-col items-center gap-10 px-4 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-bold"
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.7, once: true }}

        className="m-4 flex flex-wrap items-center justify-center gap-10"
      >
        {company_logos.map((logo, index) => (
          <motion.img
            variants={logoVariants}
            key={index}
            src={logo}
            alt=""
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedBy;
