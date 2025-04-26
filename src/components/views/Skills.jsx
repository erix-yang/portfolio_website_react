import React from 'react';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import { FaCode, FaReact, FaServer, FaDatabase, FaRobot, FaTools } from 'react-icons/fa';

const styles = {
  section: {
    background: '#765BB6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: '40px',
    paddingBottom: '40px',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    width: '90%',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    backdropFilter: 'blur(8px)',
  },
  titleContainer: {
    marginBottom: '40px',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    marginBottom: '1rem',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D9FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  categoriesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  categoryCard: {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '25px 20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  categoryTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  skillItem: {
    marginBottom: '10px',
  },
  skillName: {
    fontSize: '0.9rem',
    marginBottom: '5px',
    fontWeight: '500',
  },
  progressBarContainer: {
    height: '8px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #B19EFF 100%)',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(177, 158, 255, 0.5)',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
  },
  '@media (max-width: 768px)': {
    skillsGrid: {
      gridTemplateColumns: '1fr',
    },
    container: {
      padding: '20px 15px',
    }
  }
};

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5 }
  })
};

const SkillCategory = ({ title, icon, skills }) => (
  <motion.div
    style={styles.categoryCard}
    variants={cardVariants}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
      background: 'rgba(255, 255, 255, 0.18)'
    }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 style={styles.categoryTitle}>
      <span style={styles.iconContainer}>{icon}</span>
      {title}
    </h3>
    <div style={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div key={index} style={styles.skillItem}>
          <div style={styles.skillName}>{skill.name}</div>
          <div style={styles.progressBarContainer}>
            <motion.div
              style={styles.progressBar}
              custom={skill.level}
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {

  const skillsData = [
    {
      category: '编程语言',
      icon: <FaCode />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 40 },
        { name: 'Rust', level: 30 },
      ]
    },
    {
      category: '后端开发',
      icon: <FaServer />,
      skills: [
        { name: 'SSM', level: 90 },
        { name: 'Spring Cloud', level: 85 },
        { name: 'Nacos/Feign/Gateway', level: 80 },
        { name: 'Sentinel', level: 80 },
        { name: 'Seata', level: 80 },
        { name: 'XXL-JOB/EasyExcel等', level: 75 },
      ]
    },
    {
      category: '中间件与基础设施',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL/Oracle', level: 90 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'MongoDB', level: 40 },
        { name: 'RabbitMQ', level: 60 },
        { name: 'Kafka/RocketMQ', level: 40 },
        { name: 'Elasticsearch', level: 30 },
      ]
    },
    {
      category: '前端开发',
      icon: <FaReact />,
      skills: [
        { name: 'Vue.js', level: 90 },
        { name: 'React.js', level: 90 },
        { name: 'uni-app', level: 80 },
        { name: 'Flutter', level: 60 },
        { name: 'React Native', level: 60 },
        { name: 'NodeJS', level: 70 },
      ]
    },
    {
      category: 'AI与智能应用',
      icon: <FaRobot />,
      skills: [
        { name: 'Dify', level: 90 },
        { name: 'Coze', level: 90 },
        { name: 'Stable Diffusion', level: 80 },
        { name: 'MCP服务', level: 70 },
        { name: 'SpringAI', level: 90 },
        { name: 'Langchain4j', level: 90 },
      ]
    },
    {
      category: '开发工具',
      icon: <FaTools />,
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'Docker', level: 90 },
        { name: 'Postman/Apifox', level: 95 },
        { name: 'Maven', level: 95 },
        { name: 'Nginx', level: 85 },
        { name: 'Jenkins', level: 60 },
      ]
    },
  ];

  return (
    <section style={styles.section}>
      <TriangleDots position="top-left" size={25} opacity={0.4} />
      <TriangleDots position="bottom-right" size={25} opacity={0.4} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          style={styles.titleContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, type: 'spring' }}
          >
            💻 我的技术栈
          </motion.h1>
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            全栈开发经验，持续学习新技术
          </motion.p>
        </motion.div>

        <motion.div
          style={styles.categoriesContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;