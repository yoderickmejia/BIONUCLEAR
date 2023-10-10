import React, { Component } from 'react';
import "../styles/Carrousel.css";
import "bootstrap/dist/css/bootstrap.min.css"
const slideImages = [
  require('../Images/imagen 2.png'),
  require('../Images/Imagen2.png'),
  require('../Images/imagen 2.png'),
];
class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 2000); // Cambia el slide cada 2 segundos (2000ms)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    const { currentSlide } = this.state;
    const totalSlides = slideImages.length;
    this.setState({ currentSlide: (currentSlide + 1) % totalSlides });
  };

  render() {
    const { currentSlide } = this.state;

    return (
      <div className="carousel-container ">
        {slideImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  }
}

export default Carrousel;
