import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  DropCategory,
  Search,
  TextoItem,
  ContainerHeader,
} from "./styles";

import { Item } from "../../../src/Array/dado";
import { FlatList } from "react-native";

import { HeaderDevices } from "../../components/Header/Header";

export function Home() {
  const [Dados, setDados] = useState([]);
  const [cloneData, setCloneData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("all");
  const [FiltroDados, setFiltroDados] = useState([]);
  console.log(FiltroDados, "pppppppppppppppppppp");

  const [items, setItems] = useState([
    { label: "Todos disp", value: "all" },
    { label: "Alta", value: "alta" },
    { label: "Média", value: "media" },
    { label: "Desastre", value: "desastre" },
    { label: "Desabilitado", value: "desabilitado" },
    { label: "Habilitado", value: "habilitado" },
  ]);

  const handleCategory = (value) => {
    setCategory(value);
  };

  function FiltDados() {
    const filteredData = [];

    switch (category) {
      case "desabilitado": {
        cloneData.forEach((item) => {
          if (item.status === "1") {
            filteredData.push(item);
          }
        });
        break;
      }
      case "habilitado": {
        cloneData.forEach((item) => {
          if (item.status === "0") {
            filteredData.push(item);
          }
        });
        break;
      }
      case "media": {
        cloneData.forEach((item) => {
          if (item.priority == 3) {
            filteredData.push(item);
          }
        });
        break;
      }
      case "alta": {
        cloneData.forEach((item) => {
          if (item.priority == 4) {
            filteredData.push(item);
          }
        });
        break;
      }
      case "all": {
        cloneData;
      }
      default:
        console.log(category, "Não caiu em nenhum caso do switch/case");

        break;
    }

    setFiltroDados(filteredData);
  }

  useEffect(() => {
    FiltDados();
  }, [category]);
  async function GetData() {
    setDados(Item);
  }

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    setCloneData(Dados);
  }, [Dados]);

  useEffect(() => {
    function filterParam(item, key, searchText) {
      console.log(item, "item");
      console.log(item, "item");
      return item[key].toLowerCase().includes(searchText.toLowerCase());
    }

    if (searchText === "") {
      setCloneData([...Dados]);
    } else {
      setCloneData(
        [...Dados].filter(
          (item) =>
            filterParam(item, "host", searchText) ||
            filterParam(item, "Ip", searchText)
        )
      );
    }
  }, [searchText]);

  return (
    <>
      <ContainerHeader>
        <DropCategory
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          onChangeValue={(v) => handleCategory(v)}
          zIndex={30000}
          zIndexInverse={50000}
          containerStyle={{
            position: "absolute",
            width: "34%",
            left: "50%",
            marginTop: 30,
          }}
          childrenContainerStyle={{
            height: 1030,
          }}
          itemStyle={{ justifyContent: "flex-start" }}
          dropDownStyle={{ backgroundColor: "#fafafa", height: 100 }}
          dropDownContainerStyle={{
            backgroundColor: "white",
            zIndex: 1000,
            elevation: 5000,
          }}
        ></DropCategory>

        <HeaderDevices title="Lista de equipamentos"></HeaderDevices>

        <Search
          value={searchText}
          autoCapitalize="none"
          placeholder="Pesquise por nome ou por ip "
          placeholderTextColor={"#ccc"}
          onChangeText={(item) => setSearchText(item)}
          inputStyle={{ paddingBottom: 0, margin: 0 }}
        />
      </ContainerHeader>

      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            FiltroDados.length == 0 && category === "all"
              ? cloneData
              : FiltroDados
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Content>
              <TextoItem>{item.host}</TextoItem>
            </Content>
          )}
        />
      </Container>
    </>
  );
}
