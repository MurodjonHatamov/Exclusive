import { useEffect } from "react";  // React dan hook
export const useScrollToTop = () => {  // export qilish
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);  // dependency array - bir marta ishlaydi
};