import React from "react";
import { Container, Banner, Title, Icon, IconText, Text, WrappedContainer, H1, InnerContainer, Footer, FooterText } 
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
            <Title primary >Give joy to your loved ones.</Title>
        </Banner>
        <WrappedContainer colorPrimary>
            <InnerContainer>
                <Text primary>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faList} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Easy & free <span style={{fontWeight: "600"}}> gift lists organiser</span>.</IconText><br/>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faUsers} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Lists for different groups of people & dates.</IconText><br/>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faDollarSign} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Split the budget amongst people.</IconText>
                </Text>
            </InnerContainer>
        </WrappedContainer>

        <WrappedContainer background={"#DFE3E8"}>
            <InnerContainer>
                <Text fontWeight={"200"}>
                    <H1> Starting </H1>
                    <Icon>1</Icon><IconText>Create an Account</IconText><br />
                    <Icon>2</Icon><IconText>Add a Givng List for a Special Event</IconText> <br />
                    <Icon>3</Icon><IconText>Create Groups of People Inside of the Lists</IconText> <br />
                    <Icon>4</Icon><IconText>Define Budget for Each Group</IconText> <br />
                    <Icon>5</Icon><IconText>Start your Givings!</IconText> <br />
                </Text>
            </InnerContainer>
        </WrappedContainer>
        
        <Footer>
            <InnerContainer>
                <Text>
                    <Icon backPrimary><FontAwesomeIcon icon={faEnvelopeOpenText}/></Icon>
                    <Icon backPrimary><FontAwesomeIcon icon={faGithub} style={{padding: "0.3rem"}}/></Icon> 
                    <Icon backPrimary><FontAwesomeIcon icon={faLinkedin} style={{padding: "0.3rem"}}/></Icon> 
                </Text>
            </InnerContainer>
            <FooterText>© 2019 Chen He, Gabriel Conceicao, Paulo Amaral</FooterText>
        </Footer>
      </Container>
    );
  }
}

export default HomeContent;
