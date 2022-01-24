import type { Course } from "./index";
export async function fetchCourses() {
  const response = await fetch(
    "https://meritacademy.herokuapp.com/api/courses/"
  );
  const json = await response.json();
  const courses = (json as Course[]).map((course) => {
    course.tags = course.tags.sort((a, b) => {
      console.log(a.content.toLowerCase())
      if (a.content.toLowerCase().includes("html")) {
        return -2;
      }
      if (a.content.toLowerCase().includes("aws")) {
        return 2;
      }
      if (a.content.toLowerCase() > b.content.toLowerCase()) {
        return 1;
      }
      if (a.content.toLowerCase() < b.content.toLowerCase()) {
        return -1;
      }
      return 0;
    })

    console.log(course.tags)
    return course
  })

  return courses;
}