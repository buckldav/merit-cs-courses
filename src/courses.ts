import type { TagIdType } from "./tags";

export class Course {
  name: String;
  length: String;
  countsFor: String;
  description: String[];
  tags: TagIdType[];
  units: String[];
  prereqs: String = null;

  constructor(
    name: String,
    semester: boolean,
    fullyear: boolean,
    dstudies: boolean,
    science: boolean,
    description: String[],
    tags: TagIdType[],
    units: String[],
    prereqs: String = null
  ) {
    this.name = name;
    this.countsFor =
      dstudies && science
        ? "Digital Studies, CTE, or Science"
        : dstudies
        ? "Digital Studies or CTE"
        : science
        ? "CTE or Science"
        : "CTE";
    this.length =
      semester && fullyear ? "0.5 or 1.0" : semester ? "0.5" : "1.0";
    this.description = description;
    this.tags = tags;
    this.units = units;
    this.prereqs = prereqs;
  }

  slug() {
    return this.name.split(" ").join("-").toLowerCase();
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
      "Learn the basics of web development with HTML and CSS.",
    ],
    ["html", "css", "python"],
    [
      "Unit 1: Intro to Computer Science and Computational Thinking",
      "Unit 2: Problem Solving with Computers",
      "Unit 3: Web Development",
      "Unit 4: Programming and Algorithms",
    ]
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
      "In addition to ECS topics, learn about computer systems, networks, and big data.",
    ],
    ["html", "css", "js", "python", "rasp"],
    [
      "Big Idea 1: Creative Development (collaboration, program design and development, and debugging).",
      "Big Idea 2: Data (binary numbers, compression, and using programs with data).",
      "Big Idea 3: Algorithms and Programming",
      "Big Idea 4: Computer Systems and Networks",
      "Big Idea 5: Impact of Computing (beneficial and harmful effects, ethics, and safety).",
    ]
  ),
];
export const explorer_specific = [
  new Course(
    "Computer Programming 1",
    false,
    true,
    true,
    false,
    [
      "Become adept at programming in at least one of the following: Python, JavaScript, or C#.",
      "Solve problems and design algorithms.",
      "Make console apps, games, and software!",
    ],
    ["python", "js", "csharp", "unity"],
    [
      "Units 1-2: Programming Environment and Methodology",
      "Units 3-4: Commands, Operations, and Control Structures",
      "Units 5-6: Ethics, Computing in Society, and Careers",
      "Units 7-9: Lists, Strings, Objects, and File Manipulation",
      "Unit 10: Software Development Teams and Agile Development",
    ]
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
      "Make your own sprites, assets, and animations.",
      "Learn the Unity game engine and little bit of the C# language.",
    ],
    ["unity", "csharp"],
    [
      "Unit 1: Video Game History (7% of course)",
      "Unit 2: Communication Feature and Game Interface Design (15% of course)",
      "Units 3-4: Game Genres, Types, and Platforms (20% of course)",
      "Unit 5: Game Design Production Cycle (54% of course)",
      "Unit 6: Understanding Careers (4% of course)",
    ]
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
      "Convert websites into apps that you can download to a mobile device.",
    ],
    ["html", "css", "js", "npm"],
    [
      "Unit 1: Creating Web Pages Using HTML and CSS",
      "Unit 2: Multi-Page Websites",
      "Unit 3: User Centered Design",
      "Unit 4: App Prototyping and Development",
      "Unit 5: Semester Project and Portfolio",
    ]
  ),
];

export const completer = [
  new Course(
    "Web Development Capstone",
    true,
    true,
    false,
    false,
    [
      "(Semester 1) Learn frontend web development:",
      "Make beautiful apps using HTML, CSS, Sass, JavaScript, and jQuery.",
      "Make static sites that can be hosted and process data for free using Google Firebase.",
      "(Semester 2) Learn backend web development:",
      "Learn the basics of authentication and data processing using Google Firebase.",
      "Use the Python language and the Django framework to make robust web applications.",
    ],
    ["html", "css", "sass", "js", "python", "git", "npm"],
    [],
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
    [
      "Units 1-2: Primitive Types and Using Objects",
      "Units 3-4: Boolean Expressions, If Statements, and Iteration",
      "Unit 5: Writing Classes",
      "Units 6-8: Arrays, ArrayLists, and 2d Arrays",
      "Units 9-10: Inheritance and Recursion",
    ],
    "This course requires at least one full year CS course prior to taking it."
  ),
];
