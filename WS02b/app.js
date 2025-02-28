const axios = require('axios');

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';

async function getCoinData() {
    try {
        const response = await axios.get(url);
        console.log('Bitcoin Nimi:', response.data.name);
    } catch (error) {
        console.error('Virhe API-kutsussa:', error);
    }
}
getCoinData();


const fs = require('node:fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


const content = 'writeFile harjoittelu on mukavaa!';

fs.writeFile('./output.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
  }
});


const appendFileTeksti = '\nappendFile teksti lisätty!';

fs.appendFile('output.txt', appendFileTeksti, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Tekstin lisääminen output.txt -tiedostoon onnistui!');
  }
});

fs.unlink('temp.txt', (err) => {
    if (err) {
      console.error('Virhe poistettaessa tiedostoa:', err);
      return;
    }
    console.log('temp.txt tiedosto poistettu onnistuneesti.');
  });


  //fs.mkdir('./testDir', (err) => {
   // if (err) {
    //  console.error(err);
    //} else {
    //  console.log('Directory luotu onnistuneesti!');
    //}
  //});

  fs.rmdir('./testDir', (err) => {
     if (err) {
       console.error(err);
     } else {
       console.log('Directory poistettu onnistuneesti!');
     }
   });

   fs.watch('./watch.txt', (eventType, filename) => {
    if (filename) {
      console.log(`${filename} tiedostoon on tehty ${eventType} tapahtuma.`);
    } else {
      console.log('Tiedosto ei ole määritelty.');
    }
  });