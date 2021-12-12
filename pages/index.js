import { useState } from 'react'
import Aboutme from './about'
import Projects from './projects'
import Skills from './skills'
import Contacts from './contact'
import Particles from 'react-particles-js';
var I = require('react-fontawesome');

export default function Home() {
  const [proffesion, setProfession] = useState("Full Stack Developer");

  setInterval(function () { setProfession("MERN Stack Developer") }, 6000);
  return (<>
    <section className="home" id="home">
    <Particles width="100vw" style={{position:"absolute", top:0, left:0, zIndex:0}} params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                "speed": 3,

                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "config_demo": {
              "hide_card": false,
              "background_color": "#b61924",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
            }
          }} />
      <div className="max-width">
        
        <div className="home-content"  style={{ zIndex:99}}>
          
          <div className="text-1">Hello, my name is</div>
          <div className="text-2"><span>P</span>riyanka <span>B</span>adatiya</div>
          <div className="text-3">{"And I'm a"}
            <p className="line-1 anim-typewriter">{proffesion}</p>

          </div>
          <a href="https://github.com/priyabadatiya" target="_blank" rel="noreferrer"  ><I className="fas fab fa-github"></I> Github</a>
        </div>
      </div>
    </section>
    <Aboutme />
    <Projects />
    <Skills />
    <Contacts />
  </>)
}
