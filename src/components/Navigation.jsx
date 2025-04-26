import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ onPageChange, currentPage }) => {
  // 导航项
  const navItems = ['认识我', '我有料', '我会啥', '工作史', '项目秀', '来找我'];

  const navStyle = {
    position: 'fixed',
    top: '50%', // 垂直居中
    left: '30px', // 固定在左侧
    transform: 'translateY(-50%)', // 确保完全垂直居中
    height: 'auto',
    display: 'flex',
    flexDirection: 'column', // 垂直排列
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 10px', // 内边距
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 轻微背景
    borderRadius: '30px', // 圆角
    backdropFilter: 'blur(5px)', // 毛玻璃效果
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' // 轻微阴影
  };

  const navContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // 垂直排列
    alignItems: 'center',
    gap: '20px', // 增大导航项之间的间距
    position: 'relative'
  };

  const getButtonStyle = (index) => ({
    padding: '12px 18px',
    fontSize: '16px',
    color: '#ffffff', // 白色文字
    backgroundColor: currentPage === index ? '#d14455' : '#9e8fc6', // 当前页面使用深粉色
    border: 'none',
    borderRadius: '25px', // 更大的圆角
    cursor: 'pointer',
    transition: 'all 0.3s ease', // 平滑过渡效果
    fontWeight: '600',
    letterSpacing: '1px',
    width: '110px', // 增大宽度
    textAlign: 'center',
    boxShadow: currentPage === index ? '0 0 15px rgba(155, 122, 220, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.3)', // 当前页面添加发光效果
    margin: '8px 0', // 进一步增大按钮上下间距
    transform: currentPage === index ? 'translateX(5px)' : 'translateX(0)', // 当前页面向右移动
    outline: 'none', // 移除默认的焦点轮廓
    ':focus': {
      backgroundColor: '#d14455', // 焦点时使用深粉色
      boxShadow: '0 0 15px rgba(155, 122, 220, 0.5)', // 添加发光效果
      transform: 'translateX(5px)' // 轻微向右移动效果
    }
  });

  // 悬停效果
  const buttonHoverStyle = (e) => {
    e.currentTarget.style.backgroundColor = '#d14455'; // 悬停时使用深粉色
    e.currentTarget.style.boxShadow = '0 0 15px rgba(155, 122, 220, 0.5)'; // 添加发光效果
    e.currentTarget.style.transform = 'translateX(5px)'; // 轻微向右移动效果
  };

  const buttonLeaveStyle = (e) => {
    const index = parseInt(e.currentTarget.getAttribute('data-index'));
    if (currentPage !== index) {
      e.currentTarget.style.backgroundColor = '#9e8fc6'; // 恢复为淡紫色
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // 恢复原阴影
      e.currentTarget.style.transform = 'translateX(0)'; // 恢复原位置
    }
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
       
        {/* 导航按钮 */}
        {navItems.map((text, index) => (
          <button
            key={index}
            style={getButtonStyle(index)}
            onMouseEnter={buttonHoverStyle}
            onMouseLeave={buttonLeaveStyle}
            onClick={() => onPageChange(index)}
            data-index={index}
          >
            {text}
          </button>
        ))}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Navigation;