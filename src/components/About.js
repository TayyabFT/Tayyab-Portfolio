import React from 'react';

const About = ({ onHireMeClick }) => {
  const personalInfo = [
    { label: 'Birthday', value: '16 June 2003' },
    { label: 'Age', value: '21 Years' },
    { label: 'Email', value: 'tayyab56jb@gmail.com' },
    { label: 'Degree', value: 'BS Computer Science' },
    { label: 'Phone', value: '0310-1709384' },
    { label: 'City', value: 'Faisalabad' },
    { label: 'Freelancing', value: 'Available' },
  ];

  const skills = [
    { name: 'React JS', percent: 100 },
    { name: 'Python', percent: 100 },
    { name: 'Next JS', percent: 100 },
    { name: 'Node JS', percent: 100 },
    { name: 'MongoDB', percent: 100 },
    { name: 'Git', percent: 100 },
  ];

  const education = [
    {
      date: '2021-2025',
      title: 'Bachelor in Computer Science',
      text: "Completed a Bachelor's degree from 2021 to 2025, demonstrating dedication and perseverance in academic pursuits at Fast University.",
    },
    {
      date: '2019-2021',
      title: 'Intermediat',
      text: 'Complete Intermediat from 2019 to 2021.',
    },
    {
      date: '2017-2019',
      title: 'Matric',
      text: 'Complete Matric from 2017 to 2019.',
    },
  ];

  const experience = [
    {
      date: 'June 2025 - Present',
      title: 'Frontend Engineer at Astra Protocol',
      text: "Currently working as a Frontend Engineer at Astra Protocol, located in Lahore DHA Phase 8. Developing modern web applications using React, Next.js, and other cutting-edge technologies. Building responsive and user-friendly interfaces while maintaining high code quality and performance standards.",
    },
    {
      date: 'June 2024 - June 2025',
      title: 'Frontend Engineer at V3 Solutions',
      text: "Worked as a Frontend Engineer at V3 Solutions, located in Faisalabad. Specialized in building responsive web applications. Developed and maintained multiple projects using React, JavaScript, and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    },
  ];

  return (
    <div className="section" id="about">
      <div className="container w-full max-w-[1100px] mx-auto pt-[60px] pb-[70px]">
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px] mb-[60px]">
            <h2 className="text-[40px] font-bold relative" style={{ color: 'var(--text-black-900)' }}>
              About Me
              <span className="absolute h-1 w-[50px] top-full left-0" style={{ backgroundColor: 'var(--skin-color)' }}></span>
              <span className="absolute h-1 w-[25px] top-full left-0 mt-2" style={{ backgroundColor: 'var(--skin-color)' }}></span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px]">
            <div className="flex flex-wrap -mx-[15px] relative">
              <div className="flex-none w-full max-w-full px-[15px]">
                <h3 className="text-2xl mb-4 font-bold" style={{ color: 'var(--text-black-900)' }}>
                  I' m Muhammad Tayyab and <span className="font-cursive" style={{ color: 'var(--skin-color)' }}>Web Developer</span>
                </h3>
                <p className="text-base leading-[25px]" style={{ color: 'var(--text-black-700)' }}>
                  I'm a web developer with one year of experience
                  specializing in front-end development, proficient in HTML,
                  CSS, and JavaScript. I have a strong foundation in
                  responsive design and building user-friendly interfaces to
                  enhance the overall user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-[15px] relative mt-10">
              <div className="flex-none w-[60%] max-w-[60%] mt-10 px-[15px]">
                <div className="flex flex-wrap -mx-[15px] relative">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex-none w-1/2 max-w-[50%] px-[15px]">
                      <p className="font-semibold py-2.5 text-base border-b" style={{ color: 'var(--text-black-900)', borderBottomColor: 'var(--text-black-700)' }}>
                        {info.label}: <span className="font-normal ml-1 inline-block" style={{ color: 'var(--text-black-700)' }}>{info.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-[15px] relative mt-8 px-[15px]">
                  <div className="px-[15px]">
                    <a
                      href="#contact"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        onHireMeClick();
                      }}
                    >
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-none w-[40%] max-w-[40%] mt-10 px-[15px]">
                <div className="flex flex-wrap -mx-[15px] relative">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex-none w-full max-w-full px-[15px] mb-6">
                      <h5 className="leading-10 font-semibold text-base capitalize" style={{ color: 'var(--text-black-900)' }}>{skill.name}</h5>
                      <div className="relative w-full h-[7px] rounded border" style={{ backgroundColor: 'var(--bg-black-50)', borderColor: 'burlywood' }}>
                        <div className="absolute left-0 top-0 h-full rounded" style={{ width: `${skill.percent}%`, backgroundColor: 'var(--skin-color)' }}></div>
                        <div className="absolute right-0 bottom-[5px] leading-10 font-normal" style={{ color: 'var(--text-black-700)' }}>{skill.percent}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-[15px] relative mt-8">
              <div className="flex-none w-1/2 max-w-[50%] mt-8 px-[15px]">
                <h3 className="text-2xl mb-8 font-bold" style={{ color: 'var(--text-black-700)' }}>Education</h3>
                <div className="flex flex-wrap -mx-[15px] relative">
                  <div className="flex-none w-full max-w-full">
                    <div className="p-[30px_15px] border rounded-[10px] w-[90%] relative shadow-dark" style={{ backgroundColor: 'var(--bg-black-100)', borderColor: 'var(--bg-black-50)' }}>
                      {education.map((item, index) => (
                        <div key={index} className="relative pl-[37px] pr-5 pb-[50px] last:pb-0">
                          <div className="absolute w-[1px] h-full left-[7px] top-0" style={{ backgroundColor: 'var(--skin-color)' }}></div>
                          <div className="absolute w-[15px] h-[15px] rounded-full left-0 top-0" style={{ backgroundColor: 'var(--skin-color)' }}></div>
                          <h3 className="font-normal text-sm mb-3" style={{ color: 'var(--text-black-700)' }}>
                            <i className="fa fa-calendar mr-1.5"></i>
                            {item.date}
                          </h3>
                          <h4 className="font-bold text-lg mb-[18px] capitalize" style={{ color: 'var(--text-black-900)' }}>
                            {item.title}
                          </h4>
                          <p className="leading-[25px] text-base text-justify" style={{ color: 'var(--text-black-700)' }}>
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-none w-1/2 max-w-[50%] mt-8 px-[15px]">
                <h3 className="text-2xl mb-8 font-bold" style={{ color: 'var(--text-black-700)' }}>Experience</h3>
                <div className="flex flex-wrap -mx-[15px] relative">
                  <div className="flex-none w-full max-w-full">
                    <div className="p-[30px_15px] border rounded-[10px] w-[90%] relative shadow-dark" style={{ backgroundColor: 'var(--bg-black-100)', borderColor: 'var(--bg-black-50)' }}>
                      {experience.map((item, index) => (
                        <div key={index} className="relative pl-[37px] pr-5 pb-[50px] last:pb-0">
                          <div className="absolute w-[1px] h-full left-[7px] top-0" style={{ backgroundColor: 'var(--skin-color)' }}></div>
                          <div className="absolute w-[15px] h-[15px] rounded-full left-0 top-0" style={{ backgroundColor: 'var(--skin-color)' }}></div>
                          <h3 className="font-normal text-sm mb-3" style={{ color: 'var(--text-black-700)' }}>
                            <i className="fa fa-calendar mr-1.5"></i>
                            {item.date}
                          </h3>
                          <h4 className="font-bold text-lg mb-[18px] capitalize" style={{ color: 'var(--text-black-900)' }}>
                            {item.title}
                          </h4>
                          <p className="leading-[25px] text-base text-justify" style={{ color: 'var(--text-black-700)' }}>
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
