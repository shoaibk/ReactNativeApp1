import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>I am a Home Page</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        ></Button>
        <Button
          title="List Page"
          onPress={() => navigation.navigate("List")}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
