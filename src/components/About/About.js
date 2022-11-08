import React from "react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export default function About() {
    return (
        <>
        <h1 className="name">Mariah Johnston</h1>
            <img
                src="./img/me.png"
                alt="img-blur-shadow"
                className="me">
            </img>

            <Card className="w-96">
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        About Me:
                    </Typography>
                    <Typography>
                        Hello, my name is Mariah! I am based out of Cincinnati, Ohio and I have a passion for front-end developing. I love using CSS and other frameworks such as Bootstrap and Tailwind.
                        <br />
                        <br />
                        I received my certificate of completion for Full Stack Web Development
                        through The Ohio State University on October 24th, 2022. My interest
                        in web development (especially front-end) started back in 2009
                        when I started creating layouts for MySpace.
                        <br />
                        <br />
                        Some of the technologies I have been working with recently are:
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}
