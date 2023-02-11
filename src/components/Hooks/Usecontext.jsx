import React, {useContext} from 'react';
import {Mydata} from '../../App';
import {useHistory} from 'react-router-dom';

const Myuseontext = () => {
  const context = useContext(Mydata);
  const History = useHistory();
  return(
    <>
      <h1>{context}</h1>
      <button className="btn btn-primary" onClick={() => History.goBack()}>Go Back</button>
    </>
  )
}
export default Myuseontext;