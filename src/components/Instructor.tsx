import instructor1 from "../assets/instructor.png";
import instructor2 from "../assets/instructor.png";
import instructor3 from "../assets/instructor.png";

export default function Instructor() {
  const instructors = [
    {
      name: "John Doe",
      description:
        "John is a passionate dancer with over 10 years of experience in various dance styles including salsa, hip hop, and contemporary. He believes in making dance accessible to everyone and loves to inspire his students to express themselves through movement.",
      imageUrl: instructor1,
    },
    {
      name: "Jane Smith",
      description:
        "Jane is a professional ballet dancer who has performed in renowned theaters worldwide. With her extensive knowledge of ballet technique and choreography, she aims to instill discipline and grace in her students while nurturing their love for dance.",
      imageUrl: instructor2,
    },
    {
      name: "David Brown",
      description:
        "David is a versatile dancer specializing in Latin dances such as salsa, bachata, and merengue. He brings energy and charisma to his classes, creating a fun and dynamic learning environment where students can develop their skills and confidence.",
      imageUrl: instructor3,
    },
  ];

  return (
    <div className="container mt-5">
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
