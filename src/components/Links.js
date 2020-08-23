import React from 'react';
import LinkForm from './LinkForm';
import {db}  from   "../firebase"



const Links = () => {

const addOrEditLink = async (linkObject)  =>  {
    
  await db.collection('links').doc().set(linkObject)
  
  console.log('new object ')

 }
return <div>
        <LinkForm addOrEditLink={addOrEditLink}/>
        Links
    </div>
    }

export default Links;
