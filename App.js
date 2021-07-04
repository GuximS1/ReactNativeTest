import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Modal, Text } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <Modal visible={true}>
        <View style={styles.screen}>
          <View>
            <Text style={styles.myTitle}>My Goals</Text>
          </View>
          <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
          <GoalInput
            visible={isAddMode}
            onAddGoal={addGoalHandler}
            onCancel={cancelGoalAdditionHandler}
          />
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  myTitle: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderRadius: 170,
  },
});
