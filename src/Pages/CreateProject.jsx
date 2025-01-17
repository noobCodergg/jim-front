// Import necessary libraries
import React, { useEffect, useState } from "react";
import { createProject } from "../Api/ProjectApi";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const navigate=useNavigate();
  const role=localStorage.getItem('role')

  useEffect(()=>{
   if(role!=='Admin'){
     navigate('/login')
   }
  },[])
  const [formData, setFormData] = useState({
    projectName: "",
    projectLocation: "",
    projectDescription: "",
    projectImages: [], // Store Base64 strings for images
  });

  const [projectDetails, setProjectDetails] = useState([""]); // Initialize as an array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Get selected files
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert file to Base64
        reader.onload = () => resolve(reader.result); // Resolve with Base64 string
        reader.onerror = (error) => reject(error); // Handle errors
      });
    });

    Promise.all(promises)
      .then((base64Files) => {
        setFormData({
          ...formData,
          projectImages: base64Files, // Update projectImages with Base64 strings
        });
      })
      .catch((error) => {
        console.error("Error converting files to Base64:", error);
      });
  };

  const handleDetailsChange = (index, value) => {
    const updatedDetails = [...projectDetails];
    updatedDetails[index] = value;
    setProjectDetails(updatedDetails);
  };

  const addDetailField = () => {
    setProjectDetails([...projectDetails, ""]); // Add a new empty field
  };

  const removeDetailField = (index) => {
    setProjectDetails(projectDetails.filter((_, i) => i !== index)); // Remove the specified field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine projectDetails into formData
    const dataToSubmit = {
      ...formData,
      projectDetails, // Add projectDetails array to the data
    };

    console.log("Submitting Data:", dataToSubmit);

    try {
      await createProject(dataToSubmit); // Send the combined data to the API
      alert("Project submitted successfully!");
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Failed to submit the project. Please try again.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Submission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700">
            Project Location:
          </label>
          <input
            type="text"
            id="projectLocation"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Details:</label>
          {projectDetails.map((detail, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              <input
                type="text"
                value={detail}
                onChange={(e) => handleDetailsChange(index, e.target.value)}
                required
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeDetailField(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDetailField}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
          >
            Add New Detail
          </button>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
            Project Description:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="projectImages" className="block text-sm font-medium text-gray-700">
            Project Images:
          </label>
          <input
            type="file"
            id="projectImages"
            name="projectImages"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
