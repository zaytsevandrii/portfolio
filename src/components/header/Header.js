import React from "react"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Andrii</em>
                    </strong>
                    <br />I am a frontend developer
                </h1>
                <div className="header__text">
                    <p>with a passion for learning and creating.</p>
                    <p style={{fontSize:'20px',paddingTop:'10px'}}>Skills: HTML5, CSS3, Javascript, Typescript, React, Redux, SaSS, Next js</p>
                </div>
                <a href="https://drive.google.com/file/d/1sa7hZVw4dT6RXR88Vai6TQv3GiosOSTV/view?usp=sharing" target='_blank'  className="btn">
                    Download CV
                </a>
            </div>
        </header>
    )
}

export default Header
