/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hamza Dehidi",
  title: "Hi all, I'm Hamza",
  subTitle: emoji(
    "Passionate Data Scientist 📊 skilled in Python, and data science libraries such as Pandas, NumPy, Scikit-learn, and TensorFlow. Expert in extracting insights from complex datasets and driving informed decision-making."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sErkSdT9yE2m_BCA6jgEV0TsmQOIlnNq/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HDehidi",
  linkedin: "https://www.linkedin.com/in/hamzadehidi/",
  gmail: "hamza.dehidi@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic Data Scientist 📊 passionate about ML and MLOps, actively learn new technologies and excel in problem-solving.",
  skills: [
    emoji(
      "⚡ Build NLP and CV models using TensorFlow and Keras frameworks."
    ),
    emoji("⚡ Utilize Sklearn, Pandas, and NumPy for data analysis, and ML modeling."),
    emoji(
      "⚡ Participate in Hugging Face challenges"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "r-project",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Koç University",
      logo: require("./assets/images/kocLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2020- September 2021",
      desc: "Ranked top 10% in the program. Took courses about Machine Learning, Cloud Security, Big Data Systems, ...",
    },
    {
      schoolName: "Hashemite University",
      logo: require("./assets/images/HashemiteLogo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "September 2010 - April 2014",
      desc: "Graduated first in my engineering college",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Version Control System",
      progressPercentage: "60%"
    },
    {
      Stack: "Big Data Systems",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Dubai Holding",
      companylogo: require("./assets/images/DHLogo.png"),
      date: "Sep 2020 – Present",
    },
    {
      role: "Data Scientist",
      company: "Scrintal",
      companylogo: require("./assets/images/ScrintalLogo.png"),
      date: "Oct 2019 – Sep 2020",
    },
    {
      role: "Mechanical Engineer",
      company: "Dubai Properties",
      companylogo: require("./assets/images/DPLogo.png"),
      date: "Aug 2014 – Sep 2019",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I AM WORKED ON",
  projects: [
    {
      image: require("./assets/images/Kaggle_logo.png"),
      projectName: "American Sign Language Fingerspelling Recognition - Computer Vision",
      projectDesc: "Kaggle competition to detect and translate American Sign Language (ASL) fingerspelling into text.",
      footerLink: [
        {
          name: "Visit Leaderboard",
          url: "https://www.kaggle.com/competitions/asl-fingerspelling/leaderboard"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hf-logo.png"),
      projectName: "Infant Cry Verification Challenge - Audio Classification",
      projectDesc: "Hugging Face challenge to verify infant cries using speaker verification techniques",
      footerLink: [
        {
          name: "Visit Leaderboard",
          url: "https://huggingface.co/spaces/competitions/CryCeleb2023"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/githubLogo.png"),
      projectName: "MLOps zoomcamp",
      projectDesc: "Learned practical aspects of productionizing ML services — from training and experimenting to model deployment and monitoring. Technologies used: MLflow, Prefect, Flask, Terraform",
      footerLink: [
        {
          name: "Visit Leaderboard",
          url: "https://huggingface.co/spaces/competitions/CryCeleb2023"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/githubLogo.png"),
      projectName: "Data Science Projects",
      projectDesc: " A repository serves as a platform for showcasing my data science projects.",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/HDehidi/DS-Projects"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Machine Learning in Production",
      subtitle:
        "I learned how to scope a project, identify data needs, and develop modeling strategies, address deployment constraints and requirements, establish a model baseline and address concept drift.",
      image: require("./assets/images/CourseraLogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/PZHMS7UX7CYX"
        },
      ]
    },
    {
      title: "Perform Data Science with Azure Databricks",
      subtitle:
        "I learned earn how to leverage the capabilities of Apache Spark and powerful clusters on the Azure Databricks platform to efficiently run data science workloads in the cloud.",
      image: require("./assets/images/CourseraLogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/7T27ASUG7VA8"
        }
      ]
    },

    {
      title: "Build and Operate Machine Learning Solutions with Azure",
      subtitle: "I learn how to use Python and machine learning to manage data ingestion and preparation, model training and deployment, and machine learning solution monitoring in Microsoft Azure.",
      image: require("./assets/images/CourseraLogo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/GY3V3QAW2HRU"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "Hamza.dehidi@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
