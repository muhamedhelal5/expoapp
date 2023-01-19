import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.con1}>
      <View style={styles.con2}>
        <Text style={styles.t1}> congratulation</Text>
      </View>
      <Text style={styles.t2}>hello muhamed juda </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  con1: {
    flex: 1,
    backgroundColor: "red",
    //alignItems: "center",
    //justifyContent: "center",
    padding: 12,
  }, con2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 3,
    borderBottomColor: "blue",
    margin: 1,
    //flex:1,
    backgroundColor: "green",
  },
  t1: {
    
   // justifyContent: "center",
    //alignItems: "center",

    borderWidth: 3,
    borderBottomColor: "blue",
    margin: 1,
    //flex:1,
    backgroundColor: "red",
  },
  t2: {
    //flex: 1,
    //alignItems: "center",
   // justifyContent: "center",
    borderWidth: 3,
    borderBottomColor: "red",
    //flex:1,
    backgroundColor: "yellow",
  },
});
