import React from 'react';
import Web3 from 'web3';

class BlockNumber extends React.Component {

  setState = this.setState.bind(this)

  componentWillMount() {
    this.setState({ blockNumber: 0 });
  }

  componentDidMount() {
    const web3 = new Web3('http://localhost:22000');

    setInterval(function (setState, web3) {
      web3.eth.getBlockNumber()
        .then(number => setState({ blockNumber: number }));
    }, 1000, this.setState, web3);
  }

  render() {
    return (
      <div>
        <span>Blocks</span>
        <h1 className="SwagColor">{this.state.blockNumber}</h1>
      </div>
    )
  }
}

export default BlockNumber;
