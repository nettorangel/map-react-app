import React, { useState } from "react";
import { 
  GridLayout,
  GridLayoutContent, 
  Nav, 
  AsideLeft, 
  AsideRight, 
  AsideLeftSearch, 
  AsideRightSearch, 
  CardWrapper } from "./styles";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import Properties from "./components/Properties";
import Table from "./components/Table";
import Data from '../../assets/data/data';
import {ReactComponent as Search} from '../../assets/images/search.svg'
const MapApp = () => {
  
  const navStyle = {
    position: "absolute",
    top: 36,
    left: 0,
    padding: "10px"
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [revenueValue, setRevenueValue] = useState();
  
  const [viewport, setViewport] = useState({
    width: 600,
    height: 500,
    latitude: -23.58,
    longitude: -46.66,
    zoom: 11
  });

  const [properties, setProperties] = useState(Data.stores)
  
  const columns = [
    {
      Header: 'Loja',
      accessor: 'name',
    },
    {
      Header: 'Faturamento',
      accessor: 'revenue',
    },

  ]

  function searchByName(_searchTerm = '') {

    setSearchTerm(_searchTerm.target.value);

    const stores = Data.stores;  

    let cleanSearchTerm = _searchTerm.target.value
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    try {
      if(cleanSearchTerm !== "") {
        const resultSearch = stores.filter( store => {
          return store.name     
              .trim()
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(cleanSearchTerm)
        });  
        setProperties(resultSearch);
      } else {
        setProperties(stores);
      }


    } catch (error) {
      console.error('Error ao fazer pesquisa', error);
    }
    
  }
  
  return ( 
    <GridLayout className="MapApp">
        <Nav>
          <h2>
            Desempenho das Lojas
          </h2>
        </Nav>
        <GridLayoutContent>          
          
          <AsideLeftSearch>
            <CardWrapper className="search">
              <input 
                type="text" 
                value={ searchTerm } 
                onChange={e => searchByName(e)}
                autoFocus={true}
                placeholder='Pesquisa'
              />
              <Search/>  
            </CardWrapper>
          </AsideLeftSearch>
          
          <AsideRightSearch>
            <h3>Faturamento mínimo esperado</h3> 
            <CardWrapper className="revenues">
                <input 
                  id="revenue"
                  className="left-align"
                  type="text" 
                  value={ revenueValue || "" } 
                  onChange={ e => setRevenueValue( e.target.value) }
                  />    
            </CardWrapper>
          </AsideRightSearch>

          <AsideLeft>
            <Table columns={columns} data={properties} revenueValue={revenueValue}/>
          </AsideLeft>

          <AsideRight>
            <CardWrapper>
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={ _viewport => setViewport( _viewport )}
              >
                <Properties properties={properties} revenueValue={revenueValue}/>
                <div className="nav" style={navStyle}>
                  <NavigationControl />
                </div>
              </ReactMapGL>
            </CardWrapper>
          </AsideRight>

        </GridLayoutContent>
    </GridLayout>
    )
}

export default MapApp;
