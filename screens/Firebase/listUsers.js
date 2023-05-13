const admin = require('firebase-admin');

const serviceAccount = require('./fir-auth-604dc-firebase-adminsdk-cwb9a-1b4419d9b4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-auth-604dc.firebaseio.com',
});

admin.auth().listUsers()
  .then((listUsersResult) => {
    listUsersResult.users.forEach((userRecord) => {
      console.log(`User ${userRecord.uid} has email ${userRecord.email} and phone number ${userRecord.phoneNumber}`);
    });
  })
  .catch((error) => {
    console.log('Error listing users:', error);
  });