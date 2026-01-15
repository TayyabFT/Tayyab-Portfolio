import React from 'react';

const Aside = ({ activeSection, onNavClick, asideOpen, onToggle }) => {
  const navItems = [
    { id: 'home', icon: 'fa fa-home', label: 'Home' },
    { id: 'about', icon: 'fa fa-user', label: 'About' },
    { id: 'services', icon: 'fa fa-list', label: 'Services' },
    { id: 'portfolio', icon: 'fa fa-briefcase', label: 'Porfolio' },
    { id: 'contact', icon: 'fa fa-comments', label: 'Contact' },
  ];

  return (
    <>
      <aside 
        className={`fixed w-[270px] h-full p-[30px] flex justify-center items-center top-0 z-10 transition-all duration-[600ms] md:left-0 ${
          asideOpen ? 'left-0' : '-left-[270px]'
        }`}
        style={{ 
          backgroundColor: 'var(--bg-black-100)',
          borderRight: '1px solid var(--bg-black-50)',
          boxShadow: '0 0 20px rgba(48, 46, 77, 0.15)'
        }}
      >
        <div className="absolute top-[50px] text-[30px] capitalize">
          <a 
            href="#" 
            className="relative font-extrabold text-[30px] py-[15px] px-5"
            style={{ 
              color: 'var(--text-black-900)',
              letterSpacing: '5px'
            }}
          >
            <span className="font-cursive text-[40px]">T</span>ayyab
            <span 
              className="absolute w-5 h-5 bottom-0 left-0"
              style={{
                borderBottom: '5px solid var(--skin-color)',
                borderLeft: '5px solid var(--skin-color)'
              }}
            ></span>
            <span 
              className="absolute w-5 h-5 top-0 right-0"
              style={{
                borderTop: '5px solid var(--skin-color)',
                borderRight: '5px solid var(--skin-color)'
              }}
            ></span>
          </a>
        </div>
        <div className="mt-[50px]">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="mt-5 block">
                <a
                  href={`#${item.id}`}
                  className="font-semibold block border-b-2 py-1.5 px-[15px] transition-colors"
                  style={{ 
                    borderBottomColor: 'var(--bg-black-50)',
                    color: activeSection === item.id ? 'var(--skin-color)' : 'var(--text-black-900)'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.id);
                  }}
                >
                  <i className={`${item.icon} mr-[25px]`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Mobile Nav Toggler */}
      <div 
        className={`h-10 w-[45px] border cursor-pointer fixed top-5 z-20 rounded-md flex items-center justify-center md:hidden transition-all ${
          asideOpen ? 'left-[300px]' : 'left-[30px]'
        }`}
        style={{ 
          borderColor: 'var(--bg-black-50)',
          backgroundColor: 'var(--bg-black-100)'
        }}
        onClick={onToggle}
      >
        <div className="relative w-[18px] h-0.5">
          <span 
            className={`absolute w-[18px] h-0.5 left-0 transition-all ${
              asideOpen ? 'rotate-45 top-0' : '-top-1.5'
            }`}
            style={{ backgroundColor: 'var(--skin-color)' }}
          ></span>
          <span 
            className={`absolute w-[18px] h-0.5 left-0 transition-all ${
              asideOpen ? 'bg-transparent' : 'bg-[var(--skin-color)]'
            }`}
            style={{ backgroundColor: asideOpen ? 'transparent' : 'var(--skin-color)' }}
          ></span>
          <span 
            className={`absolute w-[18px] h-0.5 left-0 transition-all ${
              asideOpen ? '-rotate-45 top-0' : '-bottom-1.5'
            }`}
            style={{ backgroundColor: 'var(--skin-color)' }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Aside;
