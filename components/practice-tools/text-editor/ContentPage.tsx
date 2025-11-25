import useCursor from "@/context/useCursor";
import useHighlight from "@/hooks/useHighlight";
import useTextEditorStore from "@/store/useTextEditorStore";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function TextBlock({ item }: { item: any }) {
  return (
    <View style={[styles.textBlockContainer, item.blockStyle]}>
      <Text style={[styles.textBlockText, item.style]}>{item.text}</Text>
    </View>
  );
}

function TextInputBlock({ item }: { item: any }) {
  const { setBlockText, setSelectedBlockId } = useTextEditorStore();
  const { setContentRef, expected } = useCursor();
  const [isWrongAnswer, setIsWrongAnswer] = useState(null);
  const blockRef = useRef<TextInput>(null);

  useEffect(() => {
    if (setContentRef && item.blockId) {
      setContentRef(item.blockId, blockRef);
    }
  }, [setContentRef, item.blockId]);

  const handleBlur = () => {
    if (
      expected &&
      expected.type === "blockText" &&
      expected.blockId === item.blockId &&
      item.text.length &&
      expected?.text &&
      item.text !== expected.text
    ) {
      setIsWrongAnswer(true);
    } else {
      setIsWrongAnswer(false);
    }
  };

  const wrongAnswerStyle = {
    borderColor: "red",
    borderWidth: 2,
  };

  return (
    <View style={[styles.textInputContainer, item.blockStyle]}>
      <TextInput
        style={[
          styles.textInput,
          item.style,
          isWrongAnswer ? wrongAnswerStyle : {},
        ]}
        editable={isWrongAnswer !== false}
        value={item.text}
        onChangeText={(inputText) => setBlockText(item.blockId, inputText)}
        onFocus={() => setSelectedBlockId(item.blockId)}
        placeholder={item.placeholder}
        placeholderTextColor="rgb(111, 111, 111)"
        ref={blockRef}
        onBlur={handleBlur}
      />
    </View>
  );
}

function ContentItem({ item, index }: { item: any; index: number }) {
  switch (item.type) {
    case "text":
      return <TextBlock key={index} item={item} />;
    case "textInput":
      return <TextInputBlock key={index} item={item} />;
    case "view":
      return (
        <View key={index} style={item.style}>
          {item.children.map((child: any, index: number) => (
            <ContentItem key={index} item={child} index={index} />
          ))}
        </View>
      );
  }
}

const ContentPage = () => {
  const { contentBlocks } = useTextEditorStore();
  const contentPageRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  const pageContentRef = useRef<View>(null);
  useEffect(() => {
    if (setContentRef) {
      setContentRef("contentPage", contentPageRef);
      setContentRef("pageContent", pageContentRef);
    }
  }, [setContentRef]);

  const { hightlightedStyle: contentPageHighlightedStyle } =
    useHighlight("contentPage");
  const { hightlightedStyle: pageContentHighlightedStyle } =
    useHighlight("pageContent");

  return (
    <View
      ref={contentPageRef}
      style={[styles.contentPage, contentPageHighlightedStyle]}
    >
      <View ref={pageContentRef} style={[pageContentHighlightedStyle]}>
        {contentBlocks.map((item, index) => (
          <ContentItem key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
};

export default ContentPage;

const styles = StyleSheet.create({
  contentPage: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 48,
    marginBottom: 8,
    marginHorizontal: 345,
    paddingHorizontal: 64,
  },
  textBlockContainer: {
    alignSelf: "flex-start",
    marginBottom: 11,
    // marginHorizontal: 64,
  },
  textBlockText: {
    color: "#292929",
    fontSize: 16,
    textAlignVertical: "center",
  },
  textInputContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 11,
    marginBottom: 10,
    // marginHorizontal: 64,
  },
  textInput: {
    color: "#292929",
    fontSize: 16,
    marginLeft: 9,
  },
});
