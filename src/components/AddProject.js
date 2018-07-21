import React, { Component } from 'react';

class AddProject extends Component {


    constructor(){
        super()
        this.state = {
            newProject:{}
        }
    }

  
static defaultProps = {
    categories: ["Web Design", "Web Developments", "Mobile Development"]
}

    handleSubmit(e){
    if(this.refs.title.value === ''){
        alert('Title is required')
    } else {
        this.setState({newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function(){
            this.props.addProject(this.state.newProject)
        })
    }
    console.log('Sumbitted')
    e.preventDefault()
    
    }

  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option> 
    })

    return (
        <div>
            <h3>Add project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

export default AddProject;