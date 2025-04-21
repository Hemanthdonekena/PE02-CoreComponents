import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const courses = [
    "CS 505 – Operating Systems",
    "CS 506 – Software Engineering",
    "CS 517 – Computer Networks",
    "CS 519 – Cloud Computing",
    "CS 530 – Database Systems",
    "CS 542 – Algorithms",
    "CS 544 – Artificial Intelligence",
    "CS 546 – Data Mining",
    "CS 555 – Cybersecurity (Depth of Study)",
    "CS 556 – Mobile App Development (Depth of Study)",
    "CS 600 – Capstone Project"
  ];

  return (
    <ScrollView style={styles.container}>
    <Image source={require('../../assets/icon.png')} style={styles.icon} />
      <Text style={styles.header}>MSCS Course List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <Text style={styles.favorite}>Your Favorite Course: {favoriteCourse}</Text>

      {courses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff'
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  favorite: {
    fontSize: 18,
    marginBottom: 20
  },
  course: {
    fontSize: 16,
    marginBottom: 10
  }
});

export default App;
