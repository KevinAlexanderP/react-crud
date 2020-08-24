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

   
    }
    
    const handleSubmit = (e) =>{

        e.preventDefault();
        props.addOrEditLink(values)
        setValues({...initialStateValues})

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
                        onChange={handleInputChange} value={values.url}/>
                </div> 
                
                <div className="form-group input-group">
                    <div className="bg-ligth input-group-text">
                        <i className="material-icons">create</i>
                    </div>
                            <input type="text" 
                            className="form-control" 
                            placeholder="name" 
                            name="name" onChange={handleInputChange} value={values.name}/>
                </div>

        <div className="form-group ">

                <textarea name="description"   rows="3" className="form-control" placeholder="write a description" onChange={handleInputChange} value={values.description}>

                </textarea>

        </div>
        <button className="btn btn-primary">
            
            Save
        </button>

        
    </form>
)
}

export default LinkForm;
