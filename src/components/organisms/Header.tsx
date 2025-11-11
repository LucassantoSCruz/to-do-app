import { Text } from "react-native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <Text style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF" }}>
      {title}
    </Text>
  );
}
