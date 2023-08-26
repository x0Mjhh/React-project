
export default function Section() {
    return (
        <>

            <section className="">
                <div
                    className="max-w-lg px-4  py-8 mx-auto text-left md:max-w-none md:text-center"
                >
                    <h1
                        className="text-3xl font-extrabold leading-10 tracking-tight  text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
                    >
                        <span className="inline md:block">Watch with us</span>
                        <span
                            className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
                        > Enjoy your <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> free time </span> </span>
                    </h1>
                    <div
                        className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
                    >
                        <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" >
                            Join Sahilnetic
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
