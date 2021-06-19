import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";

import { StartButtonContainer, Paragraph } from "components/StyledComponents";

const ConceptHeader = ({ inputValue, handleOnChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Title>Find your techy word here</Title>
        <Wrapper>
          <ContainerHeader role="main">
            <StartButtonContainer>
              <div className={classes.filter}>
                <Paragraph>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Search here..."
                      variant="outlined"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </form>
                </Paragraph>
              </div>
            </StartButtonContainer>
          </ContainerHeader>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ConceptHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "50% ",
    height: "200px",
    marginTop: "35px",
  },

  filter: {
    display: "flex",
  },
}));

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  border: 2px black;
  padding: 20px;
  border-radius: 10px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    border: black solid 2px;
    box-sizing: border-box;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 10px;
  height: 400px;
  width: 200px;
  background-color: #fff5d1;
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0px;
    width: 800px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 10px #ffcff1;
  border-bottom-radius: 50%;
  padding: 10px;
  font-size: 50px;
`;
