import React from 'react';
import { Link } from 'react-router-dom';
import ballet from '../assets/ballet.jpg';

const About: React.FC = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={ballet} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">About Us</h2>
                <p className="lead fs-4 text-secondary mb-3">Welcome to our dance school!</p>
                <p>
                  Cat’s Corner, founded in 1998 by Fred Ngo, a young university student in Kingston, Ontario, stemmed from his passion for dance. Traveling regularly to Montreal, he learned from top swing dancers and brought those lessons back to Kingston. Thus, Cat’s Corner Ecole de Danse Swing emerged, evolving into a global community united by a love for jazz, where the ethos of seeking, learning, and sharing the best of swing remains central. 
                </p>
                <h3 className="mb-3">Our Mission</h3>
                <p>
                  In its 25-year journey, Cat’s Corner has navigated various leadership transitions and physical spaces – from streets and parks to online platforms. Yet, our commitment to community, authenticity, and Jazz remains unwavering. Jazz, an African American tradition, reflects a rich history from work songs to modern influences like R&B and hip-hop. At Cat’s Corner, we honor these roots, emphasizing improvisation, self-expression, and community in our classes and events. We pay tribute to those who paved the way, pushing creative boundaries to shape the dances and music we cherish.
                </p>
                <h3 className="mb-3">Our Team</h3>
                <p>Meet the talented instructors who make our dance school special:</p>
                <h3 className="mb-3">Contact Us</h3>
                <p>If you have any questions or would like to enroll in a class, feel free to contact us:</p>
                <p>Phone: <strong>+123 456 7890</strong></p>
                <p>Email: <strong>info@catscorner.com</strong></p>
                <p style={{ marginTop: '20px' }}>Alternatively, you can <Link to="/contact">leave us a message</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
