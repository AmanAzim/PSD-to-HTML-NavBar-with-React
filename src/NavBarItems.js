import React, {Component} from 'react';
import './NavBarItems.css';

class NavBarItems extends Component {

    state={
        navItems:[
            {name:'Home', tag:'#home'},
            {name:'About', tag:'#about'},
            {name:'Ingredients', tag:'#ingredients'},
            {name:'Menu', tag:'#food-menu'},
            {name:'Reviews', tag:'#reviews'},
            {name:'Reservations', tag:'#reservations'}
        ],
        fixCssClasses:['nav-item', 'nav-link', 'my-nav-itm', 'smooth-menu']
    }
    render() {
        //let items=
        return (
          <React.Fragment>
              {this.state.navItems.map((item, index)=>{
                        return <a className={this.state.fixCssClasses.join(' ')} key={index} href={item.tag}>{item.name}</a>
              })}
          </React.Fragment>
        );
    }
}
export default NavBarItems;
