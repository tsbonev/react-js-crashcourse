import React, { Component } from 'react';

class AddProject extends Component {
  
static defaultProps = {
    categories: ["Web Design", "Web Developments", "Mobile Development"]
}

  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value="category">{category}</option> 
    })

    return (
        <div>
            <h3>Add project</h3>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" ref="title"/>
                    <br/>
                    <label>Category</label>
                    <select ref="category">
                        {categoryOptions}
                    </select>
                    <br/>
                </div>
            </form>
        </div>
    );
  }
}

export default AddProject;