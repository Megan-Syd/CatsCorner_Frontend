interface Course {
  title: string;
  description: string;
}
interface Props {
  courses: Course[];
}
function CourseList({ courses }: Props) {
  return (
    <div>
      <h2>List of Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
