import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";

export const Container = styled.View``;

export const Texto = styled.Text`
  font-size: 20px;
  padding: 15px;
`;

export const Content = styled.SafeAreaView`
  background-color: #cececc;
  padding: 5px 20px;
  margin: 10px;
  border-radius: 10px;
`;

export const TextoItem = styled.Text`
  font-size: 20px;
  padding: 15px;
`;

export const Search = styled(Searchbar)`
  align-self: center;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 5px;
  border-color: aqua;
  z-index: 0;
`;

export const DropCategory = styled(DropDownPicker)`
  position: absolute;
  height: 30px;
  background-color: azure;
`;
export const ContainerHeader = styled.View`
  background-color: aliceblue;
`;
