import React from 'react';
import Web3 from 'web3';

class AccountBalance extends React.Component {

  setState = this.setState.bind(this)

  componentWillMount() {
    this.setState({ balance: 0 });
  }

  componentDidMount() {
    const web3 = new Web3('http://localhost:22001');

    setInterval(function (setState, web3) {
      web3.eth.getCoinbase((err, coinbase) => {
        console.log(coinbase);
        web3.eth.getBalance(coinbase).then(balance => {
          setState({balance: balance});
        });
      });
    }, 1000, this.setState, web3);
  }

  render() {
    return (
      <div>
        <p>Coinbase Balance</p>
        <h1 className="SwagColor">{this.state.balance/1000000000000000000}</h1>
      </div>
    )
  }
}

export default AccountBalance;
