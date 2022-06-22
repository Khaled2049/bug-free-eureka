import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import MyDropdown from '../MyDropdown';
import cryptoApi from '../../apis/cryptoApi';

class Alerts extends React.Component {
  state = {
    name: '',
    email: '',
    options: ['BTC', 'ETH', 'ADA'],
    selected: 'BTC',
    stats: {},
  };

  componentDidMount() {
    this.getIntradayTimeSeries();
  }

  onSubmit = () => {
    console.log('button pressed');
  };

  setSelected = (choice) => {
    console.log(choice);
    this.setState({ selected: choice });
    this.getIntradayTimeSeries();
  };

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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <h4>Select you favourite coin</h4>
          <MyDropdown
            onSelectedChange={this.setSelected}
            selected={this.state.selected}
            options={this.state.options}
          />
          <Button variant="primary" className="my-4" type="submit">
            Send Email
          </Button>
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

export default Alerts;
