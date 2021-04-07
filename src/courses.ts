import type { TagIdType } from "./tags";

export class Course {
    name : String;
    length : String;
    countsFor : String;
    description : String[];
    tags : TagIdType[];
    prereqs : String = null;

    constructor(name: String, semester: boolean, fullyear: boolean, dstudies: boolean, science: boolean, description: String[], tags: TagIdType[], prereqs: String = null) {
        this.name = name;
        this.countsFor = dstudies && science ? "Digital Studies, CTE, or Science" : dstudies ? "Digital Studies or CTE" : science ? "CTE or Science" : "CTE"
        this.length = semester && fullyear ? "0.5 or 1.0" : semester ? "0.5" : "1.0"
        this.description = description;
        this.tags = tags;
        this.prereqs = prereqs;
    }
}

export const explorer_general = [
    new Course(
        "Exploring Computer Science",
        true,
        false,
        true,
        false,
        [
            "Learn essential real-world computing skills to improve your general technology use.",
            "Learn the basics of programming with Python.",
            "Learn the basics of web development with HTML and CSS."
        ],
        ["html", "css", "python"],
    ),
    new Course(
        "AP Computer Science Principles",
        false,
        true,
        true,
        true,
        [
            "This class is recommended for 9th and 10th graders! No, really!",
            "Like Exploring Computer Science but a full year and you get college credit!",
            "In addition to ECS topics, learn about computer systems, networks, and big data."
        ],
        ["html", "css", "js", "python", "rasp"],
    )
]
export const explorer_specific = [
    new Course(
        "Computer Programming 1",
        false,
        true,
        true,
        false,
        [
            "Become adept at programming in C#.",
            "Solve problems and design algorithms.",
            "Make console apps, games, and software!"
        ],
        ["python", "csharp", "unity"],
    ),
    new Course(
        "Game Development 1",
        true,
        false,
        false,
        false,
        [
            "Learn to make a game from start to finish!",
            "For beginning and advanced game makers.",
            "Choose your engine from Scratch to Godot to Unity."
        ],
        ["unity"],
    ),
    new Course(
        "App and Web Development 1",
        true,
        false,
        true,
        false,
        [
            "Become adept at making websites using HTML and CSS.",
            "Learn to design sites and graphics for desktop and mobile devices.",
            "Convert websites into apps that you can download to a mobile device."
        ],
        ["html", "css", "js", "npm"],
    )
]

export const completer = [
    new Course(
        "Web Development Capstone", 
        true,
        true,
        false,
        false,
        [
            "(Semester 1) Learn frontend web development:", 
            "Make beautiful sites using HTML, CSS, Sass, JavaScript, and jQuery.", 
            "Make static sites that can be hosted and process data for free using Google Firebase.",
            "(Semester 2) Learn backend web development:",
            "Learn the basics of authentication and data processing using Google Firebase.",
            "Use the Python language and the Django framework to make robust web applications." 
        ], 
        ["html", "css", "sass", "js", "python", "git", "npm"],
        "This course requires at least one semester of explorer courses (except Game Development) prior to taking it."
    ),
    new Course(
        "AP Computer Science A", 
        false,
        true,
        false,
        true,
        [
            "Become a skilled object-oriented developer in the Java language.",
            "This is a legitimate freshman college level course that you can use to kickstart your post-secondary education.",
            "Solve competitive coding problems and participate in high school coding competitions.",
            "Use Java to create console apps, Android apps, or Minecraft mods.", 
        ], 
        ["java", "android", "git"],
        "This course requires at least one full year CS course prior to taking it."
    )
]