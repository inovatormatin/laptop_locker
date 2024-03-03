import { useEffect, useState } from "react";
import { ScreenWidthContext } from "./useScreenWidth";

// Create a provider component
export const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listner
    return() => {
        window.removeEventListener('resize', handleResize)
    }
  },[]);
  return(
    <ScreenWidthContext.Provider value={screenWidth}>
        {children}
    </ScreenWidthContext.Provider>
  );
};
