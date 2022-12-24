import { Text, View, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#9C254D",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#9C254D",
    borderBottomWidth: 2,
  },
});
