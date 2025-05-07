import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import TrainingApplicationForm from '../components/TrainingApplicationForm';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4 shadow-xl relative"
        >
          <div className="flex flex-col items-center text-center">
            <FaInfoCircle className="text-primary text-5xl mb-4" />
            <p className="text-gray-700 dark:text-gray-200 mb-6">{message}</p>
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ApplyTraining: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfoModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
      <AnimatePresence>
        {showInfoModal && (
          <InfoModal
            isOpen={true}
            onClose={() => setShowInfoModal(false)}
            message={"The AKRSP Sponsored training program (Lead Generation and Sales Expert or Vibe Coding - Full Stack Development) is now closed and no longer accepting applications due to a large number of applicants. For other training programs, you are welcome to apply, but you will need to pay for the program."}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplyTraining; 