import React, { Component } from 'react';

class AddProject extends Component {

  static defaultProps = {
    categories : ['Web Development', 'Web Design', 'Mobile Development']
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <options  key={category} value="category">{category}</options>
    })
    return (
      <div>
        <p>This is AddProject </p>

        <form>
          <div>
            <label>name</label>
            <input type="text" ref="name" /><br />
          </div>
          <div>
            <label>product</label>
            <select ref="product">
              {categoryOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
