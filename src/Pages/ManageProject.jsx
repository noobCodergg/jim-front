import React, { useEffect, useState } from 'react';
import { deleteProject, getProject } from '../Api/ProjectApi';
import { useNavigate } from 'react-router-dom';

function ManageProject() {
    const navigate=useNavigate();
    const role=localStorage.getItem('role')
  
    useEffect(()=>{
     if(role!=='Admin'){
       navigate('/login')
     }
    },[])
  const [data, setData] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await getProject();
      setData(response.data);
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [data]);

  const handleDelete=async(id)=>{
   await deleteProject(id)
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Manage Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            {/* Project Image */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={item.projectImages[0]}
                alt={item.projectName}
                className="w-full h-56 object-cover rounded-md"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold text-gray-200 mb-4">{item.projectName}</h3>

            {/* Delete Button */}
            <button onClick={()=>handleDelete(item._id)}className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProject;
