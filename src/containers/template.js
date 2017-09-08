import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import RaisedButton from 'material-ui/RaisedButton'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/template'


injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <Header>
            TicTacTuring
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    ) // return
  } // render
} // class template

export default Template
