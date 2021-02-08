import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import '../components/pages/ProductsDetail.css';

const Icon = (props) => {
  return (
    <div className='icons-container'>
      <div className='icons'>
        <div>
          <LocalOfferIcon
            style={{
              border: '1px solid black',
              borderRadius: '50%',
              fontSize: '50px',
              padding: '6px',
            }}
          />
        </div>
        <div>
          <p>Prix</p>
          <p>{props.data.price} €</p>
        </div>
      </div>
      <div className='icons'>
        <div>
          <TelegramIcon
            style={{
              border: '1px solid gray',
              borderRadius: '50%',
              fontSize: '50px',
              padding: '6px',
            }}
          />
        </div>
        <div>
          <p>Déploiment</p>
          <p>{props.data.position}</p>
        </div>
      </div>
      <div className='icons'>
        <div>
          <BatteryChargingFullIcon
            style={{
              border: '1px solid black',
              borderRadius: '50%',
              fontSize: '50px',
              padding: '6px',
            }}
          />
        </div>
        <div>
          <p>Autonomie</p>
          <p>{props.data.autonomy}</p>
        </div>
      </div>
      <div className='icons'>
        <div>
          <ListAltIcon
            style={{
              border: '1px solid black',
              borderRadius: '50%',
              fontSize: '50px',
              padding: '6px',
            }}
          />
        </div>
        <div>
          <p>Homologation</p>
          <p>{props.data.deploy}</p>
        </div>
      </div>
    </div>
  );
};

export default Icon;
