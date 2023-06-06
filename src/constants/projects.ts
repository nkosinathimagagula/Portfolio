import { project } from "../types";
import { cinema_booking, pixelscript, pixelscript_api } from "../assets";

export const projects: project[] = [
    {
        name: "Cinema Booking",
        description: "A web-based application that allows users to book a movie in a cinema playing on a certain date. It allows the users to select their seats and pay online. It is built with python, using the Flask framework and sqlalchemy for the database.",
        image: cinema_booking,
        source_code_link: "https://github.com/nkosinathimagagula/CinemaBooking",
        languages: [
            {
                name: "Python",
                color: ""
            },
            {
                name: "HTML",
                color: ""
            },
            {
                name: "CSS",
                color: ""
            },
            {
                name: "JavaScript",
                color: ""
            }
        ]
    },
    {
        name: "PixelScript API",
        description: "This is an API designed to extract text from images and documents. This API uses optical character recognition (OCR) algorithms to accurately extract text from images. Spelling check and autocorrect is also applied after extracting the text from images to make sure that accurate results are returned. This API is built using FastAPI and uses MySQL for the database.",
        image: pixelscript_api,
        source_code_link: "https://github.com/nkosinathimagagula/PixelScriptAPI",
        languages: [
            {
                name: "Python",
                color: ""
            }
        ]
    },
    {
        name: "PixelScript",
        description: "This is a web-based frontend using an API to extract text from images and documents. It converts the extracted text to bionic reading which make readers to read through content faster (the extracted text can be downloaded as a word document). This Frontend is built using React." ,
        image: pixelscript,
        source_code_link: "https://github.com/nkosinathimagagula/PixelScriptFrontend",
        languages: [
            {
                name: "TypeScript",
                color: ""
            },
            {
                name: "Tailwindcss",
                color: ""
            },
            {
                name: "HTML",
                color: ""
            },
            {
                name: "CSS",
                color: ""
            }
        ]
    }
]
