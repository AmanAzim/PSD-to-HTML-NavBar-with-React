import React, {Component} from 'react';
import './NavBarItems.css';

class NavBarItems extends Component {

    state={
        navItems:[
            {name:'Home'},
            {name:'About'},
            {name:'Ingredients'},
            {name:'Menu'},
            {name:'Reviews'},
            {name:'Reservations'}
        ],
        fixCssClasses:['nav-item', 'nav-link', 'my-nav-itm', 'smooth-menu']
    }
    render() {
        //let items=
        return (
          <React.Fragment>
              {this.state.navItems.map((item, index)=>{
                        return <a className={this.state.fixCssClasses.join(' ')} key={index}>{item.name}</a>
              })}
          </React.Fragment>
        );
    }
}
export default NavBarItems;
