import React from 'react'
import {
    CardWrapper,
    CardIcon,
    CardTitle,
    CardDesc,
} from './CardElements';

const Card = ({data}) => {    

    return (
        <CardWrapper>
            <CardIcon src={data.icon.default} />
            <CardTitle>{data.title}</CardTitle>
            <CardDesc>{data.desc}</CardDesc>
        </CardWrapper>
    )
}

export default Card
