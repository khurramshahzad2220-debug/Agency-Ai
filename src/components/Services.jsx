import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bg-2"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="flex grid-cols-2 flex-col md:grid">
        {servicesData.map((service, index) => {
          return <ServiceCard key={index} service={service} index={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Services;
