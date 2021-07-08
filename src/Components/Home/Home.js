import React, { useState } from 'react';
import classNames from 'classnames';
import './Home.css';

const Home = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [isRed, setIsRed] = useState(false);

    const [isUbuntu, setIsUbuntu] = useState(false);
    const [isRoboto, setIsRoboto] = useState(false);
    const [isCourier, setIsCourier] = useState(false);

    const [isCyan, setIsCyan] = useState(false);
    const [isPurple, setIsPurple] = useState(false);
    const [isBlack, setIsBlack] = useState(false);

    const [isReset, setIsReset] = useState(false);

    const handleBlue = () => {
        setIsBlue(!isBlue);
    }

    const handleGreen = () => {
        setIsGreen(!isGreen);
    }

    const handleRed = () => {
        setIsRed(!isRed);
    }

    const handleUbuntu = () => {
        setIsUbuntu(!isUbuntu);
    }

    const handleRoboto = () => {
        setIsRoboto(!isRoboto);
    }

    const handleCourier = () => {
        setIsCourier(!isCourier);
    }

    const handleCyan = () => {
        setIsCyan(!isCyan);
    }

    const handlePurple = () => {
        setIsPurple(!isPurple);
    }

    const handleBlack = () => {
        setIsBlack(!isBlack);
    }

    const handleReset = () => {
        setIsReset(!isReset);
    }

    return (
        <div className="main-body">
            <div className={classNames('container-body', { 'container-body-blue': isBlue, 'container-body-green': isGreen, 'container-body-red': isRed, 'container-body-ubuntu': isUbuntu, 'container-body-roboto': isRoboto, 'container-body-courier': isCourier, 'container-body-cyan': isCyan, 'container-body-purple': isPurple, 'container-body-black': isBlack, 'container-body-reset': isReset })}>
                <div className="header-area">
                    <h1 className="header-text">Change text and generate Code!</h1>
                </div>
                <div className="description-area">
                    <p>By pressing the buttons below, one can change the text box color, font family and font color all together or one by one. For example, when someone clicks cyan&nbsp; button, text color of this box and the heading should change to cyan from black. In the box below with a heading 'Code' should print the html/ css styling for the current text and text box styling. It should change,&nbsp; when any of the following buttons are clicked, accordingly so that when someone copies the code it&nbsp; reproduces a similar text box like this one.&nbsp; Reset button&nbsp; should remove all effects.</p>
                </div>
            </div>
            <div className="selection-area">
                <div className="options-area">
                    <div className="btn-area">
                        <div className="bg-title">
                            <h3>Background Color: </h3>
                        </div>
                        <div className="btn-style">
                            <button onClick={handleBlue} className="btn-all btn-blue">BLUE</button>
                            <button onClick={handleGreen} className="btn-all btn-green">GREEN</button>
                            <button onClick={handleRed} className="btn-all btn-red">RED</button>
                        </div>
                    </div>
                    <div className="btn-area">
                        <div className="ff-title">
                            <h3>Font Family: </h3>
                        </div>
                        <div className="btn-style">
                            <button onClick={handleUbuntu} className="btn-all btn-ff">UBUNTU</button>
                            <button onClick={handleRoboto} className="btn-all btn-ff">ROBOTO</button>
                            <button onClick={handleCourier} className="btn-all btn-ff">COURIER NEW</button>
                        </div>
                    </div>
                    <div className="btn-area">
                        <div className="fc-title">
                            <h3>Font Color: </h3>
                        </div>
                        <div className="btn-style">
                            <button onClick={handleCyan} className="btn-all btn-cyan">CYAN</button>
                            <button onClick={handlePurple} className="btn-all btn-purple">PURPLE</button>
                            <button onClick={handleBlack} className="btn-all btn-black">BLACK</button>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleReset} className="btn-reset" type="reset">RESET</button>
                    </div>
                </div>
                <div className="display-area">
                    <div className="display-title">
                        <p>Code: </p>
                    </div>
                    <div className="display-field">
                        <p className="display-note">Code  for the  above text box should be printed here.</p>

                        <div className="css-code-box">
                            <div className="css-code-box-content">
                                <div className="default-css">
                                <h3>Default CSS</h3>
                                <p>{`.container-body{ 
                                        background-color: rgba(254, 236, 230, 0.66);
                                        height: 500px;
                                        margin: 0 100px;
                                        text-align: center;
                                        font-family: Georgia;
                                        color: gray;
                                    }`}</p>
                            </div>

                            <div className={classNames('updated-css', { 'updated-css-blue': isBlue })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-blue{
                                        background-color: blue;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-green': isGreen })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-green{
                                        background-color: green;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-red': isRed })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-red{
                                        background-color: red;
                                    }
                                `}</p>
                            </div>

                            <div className={classNames('updated-css', { 'updated-css-ubuntu': isUbuntu })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-ubuntu{
                                        font-family: Ubuntu;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-roboto': isRoboto })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-roboto{
                                        font-family: Roboto;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-courier': isCourier })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-courier{
                                        font-family: Courier;
                                    }
                                `}</p>
                            </div>

                            <div className={classNames('updated-css', { 'updated-css-cyan': isCyan })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-cyan{
                                        color: cyan;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-purple': isPurple })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-purple{
                                        color: purple;
                                    }
                                `}</p>
                            </div>
                            <div className={classNames('updated-css', { 'updated-css-black': isBlack })}>
                                <h3>Changed CSS</h3>
                                <p>{`
                                    .container-body-black{
                                        color: black;
                                    }
                                `}</p>
                            </div>

                            <div className={classNames('updated-css', { 'updated-css-reset': isReset })}>
                                <h3>Reset the all default CSS</h3>
                                <p>{`
                                    .container-body-reset{
                                        background-color: rgba(254, 236, 230, 0.66);
                                        font-family: Georgia;
                                        color: gray;
                                    }
                                `}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;