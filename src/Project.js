import React, {Component} from 'react';

class  Project extends Component {
    handleTrashClick = () => {
        var {deleteProject,id} = this.props;
 
        deleteProject(id);
    }
    handleUpdateClick = () => {
        var {setActiveView,setProjectToUpdate,id} = this.props
        setProjectToUpdate(id)
        setActiveView('update-project')
    }

  	render(){
	    return (
            <div className="project">
                <img className="project-img" src={this.props.imageUrl} alt="project-img"/>
                <div className="project-body">
                    <div className="project-text">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.author}</p>
                        <p><span className="site">{this.props.url}</span></p>
                    </div>
                    <div className="project-icon">
                        <i onClick={this.handleUpdateClick} className="far fa-edit"></i>
                        <i onClick={this.handleTrashClick} className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
	    )
  	}
}
export default Project
