import Link from "next/link"

export default function home() {
    return (
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="section-one-title">New York é Top!</p>
                            <p className="section-one-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi impedit placeat deleniti laboriosam labore accusantium eum dolor. Laboriosam error, voluptatibus voluptate iusto deleniti atque beatae, natus reiciendis, corporis quod sed.
                            Necessitatibus excepturi veritatis laudantium veniam iure quasi, inventore culpa obcaecati eum sed impedit illo quas adipisci! Nemo id, velit unde repellendus in, suscipit, esse earum fugiat quia libero minus veritatis?
                            Aspernatur fuga repudiandae tenetur sunt. Aliquam voluptates impedit quos quas natus nihil, culpa enim at molestiae corporis inventore rem iusto voluptatem a asperiores? Officiis vel, deserunt doloribus consequuntur similique perferendis.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Descubra os principais pontos de interesse da cidade.</h4>
                            <div className="text-center">
                                <Link href="/points" className="btn btn-outline-light py-3 px-5"><h4>Pontos de interesse</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Olhe o mapa interativo</h4>
                            <p className="py-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti aliquid debitis ab itaque molestiae consectetur. Illum maiores ullam neque optio nobis a totam nostrum numquam quis? Dolores, sapiente porro.
                                Reiciendis blanditiis odit error itaque eaque delectus provident, in voluptas, consequatur distinctio rem mollitia ipsa possimus assumenda aperiam minima fugiat, incidunt ipsum. Omnis, error. Voluptates fugit perspiciatis accusantium id incidunt.
                            </p>
                            <div className="text-center">
                                <Link href="/map" className="btn btn-outline-dark py-3 px-5"><h4>OLHAR O MAPA</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}