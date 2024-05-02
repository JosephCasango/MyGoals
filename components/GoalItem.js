import { StyleSheet, View, Text, Pressable } from "react-native";

function GolItem({ itemData, OnDeLeteItem }) {
  return (
    <Pressable>
      <View style={style.goalItem}>
        <Text style={style.goalText}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
}

export default GolItem;

const style = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#FF6B4C",
    color: "black",
  },
  goalText: {
    color: "white",
  },
});