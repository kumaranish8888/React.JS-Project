import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectitems;
    if(this.props.myprojects){
      projectitems = this.props.myprojects.map(yourprojects => {
        //console.log(yourprojects);
        return (
          <ProjectItem key={yourprojects.name} project={yourprojects}/>
        )
      })
    }
    return (
      <div className="Projects">
        {projectitems}
      </div>
    );
  }
}

export default Projects;
