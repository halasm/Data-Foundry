import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-duke-navy-blue rounded-lg shadow m-1 " id = "footer">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="flex items-center sm:mb-0">
                    
                        <img src= "/images/duke_wordmark_white.png" alt="Duke Logo" height = {125} width = {350} className = "-ml-10 -mt-4"/>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/documentation" className="text-base mr-4 hover:underline md:mr-6 text-dandelion">About</Link>
                        </li>
                        <li>
                            <a href="https://oarc.duke.edu/privacy/duke-university-privacy-statement/" className="text-base text-dandelion mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-base text-dandelion mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="text-base text-dandelion hover:underline mr-14">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className = "text-normal text-white text-right mx-auto text-base mr-12">
                    Duke University
                    <br></br>
                    401 Chapel Dr, Durham, NC 27705

                </p>
            </div>
        </footer>
    )
}