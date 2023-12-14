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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default Deals;