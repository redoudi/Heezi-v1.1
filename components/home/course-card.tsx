import HomeHeader, { TitleBanner } from "@/components/home/HomeHeader";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { View } from "react-native";

export default function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <HomeHeader>
      <View>
        <TitleBanner
          title={toolConstants.title}
          description={toolConstants.description}
        />
      </View>
    </HomeHeader>
  );
}
