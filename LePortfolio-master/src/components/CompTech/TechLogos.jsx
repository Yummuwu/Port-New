import LogoLoop from './LogoLoop';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { FaVuejs,FaLaravel,FaPhp, FaHtml5,FaCss3Alt, FaCss3} from "react-icons/fa";
import { TbBrandKotlin, TbBrandVite } from "react-icons/tb";

const techLogos = [
{ node: <SiReact color="#61DAFB"/>, title: "React", href: "https://react.dev" },
{ node: <FaLaravel color="#FF2D20"/>, title: "Laravel", href: "https://laravel.com" },
{ node: <FaPhp color="#777BB4"/>, title: "PHP", href: "https://www.php.net" },
{ node: <FaHtml5 color="#E34F26"/>, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
{ node: <FaCss3 color="#1572B6"/>, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
{ node: <FaCss3Alt color="#1572B6"/>, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
{ node: <FaVuejs color="#4FC08D"/>, title: "Vue.js", href: "https://vuejs.org" },
{ node: <SiTailwindcss color="#06B6D4"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
{ node: <TbBrandKotlin color="#ac88ffff"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
{ node: <TbBrandVite color="#fdff88ff"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



function Logos() {
  return (
    <div style={{ height: '300px', position: 'relative', overflow: 'hidden'}} className='pt-25'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="right"
        logoHeight={100}
        gap={70}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="rgba(109, 69, 121, 0.2)"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Logos;