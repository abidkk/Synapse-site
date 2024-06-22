
interface Courses {
    courseId: string;
    title : string;
    subtitle : string;
    duration : string;
    language : string;
    category : string;
    Platform : string;
    courseContent : string;
    courseContentLink : string;
    imageUrl : string;
}


const courses: Courses[] = [
    {
        courseId: "1",
        title: "Learn TypeScript",
        subtitle: "A comprehensive guide to TypeScript",
        duration: "5 hours",
        language: "English",
        category: "Programming",
        Platform: "Udemy",
        courseContent: "Introduction, Basics, Advanced Topics",
        courseContentLink: "http://example.com/typescript-course",
        imageUrl: "http://example.com/images/typescript.png"
    },

    {
        courseId: "1",
        title: "Learn TypeScript",
        subtitle: "A comprehensive guide to TypeScript",
        duration: "5 hours",
        language: "English",
        category: "Programming",
        Platform: "Udemy",
        courseContent: "Introduction, Basics, Advanced Topics",
        courseContentLink: "http://example.com/typescript-course",
        imageUrl: "http://example.com/images/typescript.png"
    }
];

// Export the courses array if you need to use it in other modules
export { courses };