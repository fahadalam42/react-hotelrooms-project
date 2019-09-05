import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "We will Provide the finest and Unlimited cocktails for the guest"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Exciting Hiking available for our guest"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "We will provide the free transport services from the airport to hotel"
            },
            {
                icon: <FaBeer />,
                title: "Strong Beer",
                info: "Free unlimitied beer for our guest"
            }
        ]
    };
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                        return (
                            <div className='service' key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}
