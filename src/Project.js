import React, {Component} from 'react';

class  Project extends Component {
  	render(){
	    return (
            <div className="project">
                <img className="project-img" src="https://picsum.photos/200/120"/>
                <div className="project-body">
                    <div className="project-text">
                        <h2>App Design Project</h2>
                        <p>Ruel Vincent</p>
                        <p><span className="site">www.ruelvincent.com</span></p>
                    </div>
                    <div className="project-icon">
                        <i className="far fa-edit"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
	    )
  	}
}
export default Project
