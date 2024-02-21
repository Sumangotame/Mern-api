require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./Routes/workouts");
const app = express();
app.get("/", (req, res) => {
  res.json({ message: " you are on root page" });
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to database and listening  on port",
        process.env.PORT
      );
    });
  })
  .catch(() => {
    console.log("error connecting database");
  });

// // // arr = [60, 10, 30, 3, 2, 4, 80];
// // // for (i = 0; i < arr.length - 1; i++) {
// // //   for (j = i + 1; j < arr.length; j++) {
// // //     let temp;
// // //     if (arr[j] < arr[i]) {
// // //       temp = arr[i];
// // //       arr[i] = arr[j];
// // //       arr[j] = temp;
// // //     }
// // //   }
// // // }
// // // max = arr[i];
// // // for (i = 0; i < arr.length - 1; i++) {
// // //   if (arr[i] > max) max = arr[i];
// // // }

// // // min = arr[i];
// // // for (i = 0; i < arr.length - 1; i++) {
// // //   if (arr[i] < min) min = arr[i];
// // // }

// // console.log(arr);
// // console.log(max);
// // console.log(min);
// // sum = 0;

// // for (i = 0; i < arr.length; i++) {
// //   sum = sum + arr[i];
// // }
// // average = sum / arr.length;

// // console.log(average);

// // objects = { name: "suman", surname: "gautam" };
// // for (const key in objects) {
// //   const element = objects[key];
// // }

// // // objects.name = "suraj";
// // // console.log(objects.name);

// // rows = 10;

// // for (i = 0; i < rows; i++) {
// //   row = "";
// //   for (j = rows; j > i; j--) {
// //     row = row + "* ";
// //   }
// //   console.log(row);
// // }

// secondrow = 4;
// for (i = 0; i < secondrow; i++) {
//   spaces = "";
//   for (j = 0; j < secondrow - i; j++) {
//     spaces += " ";
//   }
//   stars = "";
//   for (k = 0; k < i * 2 - 1; k++) {
//     stars += "*";
//   }
//   console.log(spaces + stars);
// }

// array = [6, 5000, 30, 200, 10, 6, 100];
// for (let i = 0; i < array.length - 1; i++) {
//   minimum = array[i];

//   for (j = i + 1; j < array.length; j++) {
//     if (array[j] < minimum) {
//       minimum = array[j];
//     }
//   }
// }
// console.log(minimum);

// for (i = 0; i < array.length - 1; i++) {
//   maximum = array[i];

//   for (j = i + 1; j < array.length; j++) {
//     if (array[j] > maximum) {
//       maximum = array[j];
//     }
//   }
// }
// console.log(maximum);

// // pattern printing

// rows = 5;
// for (i = 0; i < rows; i++) {
//   row = "";
//   for (j = i; j < rows; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }
// rows = 5;
// column = 6;
// for (i = 1; i <= rows; i++) {
//   space = "";
//   for (j = 1; j <= rows - i; j++) {
//     space += " ";
//   }
//   stars = " ";
//   for (k = 0; k < i * 2 - 1; k++) {
//     stars += "*";
//   }
//   console.log(space + stars);
// }

// class Detail {
//   introduce() {
//     return `I am ${this.name} and my age is ${this.age}`;
//   }

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log("constructor created");
//   }
// }

// obj = new Detail("suraj", "12");

// console.log(obj.introduce());
