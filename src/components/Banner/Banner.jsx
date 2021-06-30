import React from 'react'
import './Banner.scss'
const Banner = (props) => {
    const {title,background} = props;
    const bannerStyle = background ? {backgroundImage:`url(${background})`}:{}
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner_title">{title}</h1>
        </section>

    )
}

export default Banner
