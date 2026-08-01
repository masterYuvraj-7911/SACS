import {
  FaBookOpen,
  FaCheckCircle,
  FaUserGraduate,
  FaCalendarAlt,
} from "react-icons/fa";
// import AboutImage from "../assets/about.jpg"; // Replace with your own image

const subjects = [
  "Mathematics",
  "Science",
  "Social Science",
  "English",
  "Hindi",
  "Sanskrit",
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">

  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-yellow-400 border border-white/10">
    <FaBookOpen />
    About Us
  </span>

  <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
    Smart Ambition
    <br />
    <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
      Classes
    </span>
  </h2>

  <p className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
    Established in <span className="text-yellow-400 font-semibold">2009</span>,
    Smart Ambition Classes has been providing quality education for students
    from Classes 6 to 10. We focus on conceptual learning, personal attention,
    regular tests, and doubt-solving sessions to help every student achieve
    academic excellence.
  </p>

  {/* Subjects */}

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">

    {subjects.map((subject) => (
      <div
        key={subject}
        className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 text-white"
      >
        <FaCheckCircle className="text-green-400" />
        <span>{subject}</span>
      </div>
    ))}

  </div>

  {/* Stats */}

  <div className="grid grid-cols-3 gap-6 mt-14">

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <FaUserGraduate className="mx-auto text-3xl text-yellow-400" />
      <h3 className="mt-3 text-4xl font-black text-yellow-400">500+</h3>
      <p className="text-gray-400 mt-2">Students</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <FaCalendarAlt className="mx-auto text-3xl text-yellow-400" />
      <h3 className="mt-3 text-4xl font-black text-yellow-400">2009</h3>
      <p className="text-gray-400 mt-2">Established</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <FaBookOpen className="mx-auto text-3xl text-yellow-400" />
      <h3 className="mt-3 text-4xl font-black text-yellow-400">98%</h3>
      <p className="text-gray-400 mt-2">Results</p>
    </div>

  </div>

  <a
    href="#contact"
    className="inline-block mt-12 px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 duration-300"
  >
    Enroll Today
  </a>

</div>
  );
};

export default About;