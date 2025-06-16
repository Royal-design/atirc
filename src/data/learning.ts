import cyber from "@/assets/learning/cyber.webp";
import software from "@/assets/learning/software.webp";
import project from "@/assets/learning/project.webp";
import computer from "@/assets/learning/computer.webp";
import design from "@/assets/learning/design.webp";
import devop from "@/assets/learning/devop.webp";
import ai from "@/assets/learning/ai.webp";
import data from "@/assets/learning/data.webp";
import iot from "@/assets/learning/iot.webp";
import uiux from "@/assets/learning/cover/uiux.jpg";
import cyberSecurity from "@/assets/learning/cover/cybersecurity.webp";
import robotics from "@/assets/learning/cover/robotics.jpg";
import analytics from "@/assets/learning/cover/analytics.jpg";
import game from "@/assets/learning/cover/game.webp";
import cloudcomputing from "@/assets/learning/cover/cloudcomputing.jpg";
import ml from "@/assets/learning/cover/ml.jpg";
import networking from "@/assets/learning/cover/networking.jpg";
import sd from "@/assets/learning/cover/sd.jpg";
import product from "@/assets/learning/cover/product.webp";

export const learningData: {
  id: number;
  title: string;
  body: string;
  detail: {
    coverImage: string;
    levels: string[];
    duration: string[];
    workType: string[];
    beginnerContent: string;
    beginnerPrice: {
      newPrice: string;
      oldPrice: string;
    };
    beginnerCurriculum: string[];
    intermediateContent: string;
    intermediatePrice: {
      newPrice: string;
      oldPrice: string;
    };
    intermediateCurriculum: string[];
    advancedContent: string;
    advancedPrice: {
      newPrice: string;
      oldPrice: string;
    };
    advancedCurriculum: string[];
  };
  image: string;
  path: string;
}[] = [
  {
    id: 1,
    title: "Animation/ Games Development",
    body: `AR/VR research at ATIRC explores immersive technology applications for education, training, therapy, and entertainment. The research delves into how virtual and augmented environments can be used to create engaging and transformative experiences. ATIRC’s AR/VR research focuses on developing innovative, real-world applications in multiple industries to enhance user experiences.`,
    image: game,
    path: "games-development",
    detail: {
      coverImage: game,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `This course provides a foundational understanding of animation and game development principles, seamlessly blending theoretical knowledge with practical application. Participants will develop the technical skills to design, build, and deploy engaging interactive experiences that meet industry standards`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Animation and Game Development",
        "Principles of Animation",
        "Game Design Basics",
        "Tools and Technologies",
        "2D Animation and Game Design",
        "2D Game Development"
      ],
      intermediateContent: `This intermediate-level course prepares animation and game development professionals for success in the industry. Learn to lead and execute high-quality projects, overcoming creative and technical challenges while adhering to industry best practices for efficient and timely delivery`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Sound Design for Animation and Games",
        "Hands-On Project 2D",
        "3D Animation Basics",
        "3D Rigging and Animation",
        "Lighting and Rendering",
        "3D Game Development"
      ],
      advancedContent: `This advanced Animation and Game Development course cultivates strategic and technical leadership skills for managing complex projects.  Participants will master advanced production workflows, resource optimization, and budgeting strategies.  A capstone project provides practical experience, while exploration of funding opportunities, including access to grant information, prepares participants for real-world project development.`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Advanced Animation and Game Development",
        "Visual Effects (VFX)",
        "Game AI and Mechanics",
        "Cinematics for Games and Animations",
        "Optimization and Performance",
        "Multiplayer and Publishing",
        "Testing and Debugging",
        "Game Monetization and Publishing",
        "Hands-On Project (3D)",
        "Capstone Project Development"
      ]
    }
  },
  {
    id: 2,
    title: "Cyber Security",
    body: `Our Cybersecurity training program focuses on protecting systems, networks, and data from threats. Learners gain expertise in security best practices, risk management, ethical hacking, encryption techniques, and more. The course prepares individuals to safeguard digital assets and respond effectively to security breaches in today’s interconnected world.`,
    image: cyber,
    path: "cyber-security",
    detail: {
      coverImage: cyberSecurity,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `In today's digital age, robust cybersecurity is paramount. This course provides students with the knowledge and skills to build and maintain secure systems, networks, and digital assets. By integrating security frameworks, encryption techniques, and threat detection strategies, the course prepares students to address the evolving cyber threats faced by organizations across sectors`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Cybersecurity",
        "Basics of Computer Networks",
        "Understanding Cyber At",
        "Introduction to Security Tools",
        "Network and System Security",
        "System Security"
      ],
      intermediateContent: `This intermediate-level course empowers cybersecurity professionals with the leadership and project management skills needed to successfully lead and deliver complex security initiatives. Learn to navigate evolving cyber threats, optimize security resource allocation, and ensure the seamless, on-time, and cost-effective implementation of high-impact cybersecurity solutions while adhering to industry best practices`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Cryptography Fundamentals",
        "Secure Network Design",
        "Application and Web Security",
        "Secure Coding Practices",
        "Identity and Access Management",
        "Practical Project: Securing a Web Application"
      ],
      advancedContent: `This advanced course provides you with the leadership and technical skills to excel in today's dynamic cybersecurity landscape. Master advanced security architectures, threat mitigation strategies, and resource optimization techniques. Gain valuable hands-on experience through a capstone project and explore potential funding avenues to advance your career in the cyber security industry.`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Ethical Hacking Basics",
        "Malware Analysis",
        "Incident Response and Forensics",
        "Wireless and Mobile Security",
        "Cloud and IoT Security",
        "Internet of Things",
        "Zero Trust Architecture",
        "Practical Project: Securing a Cloud or IoT Environment",
        "Capstone Project, Internship and Career Preparation"
      ]
    }
  },
  {
    id: 3,
    title: "Software Development (Full Stack Development)",
    body: `In this course, participants gain a deep understanding of software development methodologies like Agile and Waterfall. The training covers the entire software development lifecycle (SDLC), from design and coding to testing and deployment. Learners also build proficiency in Full Stack Development, handling both backend and frontend programming tasks.`,
    image: software,
    path: "software",
    detail: {
      coverImage: sd,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `A thorough software development curriculum encompasses the fundamental, intermediate, and advanced skills required to design, create, test, and implement software applications that adhere to industry best practices. It is designed to provide a structured learning path, progressing from foundational concepts to advanced techniques and methodologies.`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Software Development",
        "Programming Basics",
        "Control Structures",
        "Functions and Modular Programming",
        "Data Structures Basics",
        "Algorithms"
      ],
      intermediateContent: `This course develops the leadership and project management skills necessary to successfully lead and deliver software projects. Students learn to navigate project lifecycles, manage budgets and timelines, and optimize resource allocation, ensuring the efficient planning, execution, and deployment of high-quality software solutions that meet client needs and exceed expectations`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Object-Oriented Programming",
        "Advanced OOP Concepts",
        "Web Development Basics",
        "Advanced Front-End Development",
        "Back-End Development Basics",
        "Database Management"
      ],
      advancedContent: `This advanced course provides the strategic and tactical skills needed to lead complex software projects. You'll master advanced project lifecycles, resource allocation, and budgeting techniques. Learn industry-specific standards, best practices tailored for software development, and leadership principles for navigating today's dynamic software development landscape`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Version Control with Git",
        "Testing and Debugging",
        "Software Design Principles",
        "Practical Project: Full-Stack Application",
        "Advanced JavaScript and Frameworks",
        "Advanced Back-End Development",
        "Software Deployment and DevOps Basics",
        "APIs and Third-Party Integration",
        "Capstone Project, Internship and Career Preparation"
      ]
    }
  },
  {
    id: 4,
    title: "Project Management",
    body: `This course focuses on IT project management principles, preparing participants to manage and oversee the successful delivery of technology projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of IT products and services in diverse organizational settings.`,
    image: project,
    path: "project-management",
    detail: {
      coverImage: product,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `This course focuses on IT project management principles, preparing participants to manage and oversee the successful delivery of technology projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of IT products and services in diverse organizational settings.`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Project Management",
        "Project Life Cycle and Phases",
        "Key Concepts and Terminologies",
        "Basic Tools and Techniques",
        "Introduction to Project Management Methodologies",
        "Communication in Projects",
        "Simple Case Study"
      ],
      intermediateContent: `This course focuses on IT project management principles, preparing participants to manage and oversee the successful delivery of technology projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of IT products and services in diverse organizational settings.`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Advanced Planning Techniques",
        "Project Scheduling",
        "Risk Management",
        "Project Management Methodologies",
        "Project Monitoring and Control",
        "Leadership and Team Management",
        "Project Management Software",
        "Hands-On Case Study"
      ],
      advancedContent: `This IT project management course prepares you to successfully deliver tech projects, covering lifecycles, budgets, and resources for effective planning and execution. Learn strategic project management, industry standards, and leadership in complex environments.`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Strategic Project Management",
        "Advanced Risk and Issue Management",
        "Complex Project Environments",
        "Specialized Project Management Methodologies",
        "Contract and Procurement Management",
        "Contract and Procurement Management",
        "Governance and Compliance",
        "Certifications and Frameworks",
        "Capstone Project"
      ]
    }
  },
  {
    id: 5,
    title: "Computer Networking",
    body: `This program provides foundational to advanced knowledge of networking principles and Internet of Things (IoT) technologies. Students learn about network configurations, protocols, and IoT integration, preparing them to design and maintain efficient, secure, and scalable networks and leverage the power of connected devices for various applications.`,
    image: computer,
    path: "computer-networking",
    detail: {
      coverImage: networking,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `In order to facilitate data sharing and process automation, the Networking and IoT course teaches students how systems and devices connect and communicate over networks. By integrating hardware, software, and sensors, IoT expands on networking principles to produce "smart" systems. These technologies are crucial in areas like smart homes, healthcare, transportation, agriculture, and industrial automation`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Basics of Computer Networking",
        "OSI and TCP/IP Models",
        "OSI and TCP/IP Models",
        "Networking Commands and Tools",
        "Advanced Networking Concepts",
        "Wireless Networking"
      ],
      intermediateContent: `This intermediate-level course empowers networking and IoT professionals with the leadership and project management skills needed to successfully lead and deliver complex IoT projects. Learn to navigate intricate networking challenges, optimize resource allocation, and ensure the seamless, on-time, and cost-effective delivery of high-impact solutions`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Network Security Basics",
        "Practical Networking",
        "Introduction to IoT",
        "IoT Communication Protocols",
        "IoT Hardware Platforms",
        "IoT Data Management"
      ],
      advancedContent: `This advanced course empowers you with the leadership and technical skills to successfully lead and deliver complex IoT projects. Master advanced network architectures, IoT deployment strategies, and resource optimization techniques. Gain valuable hands-on experience through a capstone project and explore potential funding avenues with access to grant information`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "IoT Development and Security",
        "IoT Platforms and Frameworks",
        "IoT Security",
        "Hands-on IoT Projects",
        "IoT Applications and Advanced Topics",
        "Industrial IoT",
        "IoT Edge Computing",
        "Capstone Project and Certification Preparation"
      ]
    }
  },
  {
    id: 6,
    title: "UI/UX + GRAPHICS DESIGN",
    body: `This program focuses on the principles of user interface (UI) and user experience (UX) design, along with graphic design. Students learn to create intuitive, aesthetically pleasing interfaces while optimizing user interactions. The course also covers visual design techniques, empowering learners to design impactful and functional digital experiences for web and mobile platforms`,
    image: design,
    path: "ui/ux-design",
    detail: {
      coverImage: uiux,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `Our Product Design curriculum focuses on developing the skills and mindset needed to create exceptional digital experiences. Guided by expert instructors, you'll master design thinking, visual design, and prototyping, while collaborating with peers on engaging projects. This immersive program prepares you for a successful career in the dynamic world of product design`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Overview of UI/UX Design",
        "Foundations of UX Design",
        "User Research",
        "Introduction to Design Software",
        "Design System",
        "User Journey Mapping"
      ],
      intermediateContent: `This course develops the leadership and project management skills necessary to successfully lead and deliver UI/UX and Graphic Design projects. Students learn to navigate project lifecycles, manage budgets and timelines, and optimize resource allocation, ensuring the efficient planning, execution, and deployment of visually compelling and user-centric digital products that meet client needs and exceed expectations`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Designing for User Experience",
        "Designing for User Interface Website",
        "Designing From Scratch",
        "Information Architecture",
        "Wireframing Basics",
        "Advanced Wireframing",
        "Prototyping Basics",
        "Visual Design Foundations"
      ],
      advancedContent: `This advanced course focuses on developing the real-world skills needed to lead and deliver successful UI/UX and Graphic Design projects. You'll master advanced project lifecycles, resource allocation, and budgeting techniques, while learning industry-specific standards and leadership principles for navigating the challenges of real-world design environments`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Design Systems and Style Guides",
        "Iconography and Imagery",
        "Accessibility in Design",
        "Interaction Design and Usability Testing",
        "Interaction Design",
        "Advanced Prototyping",
        "Usability Testing",
        "Responsive Design",
        "Introduction to Design Thinking",
        "Problem-Solving Workshops",
        "Design Sprint",
        "Project Ideation",
        "Portfolio Development",
        "Capstone Project Development and Internship"
      ]
    }
  },
  {
    id: 7,
    title: "DeveOP/C1 & CD",
    body: `Our Cloud Computing and DevOps training focuses on streamlining software development and operations. Participants learn key concepts like Continuous Integration (CI), Continuous Deployment (CD), and cloud infrastructure management. The course is designed to equip professionals with the skills to deploy scalable applications and ensure seamless integration and automation`,
    image: devop,
    path: "devop",
    detail: {
      coverImage: cloudcomputing,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `Cloud computing serves as a transformative backbone for modern IT. This curriculum equips students with the critical skills to harness cloud services effectively, optimize infrastructure, and apply cloud solutions across diverse industries`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Fundamentals of Cloud Computing",
        "Cloud Computing Architectures",
        "Cloud Providers Overview",
        "Cloud Security Basics",
        "Virtualization and Networking in Cloud",
        "Cloud Networking Basics"
      ],
      intermediateContent: `This intermediate-level course empowers cloud computing professionals with the leadership and project management skills needed to successfully lead and deliver complex cloud initiatives. Learn to navigate intricate cloud architectures, optimize resource allocation, and ensure the seamless, on-time, and cost-effective deployment of high-impact cloud solutions while adhering to industry best practices`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Storage and Database Services",
        "Hands-on with Cloud Platforms",
        "Cloud Computing Services",
        "Platform as a Service",
        "IoT Hardware Platforms",
        "Software as a Service",
        "Advanced Cloud Security"
      ],
      advancedContent: `This advanced course provides you with the leadership and technical skills to excel in today's dynamic cloud computing landscape. Master advanced cloud architectures, deployment strategies, and resource optimization techniques. Gain valuable hands-on experience through a capstone project and explore potential funding avenues to advance your career in the cloud industry`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Cloud Automation and Management",
        "DevOps in the Cloud",
        "Introduction to Microservices",
        "Cloud Monitoring and Troubleshooting",
        "Specialized Cloud Services",
        "Artificial Intelligence and Machine Learning",
        "Cloud for IoT",
        "Edge Computing and Hybrid Cloud"
      ]
    }
  },
  {
    id: 8,
    title: "Artificial intelligence/Machine Learning/Data Science",
    body: `This program introduces participants to the world of AI and ML. Learners explore fundamental algorithms, data processing techniques, and model building, applying AI/ML to real-world challenges. With a focus on practical applications in industries such as healthcare, finance, and transportation, this training is ideal for aspiring AI professionals.`,
    image: ai,
    path: "ai",
    detail: {
      coverImage: ml,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `By bridging theory and practice, this course empowers students to understand the fundamental concepts of AI/ML while developing the practical skills necessary to implement and deploy real-world solutions that address pressing industry needs.`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Foundations of AI and ML",
        "Mathematics for AI and ML",
        "Mathematics for AI and ML",
        "Programming for AI and ML",
        "Supervised and Unsupervised Learning",
        "Advanced Supervised Learning"
      ],
      intermediateContent: `This intermediate-level course equips data science professionals with the advanced project management skills necessary to successfully lead and deliver high-impact AI/ML projects, navigating complex challenges and ensuring on-time, on-budget delivery`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Unsupervised Learning Basics",
        "Practical Implementation",
        "Deep Learning",
        "Deep Learning Frameworks",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks"
      ],
      advancedContent: `This advanced AI/ML Project Management course provides you with the strategic and tactical expertise to lead complex projects. Learn advanced project lifecycles, resource allocation, and budgeting techniques. Gain hands-on experience through a capstone project and explore potential funding opportunities with access to grant information`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Advanced Topics and NLP",
        "Advanced NLP Techniques",
        "Reinforcement Learning",
        "Practical Deep Learning",
        "AI/ML Deployment and Ethics",
        "AI Model Deployment",
        "AI Ethics and Bias",
        "Capstone Project Planning"
      ]
    }
  },
  {
    id: 9,
    title: "Data Analytics/Big Data",
    body: `ATIRC’s data-focused training covers techniques for extracting valuable insights from large datasets. Students learn how to apply data analytics, data science, and mining methods to drive business decisions. The course also emphasizes Big Data tools and platforms, enabling participants to work with complex data sets and uncover patterns.`,
    image: data,
    path: "data-analytics",
    detail: {
      coverImage: analytics,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `ATIRC’s data-focused training covers techniques for extracting valuable insights from large datasets. Students learn how to apply data analytics, data science, and mining methods to drive business decisions. The course also emphasizes Big Data tools and platforms, enabling participants to work with complex data sets and uncover patterns`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Excel for Data Analysis",
        "Intermediate Excel for Data Analysis",
        "Pivot Tables for data analysis",
        "Advanced Excel for Data Analysis",
        "Excel Knowledge Application",
        "SQL for Data Analysis"
      ],
      intermediateContent: `This course focuses on Data Analytics project management principles, preparing participants to manage and oversee the successful delivery of data-driven projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of data-driven products and services in diverse organizational settings`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Introduction to SQL for Data Analysis",
        "Intermediate SQL for Data Analysis",
        "Advanced SQL for Data Analysis",
        "SQL Capstone Project"
      ],
      advancedContent: `This Advanced Data Analytics Project Management course prepares you to successfully deliver complex data-driven projects, covering advanced project lifecycles, resource allocation strategies, and advanced budgeting techniques for effective planning and execution. Learn strategic project management best practices tailored for data analytics, industry-specific standards, and leadership in complex data-driven environments`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Introduction To Python Programming",
        "Introduction to Power BI",
        "Intermediate and Advanced Power BI",
        "Python and Power BI Capstone Project"
      ]
    }
  },
  {
    id: 10,
    title: "IOT/Robotics",
    body: `Our Robotics and Embedded Systems training offers in-depth knowledge of robotic systems and specialized computing devices. Participants explore the design, construction, and operation of robots for various industries, while also learning about embedded systems that perform dedicated tasks in larger mechanical or electrical systems, shaping the future of automation.`,
    image: iot,
    path: "iot-robotics",
    detail: {
      coverImage: robotics,
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: ["6- 7 weeks", "10- 11 weeks", "19- 19 weeks"],
      workType: ["Hybrid", "Onsite"],
      beginnerContent: `Our beginner-level Robotics and Embedded Systems course provides a foundational understanding of robotic systems and specialized computing devices. Participants will explore the basics of robot design, construction, and operation across various industries, while also learning how embedded systems function within larger mechanical or electrical frameworks, paving the way for future advancements in automation`,
      beginnerPrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      beginnerCurriculum: [
        "Introduction to Robotics and Embedded Systems",
        "Basics of Electronics and Circuit Design",
        "Introduction to Microcontrollers",
        "Programming for Embedded Systems",
        "Sensors and Data Acquisition",
        "Actuators and Motion Control"
      ],
      intermediateContent: `Building on foundational knowledge, this intermediate course focuses on developing the advanced technical and project management skills required to lead and execute complex automation projects. Participants will gain proficiency in advanced robotic architectures and embedded system optimization, adhering to industry best practices`,
      intermediatePrice: {
        newPrice: "#100,000",
        oldPrice: "#200,000"
      },
      intermediateCurriculum: [
        "Communication Protocols",
        "Practical Project",
        "Embedded Systems Design",
        "Embedded System Programming",
        "Advanced Microcontroller Programming",
        "IoT and Embedded Systems",
        "Robotics Mechanics and Control Systems"
      ],
      advancedContent: `This advanced course develops leadership and technical expertise for professionals in the dynamic field of robotics and embedded systems. Participants will master advanced robotic architectures, embedded system integration, and performance optimization techniques.  A capstone project provides practical application of learned skills, while exploration of funding opportunities empowers participants to drive innovation and advance their careers in automation and intelligent systems`,
      advancedPrice: {
        newPrice: "#500,000",
        oldPrice: "#900,000"
      },
      advancedCurriculum: [
        "Control Systems for Robotics",
        "Mobile Robotics",
        "Sensors in Robotics",
        "Advanced Topics and Projects",
        "Wireless Robotics",
        "Embedded AI for Robotics",
        "Industrial and Autonomous Robotics",
        "Capstone Project and Career Preparation"
      ]
    }
  }
];
