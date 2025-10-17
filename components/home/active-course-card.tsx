import { CourseCard } from "@/components/home/course-card";

export function ActiveCourseCard() {
  return (
    <CourseCard
      thumbnailUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ldtg9pud_expires_30_days.png"
      progress="6 Sections/10 niveaux"
      status="En cours"
      title="Gestion d'un tableur"
      description="Lörem ipsum sulingar sasade, om än säv. "
      onPress={() => alert("Pressed!")}
    />
  );
}
