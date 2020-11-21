import React from 'react'
import './App.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Charts/Chart';
import {fetchData} from './api'
import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country : '',
    
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData , country:country});
  }
 

  render() {
    const { data, country } = this.state;

    return (
      <div className='containerApp'>
        <img className='image' alt="COVID-19" src={coronaImage}/>
       <Cards props={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App