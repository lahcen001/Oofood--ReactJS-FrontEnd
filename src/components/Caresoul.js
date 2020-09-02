import React, { Component } from 'react'
import './css/caresoul.css';

 
export class Caresoul extends Component {
  render() {
    return (
        <div className="owl-carousel">
        <div className="item">
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=5SJml0MBhW4?autoplay=1&rel=0&controls=0&showinfo=0&wmode=transparent"
          >
            <img src="https://res.cloudinary.com/milairagny/image/upload/v1487938016/pexels-photo-4_tfmpvk.jpg" />
            <i className="fa fa-play" aria-hidden="true" />
          </a>
        </div>
        <div className="item">
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=5SJml0MBhW4?autoplay=1&rel=0&controls=0&showinfo=0&wmode=transparent"
          >
            <img src="https://res.cloudinary.com/milairagny/image/upload/v1487938017/pexels-photo-3_ppz2bb.jpg" />
            <i className="fa fa-play" aria-hidden="true" />
          </a>
        </div>
        <div className="item">
          <a className="popup-text" href="#1">
            <img src="https://res.cloudinary.com/milairagny/image/upload/v1487938016/pexels-photo-2_hstxhf.jpg" />
            <i className="fa fa-newspaper-o" aria-hidden="true" />
          </a>
          <div id={1} className="mfp-hide white-popup-block popup-text">
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu.
            </p>
            <span>- Opal Ingram</span>
          </div>
        </div>
        <div className="item">
          <a
            className="popup-youtube"
            href="https://www.youtube.com/watch?v=5SJml0MBhW4?autoplay=1&rel=0&controls=0&showinfo=0&wmode=transparent"
          >
            <img src="https://res.cloudinary.com/milairagny/image/upload/v1487938123/pexels-photo-5_x69tiz.jpg" />
            <i className="fa fa-play" aria-hidden="true" />
          </a>
        </div>
        <div className="item">
          <a className="popup-text" href="#2">
            <img src="https://res.cloudinary.com/milairagny/image/upload/v1487937862/pexels-photo-91227_lpsizl.jpg" />
            <i className="fa fa-newspaper-o" aria-hidden="true" />
          </a>
          <div id={2} className="mfp-hide white-popup-block popup-text">
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu.
            </p>
            <span>- Rick Baleno</span>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Caresoul
