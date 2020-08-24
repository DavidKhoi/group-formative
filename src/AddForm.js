import React, {Component} from 'react';

class AddForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" name="name-input" placeholder="Project Title"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="description-input" placeholder="Name"/>
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