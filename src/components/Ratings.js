import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

const Rating = ({rating,settingRate}) => {
    return ( <>


    {[...Array(5)].map((_,i) => {

        return <span style={{cursor:"pointer"}}   key={i} onClick={() => settingRate(i)}>{rating > i?(<AiFillStar fontSize="15px"/>):(<AiOutlineStar fontSize="15px"/>)}</span>

    })}
    


    </>

 );
}
 
export default Rating;