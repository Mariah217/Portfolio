import { FaGithub } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function Portfolio() {
    return (
        <>
            <h1 class="portfolio"> Portfolio </h1>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 content-evenly'>
                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>

                <Card className="w-96" id="cards">
                    <CardHeader color="blue" className="relative h-56">
                        <img
                            src="/img/blog.jpg"
                            alt="img-blur-shadow"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            Flicks Movie Generator
                        </Typography>
                        <Typography>
                            Can't decide on what movie to watch? Need help narrowing it down to a few to selections? Flicks Movie Generator randomizes 5 different movies at a time, from the genre that you selected (ie horror, romance, comedy etc.) so no more searching for hours!
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Button size="sm" color="green" >Select</Button>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <FaGithub />
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}