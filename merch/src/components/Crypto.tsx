import React from 'react';
import { Dropdown, Form, Table } from 'react-bootstrap';
import cryptoApi from '../api/cryptoApi';

type CryptoProps = {};

type CryptoState = {
  name: string;
  email: string;
  options: string[];
  selected: string;
  stats: IStats;
};

interface IStats {
  open: string;
  high: string;
  low: string;
  close: string;
}

class Crypto extends React.Component<CryptoProps, CryptoState> {
  state: CryptoState = {
    name: '',
    email: '',
    options: ['BTC', 'ETH', 'ADA'],
    selected: 'BTC',
    stats: { open: '', high: '', low: '', close: '' },
  };

  componentDidMount() {
    this.getIntradayTimeSeries();
  }

  onSubmit = () => {
    console.log('button pressed');
  };

  setSelected = (choice: string) => {
    this.setState({ selected: choice });
    this.getIntradayTimeSeries();
  };

  renderedOptions = this.state.options.map((option) => {
    return (
      <Dropdown.Item
        key={option}
        onClick={() => this.setSelected(option)}
        href="#/action-1"
      >
        {option}
      </Dropdown.Item>
    );
  });

  getIntradayTimeSeries = async () => {
    const { data } = await cryptoApi.get('/query', {
      params: {
        apikey: `${process.env.REACT_APP_ALPHAVANTAGE}`,
        function: 'CRYPTO_INTRADAY',
        symbol: this.state.selected,
        market: 'USD',
        interval: '5min',
      },
    });
    const timeSeries = data['Time Series Crypto (5min)'];
    const values = timeSeries[Object.keys(timeSeries)[0]];
    const open = values[Object.keys(values)[0]];
    const high = values[Object.keys(values)[1]];
    const low = values[Object.keys(values)[2]];
    const close = values[Object.keys(values)[3]];

    this.setState({ stats: { open, high, low, close } });

    // return data['Time Series Crypto (5min)'];
  };

  render() {
    return (
      <div>
        <Form className="d-flex flex-column justify-content-center m-5">
          <h4>Select you favourite coin</h4>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.state.selected}
            </Dropdown.Toggle>
            <Dropdown.Menu>{this.renderedOptions}</Dropdown.Menu>
          </Dropdown>
        </Form>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{this.state.selected}</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OPEN</td>
                <td>{this.state.stats.open}</td>
              </tr>
              <tr>
                <td>HIGH</td>
                <td>{this.state.stats.high}</td>
              </tr>
              <tr>
                <td>LOW</td>
                <td>{this.state.stats.low}</td>
              </tr>
              <tr>
                <td>CLOSE</td>
                <td>{this.state.stats.close}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Crypto;
