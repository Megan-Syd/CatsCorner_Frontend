import dance1 from "../assets/1.jpg";
import dance2 from "../assets/2.jpg";
import dance3 from "../assets/3.jpg";
import "../../home.css";
export default function Home() {
  return (
    <>
      {/* carousel header */}
      <header
        id="carouselIndicators"
        className="carousel slide my-2"
        data-bs-ride="carousel"
      >
        <div id="carousel" className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="3000">
            <img src={dance1} alt="dance" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={dance2} alt="dance" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={dance3} alt="dance" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </header>
      <main id="main" className="jumbotron-fluid">
        <div className="container text-sm-center">
          <h1 className="display-3  py-2">Welcome to Cats Corner academy!</h1>
          <p className="lead text-sm-center">
            Discover the vibrant world of dance and let the rhythm guide you.
            Whether you're a beginner or an experienced dancer, our passionate
            instructors are here to help you master the art of dancing. Join us
            on an exciting journey as we share our love for Latin rhythms and
            cultural expressions. Our studio provides a welcoming and inclusive
            environment where you can learn, grow, and connect with fellow dance
            enthusiasts.
          </p>
          <h1 className="display-6  py-2">
            <a href="/programms" className="btn btn-lg mb-3">
              Ready to start your dance journey?
            </a>
          </h1>
        </div>
      </main>
    </>
  );
}
