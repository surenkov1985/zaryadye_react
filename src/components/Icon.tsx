import React from 'react';

type PropTypes = {
    viewBox: string
    width:string
    height:string
    id:string
};

export const Icon = (props:PropTypes) => {
    return (
        <svg width={props.width} height={props.height} viewBox={props.viewBox} fill="none"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={props.id}/>
        </svg>
    );
}