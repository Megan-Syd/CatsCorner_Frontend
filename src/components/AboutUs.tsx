import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>About Us</h1>
      <p className="lead">Welcome to our dance school!</p>
      <p>
Cat’s Corner, founded in 1998 by Fred Ngo, a young university student in Kingston, Ontario, stemmed from his passion for dance. Traveling regularly to Montreal, he learned from top swing dancers and brought those lessons back to Kingston. Thus, Cat’s Corner Ecole de Danse Swing emerged, evolving into a global community united by a love for jazz, where the ethos of seeking, learning, and sharing the best of swing remains central. 
</p>
      <h2>Our Mission</h2>
      <p>In its 25-year journey, Cat’s Corner has navigated various leadership transitions and physical spaces – from streets and parks to online platforms. Yet, our commitment to community, authenticity, and Jazz remains unwavering. Jazz, an African American tradition, reflects a rich history from work songs to modern influences like R&B and hip-hop. At Cat’s Corner, we honor these roots, emphasizing improvisation, self-expression, and community in our classes and events. We pay tribute to those who paved the way, pushing creative boundaries to shape the dances and music we cherish.</p>
      <h2>Our Team</h2>
      <p>Meet the talented instructors who make our dance school special:</p>
      <ul>
        <p>A - Ballet Instructor</p>
        <p>B - Hip-Hop Instructor</p>
        <p>C - Contemporary Instructor</p>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to enroll in a class, feel free to contact us:</p>
      <p>Phone: </p>
      <p>Email:</p>
      
      {/* Link to the contact page */}
      <p>Or <Link to="/contact">Leave us a Message</Link>.</p>
    </div>
  );
};

export default About;