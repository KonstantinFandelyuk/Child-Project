import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import UserCabinetStore from '../../../store/UserCabinetStore';
const shortid = require('shortid');

export const UserCompany = observer(() => {
  const { showMeMyPlace, myCatalogList } = UserCabinetStore;

  useEffect(() => {
    showMeMyPlace();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>UserCompany</h1>
        <div>
          {myCatalogList.map((item) => (
            <div key={shortid.generate()}>{item.companyName}</div>
          ))}
        </div>
      </div>
    </div>
  );
});
