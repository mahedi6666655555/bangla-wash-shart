import React, { useEffect } from 'react';
import { useState } from 'react';
import Single from '../../Single.jsx/Single';
import './whole-.css'
import Cart from '../Cart.jsx/Cart';
const Home = () => {

    let [api, Setapi] = useState([])
    useEffect(() => {


        let url = `https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json`
        fetch(url)
            .then(res => res.json())
            .then((data) => Setapi(data))
    }, [])

    let [set, setf] = useState([])

    let mahedi = Single => {

        const newCart = [...set, Single];
        setf(newCart);



    }

    let mahedi12 = (id) => {
        const remainng=set.filter(ts=>ts._id !==id)
        setf(remainng)
        
    }





    return (
        <div>
            <div className='whole-c mt-5'>
                <div className='grid  grid-cols-3  '>
                    {
                        api.map(res => <Single

                            key={res._id}

                            Single={res}

                            btn={mahedi}

                        >
                        </Single>)
                    }
                </div>
                <div className='bg-gray-400 h-[700px] ml-2'>
                    <Cart


                        set1={set}
                        mahedi12={mahedi12}
                    >

                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;