import { LevelSection } from "@/components/home/level-section";

interface LevelHeaderProps {
  onScorePress: () => void;
}

export function LevelHeader() {
  return (
    <LevelSection
      level="Niveau : débutant"
      score="0"
      coinIconUri={require("@/assets/images/c30140rw_expires_30_days.png")}
      badgeIconUri={require("@/assets/images/a8a1zbel_expires_30_days.png")}
      onScorePress={() => {}}
    />
  );
}
