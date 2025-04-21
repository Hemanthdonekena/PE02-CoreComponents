# PE02-CoreComponents

**Input**
In this app, the user can enter their favorite MSCS course using a TextInput box. The app also uses an image from the assets folder, which displays at the top of the screen. The rest of the content includes a list of MSCS courses already added in the code, and the app reads the user’s input in real time when they type in the TextInput field.

**Process**
The app is created using a functional component with arrow function syntax. It uses React Native core components like View, Text, ScrollView, Image, TextInput, and StyleSheet. When the app runs, the Image is shown first, then a header title is displayed. Below that, the TextInput captures the favorite course entered by the user. The ScrollView makes the screen scrollable, so users can scroll down through the 8 core courses, 2 depth of study courses, and 1 capstone course.

**Output**
The final output on the screen starts with the course logo at the top, followed by the title “MSCS Course List.” Then there is a TextInput where the anyone can type their favorite course. Below that, the app shows the text “favorite Course:” followed by list the user entered. After this, the list of MSCS courses appears, showing the 8 core, 2 depth of study, and 1 capstone course. The whole content is scrollable, and the layout is styled with StyleSheet.
