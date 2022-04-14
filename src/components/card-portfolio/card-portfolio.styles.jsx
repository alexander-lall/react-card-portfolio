// https://www.happyhues.co/palettes/6
// https://undraw.co/

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d1d1e9;
    height: 900px;

    @media screen and (max-width: 1100px) {
        height: 1216px;
    }

    @media screen and (max-width: 700px) {
        height: 1848px;
    }
`;

export const H1 = styled.h1`
    color: #2b2c34;
    font-size: 2.5rem;
    margin-bottom: 64px;
`;

export const CardsWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Card = styled.div`
    background-color: #fffffe;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);  
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
`;

export const H2 = styled.h2`
    color: #2b2c34;
    font-size: 1rem;
    margin-bottom: 10px; 
`;

export const P = styled.p`
    color: #2b2c34;
    text-align: center; 
`;