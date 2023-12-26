import styled from "styled-components";

export const AuthenticatonContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 550px) {
    flex-direction: column;
    max-width: 310px;
    width: fit-content;
    margin: 5px auto;
  }
`;