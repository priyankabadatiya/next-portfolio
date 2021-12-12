import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Header() {
  const [logo, setLogo] = useState("P");
  useEffect(() => {
    setInterval(function () { setLogo(logo == "P" ? "B" : "P") }, 4500);
  }, [logo])
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <div id='sad'>
            <h1 id='eyes'>{logo}</h1>
            <div id='block'></div>
          </div></div>
        <ul className="menu">
          <li><Link href="/"><a className="menu-btn">Home</a></Link></li>
          <li><Link href="/about"><a className="menu-btn">About</a></Link></li>
          <li><Link href="/projects"><a className="menu-btn">Projects</a></Link></li>
          <li><Link href="/skills"><a className="menu-btn">Skills</a></Link></li>
          <li><Link href="/contact"><a className="menu-btn">Contact</a></Link></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}