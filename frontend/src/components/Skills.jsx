import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills, setSelectedCategory } from '../redux/slices/skillsSlice';

const Skills = ({ isDark }) => {
  const dispatch = useDispatch();
  const { items, loading, selectedCategory } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const categories = [
    'all',
    'frontend',
    'backend',
    'database',
    'tools',
    'authentication',
    'others'
  ];

  const filteredSkills = selectedCategory === 'all'
    ? items
    : items.filter(skill => skill.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 80) return 'from-green-400 to-emerald-500';
    if (proficiency >= 60) return 'from-blue-400 to-cyan-500';
    return 'from-yellow-400 to-orange-500';
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} mx-auto`}></div>
          <p className={`text-lg mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'all' ? 'all' : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${selectedCategory === category || (selectedCategory === null && category === 'all')
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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

        {/* Skills Grid */}
        {!loading && (
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-6 capitalize">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <div
                      key={skill._id}
                      className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${isDark
                          ? 'bg-gray-800 border border-gray-700 hover:border-cyan-500/50'
                          : 'bg-gray-50 border border-gray-200 hover:border-blue-500/50'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        {skill.icon && (
                          <img
                            src={`http://localhost:5000${skill.icon}`}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                      </div>

                      {/* Proficiency Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Proficiency
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} transition-all duration-500`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>

                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No skills found in this category. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;