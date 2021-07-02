import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const GoalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const AllGoals = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" Course goals"
          style={styles.input}
          onChangeText={GoalHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={AllGoals} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={styles.items} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    //borderColor: "black",
    borderWidth: 1,
    height: 35,
    marginBottom: 2,
    width: "80%",
    textAlign: "center",
  },
  items: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});
