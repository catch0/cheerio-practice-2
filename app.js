const scraper =  require('./scraper');
const url = "https://imgur.com/gallery/O0KJr";
const fs = require('fs');
const path = "text.txt"

scraper.imgScrape(url, (data)=>{
  console.log('data from scraper received');
  console.log(data);
})


scraper.imgScrape2(url)
.then((data)=>{
  console.log('data from scrapper received');
  fs.writeFile(path, JSON.stringify(data), (error)=>{
    if(error){
      console.log(error);
    }
    console.log("successfully wrote to" + path);
  })
})
.catch((error)=>{
  console.log('error scraping data')
})
