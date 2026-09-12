import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "JNTUH University College of Engineering, Manthani",
    duration: "2020 - 2024",
    location: "Telangana, India",
    score: "8.00",
    scoreType: "CGPA",
    highlights: [
      "Focused on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and Distributed Systems.",
      "Lead developer on academic full-stack and machine learning project initiatives.",
      "Maintained consistent academic distinction and participated in university technical symposiums."
    ],
    iconType: "GraduationCap"
  },
  {
    degree: "Intermediate (Class XII - MPC)",
    field: "Mathematics, Physics, Chemistry",
    institution: "Telangana Model Junior College",
    duration: "2018 - 2020",
    location: "Telangana, India",
    score: "96.7%",
    scoreType: "Percentage",
    highlights: [
      "Graduated with top academic standing (96.7%).",
      "Strong analytical foundation in discrete mathematics, calculus, and logical problem-solving."
    ],
    iconType: "Award"
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    field: "General Sciences & Mathematics",
    institution: "Telangana Model School",
    duration: "2017 - 2018",
    location: "Telangana, India",
    score: "10.0 / 10.0 (100%)",
    scoreType: "GPA",
    highlights: [
      "Achieved a perfect 10.0 GPA (100%) in statewide board examinations.",
      "Active participant in science exhibitions and mathematics competitions."
    ],
    iconType: "BookOpen"
  }
];
