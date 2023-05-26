import { project } from "../types";
import { cinema_booking } from "../assets";

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
    }
]