import React from 'react';

const Index = (props) => {
  const {user} = props;
  const {avatar} = user;
  return ( 
    <>
      <img src={avatar} alt="avatar" />
       <p>Desde Perfil Principal</p> 
    </>
  );
}

export default Index;
