import { FaGraduationCap } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">

        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-yellow-400 border border-white/10">
          <FaGraduationCap />
          Classes 6 to 10
        </span>

        <h1 className="mt-8 text-6xl max-[700px]:text-5xl max-[580px]:text-4xl max-[480px]:text-3xl max-[400px]:text-2xl font-black leading-tight text-white">
          Shape Your
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Bright Future
          </span>
          <br />
          with Smart Ambition
        </h1>

        <p className="mt-8 text-gray-300 leading-8 max-w-3xl mx-auto sm:text-xl text-[16px]">
          Smart Ambition Classes provides quality education for students of
          Classes 6 to 10 with experienced teachers, interactive learning,
          weekly tests, doubt sessions, and excellent academic results.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 duration-300"
          >
            Join Now
          </a>

          <a
            href="#about"
            className="px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div>
            <h2 className="text-4xl font-black text-yellow-400">500+</h2>
            <p className="text-gray-400 mt-2">Students</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-yellow-400">98%</h2>
            <p className="text-gray-400 mt-2">Success Rate</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-yellow-400">20+</h2>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;