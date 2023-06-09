import { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/components/main/Sections";

function SmoothScroll() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const handleMouseEnter = (ref) => {
    const sectionElement = ref.current;
    if (sectionElement) {
      const offsetTop =
        sectionElement.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6 sticky top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            <Link
              to="section1"
              spy={true}
              smooth={true}
              duration={800}
              onMouseEnter={() => handleMouseEnter(section1Ref)}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Keti SmartFarm
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="section2"
              spy={true}
              smooth={true}
              duration={800}
              onMouseEnter={() => handleMouseEnter(section2Ref)}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Dashboard & Plotly
            </Link>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              duration={800}
              onMouseEnter={() => handleMouseEnter(section3Ref)}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              3D Data Visualization
            </Link>
            <Link
              to="section4"
              spy={true}
              smooth={true}
              duration={800}
              onMouseEnter={() => handleMouseEnter(section4Ref)}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              VR & AR
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              MyPage
            </a>
          </div>
        </div>
      </nav>

      <section id="section1" ref={section1Ref}>
        <Section1 />
      </section>
      <section id="section2" ref={section2Ref}>
        <Section2 />
      </section>
      <section id="section3" ref={section3Ref}>
        <Section3 />
      </section>
      <section id="section4" ref={section4Ref}>
        <Section4 />
      </section>

      <style jsx>{`
        section {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default SmoothScroll;
