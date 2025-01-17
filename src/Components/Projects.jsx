import React, { useEffect, useState } from "react";
import { getProject } from "../Api/ProjectApi";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // Keep track of the current slide
  const navigate = useNavigate();

  const fetchProject = async () => {
    try {
      const response = await getProject();
      setData(response.data); // Set fetched data
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const getProjectsPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 1; // Mobile: 1 project per slide
    if (screenWidth < 1024) return 2; // Tablet: 2 projects per slide
    return 3; // Desktop: 3 projects per slide
  };

  const projectsPerSlide = getProjectsPerSlide();
  const totalSlides = Math.ceil(data.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); // Go to the next slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Go to the previous slide
  };

  const getCurrentSlideData = () => {
    const startIndex = currentSlide * projectsPerSlide;
    return data.slice(startIndex, startIndex + projectsPerSlide);
  };

  const handleNavigate = (id) => {
    navigate(`/projectdetail/${id}`);
  };

  return (
    <div className="p-8 bg-black text-white" id="project">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      {data.length > 0 ? (
        <div>
          {/* Slideshow container */}
          <div className="relative">
            <div
              className={`grid gap-6`}
              style={{
                gridTemplateColumns: `repeat(${projectsPerSlide}, minmax(0, 1fr))`,
              }}
            >
              {getCurrentSlideData().map((project, index) => (
                <div key={index} className="p-4 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.projectName}
                  </h3>
                  <p className="text-sm mb-4">
                    Location: {project.projectLocation}
                  </p>

                  {project.projectImages && project.projectImages[0] && (
                    <img
                      src={project.projectImages[0]} // Assume the first image as the thumbnail
                      alt={project.projectName}
                      className="w-full h-48 object-cover mb-4"
                    />
                  )}
                  <button
                    className="px-4 py-2 bg-green-600 text-white hover:bg-green-700"
                    onClick={() => handleNavigate(project._id)}
                  >
                    View Project
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2"
              onClick={prevSlide}
            >
              &#8592;
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2"
              onClick={nextSlide}
            >
              &#8594;
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 ${
                  currentSlide === index ? "bg-green-600" : "bg-gray-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No projects to display.</p>
      )}
    </div>
  );
};

export default Projects;
