import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.name} - {this.props.project.product}</strong>
      </li>
    );
  }
}

export default ProjectItem;
