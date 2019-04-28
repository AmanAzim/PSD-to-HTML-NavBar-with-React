import React, {Component} from 'react';
import './NavBarItems.css';

class NavBarItems extends Component {

    state={
        navItems:[
            {name:'Home', tag:'#home', isActive:false},
            {name:'About', tag:'#about', isActive:false},
            {name:'Ingredients', tag:'#ingredients', isActive:false},
            {name:'Menu', tag:'#food-menu', isActive:false},
            {name:'Reviews', tag:'#reviews', isActive:false},
            {name:'Reservations', tag:'#reservations', isActive:false}
        ],
        fixCssClasses:['nav-item', 'nav-link', 'my-nav-itm', 'smooth-menu']
    };

    addActiveHandler=(index)=>{

        let tempNavItm=[...this.state.navItems];

        for(let i=0; i<tempNavItm.length; i++){

            tempNavItm[i].isActive=false;

            if(i==index){
                tempNavItm[i].isActive=true;
            }
            console.log(tempNavItm[i]);
        }

        this.setState({navItems:[...tempNavItm]})

    }

    render() {

        return (
          <React.Fragment>
              {this.state.navItems.map((item, index)=>{
                        return <a className={'nav-item nav-link my-nav-itm smooth-menu '+(item.isActive? 'active': '')}
                                  key={index}
                                  href={item.tag} onClick={()=>this.addActiveHandler(index)}>{item.name}</a>
              })}
          </React.Fragment>
        );
    }
}
export default NavBarItems;
