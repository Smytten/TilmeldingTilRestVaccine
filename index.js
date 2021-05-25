const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
       headless: true
     });

  const page = await browser.newPage();
  //Go to Webpage
  await page.goto('https://www.auh.dk/om-auh/tilbud-om-covid-vaccination-ved-brug-af-restvacciner');

  //Find the name input by HTML ID and insert name
  await page.type('[placeholder="Skriv dit fulde navn"]',  'Alex Krogh Smythe');

  //Find the age input by HTML ID and insert age
  await page.type('[placeholder="Skriv hvor gammel du er (ikke dit fødselsår)"]',  '24');

  //Find email input by HTML ID and insert email adress
  await page.type('[placeholder="Skriv din Email, hvis du vil have en kvittering for din henvendelse"]',  'alex.aarhus@gmail.com');

  //Find number input by HTML ID and insert phone number
  await page.type('[name="__field_945261"]',  '22289695');

  //First place of vaccination -> Vaccination Aarhus NORD, Paludan-Müllers Vej 110, 8200 Aarhus N
  //Found by name
  await page.click('[value="Vaccination Aarhus NORD"]');
  await page.click('[name="submit"]');


  //Do it again
    //Go to Webpage
    await page.goto('https://www.auh.dk/om-auh/tilbud-om-covid-vaccination-ved-brug-af-restvacciner');

    //Find the name input by HTML ID and insert name
    await page.type('[placeholder="Skriv dit fulde navn"]',  'Alex Krogh Smythe');
  
    //Find the age input by HTML ID and insert age
    await page.type('[placeholder="Skriv hvor gammel du er (ikke dit fødselsår)"]',  '24');
  
    //Find email input by HTML ID and insert email adress
    await page.type('[placeholder="Skriv din Email, hvis du vil have en kvittering for din henvendelse"]',  'alex.aarhus@gmail.com');
  
    //Find number input by HTML ID and insert phone number
    await page.type('[name="__field_945261"]',  '22289695');
  
    //First place of vaccination -> Vaccination Aarhus NORD, Paludan-Müllers Vej 110, 8200 Aarhus N
    //Found by name
    await page.click('[value="Vaccination Aarhus Ø"]');
    await page.click('[name="submit"]');

  await browser.close();
})();
