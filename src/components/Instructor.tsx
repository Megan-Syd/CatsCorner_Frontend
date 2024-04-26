import instructor1 from "../assets/instructor1.png";
import instructor2 from "../assets/instructor2.png";
import instructor3 from "../assets/instructor3.png";

export default function Instructor() {
  const instructors = [
    {
      name: "Joanna Doe",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et nesciunt architecto ipsam, fugit culpa libero veniam saepe dolorum quidem. Doloremque saepe fuga totam officia repudiandae laboriosam blanditiis eligendi quisquam.",
      imageUrl: instructor1,
    },
    {
      name: "John Smith",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et nesciunt architecto ipsam, fugit culpa libero veniam saepe dolorum quidem. Doloremque saepe fuga totam officia repudiandae laboriosam blanditiis eligendi quisquam.",
      imageUrl: instructor2,
    },
    {
      name: "Daniela Brown",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et nesciunt architecto ipsam, fugit culpa libero veniam saepe dolorum quidem. Doloremque saepe fuga totam officia repudiandae laboriosam blanditiis eligendi quisquam.",
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
