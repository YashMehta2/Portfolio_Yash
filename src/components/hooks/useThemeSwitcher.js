import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        // If the user's preference is in local storage, use it.
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          // Add the 'dark' class to the document's root element to apply dark mode styles.
          document.documentElement.classList.add("dark");
        } else {
          // Remove the 'dark' class to switch to light mode styles.
          document.documentElement.classList.remove("dark");
        }
      } else {
        // If there's no user preference in local storage, use the media query result.
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          // Add the 'dark' class to the document's root element for dark mode.
          document.documentElement.classList.add("dark");
        } else {
          // Remove the 'dark' class for light mode.
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      // If the mode is 'dark', save it to local storage and apply the 'dark' class.
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (mode === "light") {
      // If the mode is 'light', save it to local storage and remove the 'dark' class.
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
