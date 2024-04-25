import instructor1 from "../assets/instructor1.png";
import instructor2 from "../assets/instructor2.png";
import instructor3 from "../assets/instructor3.png";

export default function Instructor() {
  const instructors = [
    {
      name: "Joanna Doe",
      description:
        "Joanna is a passionate dancer with over 10 years of experience in various dance styles including salsa, hip hop, and contemporary. She believes in making dance accessible to everyone and loves to inspire her students to express themselves through movement.",
      imageUrl: instructor1,
    },
    {
      name: "John Smith",
      description:
        "John is a professional ballet dancer who has performed in renowned theaters worldwide. With his extensive knowledge of ballet technique and choreography, he aims to instill discipline and grace in his students while nurturing their love for dance.",
      imageUrl: instructor2,
    },
    {
      name: "Daniela Brown",
      description:
        "Daniela is a versatile dancer specializing in Latin dances such as salsa, bachata, and merengue. She brings energy and charisma to her classes, creating a fun and dynamic learning environment where students can develop their skills and confidence.",
      imageUrl: instructor3,
    },
  ];

  return (
    <div className="container my-1">
      <h2 className="mb-4 text-center">Our Instructors</h2>
      <div className="row">
        {instructors.map((instructor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={instructor.imageUrl}
                className="card-img-top"
                alt={instructor.name}
              />
              <div className="card-body">
                <h5 className="card-title">{instructor.name}</h5>
                <p className="card-text">{instructor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
