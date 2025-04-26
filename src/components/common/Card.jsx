import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, content }) => {
  return (
    <motion.div 
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        background: 'rgba(255, 255, 255, 0.2)'
      }}
    >
      <motion.h3 
        style={styles.cardTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        style={styles.cardText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

const styles = {
  card: {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(14px)',
    borderRadius: '16px',
    padding: '28px 24px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    width: '400px'
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginBottom: '16px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.02em',
    lineHeight: '1.3'
  },
  cardText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '8px'
  }
};

export default Card;