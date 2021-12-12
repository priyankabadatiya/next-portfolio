import Img from "next/image"
import Head from 'next/head'

export default function Aboutme(){
    return (<>
    <Head>
      <title>Priyanka Badatiya | About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
        <section className="about" id="about" >
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content"  >
            <div className="column left">
              <Img src="/pb.png" width="350" height="350" alt="" />
            </div>
            <div className="column right" style={{ zIndex:99}}>
              <div className="text">
               {" I am Priyanka and I'm a"} <span className="typing-2"></span>
              </div>
              <p>
            {"Full/MERN Stack Developer. I had Graduated with a Bachelor's degree in Computer Science Engineering. Currently, I am learning Full Stack Web Developement at AltCampus."} 
              </p>
              <a href="/Priyanka_Badatiya.pdf" download>Download Resume</a>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}