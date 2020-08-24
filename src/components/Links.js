import React, {useEffect, useState} from 'react';
import LinkForm from './LinkForm';
import {db}  from   "../firebase"



const Links = () => {
    const [Links,SetLinks] = useState([])

const addOrEditLink = async (linkObject)  =>  {
    await db.collection('links').doc().set(linkObject)
    console.log('new object ')

 }

const getLinks = async () => {
const querySnapshot  = await db.collection('links').onSnapshot(
    (querySnapshot) => {
        querySnapshot.forEach(doc => {
            console.log(doc.data())
        })})
}

useEffect(() =>{
console.log('getting data ')
}, []); 
return <div>
        <LinkForm addOrEditLink={addOrEditLink}/>
        Links
    </div>
    }

export default Links;
