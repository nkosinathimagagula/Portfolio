import ReactTyped from "react-typed";

export const Landing = () => {
    const names: string[] = ["Walter.", "Nkosinathi."];


    return (
        <section className="py-20 w-full h-screen mx-auto bg-edge-sq-blocks bg-cover bg-no-repeat bg-center">
            <div className="tbp:pl-40 tbp:py-25 pl-5 py-16 absolute flex flex-row">
                <div className="pb-5 overflow-hidden">
                    <div 
                        className="w-2 h-[105%] bg-scroll bg-gradient-to-b from-yellow-600 via-20% via-white to-70% to-gray-400 rounded-full"
                    />
                </div>

                <div>
                    <h1 className="text-black font-black tbp:text-[80px] text-[50px] ml-5">
                        Hello, <br />
                        I'm <span className="text-yellow-600">
                            <ReactTyped 
                                strings={names}
                                typeSpeed={80}
                                backSpeed={50}
                                backDelay={2000}
                                loop
                            />
                        </span>
                    </h1>

                    <p className="mx-5 font-medium tbp:text-[20px] text-[18px]">
                        A software developer with great interest in <br className="tbp:block hidden"/>
                        developing backend applications. Building <br className="tbp:block hidden"/>
                        efficient and scalable systems that can <br className="tbp:block hidden"/>
                        easily adapt to evolving needs is where my <br className="tbp:block hidden"/>
                        true passion lies.
                    </p>
                </div>
            </div> 
        </section>
    )
}
