import React from 'react';
import './App.css'
import 'modern-normalize';
import Navigation from './components/Navigation';
import FullPageScroll from './components/FullPageScroll';
import HomePage from './components/views/HomePage';
import AboutMe from './components/views/AboutMe';
import LoadingScreen from './components/LoadingScreen';
import Skills from './components/views/Skills';
import WorkHistory from './components/views/WorkHistory';
import Projects from './components/views/Projects';
import Contact from './components/views/Contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <>
        <Navigation onPageChange={handlePageChange} currentPage={currentPage} /> {/* 传递页面切换函数和当前页面状态 */}
        <FullPageScroll currentPage={currentPage} onPageChange={handlePageChange}>
          <HomePage onLoadComplete={() => {
            setIsLoading(false);
          }} />
          <AboutMe />
          <Skills />
          <WorkHistory />
          <Projects />
          <Contact />
        </FullPageScroll>
      </>
    </>
  );
}

export default App
