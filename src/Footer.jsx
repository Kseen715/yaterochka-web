import React from "react";
import styled from "styled-components";
import './Header.css';

export const Box = styled.div`
    padding: 0;
`;

export const GlassBox = styled.div`
    inset: 0;
    z-index: -1;
    /*   Extend the backdrop to the bottom for it to "collect the light" 
    outside of the nav */
    --extended-by: -100px;
    bottom: calc(-1 * var(--extended-by));

    --filter: blur(20px);
    -webkit-backdrop-filter: var(--filter);
    backdrop-filter: var(--filter);
    // pointer-events: none;

    /*   Cut the part of the backdrop that falls outside of <nav /> */
    --cutoff: calc(100% - var(--extended-by));
    -webkit-mask-image: linear-gradient(to bottom,
            black 0,
            black var(--cutoff),
            transparent var(--cutoff));
    transform: rotate(180deg);
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 50px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    text-style: none;
 
    &:hover {
        color: #ffbe98;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #ffbe98;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const GlassBorder = styled.div`
    position: relative;
    z-index: -1;
    left: 0;
    right: 0;

    --extended-by: 80px;
    --offset: 20px;
    --thickness: 2px;
    height: calc(var(--extended-by) + var(--offset));
    /*   Offset is used to snuck the border backdrop slightly under the main backdrop for  smoother effect */
    top: calc(100% - var(--offset) + var(--thickness));

    /*   Make the blur bigger so that the light bleed effect spreads wider than blur on the first backdrop */
    /*   Increase saturation and brightness to fake smooth chamfered edge reflections */
    --filter: blur(90px) saturate(160%) brightness(1.3);
    -webkit-backdrop-filter: var(--filter);
    backdrop-filter: var(--filter);
    pointer-events: none;

    -webkit-mask-image: linear-gradient(
    to bottom,
    black 0,
    black var(--offset),
    transparent var(--offset)
    );
    margin-bottom: -18px;
    transform: rotate(180deg);
`;

export const FlippedBox = styled.div`
    transform: rotate(180deg);
`;

const Footer = () => {
    return (
        <Box>
            <GlassBorder />
            <GlassBox>
                <FlippedBox>
                    <h1
                        style={{
                            color: "#ed493c",
                            textAlign: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        ЯТёрочка - здесь каждый найдёт свой вкус!
                    </h1>
                    <FooterContainer>
                        <Row>
                            <Column>
                                <Heading>О нас</Heading>
                                <FooterLink href="#">
                                    Цели
                                </FooterLink>
                                <FooterLink href="#">
                                    Видение
                                </FooterLink>
                                <FooterLink href="#">
                                    Отзывы
                                </FooterLink>
                            </Column>
                            <Column>
                                <Heading>Услуги</Heading>
                                <FooterLink href="#">
                                    Написать нам
                                </FooterLink>
                                <FooterLink href="#">
                                    Стажировка
                                </FooterLink>
                                <FooterLink href="#">
                                    Обучение
                                </FooterLink>
                            </Column>
                            <Column>
                                <Heading>Мы</Heading>
                                <FooterLink href="#">
                                    Анастасия
                                </FooterLink>
                                <FooterLink href="https://github.com/Kseen715">
                                    Денис
                                </FooterLink>
                                <FooterLink href="https://github.com/kotikgriga27">
                                    Дарья
                                </FooterLink>
                            </Column>
                            <Column>
                                <Heading>Соцсети</Heading>
                                <FooterLink href="#">
                                    Facebook
                                </FooterLink>
                                <FooterLink href="#">
                                    ВКонтакте
                                </FooterLink>
                                <FooterLink href="#">
                                    Twitter
                                </FooterLink>
                                <FooterLink href="#">
                                    Youtube
                                </FooterLink>
                            </Column>
                        </Row>
                    </FooterContainer>
                </FlippedBox>
            </GlassBox>
        </Box >
    );
};
export default Footer;