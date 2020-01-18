import React, { Component } from "react";
import { Container, Banner, Title, Icon, IconText, Text, WrappedContainer, H1, InnerContainer, Footer, FooterText } 
    from '../styles/StyledHomeContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUsers, faEnvelopeOpenText, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class HomeContent extends Component {
  state = {};
  render() {
    return (
        <Container>
        <Banner>
            <Title primary >Give joy to your loved ones</Title>
        </Banner>
        <WrappedContainer colorPrimary>
            <InnerContainer>
                <Text primary>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faList} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Easy and free <span style={{fontWeight: "600"}}> gift organiser</span></IconText><br/>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faUsers} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Create gift lists for different people and dates</IconText><br/>
                    <Icon backPrimary colorPrimary><FontAwesomeIcon icon={faHandHoldingUsd} style={{padding: "0.3rem"}}/></Icon> 
                    <IconText> Easily manage the budget between people </IconText>
                </Text>
            </InnerContainer>
        </WrappedContainer>

        <WrappedContainer background={"#DFE3E8"}>
            <InnerContainer>
                <Text fontWeight={"200"}>
                    <H1> Getting Started </H1>
                    <Icon>1</Icon><IconText>Create an account</IconText><br />
                    <Icon>2</Icon><IconText>Add a Givng list for a special event</IconText> <br />
                    <Icon>3</Icon><IconText>Create groups of people inside of the lists</IconText> <br />
                    <Icon>4</Icon><IconText>Define budget for each group</IconText> <br />
                    <Icon>5</Icon><IconText>Start your Givings!</IconText> <br />
                </Text>
            </InnerContainer>
        </WrappedContainer>
        
        <Footer>
            <InnerContainer>
                <Text>
                    <a href="mailto:gabrielcon6cao@gmail.com?Subject=Hello%20again" target="_top">
                        <Icon backPrimary><FontAwesomeIcon icon={faEnvelopeOpenText}/></Icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielcon6">
                        <Icon backPrimary><FontAwesomeIcon icon={faGithub} style={{padding: "0.3rem"}}/></Icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/gabrielcon6">
                        <Icon backPrimary><FontAwesomeIcon icon={faLinkedin} style={{padding: "0.3rem"}}/></Icon>
                    </a>
                </Text>
            </InnerContainer>
            <FooterText>© 2019 Chen He, Gabriel Conceicao, Paulo Amaral</FooterText>
        </Footer>
      </Container>
    );
  }
}

export default HomeContent;
