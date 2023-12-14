import logo from '../../logo.svg';
import '../../App.css';
import React from 'react';
import Table from 'react-bootstrap/Table';

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: ''
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/haha150/deals/main/deals.txt")
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            deals: result
          });
        }
      )
  }

  render() {
    const { deals } = this.state;

    if (!deals) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>No deals available</h1>
          </header>
        </div>
      );
    }

    const dealLines = deals.split('\n');

    const tableRows = dealLines.map((line, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{line}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1>Deals</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default Deals;