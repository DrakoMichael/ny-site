import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return(
        <>
            <nav className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col p-3">
                        <Image 
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        />
                        <span className="ms-3 text-info"> NEW YORK CITY</span>
                        <span className="mx-2">|</span>
                        <span>USA</span>
                    </div>
                    <div className="col p-3 text-end aligh-self-center">
                        <Link href="/" className="Link">Home</Link>
                        <Link href="/points" className="Link">Points of interest</Link>
                        <Link href="/map" className="Link">Map</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}