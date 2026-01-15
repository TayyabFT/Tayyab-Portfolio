import React from 'react';

const Services = () => {
  const services = [
    { icon: 'fa fa-mobile-alt', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
    { icon: 'fa fa-laptop-code', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
    { icon: 'fa fa-palette', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
    { icon: 'fa fa-code', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
    { icon: 'fa fa-search', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
    { icon: 'fa fa-bullhorn', title: 'Web Design', description: "I'm a web developer with one year of experience specializing in front-end development, proficient in HTML, CSS, and JavaScript. I have a strong foundation in responsive design and building user-friendly interfaces to enhance the overall user experience." },
  ];

  return (
    <div className="section" id="services">
      <div className="container w-full max-w-[1100px] mx-auto pt-[60px] pb-10">
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px] mb-[60px]">
            <h2 className="text-[40px] font-bold relative" style={{ color: 'var(--text-black-900)' }}>
              Services
              <span className="absolute h-1 w-[50px] top-full left-0" style={{ backgroundColor: 'var(--skin-color)' }}></span>
              <span className="absolute h-1 w-[25px] top-full left-0 mt-2" style={{ backgroundColor: 'var(--skin-color)' }}></span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] relative">
          {services.map((service, index) => (
            <div key={index} className="flex-none w-1/3 max-w-[33.33%] mb-8 px-[15px]">
              <div 
                className="p-[30px_15px] text-center rounded-[10px] transition-all duration-300 hover:shadow-lg group"
                style={{ 
                  backgroundColor: 'var(--bg-black-100)',
                  border: '1px solid var(--bg-black-50)'
                }}
              >
                <div 
                  className="h-15 w-15 rounded-full block mx-auto mb-8 text-center transition-all duration-300 group-hover:rounded-full group-hover:bg-[var(--skin-color)]"
                  style={{ height: '60px', width: '60px' }}
                >
                  <i className={`${service.icon} text-[40px] leading-[60px] transition-all duration-300 group-hover:text-[25px] group-hover:text-white`} style={{ color: 'var(--skin-color)' }}></i>
                </div>
                <h4 className="text-lg mb-4 font-bold capitalize" style={{ color: 'var(--text-black-900)' }}>{service.title}</h4>
                <p className="text-base leading-[25px]" style={{ color: 'var(--text-black-700)' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
