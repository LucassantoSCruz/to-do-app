import { View } from "react-native";
import Header from "../components/organisms/Header";
import ListToDo from "../components/organisms/ListToDo";

type HomeTemplateProps = {
  headerProps: { title: string };
};

export default function HomeTemplate({ headerProps }: HomeTemplateProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 32,
        backgroundColor: "#9A0526",
        gap: 32,
      }}
    >
      <Header {...headerProps} />
      <ListToDo />
    </View>
  );
}
