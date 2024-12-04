import React from 'react';
import ExpertCard from './ExpertCard';
import { Carousel } from 'react-bootstrap';

const experts = [
  {
    name: 'Dr. O W',
    title: 'M.D. (University of Texas Southwestern Medical Center, Dallas)',
    education: [
      'Ph.D in Oncology - University of Pennsylvania.',
      'BSc and MSc degrees in Biomedical Engineering - University of Michigan.'
    ],
    image: '/images/ourprof/aa1.jpg',
    flag: '/images/flags/1.jpeg'
  },
  {
    name: 'Dr. D W',
    title: 'M.B.B.S (King’s College London/School of Medicine)',
    education: [
      'Ph.D in Pathology - University of Edinburgh.',
      'BSc and MSc degrees in Clinical Medicine - University of Manchester.'
    ],
    image: '/images/ourprof/aa2.jpg',
    flag: '/images/flags/2.jpeg'
  },
  {
    name: 'Dr. S M',
    title: 'M.D. (Columbia University Vagelos College of Physicians and Surgeons)',
    education: [
      'Ph.D in Neurobiology - Duke University.',
      'BSc and MSc degrees in Cognitive Science - University of Southern California.'
    ],
    image: '/images/ourprof/aa3.jpg',
    flag: '/images/flags/1.jpeg'
  },
  {
    name: 'Dr. E J',
    title: 'M.B.Ch.B (University of Cape Town/School of Medicine)',
    education: [
      'Ph.D in Human Genetics - University of Pretoria.',
      'BSc and MSc degrees in Zoology - University of Cape Town.'
    ],
    image: '/images/ourprof/aa4.jpg',
    flag: '/images/flags/3.png'
  },
  {
    name: 'Dr. M A',
    title: 'M.D. (New York University Grossman School of Medicine)',
    education: [
      'Ph.D in Public Health - Johns Hopkins University.',
      'BSc and MSc degrees in Environmental Science - Cornell University.'
    ],
    image: '/images/ourprof/aa6.jpg',
    flag: '/images/flags/1.jpeg'
  },
  {
    name: 'Dr. L T',
    title: 'M.B.Ch.B (University of Auckland/School of Medicine)',
    education: [
      'Ph.D in Epidemiology - University of Otago.',
      'BSc and MSc degrees in Health Sciences - University of Auckland.'
    ],
    image: '/images/ourprof/aa34.jpg',
    flag: '/images/flags/5.png'
  }
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-center Gappy GappyTop">Our Experts</h2>
      
      {/* Grid view for larger screens */}
      <div className="row d-none d-md-flex">
        {experts.map((expert, index) => (
          <div className="col-lg-4 col-md-6 d-flex" key={index}>
            <ExpertCard
              name={expert.name}
              title={expert.title}
              education={expert.education}
              image={expert.image}
              flag={expert.flag}
            />
          </div>
        ))}
      </div>

      {/* Carousel view for mobile screens */}
      <div className="d-md-none">
        <Carousel>
          {experts.map((expert, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <ExpertCard
                  name={expert.name}
                  title={expert.title}
                  education={expert.education}
                  image={expert.image}
                  flag={expert.flag}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Experts;
