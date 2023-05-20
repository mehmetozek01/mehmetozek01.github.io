import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const calendarColorScheme = isDarkMode ? "dark" : "light";
  const calendarColor = isDarkMode ? "#FFFFFF" : "#000000";

  return (
    <div className="justify-center pb-8 mt-10">
      <h1 className="pb-10 dark:text-white text-purple-400 font-bold text-7xl mt-64 w-full text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
        Days | <span className="dark:text-primaryDark text-dark">Code</span>
      </h1>
      <div className="max-w-5xl mx-auto">
        <GitHubCalendar
          className=""
          username="mehmetozek01"
          blockSize={15}
          blockMargin={5}
          colorScheme={calendarColorScheme}
          color={calendarColor}
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default Github;
