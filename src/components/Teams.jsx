import { teamData } from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const teamParentVariant = {
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
    transition:{
      staggerChildren: 0.2
    },
  },
};

const teamChildVariant = {
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
    transition:{
      duration: 0.6
    },
  },
}

const Teams = () => {
  return (
    <motion.div 
    variants={teamParentVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.5, once: true }}

    className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-800 sm:px-12 lg:px-24 xl:px-40 dark:text-white">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {teamData.map((team, index)=>(
          <motion.div 
          variants={teamChildVariant}

          key={index} className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
            <img src={team.image} className="w-12 h-12 rounded-full" alt="team-image"/>
            <div className="flex-11">
              <h3 className="font-bold text-sm">{team.name} </h3>
              <p className="text-xs opacity-60">{team.title} </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
