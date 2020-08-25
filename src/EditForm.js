import React, {Component} from 'react';

class EditForm extends Component{
    constructor(props){
        super(props);
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
 
        var formData = new FormData(this.updateForm);
        var data = {
            name:formData.get('name-input'),
            author:formData.get('author-input'),
            url:formData.get('site-input')
        }
        var {updateProject,id,setActiveView} = this.props
        updateProject(id,data)
        setActiveView('projects')
 
    }

    render(){
        var {name,author,url} = this.props
        return(
            <form onSubmit={this.handleFormSubmit} ref={(el) => {this.updateForm = el}}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name-input" placeholder="Project Title" defaultValue={name}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="author-input" placeholder="Name" defaultValue={author}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="site-input" placeholder="URL link" defaultValue={url}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="photo-input" value="https://picsum.photos/200/120"/>
                </div>
                <button type="submit" className="btn btn-primary">Save Project</button>
            </form>
        )
    }
}

export default EditForm