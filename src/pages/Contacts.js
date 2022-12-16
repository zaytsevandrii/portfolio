import React from "react"

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Manchester, Clayton</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p>
                            <a href="tel:+447467421835">+44 7467421835</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="zaytsevandrii9@gmail.com">zaytsevandrii9@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Contacts
