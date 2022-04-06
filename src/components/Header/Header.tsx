import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Header, Title } from "./styles";

interface HeaderProps extends TouchableOpacityProps {
  title: string;
}
export function HeaderDevices({ title, ...rest }: HeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}
