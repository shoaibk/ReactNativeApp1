import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert
} from "react-native";



const Item = ({ info }) => {
  const { name, nickname, age, emoji, sound } = info;

  const handlePress = () => {
    Alert.alert(
      "Animal Sound",
      `${emoji} ${name} sound is ${sound}`,
      [{ text: "OK" }],
      { cancelable: true }
    );
  };


  return (
    <Pressable onPress={handlePress} >
      <View style={styles.item}>
        <Text style={styles.title}>{emoji} {name}</Text>
        <Text>{nickname} is {age}-years-old</Text>
      </View>
    </Pressable>
  )

};

const data = [
  {
    id: 1,
    name: "Cat",
    nickname: "Fluffy",
    age: 3,
    emoji: "🐱",
    sound: "Meow"
  },
  {
    id: 2,
    name: "Dog",
    nickname: "Rexy",
    age: 5,
    emoji: "🐶",
    sound: "Woof"
  },
  {
    id: 3,
    name: "Rabbit",
    nickname: "Bunny",
    age: 2,
    emoji: "🐰",
    sound: "Squeak"
  },
  {
    id: 4,
    name: "Bird",
    nickname: "Tweety",
    age: 4,
    emoji: "🐦",
    sound: "Tweet"
  },
  {
    id: 5,
    name: "Horse",
    nickname: "Maxie",
    age: 6,
    emoji: "🐴",
    sound: "Neigh"
  },
  {
    id: 6,
    name: "Turtle",
    nickname: "Shelly",
    age: 1,
    emoji: "🐢",
    sound: "Quiet"
  },
  {
    id: 7,
    name: "Owl",
    nickname: "Ollie",
    age: 7,
    emoji: "🦉",
    sound: "Hoot"
  },
  {
    id: 8,
    name: "Hamster",
    nickname: "Daisy",
    age: 3,
    emoji: "🐹",
    sound: "Squeak"
  },
  {
    id: 9,
    name: "Pig",
    nickname: "Rocky",
    age: 8,
    emoji: "🐷",
    sound: "Oink"
  },
  {
    id: 10,
    name: "Fish",
    nickname: "Milo",
    age: 2,
    emoji: "🐟",
    sound: "Blub"
  }
];


export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>I am a List Page</Text>
        <View style={styles.buttonGroup}>
          <Button
            title="Home Page"
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Button
            title="About Page"
            onPress={() => navigation.navigate("About")}
          ></Button>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Item info={{ ...item }} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  list: {
    marginVertical: 8,
    backgroundColor: "#f1f1f1",
  },
  item: {
    backgroundColor: "#E5D9F2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
