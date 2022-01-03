import React from "react";

import { useTransform } from "framer-motion";
import useWrapperScroll from "../../model/useWrapperScroll";

// Import Styles
import { 
    Container,
    Header,
    Logo,
    Burger,
    Footer
 } from "./styles";
//----------------------------------------------------------------

const UniqueOverlay: React.FC = () => {

    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform( scrollYProgress, [0.9, 1], [0, 1]);

    return (

        <Container>

            <Header>
                <Logo />
                <Burger/>
            </Header>

            <Footer style={{ opacity }}>
            <ul>
                <li>
                    <a href="#">Ui Clone</a>
                </li>
                <li>
                    <a href="#">Made With 🧡</a>
                </li>
                <li>
                    <a href="#">By Gabriel Silva</a>
                </li>
            </ul>
            </Footer>

        </Container>

    );
};

export default UniqueOverlay;