import React from 'react';
import { Helmet } from 'react-helmet-async';
import TrainingApplicationForm from '../components/TrainingApplicationForm';

const ApplyTraining: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Apply for Training Program - NetBots</title>
        <meta name="description" content="Apply for NetBots' professional training programs in AI, Cloud Computing, Full Stack Development, and more. Transform your career with industry-leading courses." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        {/* <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Apply for Training Program
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take the first step towards your tech career. Fill out the application form below to join our professional training programs.
            </p>
          </div>

        </div> */}
                  <TrainingApplicationForm />

      </div>
    </>
  );
};

export default ApplyTraining; 