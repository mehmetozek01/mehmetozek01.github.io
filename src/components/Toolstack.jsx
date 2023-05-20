import React from 'react';
import { SiVisualstudiocode, SiPostman, SiGithub,SiPycharm ,SiGit,SiDiscord} from 'react-icons/si';


const Toolstack = () => {
  return (
    <div className='justify-center pb-8 mt-10'>
      <div className='grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-5xl mx-auto text-center justify-center'>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiVisualstudiocode className='w-20 h-20 mx-auto' />
        </div>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiPostman className='w-20 h-20 mx-auto' />
        </div>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiGithub className='w-20 h-20 mx-auto' />
        </div>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiPycharm className='w-20 h-20 mx-auto' />
        </div>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiGit className='w-20 h-20 mx-auto' />
        </div>
        <div className='border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600'>
          <SiDiscord className='w-20 h-20 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Toolstack;
