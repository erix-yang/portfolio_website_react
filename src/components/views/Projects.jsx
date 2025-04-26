import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
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
    width: '80%', // 宽度稍微放宽，以便展示更多内容
  },
  projectCard: {
    width: '100%',
    maxWidth: '550px',
    height: '500px',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(16px)',
    padding: '32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    textAlign: 'left',
    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    border: '1px solid rgba(255,255,255,0.08)'
  },
  topRow: {
    marginBottom: '16px',
    fontSize: '1.7rem',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.02em',
    lineHeight: '1.3'
  },
  middleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.15rem',
    marginBottom: '28px',
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  },
  description: {
    flex: 1,
    fontSize: '1.05rem',
    lineHeight: '1.7',
    marginBottom: '24px',
    overflowY: 'auto',
    color: 'rgba(255,255,255,0.8)',
    paddingRight: '8px',
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '3px'
    }
  },
  performance: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginTop: '24px',
    color: 'rgba(255,255,255,0.9)',
    padding: '12px',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '8px'
  },
};



const projectsData = [
  {
    title: '全国旅游交易平台',
    tech: '微服务架构',
    duration: '2025.2~今',
    description: `该项目是一个B2B平台，面向全国旅游资源的供应商与分销商，旨在优化采购对接流程并提升交易效率。系统基于微服务架构设计，支持多个高并发场景，确保平台在大规模交易环境下的高性能与稳定性。`,
    performance: '核心模块涵盖五大品类的交易全流程，包括产品上下架、预定、订单支付及售后管理，此外，还包括订单报表和产品报表等数据分析模块。',
  },
  {
    title: '中学生心理健康测评系统',
    tech: '微服务架构',
    duration: '2024.11~2025.2',
    description: `该项目面向陕西地区中学生群体，打造心理健康测评系统，帮助学校及教师及时了解学生心理状况，并为学生提供系统化、针对性的干预建议。项目采用微服务架构设计，支持高并发访问，满足大量学生同时在线测评的性能需求，助力学校实现心理健康管理的数字化、智能化。`,
    performance: '核心模块包括：用户管理模块，心理测评问卷模块，测评执行模块，心理档案管理模块，结果分析与报告模块，异常预警与干预模块，统计与分析模块等。',
  },
  {
    title: '三维供应链ERP管理系统',
    tech: 'SSM架构',
    duration: '2024.9~2024.12',
    description: `该项目面向三维化工企业，采用SSM架构开发，构建产品生产全生命周期的ERP管理系统，提升企业对产品研发、生产、销售及售后各环节的统一管理能力，支持实时可视化监控与数据分析，助力企业运营效率与决策能力提升。`,
    performance: '核心模块包括：合同管理、原材料及成品出入库管理、生产管理、销售管理、财务结算、售后服务管理以及产品报表分析模块。',
  },
  {
    title: '法士特WMS仓库管理系统',
    tech: 'SSM架构',
    duration: '2023.2~2023.12',
    description: `该项目面向法士特企业，采用SSM架构开发，旨在推动仓库管理数字化转型，从传统人工管理升级至数据上云，提升各部门协作效率，实现仓储作业的实时可视化与精细化管理。`,
    performance: '核心业务模块包括：入库管理（支持扫码入库、调拨入库、退货入库及盘点入库）、出库管理（支持扫码出库、调拨出库、盘点出库）、库存管理、仓库预警、库存盘点及仓库报表分析等功能模块。',
  },
  {
    title: '智慧运营平台',
    tech: 'SSM架构后转微服务架构',
    duration: '2022.12~2025.2',
    description: `该项目面向企业内部运营部门，初始为基于SSM架构的单体应用，后期重构为微服务架构，并对外提供面向各大中小型企业的SaaS服务。`,
    performance: '主要涵盖客户管理、线索管理、商机管理、项目管理等核心业务模块，以及财务管理、人员管理、日常办公、流程审批等辅助模块，全面支持企业内部运营与管理需求。',
  },
];



// 把项目数据复制两遍，实现无缝滚动
const loopedProjectsData = [...projectsData, ...projectsData];

const Projects = () => {
  return (
    <section style={styles.section}>
      <TriangleDots position="top-left" size={25} opacity={0.4} />
      <TriangleDots position="bottom-right" size={25} opacity={0.4} />
      <div style={styles.container}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          speed={4000} // 整体移动速度，越大越慢
          autoplay={{
            delay: 0, // 每帧连续移动
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // 鼠标悬停暂停
          }}
          freeMode={true}
          allowTouchMove={false}
          style={{ width: '100%' }}
        >
          {loopedProjectsData.map((project, index) => (
            <SwiperSlide key={index} style={{ width: '500px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                style={styles.projectCard}
                whileHover={{
                  scale: 1.05, // 稍微变大
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                  background: 'rgba(255,255,255,0.2)',
                }}
              >
                <div style={styles.topRow}>{project.title}</div>
                <div style={styles.middleRow}>
                  <span>{project.tech}</span>
                  <span>{project.duration}</span>
                </div>
                <div style={styles.description}>
                  <b>项目描述：</b>
                  <p>👉 {project.description}</p>
                  <p>👉 {project.performance}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
