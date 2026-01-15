import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: 'fa fa-phone', title: 'Call Us On', value: '+923101709384' },
    { icon: 'fa fa-map-marker-alt', title: 'Location', value: 'Faisalabad' },
    { icon: 'fa fa-envelope', title: 'Email', value: 'tayyab56jb@gmail.com' },
    { icon: 'fa fa-globe-europe', title: 'GitHub', value: 'https://github.com/tayyabFT' },
  ];

  return (
    <div className="section" id="contact">
      <div className="container w-full max-w-[1100px] mx-auto pt-[60px] pb-[70px]">
        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px] mb-[60px]">
            <h2 className="text-[40px] font-bold relative" style={{ color: 'var(--text-black-900)' }}>
              Contact
              <span className="absolute h-1 w-[50px] top-full left-0" style={{ backgroundColor: 'var(--skin-color)' }}></span>
              <span className="absolute h-1 w-[25px] top-full left-0 mt-2" style={{ backgroundColor: 'var(--skin-color)' }}></span>
            </h2>
          </div>
        </div>
        <h3 className="text-[25px] text-center mb-5 px-[15px]" style={{ color: 'var(--skin-color)' }}>Have you any Question?</h3>
        <h4 className="text-[15px] text-center mb-[60px] px-[15px]" style={{ color: 'var(--text-black-900)' }}>I'M AT YOUR SERVICES</h4>
        <div className="flex flex-wrap -mx-[15px] relative">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex-none w-1/4 max-w-[25%] text-center mb-[60px] px-[15px]">
              <div className="inline-block">
                <i className={`${info.icon} text-[25px]`} style={{ color: 'var(--skin-color)' }}></i>
              </div>
              <h4 className="text-lg font-bold capitalize my-4 mx-0" style={{ color: 'var(--text-black-900)' }}>{info.title}</h4>
              <p className="text-[15px] leading-[25px]" style={{ color: 'var(--text-black-700)' }}>{info.value}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[25px] text-center mb-5 px-[15px]" style={{ color: 'var(--skin-color)' }}>Send Me an Email</h3>
        <h4 className="text-[15px] text-center mb-[60px] px-[15px]" style={{ color: 'var(--text-black-900)' }}>I'M VERY RESPONSIVE TO SERVICES</h4>

        <div className="flex flex-wrap -mx-[15px] relative">
          <div className="flex-none w-full max-w-full px-[15px]">
            <form onSubmit={handleSubmit} action="/send-email" method="post">
              <div className="flex flex-wrap -mx-[15px] relative">
                <div className="flex-none w-1/2 max-w-[50%] mt-8 px-[15px]">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full h-[50px] rounded-[25px] py-2.5 px-6 text-base transition-all duration-300 focus:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--bg-black-100)',
                        border: '1px solid var(--bg-black-50)',
                        color: 'var(--text-black-700)'
                      }}
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex-none w-1/2 max-w-[50%] mt-8 px-[15px]">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-full h-[50px] rounded-[25px] py-2.5 px-6 text-base transition-all duration-300 focus:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--bg-black-100)',
                        border: '1px solid var(--bg-black-50)',
                        color: 'var(--text-black-700)'
                      }}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-[15px] relative">
                <div className="flex-none w-full max-w-full mt-8 px-[15px]">
                  <div>
                    <input
                      type="text"
                      name="subject"
                      className="w-full h-[50px] rounded-[25px] py-2.5 px-6 text-base transition-all duration-300 focus:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--bg-black-100)',
                        border: '1px solid var(--bg-black-50)',
                        color: 'var(--text-black-700)'
                      }}
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-[15px] relative">
                <div className="flex-none w-full max-w-full mt-8 px-[15px]">
                  <div>
                    <textarea
                      name="message"
                      className="w-full h-[140px] rounded-[25px] py-2.5 px-6 text-base transition-all duration-300 focus:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--bg-black-100)',
                        border: '1px solid var(--bg-black-50)',
                        color: 'var(--text-black-700)'
                      }}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-[15px] relative">
                <div className="flex-none w-full max-w-full mt-8 px-[15px]">
                  <div>
                    <button type="submit" className="btn h-[50px] px-[50px]">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
