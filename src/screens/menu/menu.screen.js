import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styled from "styled-components";
import i18n from "../../locale/i18n";

export default function Example() {
  const [items, setItems] = React.useState([
    { name: i18n.t("menu_events"), code: "#2ecc71" },
    { name: i18n.t("menu_profile"), code: "#9b59b6" },
    { name: i18n.t("menu_social"), code: "#34495e" },
    { name: i18n.t("menu_about_endava"), code: "#16a085" },
  ]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={ false } backgroundColor="#dc4c18" translucent={ true } />
      <FlatGrid
        itemDimension={ 130 }
        data={ items }
        style={ styles.gridView }
        spacing={ 10 }
        renderItem={ ({ item }) => (
          <View style={ [styles.itemContainer, { backgroundColor: item.code }] }>
            <Text style={ styles.itemName }>{ item.name }</Text>
            <Text style={ styles.itemCode }>{ item.code }</Text>
          </View>
        ) }
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

const Container = styled.View`
  margin-top: 35px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
