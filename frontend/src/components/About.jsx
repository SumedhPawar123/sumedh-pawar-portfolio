// import React from 'react';
// import { Code2, Zap, Users } from 'lucide-react';

// const About = ({ isDark }) => {
//   const highlights = [
//     {
//       icon: Code2,
//       title: 'Full-Stack Development',
//       description: 'Building complete solutions from frontend to backend with modern technologies and best practices.'
//     },
//     {
//       icon: Zap,
//       title: 'Performance Focused',
//       description: 'Creating fast, responsive, and optimized applications that deliver excellent user experiences.'
//     },
//     {
//       icon: Users,
//       title: 'Team Collaboration',
//       description: 'Working effectively in teams, communicating clearly, and contributing to collective success.'
//     }
//   ];

//   return (
//     <section id="about" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
//           <div className={`h-1 w-20 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} mx-auto`}></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//           {/* Left side - Image placeholder */}
//           <div className="flex justify-center">
//             <div className={`relative w-100 h-100 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
//               <div className="w-full h-full flex items-center justify-center">
//                 <img src="profile.png" alt="my-profile" />
//               </div>
//             </div>
//           </div>

//           {/* Right side - About text */}
//           <div>
//             <h3 className="text-3xl font-bold mb-6">Creative Developer & Problem Solver</h3>
            
//             <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//               I'm a passionate full-stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
//             </p>

//             <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//               My journey in tech has been driven by curiosity and a desire to continuously learn. I love working on challenging projects that push me to improve my skills and stay updated with the latest technologies.
//             </p>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-start gap-4">
//                 <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
//                   <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-1">Frontend Development</h4>
//                   <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>React, Vue, Tailwind CSS, Responsive Design</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
//                   <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-1">Backend Development</h4>
//                   <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Node.js, Express, MongoDB, API Design</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
//                   <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-1">Tools & Technologies</h4>
//                   <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Git, Docker, AWS, PostgreSQL, Redis</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Highlights Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {highlights.map((highlight, index) => {
//             const Icon = highlight.icon;
//             return (
//               <div
//                 key={index}
//                 className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
//                   isDark 
//                     ? 'bg-gray-900 border border-gray-700 hover:border-cyan-500/50' 
//                     : 'bg-white border border-gray-200 hover:border-blue-500/50'
//                 }`}
//               >
//                 <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
//                   <Icon className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">{highlight.title}</h4>
//                 <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{highlight.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// --------------------------------after framer motion 
import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Users, Briefcase, Award, Rocket } from "lucide-react";

const About = ({ isDark }) => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete solutions from frontend to backend with modern technologies and scalable architecture.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Creating fast, responsive, and optimized applications that deliver smooth user experiences.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Working effectively in teams, communicating clearly, and contributing to collective project success.",
    },
  ];

  const stats = [
    { icon: Briefcase, value: "10+", label: "Projects Built" },
    { icon: Award, value: "15+", label: "Technologies Used" },
    { icon: Rocket, value: "100%", label: "Learning Mindset" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-20 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
          <p
            className={`mx-auto mt-6 max-w-2xl text-base md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate about building modern web applications, solving real-world
            problems, and continuously learning new technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left - Image */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-2xl"></div>

              {/* Image Card */}
              <div
                className={`relative h-[380px] w-[300px] overflow-hidden rounded-3xl border shadow-2xl md:h-[450px] md:w-[460px] ${
                  isDark
                    ? "border-white/10 bg-white/5 backdrop-blur-xl"
                    : "border-gray-200 bg-white/70 backdrop-blur-xl"
                }`}
              >
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Creative Developer & Problem Solver
            </h3>

            <p
              className={`mb-4 text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I’m a passionate full-stack developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless digital experiences that
              solve real-world problems.
            </p>

            <p
              className={`mb-8 text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My journey in tech is driven by curiosity, consistency, and a desire
              to build products that are both functional and visually engaging. I
              enjoy working on challenging projects that help me grow as a
              developer and stay aligned with the latest technologies.
            </p>

            {/* Skills / Features */}
            <div className="space-y-5">
              {[
                {
                  title: "Frontend Development",
                  desc: "React.js, Tailwind CSS, Responsive UI, JavaScript",
                },
                {
                  title: "Backend Development",
                  desc: "Node.js, Express.js, MongoDB, REST API Development",
                },
                {
                  title: "Tools & Technologies",
                  desc: "Git, GitHub, Postman, Vercel, Netlify, Deployment",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`group flex items-start gap-4 rounded-2xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-white/5 hover:bg-white/10"
                      : "border-gray-200 bg-white/70 hover:bg-white"
                  } backdrop-blur-md shadow-md`}
                >
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                      isDark
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-blue-100 text-blue-600"
                    } text-lg font-bold`}
                  >
                    ✓
                  </div>

                  <div>
                    <h4 className="mb-1 text-lg font-semibold">{item.title}</h4>
                    <p
                      className={`text-sm md:text-base ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`rounded-2xl border p-6 text-center shadow-lg transition-all ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-gray-200 bg-white/80 hover:bg-white"
                } backdrop-blur-xl`}
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                    isDark
                      ? "bg-cyan-500/20"
                      : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      isDark ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <h4 className="text-3xl font-bold">{stat.value}</h4>
                <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`group rounded-2xl border p-8 shadow-xl ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10"
                    : "border-gray-200 bg-white/80 hover:border-blue-400/40 hover:bg-white"
                } backdrop-blur-xl`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isDark
                      ? "bg-cyan-500/20 group-hover:bg-cyan-500/30"
                      : "bg-blue-100 group-hover:bg-blue-200"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      isDark ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                </div>

                <h4 className="mb-3 text-xl font-bold">{highlight.title}</h4>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
    </section>
  );
};

export default About;



