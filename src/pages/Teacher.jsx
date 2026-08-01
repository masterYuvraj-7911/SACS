import TeacherImage from "../assets/sirImg.jpeg";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const Teacher = () => {
  return (
    <section
      id="teacher"
      className="min-h-screen flex items-center relative overflow-hidden mt-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 text-yellow-400">
            <FaChalkboardTeacher />
            Our Mentor
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Meet Our
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Expert Teacher
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8">
            Our experienced faculty is dedicated to helping every student
            build confidence, master concepts, and achieve academic
            excellence through quality education.
          </p>

        </div>

        <div className="mt-16 max-w-5xl mx-auto">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">

            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* Teacher Image */}

              <div className="relative">

                <img
                  src={TeacherImage}
                  alt="Teacher"
                  className="h-96 w-72 object-cover rounded-3xl shadow-2xl"
                />

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
                  Since 2009
                </div>

              </div>

              {/* Teacher Details */}

              <div className="flex-1 text-center lg:text-left">

                <h3 className="text-4xl font-black text-white">
                  Mr. Abishek Kumar
                </h3>

                <p className="mt-2 text-yellow-400 font-semibold text-lg">
                  Founder & Senior Faculty
                </p>

                <p className="mt-6 text-gray-300 leading-8">
                  With more than 20 years of teaching experience,
                  Mr. Abishek Kumar has guided thousands of students toward
                  academic success. His concept-based teaching style,
                  disciplined approach, and personal attention make
                  learning simple, enjoyable, and effective.
                </p>

                <div className="grid sm:grid-cols-3 gap-5 mt-8">

                  <div className="bg-white/5 rounded-2xl p-5 text-center">
                    <FaGraduationCap className="mx-auto text-3xl text-yellow-400" />
                    <h4 className="mt-3 text-3xl font-black text-white">
                      20+
                    </h4>
                    <p className="text-gray-400">
                      Years Experience
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 text-center">
                    <FaAward className="mx-auto text-3xl text-yellow-400" />
                    <h4 className="mt-3 text-3xl font-black text-white">
                      500+
                    </h4>
                    <p className="text-gray-400">
                      Students Taught
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 text-center">
                    <FaChalkboardTeacher className="mx-auto text-3xl text-yellow-400" />
                    <h4 className="mt-3 text-3xl font-black text-white">
                      98%
                    </h4>
                    <p className="text-gray-400">
                      Success Rate
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Teacher;