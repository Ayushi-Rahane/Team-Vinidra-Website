// Master team data sourced from the official team structure image

export const projectManager = {
  name: "Arshia Singh & Nandini Pathak",
  role: "Project Managers / Systems Engineers",
  designation: "Leads",
  classYear: "SY-ENTC & SY-ENTC",
  image: null, // replace with actual image path
};

export const subteams = [
  {
    id: "adcs",
    label: "ADCS",
    fullName: "Attitude Determination & Control System",
    description:
      "Responsible for the satellite's orientation and stabilization. The ADCS team designs and implements sensors and actuators to maintain the correct pointing during the mission.",
    coordinator: { name: "Aditi Sant", role: "Lead Engineer", classYear: "TY-COMP", image: null },
    deputy: { name: "Tarini More", role: "Deputy Engineer", classYear: "SY-ENTC", image: null },
    members: [
      { name: "Neha Chatterjee", role: "Engineer", classYear: "SY-COMP", image: null },
      { name: "Nandini Pathak", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Gargi Rajput", role: "Engineer", classYear: "SY-COMP", image: null },
      { name: "Felicia Carvalho", role: "Engineer", classYear: "SY-MECH", image: null },
    ],
  },
  {
    id: "st",
    label: "S&T",
    fullName: "Structures & Thermal",
    description:
      "Handles the mechanical design and thermal management of the satellite. Ensures the spacecraft can withstand launch loads and operational temperature extremes.",
    coordinator: { name: "Mugdha Deshmukh", role: "Lead Engineer", classYear: "TY-MECH", image: null },
    deputy: null,
    members: [
      { name: "Mrunal Bodas", role: "Deputy – Structures", classYear: "SY-MECH", image: null },
      { name: "Shreya Dhumal", role: "Deputy – Thermal", classYear: "SY-ENTC", image: null },
      { name: "Sanskruti Inamdar", role: "Engineer", classYear: "SY-MECH", image: null },
      { name: "Janhavi Bhopale", role: "Engineer", classYear: "SY-MECH", image: null },
    ],
  },
  {
    id: "admin",
    label: "Admin",
    fullName: "Administration Team",
    description:
      "The backbone of Team Vinidra, handling communications, finance, graphic design, web development, events, and public relations to keep the team running smoothly.",
    coordinator: { name: "Gargee Dorle", role: "Coordinator", classYear: "TY-COMP", image: null },
    deputy: null,
    members: [
      { name: "Shubhangi Kokate", role: "Graphic Design", classYear: "SY-IT", image: null },
      { name: "Soniya Rathod", role: "Graphic Design", classYear: "SY-IT", image: null },
      { name: "Sejal Badugu", role: "Graphic Design", classYear: "SY-IT", image: null },
      { name: "Srushti Desai", role: "Graphic Design", classYear: "SY-COMP", image: null },
      { name: "Karishma Chidgopkar", role: "Content & Editing", classYear: "SY-IT", image: null },
      { name: "Minal Chaudhari", role: "Content & Editing", classYear: "SY-ENTC", image: null },
      { name: "Swarali Rake", role: "Finance", classYear: "SY-COMP", image: null },
      { name: "Anushka Bora", role: "Finance", classYear: "SY-IT", image: null },
      { name: "Sweta Jagtap", role: "Finance", classYear: "SY-MECH", image: null },
      { name: "Aditi Shivapurkar", role: "Public Relations", classYear: "TY-COMP", image: null },
      { name: "Bhumika Chaudhari", role: "Public Relations", classYear: "SY-ENTC", image: null },
      { name: "Sanskruti Patil", role: "Web Development", classYear: "SY-COMP", image: null },
      // { name: "Vedika Kayangude", role: "Web Development", classYear: "SY-COMP", image: null },
      { name: "Ayushi Rahane", role: "Web Development", classYear: "SY-COMP", image: null },
      { name: "Preeti Tarle", role: "Events & Outreach", classYear: "SY-IT", image: null },
      { name: "Kanchan Jadhav", role: "Events & Outreach", classYear: "SY-ENTC", image: null },
    ],
  },
  {
    id: "payload",
    label: "Payload",
    fullName: "Payload Team",
    description:
      "Develops the scientific instruments and experiment packages aboard the satellite. Responsible for defining mission objectives and ensuring payloads meet technical requirements.",
    coordinator: { name: "Ketaki Patil", role: "Lead Engineer", classYear: "TY-ENTC", image: null },
    deputy: { name: "Arshia Singh", role: "Deputy Engineer", classYear: "SY-ENTC", image: null },
    members: [
      { name: "Mrudula Dafne", role: "Engineer", classYear: "SY-COMP", image: null },
      { name: "Adya Srivastava", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Gayatri Manke", role: "Engineer", classYear: "SY-MECH", image: null },
    ],
  },
  {
    id: "obc",
    label: "OBC",
    fullName: "On-Board Computer",
    description:
      "The nerve centre of the satellite. This team programs and tests the embedded systems and microcontrollers that run flight software and manage data from all other subsystems.",
    coordinator: { name: "Tanishka Agiwal", role: "Lead Engineer", classYear: "TY-COMP", image: null },
    deputy: { name: "Dnyanda Patil", role: "Deputy Engineer", classYear: "SY-COMP", image: null },
    members: [
      { name: "Rashmi Apte", role: "Engineer", classYear: "SY-COMP", image: null },
      { name: "Dnyaneshwari Patil", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Jahnavi Dande", role: "Engineer", classYear: "SY-IT", image: null },
      { name: "Janhavi Laturkar", role: "Engineer", classYear: "SY-COMP", image: null },
    ],
  },
  {
    id: "ttc",
    label: "TT&C",
    fullName: "Telemetry, Tracking & Command",
    description:
      "Designs the communication link between the satellite and the ground station. Manages radio frequency systems, antennas, and data downlink protocols.",
    coordinator: { name: "Gauri Kalmath", role: "Lead Engineer", classYear: "TY-ENTC", image: null },
    deputy: { name: "Saloni Madhekar", role: "Deputy Engineer", classYear: "SY-ENTC", image: null },
    members: [
      { name: "Shreya Somwanshi", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Ashwini Kale", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Swamini Bhagwat", role: "Engineer", classYear: "SY-COMP", image: null },
      { name: "Mrunmai Kandharkar", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Samiksha Nankar", role: "Engineer", classYear: "SY-IT", image: null },
    ],
  },
  {
    id: "power",
    label: "Power",
    fullName: "Power System",
    description:
      "Manages the satellite's energy — from solar panels to batteries. Ensures every subsystem receives reliable, regulated power throughout the entire mission lifecycle.",
    coordinator: { name: "KLG Alekhya", role: "Lead Engineer", classYear: "TY-ENTC", image: null },
    deputy: null,
    members: [
      { name: "Sakshi Varhadi", role: "Engineer", classYear: "SY-ENTC", image: null },
      { name: "Janhavi Pendkarkar", role: "Engineer", classYear: "SY-ENTC", image: null },
    ],
  },
];
