// 
// import {courses} from "./db.js"

//    let courseBox = document.getElementById("courses-container").innerHTML = "123"
//     courses.map((item)=>{
//         courseBox.innerHTML = `Title: ${item.title}`;
//     })


// index.js
import { courses } from './db.js';

document.addEventListener("DOMContentLoaded", function() {
    const coursesContainer = document.getElementById("courses-container");

    courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");

        courseElement.innerHTML = `
            <img src="${course.imageUrl}" alt="${course.title}">
            <h2>${course.title}</h2>
            <h3>${course.subtitle}</h3>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Language:</strong> ${course.language}</p>
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Platforms:</strong> ${course.platforms}</p>
            <p><strong>Content:</strong> ${course.courseContent}</p>
            <a href="${course.courseContentLink}">Course Link</a>
        `;

        coursesContainer.appendChild(courseElement);
    });
});
