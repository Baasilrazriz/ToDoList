import React from 'react';
const header = () => {
    
        const today =new Date()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const day=today.toLocaleDateString("en-US",options);
    
    return (
        <>
        <div className='flex flex-col py-5 bg-black text-center text-white font-bold'>
        <h1 className=' text-5xl mb-2 '>Basil's ToDoList</h1>
        <h1 className=' text-2xl  '>{day}</h1>
        </div>
        </>
    );
}

export default header;