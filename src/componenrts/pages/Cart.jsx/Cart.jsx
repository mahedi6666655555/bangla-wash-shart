import React from 'react';

const Cart = ({ set1 ,mahedi12}) => {
  console.log(set1);
  return (
    <div>
      <h1 className='text-center py-5 '>{set1.length}</h1>
      {
        set1.map(res => <h1 key={res._id} className='text-2xl text-center text-bold text-white'>{res.name} <button  onClick={()=>mahedi12(res._id)} className='bg-orange-500 py-2 px-5'>
          x
        </button> </h1>)

      }
    </div>
  );
};

export default Cart;