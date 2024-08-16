import React from 'react';
import Section from './Section';

const Error = () => {
  return (
    <Section className="relative bg-cover bg-center">
      <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="relative z-10" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-4xl font-bold text-white mb-4">404 page</h2>
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="inline-flex items-center space-x-2">
              <li className="text-lg text-green-500">
                <a href="/">Home</a>
              </li>
              <li className="text-lg text-white">/</li>
              <li className="text-lg text-white" aria-current="page">404 page</li>
            </ol>
          </nav>
        </div>
        {/* <div className="absolute top-0 right-0 hidden lg:block lg:w-[650px] lg:-right-0 lg:top-0 lg:relative lg:block">
          <img src="assets/images/header/2.png" alt="shape-icon" className="w-full h-auto"/>
        </div> */}
      </div>
    </Section>
  );
};

export default Error;
