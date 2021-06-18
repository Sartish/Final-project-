import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles, Container } from "@material-ui/core";

const TopSearches = () => {
  const classes = useStyles();
  // Vad den får tillbaka från första fetchen ({ data: [] }); så när vi sen ska hämta den på nytt
  // i våran funktion så måste vi nå den på rätt sätt
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  // sorting our mapped data in decsending order, then slice to get the first 20 popular searches

  let size = 21;

  const sortDesc = () => {
    return allConcepts.data
      .sort((a, b) => (a.likes > b.likes ? -1 : 1))
      .slice(0, size);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  // in the fetch we collect all data rendered from the API

  return (
    <Container className={classes.container}>
      <TopSearchesHeaderContainer>
        <Header>Top 20 recent searches</Header>
        <Border></Border>
      </TopSearchesHeaderContainer>
      <Container className={classes.container}>
        <List>
          {sortDesc(allConcepts.data)?.map((item) => {
            console.log(item._id);
            return (
              <Link
                style={{ textDecoration: "none" }}
                className={classes.link}
                to={`/concepts/${item._id}`}
              >
                <Numbers style={{ textDecoration: "none" }}>
                  <li style={{ textDecoration: "none" }}>{item.concept}</li>
                </Numbers>
              </Link>
            );
          })}
        </List>
      </Container>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    ["@media (min-width:780px)"]: {
      marginTop: "60px",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default TopSearches;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  height: 600px;
  width: 150px;
  border: black solid 2px;
  padding: 0px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 1000px;
    height: 370px;
    padding: 80px;
  }
`;

const Numbers = styled.li`
  display: flex;
  border: black solid 2px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 30px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    text-decoration-color: #ff69b4;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-bottom: 40px;
    line-height: 30px;
    padding-left: 30px;
  }
`;

const TopSearchesHeaderContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: black solid 1px;
  padding: 5px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  display: flex;
  font-size: 40px;
  margin: 10px;
`;

const Border = styled.div`
  display: flex;
  text-align: center;
  width: 210px;
  height: 7px;
  border: #c7feff 2px solid;
  background-color: #c7feff;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;
