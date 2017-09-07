import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'



class NavDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
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
        <FloatingActionButton>
          <Menu
            onTouchTap={this.toggle}
          />
        </FloatingActionButton>
        <Drawer
          open={this.state.open}
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
          <MenuItem
            primaryText={'Play'}
          />
          <MenuItem
            primaryText={'Profile'}
          />
        </Drawer>

      </div>

    ) // retrun
  } // render
} // class

export default NavDrawer
