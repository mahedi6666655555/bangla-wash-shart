import React from 'react';

const Single = ({ Single, btn }) => {
    let { name, picture, _id, price } = Single
    return (
        <div>
            <div className='w-[400px] ml-3 h-[500px] shadow-lg rounded-lg relative border-2'>
                <div>
                    <img className='w-full h-[300px] p-2' src={picture} alt="" />
                </div>
                <div className='pt-3 pl-4'>
                    <h1 className='text-2xl '>name:{name}</h1>
                    <h1 className='text-2xl '>price: {price}</h1>
                </div>
                <div>
                    <button onClick={() => btn()} className='bg-orange-800 py-4 w-full text-lg font-bold absolute bottom-0'>buy now</button>

                </div>
            </div>
        </div>
    );
};

export default Single;