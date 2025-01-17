import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectId } from '../Api/ProjectApi';
import Navbar from '../Components/Navbar';
import { FaLocationArrow, FaRegListAlt, FaArrowLeft } from 'react-icons/fa'; // Import icons

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const fetchProjectById = async () => {
    try {
      const response = await getProjectId(id);
      setProject(response.data); // Assuming the response contains the data
    } catch (error) {
      alert('Error fetching project details');
    }
  };

  useEffect(() => {
    fetchProjectById();
  }, [id]);

  if (!project) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-16 px-8">
        {/* Main container */}
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16">

          {/* Left Side - Name, Images, and Button */}
          <div className="flex-1">
            {/* Project Name */}
            <h1 className="text-5xl font-extrabold mb-6 text-left text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {project.projectName}
            </h1>

            {/* Project Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {project.projectImages && project.projectImages.length > 0 ? (
                project.projectImages.map((image, index) => (
                  <div key={index} className="w-full h-72 overflow-hidden rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                    <img
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      className="w-full h-full object-cover shadow-lg"
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No images available for this project.</p>
              )}
            </div>

            {/* Back Button on the Left */}
            <div className="mt-10 text-left">
              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transform transition duration-300 ease-in-out hover:scale-105 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Projects
              </button>
            </div>
          </div>

          {/* Right Side - Description and Details */}
          <div className="flex-1">
            {/* Project Location */}
            <div className="flex items-center text-xl text-gray-400 mb-6">
              <FaLocationArrow className="mr-2 text-green-500" />
              {project.projectLocation}
            </div>

            {/* Project Description */}
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-300 mb-4">Description:</h2>
              <p className="text-lg text-gray-300">{project.projectDescription}</p>
            </div>

            {/* Project Details */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 flex items-center">
                <FaRegListAlt className="mr-2 text-green-500" />
                Project Details
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                {project.projectDetails && project.projectDetails.length > 0 ? (
                  project.projectDetails.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500">•</span>
                      <p className="text-gray-300">{detail}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No project details available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
