import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./project.scss";

import ProjectCard from "../../components/card/ProjectCard";


const Project = () => {

    return (
        <div className="test1">
            <Sidebar />
            <div className="test1Container">
                <Navbar />
                <ProjectCard/> 
            </div>
        </div>
      );
}

export default Project
