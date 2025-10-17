import { LevelSection } from "@/components/home/level-section";

interface LevelHeaderProps {
  onScorePress: () => void;
}

export function LevelHeader({ onScorePress }: LevelHeaderProps) {
  return (
    <LevelSection
      level="Niveau. 1"
      score="500"
      coinIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/c30140rw_expires_30_days.png"
      badgeIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/a8a1zbel_expires_30_days.png"
      onScorePress={onScorePress}
    />
  );
}
