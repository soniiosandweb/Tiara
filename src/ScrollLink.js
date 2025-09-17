import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToSection({ to, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      // already on home → just scroll
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -70, // adjust for sticky header
      });
    } else {
      // navigate to home, tell it which section to scroll to
      navigate("/", { state: { scrollTo: to } });
    }
  };

  return (
    <span onClick={handleClick} className="link">
      {children}
    </span>
  );
}
