import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke bagian atas halaman
  }, [pathname]); // Setiap kali pathname berubah, scroll ke atas

  return null; // Tidak merender apapun
}

export default ScrollToTop;
