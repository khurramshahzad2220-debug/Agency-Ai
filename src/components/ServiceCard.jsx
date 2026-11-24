import { useState } from "react";
import { motion } from "motion/react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const HandleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      

      onMouseMove={HandleMouseMove}
      className="group relative m-2 max-w-lg overflow-hidden rounded-xl shadow-2xl shadow-gray-200/85 sm:m-4 dark:shadow-white/8"
    >
      <div
        style={{ top: position.y - 150, left: position.x - 150 }}
        className="pointer-events-none absolute z-0 m-3 h-75 w-75 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
      />
      <div className="relative z-10 m-0.75 flex items-center gap-10 rounded-[10px] bg-white p-8 dark:bg-gray-900">
        <div className="rounded-full bg-gray-100 dark:bg-gray-700">
          <img
            src={service.icon}
            alt="serviceIcon"
            className="m-2 max-w-24 rounded-full bg-white dark:bg-gray-900"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-extrabold">{service.title}</h3>
          <p className="mt-2 text-sm">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
