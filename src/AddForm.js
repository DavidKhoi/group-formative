import React, {Component} from 'react';

class AddForm extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.addForm)
        var data = {
            name:formData.get('name-input'),
            author:formData.get('author-input'),
            url:formData.get('site-input'),
            imageUrl:formData.get('photo-input')
        }

        var {addProject,setActiveView} = this.props
        addProject(data)
        setActiveView('projects')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} ref={(el) => {this.addForm = el}}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name-input" placeholder="Project Title"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="author-input" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="site-input" placeholder="URL link"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="photo-input" value="https://picsum.photos/200/120"/>
                </div>
                <button type="submit" className="btn btn-primary">Upload Project</button>
            </form>
        )
    }
}

export default AddForm