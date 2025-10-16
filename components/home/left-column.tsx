import { ActionButton } from "@/components/home/action-button";
import { CourseCard } from "@/components/home/course-card";
import { ImageGrid } from "@/components/home/image-grid";
import { StyleSheet, View } from "react-native";

interface LeftColumnProps {
  imageGrid1: string[];
  imageGrid2: string[];
}

export function LeftColumn({ imageGrid1, imageGrid2 }: LeftColumnProps) {
  return (
    <View style={styles.leftColumn}>
      <CourseCard
        thumbnailUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ldtg9pud_expires_30_days.png"
        progress="6 Sections/10 niveaux"
        status="En cours"
        title="Gestion d'un tableur"
        description="Lörem ipsum sulingar sasade, om än säv. "
        onPress={() => alert("Pressed!")}
      />

      <ActionButton
        label="Lörem ipsum sulingar sasade, om än säv. "
        onPress={() => alert("Pressed!")}
        style={styles.actionButton}
      />

      <ImageGrid imageUris={imageGrid1} style={styles.imageGrid} />

      <ImageGrid imageUris={imageGrid2} style={styles.imageGrid2} />

      <ActionButton
        label="Lörem ipsum sulingar sasade, om än säv. "
        onPress={() => alert("Pressed!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leftColumn: {
    width: 742,
    marginTop: 32,
    marginRight: 16,
  },
  actionButton: {
    marginBottom: 16,
  },
  imageGrid: {
    marginBottom: 8,
  },
  imageGrid2: {
    marginBottom: 16,
  },
});
