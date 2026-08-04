import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, filterByCategory } from '../redux/slices/projectsSlice';
import { Computer, ExternalLink } from 'lucide-react';

const Projects = ({ isDark }) => {
  const dispatch = useDispatch();
  const { filteredProjects, selectedCategory, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const categories = ['all', 'fullstack', 'frontend', 'backend', 'mobile', 'other'];

  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      dispatch(filterByCategory('all'));
    } else {
      dispatch(filterByCategory(category));
    }
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured{" "} 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
            </h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} mx-auto`}></div>
          <p className={`text-lg mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showcase of my recent work and contributions
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${isDark ? 'border-cyan-500' : 'border-blue-500'}`}></div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { Array.isArray(filteredProjects) && filteredProjects.map((project) => (
              <div
                key={project._id}
                className={`rounded-xl overflow-hidden transform transition-all duration-[1200ms] ease-out hover:-translate-y-3 hover:shadow-2xl ${
                  isDark
                    ? 'bg-gray-900 border border-gray-700 hover:border-cyan-500/50'
                    : 'bg-white border border-gray-200 hover:border-blue-500/50 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Project Image */}
                <div className={`h-48 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  {project.imageUrl ? (
                    <img
                      src={`http://localhost:5000${project.imageUrl}`}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className={`w-20 h-20 ${isDark ? 'text-gray-700' : 'text-gray-400'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'}`}>
                        Featured
                      </span>
                    )}
                  </div>

                  <p className={`mb-4 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.shortDesc || project.description}
                  </p>

                  <h1>Project tech</h1>

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDark
                                ? 'bg-gray-800 text-cyan-400'
                                : 'bg-blue-50 text-blue-600 border border-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      isDark
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300 ${
                          isDark
                            ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                            : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                        }`}
                      >
                        <Computer size={18} />
                        <span className="hidden sm:inline text-sm font-semibold">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300 font-semibold ${
                          isDark
                            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30'
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 hover:from-blue-200 hover:to-cyan-200'
                        }`}
                      >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found in this category. More coming soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;