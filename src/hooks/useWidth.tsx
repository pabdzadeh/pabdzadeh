"use client"

import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(null || window?.innerWidth); // default width, detect on server.

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window?.innerWidth)
      window?.addEventListener('resize', handleResize);
      return () => window?.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
};

export default useWidth;