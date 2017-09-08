import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      width: 250
    }
  } // constructor

  toggle = () => {
    this.setState((prevStat, props) => {
      return {
        open: !prevStat.open
      } // return
    })  // setState
  } // toggle callback

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />

        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'salmon'
            }}>
            LoginContainer
          </div>
          <Divider/>
          <Link
            to={'/'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText={'Play'}
            />
          </Link>
          <Link
            to={'/profile'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText={'Profile'}
            />
          </Link>
        </Drawer>

      </div>

    ) // retrun
  } // render
} // class

export default NavDrawer
