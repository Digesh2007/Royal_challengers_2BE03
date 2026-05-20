// FILE 2 — config/club-config.js
// Global configuration object for Cluster One website
window.CLUSTER_CONFIG = {
  clubName: "Cluster One",
  tagline: "Explore. Experience. Excel.",
  college: "S-VYASA Deemed to be University",
  collegeShort: "S-VYASA",
  founded: 2021,
  email: "clusterone@svyasa.edu.in",
  phone: "+91 80 2673 0048",
  address: "Prashanti Kutiram, Vivekananda Road, Kallubalu Gate, Bengaluru - 560105",
  officeHours: "Mon–Fri, 10AM–5PM",
  social: {
    instagram: "https://instagram.com/clusterone.svyasa",
    linkedin: "https://linkedin.com/company/cluster-one-svyasa"
  },
  stats: {
    members: 85,
    projects: 30,
    events: 20,
    colleges: 1
  },
  roles: ["student", "coordinator"],
  departments: [
    "Computer Science Engineering",
    "Electronics & Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Artificial Intelligence & Data Science",
    "Yoga & Physical Education"
  ],
  odPurposes: [
    "Hackathon Participation",
    "Workshop Attendance",
    "Club Meeting",
    "Industry Visit",
    "Conference",
    "Cultural Event",
    "Technical Symposium",
    "Paper Presentation",
    "Other"
  ],

  // Royal Challengers Team — 6 Members
  team: [
    {
      name: "Arjun R.",
      role: "Team Lead",
      department: "Computer Science Engineering",
      initials: "AR",
      color: "linear-gradient(135deg, #00F5FF, #0080FF)",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Priya S.",
      role: "Frontend Dev",
      department: "Artificial Intelligence & Data Science",
      initials: "PS",
      color: "linear-gradient(135deg, #FFB700, #FF6B00)",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Rahul M.",
      role: "UI/UX Designer",
      department: "Electronics & Communication Engineering",
      initials: "RM",
      color: "linear-gradient(135deg, #2ED573, #00A86B)",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Kavitha N.",
      role: "Full Stack Dev",
      department: "Information Technology",
      initials: "KN",
      color: "linear-gradient(135deg, #FF4757, #C0392B)",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Vikram B.",
      role: "Backend Dev",
      department: "Computer Science Engineering",
      initials: "VB",
      color: "linear-gradient(135deg, #A29BFE, #6C5CE7)",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sneha R.",
      role: "QA & Testing",
      department: "Computer Science Engineering",
      initials: "SR",
      color: "linear-gradient(135deg, #FD79A8, #E84393)",
      linkedin: "#",
      github: "#"
    }
  ],

  // Default events (seed data — loaded into localStorage if empty)
  defaultEvents: [
    {
      id: "EVT-001",
      name: "HackCluster 2025",
      date: "2025-07-15",
      type: "Hackathon",
      venue: "Main Auditorium, S-VYASA Campus",
      description: "24-hour hackathon with prizes worth ₹50,000. Build innovative solutions for real-world problems.",
      maxStudents: 60,
      status: "open",
      createdAt: "2025-05-01T09:00:00.000Z"
    },
    {
      id: "EVT-002",
      name: "AI/ML Workshop",
      date: "2025-06-28",
      type: "Workshop",
      venue: "CS Lab Block, Room 204",
      description: "Hands-on machine learning session covering model training, evaluation, and deployment basics.",
      maxStudents: 40,
      status: "open",
      createdAt: "2025-05-05T09:00:00.000Z"
    },
    {
      id: "EVT-003",
      name: "Tech Talk: Cloud Computing",
      date: "2025-06-10",
      type: "Talk",
      venue: "Seminar Hall 2, S-VYASA",
      description: "Industry expert from AWS discusses cloud architecture and career opportunities.",
      maxStudents: 100,
      status: "closed",
      createdAt: "2025-05-08T09:00:00.000Z"
    }
  ],

  // Default announcements (seed data)
  defaultAnnouncements: [
    {
      id: "ANN-001",
      title: "Welcome to Cluster One — Season 5!",
      content: "We are thrilled to kick off Season 5 of Cluster One at S-VYASA. Get ready for an exciting lineup of workshops, hackathons, and industry talks. Stay tuned for more updates!",
      priority: "high",
      createdAt: "2025-05-10T08:00:00.000Z",
      author: "Club Coordinator"
    },
    {
      id: "ANN-002",
      title: "OD Application Portal Now Live",
      content: "Students can now apply for On Duty (OD) leave directly through this portal. Log in to your student dashboard and click 'New OD Application'. Ensure you apply at least 3 days before the event.",
      priority: "normal",
      createdAt: "2025-05-12T10:00:00.000Z",
      author: "Club Coordinator"
    },
    {
      id: "ANN-003",
      title: "HackCluster 2025 — Registrations Open!",
      content: "Our flagship 24-hour hackathon is back! Form a team of 2–4 members and register by July 1st. Prize pool worth ₹50,000. All CS/IT/ECE students are eligible. Apply via the Events section.",
      priority: "high",
      createdAt: "2025-05-15T09:00:00.000Z",
      author: "Club Coordinator"
    }
  ],

  // Club history milestones
  clubHistory: [
    {
      year: "2021",
      title: "Cluster One Founded",
      description: "Cluster One was established at S-VYASA Deemed to be University by a group of 12 passionate CS students with a vision to bridge academic learning and industry practices.",
      icon: "🚀"
    },
    {
      year: "2022",
      title: "First HackCluster",
      description: "Organised our debut 12-hour hackathon with 8 teams. The winning team built an IoT-based smart campus solution that was later presented at an inter-university fair.",
      icon: "💡"
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Signed MOUs with 3 tech companies for internship programs and mentorship sessions, giving students direct access to industry professionals.",
      icon: "🤝"
    },
    {
      year: "2023",
      title: "Workshop Series Launch",
      description: "Launched the 'TechSeries' monthly workshop program covering AI/ML, Web Dev, Cloud, and Cybersecurity. Over 200 students enrolled across all sessions.",
      icon: "📚"
    },
    {
      year: "2024",
      title: "National Recognition",
      description: "Cluster One won the 'Best Student Club' award at the South India Technology Summit. Two of our projects were selected for the national-level showcase.",
      icon: "🏆"
    },
    {
      year: "2025",
      title: "Season 5 — OD Portal Launch",
      description: "Launched the Cluster One digital portal featuring online OD management, event registrations, and the student achievement tracking system you're using right now!",
      icon: "🌐"
    }
  ],

  // Sample student works/projects
  studentWorks: [
    {
      id: "WRK-001",
      title: "Smart Campus IoT System",
      student: "Aditya Kumar",
      category: "IoT",
      description: "Automated attendance and energy management using RFID and sensors across 5 campus buildings.",
      tags: ["IoT", "Python", "Arduino"],
      year: "2024",
      achievement: "🥇 HackCluster Winner"
    },
    {
      id: "WRK-002",
      title: "AI Yoga Posture Analyser",
      student: "Meera Patel",
      category: "AI/ML",
      description: "Real-time yoga posture correction app using MediaPipe and a custom-trained CNN model.",
      tags: ["Python", "TensorFlow", "MediaPipe"],
      year: "2024",
      achievement: "🏅 Best Project Award"
    },
    {
      id: "WRK-003",
      title: "Campus Food Waste Tracker",
      student: "Ravi Shankar",
      category: "Web Dev",
      description: "Full-stack web app that tracks canteen food waste and suggests optimised menu planning.",
      tags: ["React", "Node.js", "MongoDB"],
      year: "2023",
      achievement: "🌟 Featured Project"
    },
    {
      id: "WRK-004",
      title: "Sign Language Translator",
      student: "Preethi G.",
      category: "AI/ML",
      description: "Computer vision model that translates Indian Sign Language gestures to text in real-time.",
      tags: ["OpenCV", "Deep Learning", "Python"],
      year: "2024",
      achievement: "🥈 National Showcase"
    }
  ],

  // Default achievements/badges
  defaultAchievements: [
    {
      id: "ACH-001",
      title: "Early Bird",
      icon: "🐦",
      description: "Submitted your first OD application",
      color: "#00F5FF",
      criteria: "first_od"
    },
    {
      id: "ACH-002",
      title: "Event Enthusiast",
      icon: "🎉",
      description: "Applied for 3 or more events",
      color: "#FFB700",
      criteria: "three_events"
    },
    {
      id: "ACH-003",
      title: "Approved Pro",
      icon: "✅",
      description: "Got your first OD approved",
      color: "#2ED573",
      criteria: "first_approved"
    },
    {
      id: "ACH-004",
      title: "Hackathon Hero",
      icon: "🚀",
      description: "Participated in HackCluster",
      color: "#A29BFE",
      criteria: "hackathon"
    },
    {
      id: "ACH-005",
      title: "Workshop Warrior",
      icon: "🛠️",
      description: "Attended a technical workshop",
      color: "#FD79A8",
      criteria: "workshop"
    }
  ],

  demoCredentials: {
    student: { email: "student@svyasa.edu.in", password: "student123", role: "student" },
    coordinator: { email: "coordinator@svyasa.edu.in", password: "coord2025", role: "coordinator" }
  },

  // Upcoming events for dashboard
  upcomingEvents: [
    {
      name: "HackCluster 2025",
      date: "2025-07-15",
      venue: "Main Auditorium",
      type: "Hackathon"
    },
    {
      name: "AI/ML Workshop",
      date: "2025-06-28",
      venue: "CS Lab Block",
      type: "Workshop"
    },
    {
      name: "Tech Talk: Cloud Computing",
      date: "2025-06-10",
      venue: "Seminar Hall 2",
      type: "Talk"
    }
  ],

  // Coordinators for contact
  coordinators: [
    {
      name: "Dr. Coordinator",
      email: "coordinator@svyasa.edu.in",
      phone: "+91 80 2673 0048",
      department: "Computer Science",
      role: "Club Coordinator"
    },
    {
      name: "Ms. Event Manager",
      email: "events@svyasa.edu.in",
      phone: "+91 80 2673 0048",
      department: "Student Affairs",
      role: "Events Coordinator"
    }
  ]
};
