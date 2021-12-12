var I = require('react-fontawesome');
import { useRouter } from 'next/router'
export default function Contacts() {
  const router = useRouter()
  return (
    <section className={`contact ${router.route == "/contact" ? "full-height" : ''}`} id="contact" >
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left" style={{ zIndex:99}} >

            <div className="icons">
              <div className="row">
                <I className="fas fa-user"></I>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Priyanka Badatiya</div>
                </div>
              </div>
              <div className="row">
                <I className="fas fa-map-marker"></I>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Thehr, Dharamshala</div>
                </div>
              </div>
              <div className="row">
                <I className="fas fa-envelope"></I>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">priyabadatiya@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right" style={{ zIndex:99}}>
            <div className="icons">
              <div className="row">
                <I className="fas fa-linkedin"></I>
                <div className="info">
                  <a href="https://www.linkedin.com/in/priyabadatiya/" className="head">LinkedIn</a>
                </div>
              </div>
              <div className="row">
                <I className="fas fa-twitter"></I>
                <div className="info">
                  <a href="https://www.twitter.com/priyabadatiya" className="head">Twitter</a>
                </div>
              </div>
              <div className="row">
                <I className="fas fa-phone"></I>
                <div className="info">
                  <a href="tel:+918763298699" className="head">Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
