import React from "react";
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import { SiFirebase, SiFlutter, SiNextdotjs } from "react-icons/si";

const Techstack = () => {
  return (
    <div className="justify-center pb-8">
      <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-5xl mx-auto text-center ">
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <SiFlutter className="w-20 h-20 mx-auto" />
        </div>
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <DiJavascript1 className="w-20 h-20 mx-auto" />
        </div>
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <DiNodejs className="w-20 h-20 mx-auto" />
        </div>
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <DiReact className="w-20 h-20 mx-auto" />
        </div>
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6 flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <SiFirebase className="w-20 h-20 mx-auto" />
        </div>
        <div className=" border border-purple-500 dark:border-primaryDark rounded-lg p-6  flex justify-center transition-transform duration-300 hover:scale-105 overflow-hidden hover:border-purple-600">
          <SiNextdotjs className="w-20 h-20 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
