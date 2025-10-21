import { CourseCard } from "@/components/home/course-card";
import usePracticeTool from "@/context/usePracticeTool";

export function ActiveCourseCard() {
  const { practiceTool } = usePracticeTool();
  return (
    <CourseCard
      thumbnailUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ldtg9pud_expires_30_days.png"
      progress="6 Sections/10 niveaux"
      status="En cours"
      title={
        practiceTool === "spreadsheet"
          ? "Gestion d'un tableur"
          : "L'éditeur de texte"
      }
      description="Lörem ipsum sulingar sasade, om än säv. "
      onPress={() => {}}
    />
  );
}
