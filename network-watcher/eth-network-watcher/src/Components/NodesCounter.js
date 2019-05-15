import React from 'react';
import Web3 from 'web3';
import { Admin } from './../../node_modules/web3-eth-admin';

class BlockNumber extends React.Component {

  setState = this.setState.bind(this)

  componentWillMount() {
    this.setState({ blockNumber: 0 });
  }

  componentDidMount() {
    const admin = new Admin('http://localhost:22001');

    setInterval(function (setState, admin) {
      admin.getPeers()
        .then(peers => {
          setState({ peersSize: peers.length+1 })
        }
        );
    }, 1000, this.setState, admin);
  }

  render() {
    return (
      <div>
        <p>Nodes in cluster</p>
        <h1 className="SwagColor">{this.state.peersSize}</h1>
      </div>
    )
  }
}

export default BlockNumber;
