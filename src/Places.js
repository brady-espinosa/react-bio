import React, { Component } from 'react';
import logo from './mitch.png';


class Places extends Component {
  render() {
    let spots = this.props.spots.map(function(spot){
      return(
        <li key={spot.name}>{spot.name}</li>
      )
    })
    return (
      <div>
          <div className="col-sm-6 blarg">
            <h2>My Favorite Places to LARP!</h2>
            <p>
            Vexillologist deep v PBR&B fixie narwhal. Yuccie art party kale chips polaroid cold-pressed, kickstarter williamsburg. Lo-fi tote bag craft beer, sustainable shoreditch tacos iPhone pork belly hexagon roof party subway tile swag echo park pitchfork. Lyft cray pinterest raclette 8-bit salvia lumbersexual typewriter. Food truck blog tattooed deep v lumbersexual. Williamsburg 8-bit before they sold out, twee pinterest lo-fi austin cred. Butcher squid tofu raclette bushwick.
            </p>
            <p>
            Craft beer ethical ugh marfa migas viral. Locavore tousled edison bulb slow-carb irony banjo cornhole mustache pitchfork fingerstache roof party pop-up, jianbing hashtag. Next level beard waistcoat austin small batch hot chicken. Dreamcatcher kogi taxidermy, man bun chillwave post-ironic edison bulb man braid slow-carb bushwick unicorn four dollar toast cray. Food truck drinking vinegar vice lumbersexual, 90s affogato tumeric. Salvia bushwick irony +1. Echo park sustainable locavore chia.
            </p>
            <ul>
              {spots}
            </ul>
          </div>
      </div>
    );
  }
}

export default Places;
