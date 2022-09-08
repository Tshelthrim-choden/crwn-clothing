import React from 'react';
import Directory from '../../components/directory/Directory.component';
import './Homepage.styles.scss'

const HomePage=(props )=>{
    console.log(props);
    
    return(
    <div className='homepage'>
       <Directory> </Directory>
    </div>
    );
};
//  const HomePage=(props)=>{
//     console.log(props)
//     return (
//         <h1>HI</h1>
//     )
//  }
export default HomePage;