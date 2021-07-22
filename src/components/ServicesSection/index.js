import React from 'react';
import Card from '../Card';
import { data } from './data';
import {
    ServicesCointainer,
    ServicesTitle,
    ServicesWrapper
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesCointainer id="services">
            <ServicesTitle>Our Services</ServicesTitle>
            <ServicesWrapper>
                { data.map((data) => {
                    return <Card key={data.title} data ={data} />
                }) }
            </ServicesWrapper>
        </ServicesCointainer>
    )
}

export default Services
