import { CourseCard } from "@/components/home/course-card";
import usePracticeTool from "@/context/usePracticeTool";

export function ActiveCourseCard() {
  const { practiceTool } = usePracticeTool();
  return (
    <CourseCard
      progress="6 Sections/10 niveaux"
      status="En cours"
      description="Lörem ipsum sulingar sasade, om än säv. "
    />
  );
}
