import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const About = (props) => {

    useEffect(()=>{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }, [])


    return (
        <>
            <div className="about">
                <h1>About Us</h1>
                <div className="content">
                    Hello and welcome to Textify! We are a website dedicated to providing various text operations to make your life easier.
                    <br /><br />
                    Our team is passionate about creating tools that help you manipulate and transform text in a variety of ways.
                    <br /><br />
                    One of our most popular features is our text conversion tool, which allows you to convert text to uppercase, lowercase, and even capitalize the first letter of each word.
                    <br /><br />
                    We are constantly working on new features and improvements to our text operations, so be sure to check back often for updates.
                    <br /><br />
                    Thank you for choosing Textify!
                    <br /><br />
                    <NavLink className="button" to="/">Go to Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default About