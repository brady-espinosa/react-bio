import React, { Component } from 'react';
import larp from './larp.png';


class Pastime extends Component {
  render() {
    return (
      <div>

          <div className="col-sm-6 rawr">
            <h2>Living to LARP</h2>
          <img src={larp} className="larp" alt="larp" />
          <p className='pastP'>
            Vexillologist deep v PBR&B fixie narwhal. Yuccie art party kale chips polaroid cold-pressed, kickstarter williamsburg. Lo-fi tote bag craft beer, sustainable shoreditch tacos iPhone pork belly hexagon roof party subway tile swag echo park pitchfork. Lyft cray pinterest raclette 8-bit salvia lumbersexual typewriter. Food truck blog tattooed deep v lumbersexual. Williamsburg 8-bit before they sold out, twee pinterest lo-fi austin cred. Butcher squid tofu raclette bushwick.
          </p>
          </div>
      </div>
    );
  }
}

export default Pastime;
