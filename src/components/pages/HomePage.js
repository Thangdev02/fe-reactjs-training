import React, { useEffect, useState } from "react";
import { loadCourse } from "../../services/HomeApi";
import CourseCard from "../commons/CourseCard";
import TextComponent from "../commons/TextComponent";
import { colors } from "../../constants/colors";

function HomePage() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const courses = await loadCourse();
    setCourses(courses);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div>
      <TextComponent
        props={{
          title: "Hello World!",
          style: "s30b",
          color: colors.primary,
        }}
      />
      <h1>HomePage</h1>
      {courses?.map((course, index) => {
        return <CourseCard key={index} props={course} />;
      })}
    </div>
  );
}
export default HomePage;
