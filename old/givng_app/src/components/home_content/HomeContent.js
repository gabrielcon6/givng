import React from "react";
import { Container, Banner, Title, Icon, IconText, Text, WrappedContainer, InnerContainer, Footer } 
    from './StyledHomeContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUsers, faDollarSign, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class HomeContent extends React.Component {
  state = {};
  render() {
    return (
        <Container>
        <Banner>
            <Title color={"white"}>Give joy to your loved ones.</Title>
        </Banner>
        <WrappedContainer style={{color: "#2B2D42"}}>
            <InnerContainer>
                <Text fontWeight={"400"}>
                    <Icon background={"#2B2D42"} color ={"white"}><FontAwesomeIcon icon={faList} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Easy & free gift lists organiser.</IconText><br/>
                    <Icon background={"#2B2D42"} color ={"white"}><FontAwesomeIcon icon={faUsers} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Lists for different groups of people & dates.</IconText><br/>
                    <Icon background={"#2B2D42"} color ={"white"}><FontAwesomeIcon icon={faDollarSign} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Split the budget amongst people.</IconText>
                </Text>
            </InnerContainer>
        </WrappedContainer>
        <WrappedContainer background={"#DFE3E8"}>
            <InnerContainer>
                <Text fontWeight={"200"}>
                    <h1 style={{fontWeight: "400"}}>Starting </h1>
                    <Icon background={"white"} color ={"black"}>1</Icon><IconText>Create an Account</IconText><br />
                    <Icon background={"white"} color ={"black"}>2</Icon><IconText>Add a Givng List for a Special Event</IconText> <br />
                    <Icon background={"white"} color ={"black"}>3</Icon><IconText>Create Groups of People Inside of the Lists</IconText> <br />
                    <Icon background={"white"} color ={"black"}>4</Icon><IconText>Define Budget for Each Group</IconText> <br />
                    <Icon background={"white"} color ={"black"}>5</Icon><IconText>Start your Givings!</IconText> <br />
                </Text>
            </InnerContainer>

        </WrappedContainer>
        <Footer>
            <InnerContainer>
                <Text>
                    <Icon color ={"back"}><FontAwesomeIcon icon={faEnvelopeOpenText}/></Icon>
                    <Icon color ={"black"}><FontAwesomeIcon icon={faGithub} style={{padding: "0.3rem"}}/></Icon> 
                    <Icon color ={"black"}><FontAwesomeIcon icon={faLinkedin} style={{padding: "0.3rem"}}/></Icon> 
                </Text>
            </InnerContainer>
            <p style={{color: "white"}}>© 2019 Chen He, Gabriel Conceicao, Paulo Amaral</p>
        </Footer>
      </Container>
    );
  }
}

export default HomeContent;
