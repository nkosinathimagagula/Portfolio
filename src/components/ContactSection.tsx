import { useState, useRef, MutableRefObject, SyntheticEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"

import { SectionWrapper } from "../hoc/SectionWrapper";
import { formData } from "../types";
import { fadeIn } from "../utils/framer-motion/motion";

const ContactSection = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<formData>({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setForm({ ...form, [name]: value });
    }

    const handleTextAreaChange = (e: FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;

        setForm({ ...form, [name]: value})
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        if (form.name === "" || form.email === "" || form.message === "") {
            setLoading(false);
            alert("Error!! All fields must be filled!");
        } else {
            emailjs.send(
                "service_85ump0w",
                "template_l12ft46",
                {
                    from_name: form.name,
                    to_name: "Walter",
                    from_email: form.email,
                    to_email: "nkosinathiwalter001@gmail.com",
                    message: form.message
                },
                "BtzMB_19MiDX4BJkl"
            )
            .then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");
    
                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (error) => {
                setLoading(false);
    
                console.log(error);
    
                alert("Something went wrong.");
            });
        }
    }

  return (
    <div className="overflow-hidden tbp:py-0 py-16 flex flex-col-reverse gap-10 z-10">
        <motion.div
        variants={fadeIn("left", "spring", 0.2, 2.5)}
            className="bg-[#b0b7c0] px-5 py-1 rounded-2xl tbp:w-[550px] w-full"
        >
            <h2 className="tbp:text-[60px] text-[40px] font-black pb-10 tbp:py-0 pt-16">Contact.</h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-10 pb-10"
            >
                <label
                    className="flex flex-col"
                >
                    <span className="text-black font-medium mb-3">Name</span>
                    <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="bg-[#f7f7f9] p-3 text-black placeholder:text-[#808080] rounded-lg outline-none border-none"
                    />
                </label>

                <label
                    className="flex flex-col"
                >
                    <span className="text-black font-medium mb-3">Email</span>
                    <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-[#f7f7f9] p-3 text-black placeholder:text-[#808080] rounded-lg outline-none border-none"
                    />
                </label>

                <label
                    className="flex flex-col"
                >
                    <span className="text-black font-medium mb-3">Message</span>
                    <textarea 
                        rows={7}
                        name="message"
                        value={form.message}
                        onChange={handleTextAreaChange}
                        placeholder="Message ..."
                        className="bg-[#f7f7f9] p-4 text-black placeholder:text-[#808080] rounded-lg outline-none border-none"
                    />
                </label>

                <button 
                    type="submit"
                    className="bg-[#f7f7f9] px-5 py-2 outline-none w-fit text-black font-bold rounded-xl shadow-md shadow-black"
                >
                    { loading ? "Sending" : "Send"}
                </button>
            </form>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(ContactSection, "contact")
