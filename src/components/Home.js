import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['', 'Software Engineer', 'Frontend Engineer', 'AI/ML Engineer', 'Full Stack Engineer', 'DevOps Engineer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="section min-h-screen flex" style={{ color: 'var(--text-black-900)' }} id="home">
      <div className="container w-full max-w-[1100px] mt-20 mx-auto pt-[60px] pb-[70px]">
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-[60%] max-w-[60%] px-[15px]">
            <h3 className="text-[28px] my-[15px]">
              Hello, my name is <span className="font-bold text-[30px]" style={{ fontFamily: '"Clicker Script", cursive', color: 'var(--skin-color)' }}>Muhammad Tayyab</span>
            </h3>
            <h3 className="text-[28px] my-[15px]">
              I' m <span className="typing ml-[10px] font-bold text-[40px]" ref={typedRef} style={{ fontFamily: '"Clicker Script", cursive', color: 'var(--skin-color)' }}>Software Engineer</span>
            </h3>
            <p className="text-[20px] mb-[70px]" style={{ color: 'var(--text-black-700)' }}>
              I'm a web developer with one year of experience specializing
              in front-end development, proficient in HTML, CSS, and
              JavaScript. I have a strong foundation in responsive design
              and building user-friendly interfaces to enhance the overall
              user experience.
            </p>
            <a href="#" className="btn">Download CV</a>
          </div>
          <div className="flex-none w-[40%] max-w-[40%] text-center relative px-[15px]">
            <div className="relative">
              <div 
                className="absolute w-20 h-20 -top-[30px] left-4"
                style={{
                  borderTop: '10px solid var(--skin-color)',
                  borderLeft: '10px solid var(--skin-color)'
                }}
              ></div>
              <div 
                className="absolute w-20 h-20 -bottom-[30px] right-4"
                style={{
                  borderBottom: '10px solid var(--skin-color)',
                  borderRight: '10px solid var(--skin-color)'
                }}
              ></div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/img2.png?t=${new Date().getTime()}`} 
                alt="Muhammad Tayyab" 
                className="h-[400px] mx-auto w-[350px] rounded-md relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

