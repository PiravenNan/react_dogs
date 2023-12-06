import React, { useState, useEffect } from 'react';
import DogImage from '../components/DogImage';
import DogButton from '../components/DogButton';

const DogContainer = () => {
    
    const [dog,setDog] = useState(null);
    
    const loadDogData = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDog(data);
    }

    useEffect(()=>{
        loadDogData()
    },[]);

    return (
        <>
        <h1>Random Dogs</h1>
        {dog ? <DogImage dog = {dog}/> : <p>Loading dog...</p>}
        <DogButton onButtonClick={loadDogData}/>
        </>
     );
}
 
export default DogContainer;