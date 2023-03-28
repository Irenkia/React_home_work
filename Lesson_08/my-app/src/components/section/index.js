import React, { Component } from 'react';
import { data } from '../request';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default class Section extends Component {
    state = {
        allCurrency: null,
      };
      componentDidMount() {
        data(
          this.props.url
        ).then((data1) => {
          this.setState(({ allCurrency }) => {
            return{ // возвращает новый объект
                allCurrency: data1
            }
          });
        });
      }
  render() {
        //console.log(this.state.allCurrency);
        const {allCurrency}=this.state;
        console.log(allCurrency);
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>Currency Name</th>
                    <th>Price</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(allCurrency) ? allCurrency.map((currency,index)=>{return(
                <tr key={index * 5 + 'b'}>
                <td>{currency.txt}</td>
                <td>{currency.rate? currency.rate.toFixed(2): currency.value}</td>
                <td>{currency.cc}</td>
            </tr>
                )
                }) :  <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>}
            </tbody>
        </table>
      </div>
    );
  }
}
