import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    @media only screen and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryTitle = styled.div`
    font-size: 2rem;
    text-align: center;
`;