import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { 
      image: 'images/p1.jpg', 
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform built with React and Tailwind CSS'
    },
    { 
      image: 'images/p2.jpg', 
      title: 'Dashboard Application',
      description: 'Interactive dashboard with real-time data visualization'
    },
    { 
      image: 'images/p3.jpg', 
      title: 'Social Media App',
      description: 'Social media application with React and Node.js backend'
    },
    { 
      image: 'images/p4.jpg', 
      title: 'Task Management System',
      description: 'Productive task management tool with drag-and-drop functionality'
    },
    { 
      image: 'images/p5.jpg', 
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills'
    },
    { 
      image: 'images/p6.jpg', 
      title: 'Blog Platform',
      description: 'Modern blog platform with content management system'
    },
  ];

  return (
    <div className="section" id="portfolio">
      <div className="container w-full max-w-[1100px] mx-auto pt-[60px] pb-8">
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px] mb-[60px]">
            <h2 className="text-[40px] font-bold relative" style={{ color: 'var(--text-black-900)' }}>
              Projects
              <span className="absolute h-1 w-[50px] top-full left-0" style={{ backgroundColor: 'var(--skin-color)' }}></span>
              <span className="absolute h-1 w-[25px] top-full left-0 mt-2" style={{ backgroundColor: 'var(--skin-color)' }}></span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px] mb-10">
            <h2 className="font-medium" style={{ color: 'var(--text-black-900)' }}>My Last Projects:</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] relative">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex-none w-1/3 max-w-[33.33%] mb-8 px-[15px]">
              <div 
                className="border-[6px] rounded-[10px] overflow-hidden cursor-pointer shadow-dark hover:scale-105 transition-transform duration-300"
                style={{ borderColor: 'var(--bg-black-100)' }}
              >
                <div className="relative group">
                  <img 
                    src={process.env.PUBLIC_URL + "/" + item.image} 
                    alt={item.title} 
                    className="w-full block"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
