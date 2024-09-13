import React from 'react';
import TwitterLogin from 'react-twitter-login';

export const LoginTwitter = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <div>
      <TwitterLogin
        authCallback={authHandler}
        consumerKey={'7WXloTrDMHRcJd2hl1ED82MKn'}
        consumerSecret={'dVk36tjHXfYEBzVGODxqtRQ0IJJ0QmrphpVwMOAywlVwWaOvQp'}
      />
    </div>
  );
};
