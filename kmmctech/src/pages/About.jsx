import React from 'react'
import who from "../assets/who.jpg"
function About() {
    return (
        <div className='about__wrapper'>
            <div className='about__hero'>
                <img src={who} alt="about us" />
            </div>
            <div className='about__details'>
                <p className='fs-2'>
                    No matter what your product needs are, KMMCTECH meets them with functional, high-quality products.
                </p>
                <p className='fs-1'>
                    Our designs ensure reliability and the best-possible user experience. We offer more than 20 categories of high-performance technology devices and accessories with efficiency and compatibility in mind. You can rest assured that we are here to help in the event you ever need service, with top-of-the-line support. The V7 brand is owned and produced by Ingram Micro, the global leader in product distribution and services. Our unique position allows us to leverage our global operational excellence and stay at the forefront of consumer demand. We adhere to strict environmental and labor policies, ensuring we are an eco- and employee-friendly company.
                </p>
                <p className='fs-1'>
                    With over 20 years of experience in more than 120 countries, V7 stands for quality and performance, providing you top-of-the-line products.
                </p>
            </div>
        </div>
    )
}

export default About