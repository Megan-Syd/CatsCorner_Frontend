interface Course {
  name: string;
  description: string;
  schedule: string;
}
interface Props {
  courses: Course[];
}
function CourseList({ courses }: Props) {
  return (
    <div className="container my-3 table-sm">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
