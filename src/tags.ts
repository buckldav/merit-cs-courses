import { faAndroid, faCss3Alt, faGitAlt, faHtml5, faJava, faJsSquare, faNode, faNodeJs, faNpm, faPython, faRaspberryPi, faSass, faUbuntu, faUnity, faWindows } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export type TagIdType = "android" | "bash" | "csharp" | "css" | "git" | "html" | "java" | "js" | "linux" | "node" | "npm" | "python" | "rasp" | "sass" | "unity";

export type TagType = {
    icon: IconDefinition;
    content: String;
    color: String;
}

type TagMap<T> = { [day in TagIdType]: T };

export const tagMap: TagMap<TagType> = {
    "android": {
        "icon": faAndroid,
        "content": "Android",
        "color": "#32DE84"
    },
    "bash": {
        "icon": faTerminal,
        "content": "BASH",
        "color": "#293036"
    },
    "csharp": {
        "icon": faWindows,
        "content": "C#",
        "color": "#854cc7"
    },
    "css": {
        "icon": faCss3Alt,
        "content": "CSS",
        "color": "#2965F1"
    },
    "git": {
        "icon": faGitAlt,
        "content": "git",
        "color": "#F34F29"
    },
    "html": {
        "icon": faHtml5,
        "content": "HTML",
        "color": "#F06529"
    },
    "java": {
        "icon": faJava,
        "content": "Java",
        "color": "#f89820"
    },
    "js": {
        "icon": faJsSquare,
        "content": "JavaScript",
        "color": "#F0DB4F"
    },
    "linux": {
        "icon": faUbuntu,
        "content": "Ubuntu",
        "color": "#E95420"
    },
    "node": {
        "icon": faNodeJs,
        "content": "NodeJS",
        "color": "#3A8338"
    },
    "npm": {
        "icon": faNpm,
        "content": "npm",
        "color": "#D50000"
    },
    "python": {
        "icon": faPython,
        "content": "Python",
        "color": "#4B8BBE"
    },
    "rasp": {
        "icon": faRaspberryPi,
        "content": "Raspberry Pi",
        "color": "#C51A4A"
    },
    "sass": {
        "icon": faSass,
        "content": "SCSS",
        "color": "#CD669A"
    },
    "unity": {
        "icon": faUnity,
        "content": "Unity",
        "color": "#495057"
    }
}