import React, { Component } from 'react';
import logo from './mitch.png';


class Summary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-8">
            <p>Banjo fam pork belly VHS, everyday carry man bun kombucha. Pok pok artisan deep v, dreamcatcher try-hard messenger bag man braid. Iceland fam everyday carry glossier. Microdosing pour-over live-edge, pickled twee tumeric gochujang single-origin coffee activated charcoal shoreditch kickstarter. Green juice actually venmo, artisan 90s tbh iPhone gastropub vexillologist lomo. Four dollar toast crucifix helvetica swag gentrify la croix. 8-bit fanny pack bicycle rights meditation PBR&B.
            </p>
            <p>
            Flexitarian truffaut umami af snackwave. Kogi lo-fi distillery, tofu la croix brunch hammock. Authentic direct trade bushwick organic vegan pop-up, ennui gluten-free pug. Kogi hell of raclette wayfarers bicycle rights. Vape keytar pok pok occupy, disrupt subway tile twee tofu retro bespoke la croix small batch snackwave. Keytar raw denim celiac jean shorts +1 you probably havent heard of them. Listicle leggings squid, readymade freegan keffiyeh cardigan.
            </p>
          </div>
          </div>
      </div>
    );
  }
}

export default Summary;
