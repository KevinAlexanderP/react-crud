import React, {useState} from 'react';


const LinkForm = (props) => {
    const initialStateValues = {
        url:"",
        name: "" ,
        description:"", 

    }
    
    const [values, setValues] = useState(initialStateValues);
    
    const handleInputChange= e=> {

        const {name,value} = e.target

        setValues({...values,[name]:value})

        props.addOrEditLink(values)
    }
    
    const handleSubmit = (e) =>{

        e.preventDefault();

        console.log(values)
        
    }

    return(
        <form action="" className="card card-body " onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="bg-ligth input-group-text">
                <i className="material-icons">insert_link</i>
                </div>
                        <input type="text" 
                        className="form-control" 
                        placeholder="https" 
                        name="url"
                        onChange={handleInputChange}/>
                </div>
                <div className="form-group input-group">
                    <div className="bg-ligth input-group-text">
                        <i className="material-icons">create</i>
                    </div>
                            <input type="text" 
                            className="form-control" 
                            placeholder="name" 
                            name="url" onChange={handleInputChange}/>
                </div>
        <div className="form-group ">

                <textarea name="description"  rows="3" className="form-control" placeholder="write a description" onChange={handleInputChange}>

                </textarea>

        </div>
        <button className="btn btn-primary">
            
            Save
        </button>

        
    </form>
)
}

export default LinkForm;
