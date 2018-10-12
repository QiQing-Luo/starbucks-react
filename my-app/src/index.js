import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Grid, List, Flag, Button, Image } from 'semantic-ui-react';

class Header extends React.Component {
  render() {
    return (
        <div className="header-bar"></div>
    )
  }
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item position="right"><Icon name="map marker alternate"/></Menu.Item>
            <Menu.Item fitted>Find a Store</Menu.Item>
            <Menu.Item> | </Menu.Item>
            <Menu.Item>Sign In</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Image id="logo" src="https://news.starbucks.com/uploads/images/Logo/_preview/Starbucks_Logo_Hi-res.jpg"/>
            <Dropdown item text="COFFEE">
              <Dropdown.Menu>
                <Dropdown.Item>Our Coffee</Dropdown.Item>
                <Dropdown.Item>Find Your Perfect Coffee</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="TEA">
              <Dropdown.Menu>
                <Dropdown.Item>Handcrafted Teas</Dropdown.Item>
                <Dropdown.Item>Iced Teas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="MENU">
              <Dropdown.Menu>
                <Dropdown.Item>Drinks</Dropdown.Item>
                <Dropdown.Item>Food</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="COFFEEHOUSE">
              <Dropdown.Menu>
                <Dropdown.Item>Starbucks Mobile</Dropdown.Item>
                <Dropdown.Item>Online Community</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="SOCIAL IMPACT">
              <Dropdown.Menu>
                <Dropdown.Item>Community</Dropdown.Item>
                <Dropdown.Item>Ethical Sourcing</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="STARBUCKS REWARDS">
              <Dropdown.Menu>
                <Dropdown.Item>View Your Stars</Dropdown.Item>
                <Dropdown.Item>Current Members</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BLOG">
              <Dropdown.Menu>
                <Dropdown.Item>Originals</Dropdown.Item>
                <Dropdown.Item>About Starbucks Channel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="GIFT CARDS">
              <Dropdown.Menu>
                <Dropdown.Item>Buy a Card</Dropdown.Item>
                <Dropdown.Item>Manage Your Card</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class StarbucksImage extends React.Component {
  render() {
    return (
        <div className="starbucks-background">
          <Grid container columns="2">
            <Grid.Column>
              <h1 id="left-txt">Taste caramel &amp; mocha at their best</h1>
              <h2 id="right-txt">One sip of this delicious combination of caramel, mocha &amp; salt and you wonder how
                you ever had them
                without each other before.</h2>
              <Button inverted id="button">Drink up</Button>
            </Grid.Column>
          </Grid>

        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="5">
            <Grid.Column>
              ABOUT US
              <hr/>
              <List>
                <List.Item>Our Company</List.Item>
                <List.Item>Investor Relations</List.Item>
                <List.Item>Newsroom</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              CAREER CENTER
              <hr/>
              <List>
                <List.Item>Working at Starbucks</List.Item>
                <List.Item>College Plan</List.Item>
                <List.Item>Current Partners</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              FOR BUSINESS
              <hr/>
              <List>
                <List.Item>Office Coffee</List.Item>
                <List.Item>Starbucks Coffee International</List.Item>
                <List.Item>Foodservice</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              ONLINE COMMUNITY
              <hr/>
              <List>
                <List.Item>Twitter</List.Item>
                <List.Item>Facebook</List.Item>
                <List.Item>Instagram</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              QUICK LINKS
              <hr/>
              <List>
                <List.Item>My Account</List.Item>
                <List.Item>Store Locator</List.Item>
                <List.Item>Nutrition Info</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Downmenu extends React.Component {
  render() {
    return (
        <Menu borderless className="downmenu">
          <Container>
            <Menu.Item fitted><Flag name='us'/></Menu.Item>
            <Menu.Item fitted>Change Region</Menu.Item>
            <Menu.Item> | </Menu.Item>
            <Menu.Item>English</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class StarBucksReact extends React.Component {

  render() {
    return (
        <div>
          <Header/>
          <TopMenu/>
          <MiddleMenu/>
          <StarbucksImage/>
          <FooterMenu/>
          <Downmenu/>
        </div>
    );
  }
}

ReactDOM.render(<StarBucksReact/>, document.getElementById('root'));