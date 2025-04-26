import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const FullPageScroll = ({ children, currentPage, onPageChange }) => {
  const totalPages = React.Children.count(children);

  const debounce = useCallback((func, wait) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), wait);
    };
  }, []);

  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = debounce((e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      // 统一滚动方向：向下滚动(deltaY>0)时向下翻页，向上滚动(deltaY<0)时向上翻页
      const direction = e.deltaY > 0 ? 1 : -1;
      if (direction > 0 && currentPage < totalPages - 1) {
        isScrolling.current = true;
        onPageChange(currentPage + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      } else if (direction < 0 && currentPage > 0) {
        isScrolling.current = true;
        onPageChange(currentPage - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    }, 20);

    const handleKeyDown = debounce((e) => {
      if (isScrolling.current) return;

      const direction = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : 
                       e.key === 'ArrowUp' || e.key === 'PageUp' ? -1 : 0;
      
      if (direction === 0) return;

      if (direction > 0 && currentPage < totalPages - 1) {
        isScrolling.current = true;
        onPageChange(currentPage + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      } else if (direction < 0 && currentPage > 0) {
        isScrolling.current = true;
        onPageChange(currentPage - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    }, 20);

    const container = document.getElementById('fullpage-container');
    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, totalPages]);

  return (
    <div id="fullpage-container" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          transform: `translateY(-${currentPage * 100}vh)`,
          transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ height: '100vh', width: '100%' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

FullPageScroll.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default FullPageScroll;