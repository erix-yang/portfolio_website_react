import React from 'react';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import Card from '../common/Card';

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
    maxWidth: '1300px',
    width: '90%',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    borderRadius: '16px',
    backdropFilter: 'blur(5px)',
    
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

    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
};

// 卡片出现的动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutMe = () => {
  const cardData = [
    {
      icon: '🔧',
      title: '全栈实力 | 从0到1的项目落地者',
      content: 'Java后端开发出身，独立开发过小程序、移动端APP、Web端、后台服务等，熟悉爬虫、单片机及三维建模。无论是前端交互还是后端架构，都能一站式搞定，助力项目高效落地。'
    },
    {
      icon: '🧠',
      title: '多维思考 | 解决问题的探索者',
      content: '热衷技术研究，擅长从不同角度拆解问题，提供多种解决方案。深入底层原理的同时也关注前沿技术，如AI、大模型等，不断扩展技术广度。'
    },
    {
      icon: '🚀',
      title: '快速学习 | 新领域的开拓者',
      content: '自驱型学习者，对计算机充满热情，能快速上手新技术/新领域，持续迭代自我，确保与行业发展同步。'
    },
    {
      icon: '👥',
      title: '团队管理 | 高效协作的组织者',
      content: '大学期间担任志愿服务部长，管理40+团队成员，带领团队开展多项创新社会实践；现公司管理8名后端开发，优化团队流程，带领团队高效完成上级任务。'
    },
    {
      icon: '💡',
      title: '独立思考 | 高质量代码的践行者',
      content: '注重业务理解，从业务需求到代码实现追求最佳实践，编写高质量、可维护的优雅代码，持续优化系统性能与用户体验。'
    },
    {
      icon: '⚡',
      title: '执行力 | 说到做到的实干派',
      content: '认定目标即刻行动，允许试错但拒绝停滞。以结果为导向，推动项目落地，持续提升自我和团队价值。'
    }
  ];

  return (
    <section style={styles.section}>
      <TriangleDots position="top-right" size={25} opacity={0.4} />
      <TriangleDots position="bottom-left" size={25} opacity={0.4} />
      
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div 
          style={styles.titleContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 style={styles.title}>
            🌟 我有料 · 我能带给你的价值
          </h1>
          <p style={styles.subtitle}>
            专注技术，热爱创新
          </p>
        </motion.div>
        
        <motion.div 
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card, index) => (
            <Card 
              key={index}
              title={`${card.icon} ${card.title}`}
              content={card.content}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;