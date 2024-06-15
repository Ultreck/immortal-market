/* eslint-disable no-unused-vars */
import { useMediaQuery } from 'react-responsive'
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const layoutContext = createContext({
    isTablet: false,
    sidebarOpen: true,
    sidebarMinimized: false,
    toggleSideBar: () => {},
    minimizeSidebar: () => {},
    updateSidebarOpen: () => {},
    onOverlayClicked: () => {},
    sidebar_animation: null
  });


// eslint-disable-next-line react-refresh/only-export-components
export const useProvideLayout = () => {
    let isTablet = useMediaQuery({ query: "(max-width: 1024px)" })
    const [sidebarOpen, setSidebarOpen] = useState(isTablet ? false : true)
    const [sidebarMinimized, setSidebarMinimized] = useState(false)
    const { pathname } = useLocation();



    useEffect(() => {
        if (isTablet) {
          setSidebarOpen(false);
        } else {
          setSidebarOpen(true);
        }
      }, [isTablet]);

      useEffect(() => {
        isTablet && setSidebarOpen(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pathname]);


    const toggleSideBar = ()=>{
      setSidebarOpen(true)
    }

    const minimizeSidebar = ()=>{
      setSidebarMinimized(!sidebarMinimized)  
    }

    const updateSidebarOpen = (value)=>{
        setSidebarOpen(value)  
    }

    const onOverlayClicked = () => {
        setSidebarOpen(false);
    };


    const sidebar_animation = isTablet
    ? {
        open: {
          x: 0,
          width: "21.4rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -350,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        minimize: {
          x: 0,
          width: "4.9rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "18rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: 0,
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: "4.9rem",
          transition: {
            damping: 40,
          },
        },
      };



    return {
        isTablet,
        sidebarOpen,
        sidebarMinimized,
        toggleSideBar,
        minimizeSidebar,
        updateSidebarOpen,
        onOverlayClicked,
        sidebar_animation
      };

}



export const LayoutProvider = ({ children }) => {
    const layout = useProvideLayout();
    return <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>;
  };

LayoutProvider.propTypes = {
    children: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLayout = () => {
    return useContext(layoutContext);
  };