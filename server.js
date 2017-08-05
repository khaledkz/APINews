const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');
const exphbs = require('express-handlebars');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(formidable());

// API KEYS START

//international news
const aljazeraAPIUp = "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const aljazeraAPIUpTwo = "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const associatedPressAPI = "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const associatedPressAPITwo = "https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BloomingAPI = "https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BloomingAPITwo = "https://newsapi.org/v1/articles?source=bloomberg&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//uk news
const BbcNewsAPI = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BbcNewsAPITwo = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const dailyMailAPI = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const dailyMailAPITwo = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FinancialTimesAPI = "https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FinancialTimesAPITwo = "https://newsapi.org/v1/articles?source=financial-times&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const IndependentAPI = "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const IndependentAPITwo = "https://newsapi.org/v1/articles?source=independent&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const MetroAPI = "https://newsapi.org/v1/articles?source=metro&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const MetroAPITwo = "https://newsapi.org/v1/articles?source=metro&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TelegraphAPI = "https://newsapi.org/v1/articles?source=the-telegraph&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TelegraphAPITwo = "https://newsapi.org/v1/articles?source=the-telegraph&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";

//USA news
const AbcNewsAPI = "https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const AbcNewsAPITwo = "https://newsapi.org/v1/articles?source=abc-news-au&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnnAPI = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnnAPITwo = "https://newsapi.org/v1/articles?source=cnn&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const usaToday = "https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Economic news
const businessInsiderAPI = "https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderAPITwo = "https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderUKAPI = "https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderUKAPITwo = "https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BuzFeexAPI = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BuzFeexAPITwo = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnbcAPI = "https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const gruenderszen = "https://newsapi.org/v1/articles?source=gruenderszene&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874"
const gruenderszenTwo = "https://newsapi.org/v1/articles?source=gruenderszene&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874"
    //sport news
const BbcSportAPI = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BbcSportAPITwo = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnAPI = "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnTwoAPI = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnThreeAPI = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FoxSportAPI = "https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FoxSportAPITwo = "https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FootballItliaAPI = "https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FootballItliaAPITwo = "https://newsapi.org/v1/articles?source=football-italia&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Art news
const EntertianmentWeekAPI = "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Tecno
const ArsTecAPI = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const ArsTecAPITwo = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const recodeAPI = "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const EngandetAPI = "https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const EngandetAPITwo = "https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const hackerNewsAPI = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const hackerNewsTwoAPI = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechChorch = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechChorchTwo = " https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechRadarAPI = "https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechRadarTwoAPI = "https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TheNextWebAPI = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
// germany
const buildAPI = "https://newsapi.org/v1/articles?source=bild&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const buildAPITwo = "https://newsapi.org/v1/articles?source=bild&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Natural
const nationalGraphicAPI = "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874"
    //Education
const newscience = "https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
// API KEYS END


// International News Functions ===========================================
const loadReposAlzaera = () => {
    var url = aljazeraAPIUp;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAlzaera);
    oReq.open('GET', url);
    oReq.send();
}

const loadReposAlzaeraPlus = () => {
    var url = aljazeraAPIUpTwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAlzaeraPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposAssociatePress = () => {
    var url = associatedPressAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAssociatePress);
    oReq.open('GET', url);
    oReq.send();
}

const loadReposAssociatePressPlus = () => {
    var url = associatedPressAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAssociatePressPlus);
    oReq.open('GET', url);
    oReq.send();
}

const loadReposBlooming = () => {
    var url = BloomingAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadReposBlooming);
    oReq.open('GET', url);
    oReq.send();
}

// const loadReposBloomingPlus = () => {
//         var url = BloomingAPITwo;
//         var oReq = new XMLHttpRequest();
//         oReq.addEventListener('load', onLoadBloomingPlus);
//         oReq.open('GET', url);
//         oReq.send();
//     }
//---------End InterNational API's function=============================

// UK News Functions Start ===================================

const loadReposBbcNews = () => {
    var url = BbcNewsAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBbcNews);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBbcNewsPlus = () => {
    var url = BbcNewsAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBbcNewsPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposDmn = () => {
    var url = dailyMailAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadDmn);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposDmnPlus = () => {
    var url = dailyMailAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadDmnPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFinancialTimes = () => {
    var url = FinancialTimesAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadFinancialTimes);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFinancialTimesPlus = () => {
    var url = FinancialTimesAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadFinancialTimesPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposIndependent = () => {
    var url = IndependentAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadIndependent);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposIndependentPlus = () => {
    var url = IndependentAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadIndependentPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposMetro = () => {
    var url = MetroAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadMetro);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposMetroPlus = () => {
    var url = MetroAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadMetroPlus);
    oReq.open('GET', url);
    oReq.send();
}

const loadReposTelegraph = () => {
    var url = TelegraphAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadTelegraph);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposTelegraphPlus = () => {
        var url = TelegraphAPITwo;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadTelegraphPlus);
        oReq.open('GET', url);
        oReq.send();
    }
    // UK News Functions End =======================================

// USA News Functions Start =======================================
const loadReposUsaToday = () => {
    var url = usaToday;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadUsaToday);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposAbcNews = () => {
    var url = AbcNewsAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAbcNews);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposAbcNewsPlus = () => {
    var url = AbcNewsAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadAbcNewsPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposcnn = () => {
    var url = cnnAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadcnn);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposcnnPlus = () => {
        var url = cnnAPITwo;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadcnnPlus);
        oReq.open('GET', url);
        oReq.send();
    }
    // USA News Functions End =======================================





// Eco News Functions Start =======================================
const loadReposBusinessInsider = () => {
    var url = businessInsiderAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBusinessInsider);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBusinessInsiderPlus = () => {
    var url = businessInsiderAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBusinessInsiderPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBusinessInsiderUK = () => {
    var url = businessInsiderUKAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBusinessInsiderUK);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBusinessInsiderUKPlus = () => {
    var url = businessInsiderUKAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBusinessInsiderUKPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBuzFeex = () => {
    var url = BuzFeexAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBuzFeex);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBuzFeexPlus = () => {
    var url = BuzFeexAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBuzFeexPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposCnbc = () => {
    var url = cnbcAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadCnbc);
    oReq.open('GET', url);
    oReq.send();
}
const loadRepoGruenderszen = () => {
    var url = gruenderszen;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadGruenderszen);
    oReq.open('GET', url);
    oReq.send();
}
const loadRepoGruenderszenPlus = () => {
        var url = gruenderszenTwo;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadGruenderszenPlus);
        oReq.open('GET', url);
        oReq.send();
    }
    // Eco News Functions End =======================================

// Sport News Functions Start =======================================
const loadReposBbcSport = () => {
    var url = BbcSportAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBbcSport);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposBbcSportPlus = () => {
    var url = BbcSportAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadBbcSportPlus);
    oReq.open('GET', url);
    oReq.send();
}

const loadReposEspn = () => {
    var url = espnAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadEspn);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposEspnPlus = () => {
    var url = espnTwoAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadEspnPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposEspnPlusTwo = () => {
    var url = espnThreeAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadEspnPlusTwo);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFoxSport = () => {
    var url = FoxSportAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadFoxSport);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFoxSportPlus = () => {
    var url = FoxSportAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadFoxSportPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFootballItlia = () => {
    var url = FootballItliaAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadFootballItlia);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposFootballItliaPlus = () => {
        var url = FootballItliaAPITwoconst;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadFootballItliaPlus);
        oReq.open('GET', url);
        oReq.send();
    }
    // Sport News Functions End =======================================

//Tecno News Functions start =======================================
const loadReposArsTec = () => {
    var url = ArsTecAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadArsTec);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposArsTecPlus = () => {
    var url = ArsTecAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadArsTecPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposRecode = () => {
    var url = recodeAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadRecode);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposEngande = () => {
    var url = EngandetAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadEngande);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposEngandetPlus = () => {
    var url = EngandetAPITwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadEngandetPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposHackerNews = () => {
    var url = hackerNewsAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadHackerNews);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposHackerNewsPlus = () => {
    var url = hackerNewsTwoAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadHackerNewsPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposTechChorch = () => {
    var url = TechChorch;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadTechChorch);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposTechChorchPlus = () => {
    var url = TechChorchTwo;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadTechChorchPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposTechRadar = () => {
    var url = TechRadarAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadTechRadar);
    oReq.open('GET', url);
    oReq.send();
}
const loadReposTechRadarPlus = () => {
    var url = TechRadarTwoAPI;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoadTechRadarPlus);
    oReq.open('GET', url);
    oReq.send();
}
const loadRepoTheNextWeb = () => {
        var url = TheNextWebAPI;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadTheNextWeb);
        oReq.open('GET', url);
        oReq.send();
    }
    //Tecno News Functions End =======================================



//Art News Functions start =======================================
const loadReposEntertianmentWeekAPI = () => {
        var url = EntertianmentWeekAPI;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadEntertianmentWeekAPI);
        oReq.open('GET', url);
        oReq.send();
    }
    //Art News Functions End =======================================

//Naturel News Functions start =======================================
const loadReposNationalGraphic = () => {
        var url = nationalGraphicAPI;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadNationalGraphic);
        oReq.open('GET', url);
        oReq.send();
    }
    // Naturel News Functions End =======================================

//Education News Functions start =======================================
const loadReposNewscience = () => {
        var url = newscience;
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', onLoadNewscience);
        oReq.open('GET', url);
        oReq.send();
    }
    //Education News Functions End =======================================

// Start call InterNational News Functions
loadReposAlzaera();
//loadReposAlzaeraPlus();
loadReposAssociatePress();
//loadReposAssociatePressPlus();
loadReposBlooming();
//loadReposBloomingPlus();
//End call InterNational News Functions

// Start call UK News Functions

loadReposBbcNews();
loadReposDmn();
loadReposFinancialTimes();
loadReposIndependent();
loadReposMetro();
loadReposTelegraph();
// UK Functions =========================== Start Onload ============
let myArrayUkNews = [];

function onLoadBbcNews() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}

function onLoadDmn() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}

function onLoadFinancialTimes() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}

function onLoadIndependent() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}

function onLoadMetro() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}

function onLoadTelegraph() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUkNews.push(repo);
    });
}
// UK Functions =========================== End Onload ============


// InterNational Functions =========================== Start Onload ============
let myArrInterNationalNews = [];

function onLoadAlzaera() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNews.push(repo);
    });
}

function onLoadAlzaeraPlus() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNews.push(repo);
    });
}

function onLoadAssociatePress() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    //console.log(respoArray);
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNews.push(repo);
    });
}

function onLoadAssociatePressPlus() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNews.push(repo);
    });
}

function onLoadReposBlooming() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNews.push(repo);
    });
}

// function onLoadBloomingPlus() {
//     const text = this.responseText;
//     const reposInfo = JSON.parse(text);
//     const respoArray = reposInfo.articles;
//     // console.log(reposInfo.articles);
//     // console.log(reposInfo.response.docs[0]); ${repo.title}
//     respoArray.forEach(function(repo) {
//         myArrInterNationalNews.push(repo);
//     });
// }
// console.log(myArrInterNationalNews);
// loadReposDmn();
// let myArr = [];
// function onLoadDmn() {
//     const text = this.responseText;
//     const reposInfo = JSON.parse(text);
//     const respoArray = reposInfo.articles;
//     // console.log(reposInfo.articles);
//     // console.log(reposInfo.response.docs[0]); ${repo.title}
//     respoArray.forEach(function(repo) {
//         myArr.push(repo);
//     });
// }
// const loadReposTele = () => {
//     var url = aljazeraAPIUp;
//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener('load', onLoadTele);
//     oReq.open('GET', url);
//     oReq.send();
// }
//
// loadReposTele();
// let myArrTwo = [];
//
// function onLoadTele() {
//     const text = this.responseText;
//     const reposInfo = JSON.parse(text);
//     const respoArray = reposInfo.articles;
//     respoArray.forEach(function(repo) {
//         myArrTwo.push(repo);
//     });
//     console.log(myArrTwo)
//
// }
// InterNational Functions =========================== End Onload ============

// USA Functions =========================== End Onload ============
loadReposAbcNews();
loadReposcnn();
loadReposUsaToday();
let usaNewsArray = [];

function onLoadUsaToday() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        usaNewsArray.push(repo);
    });
}

function onLoadcnn() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        usaNewsArray.push(repo);
    });
}

function onLoadAbcNews() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        usaNewsArray.push(repo);
    });
}

// USA Functions =========================== End Onload ============

// Economic Functions =========================== Start Onload ============


loadReposBusinessInsider();
loadReposBusinessInsiderUK();
loadReposBuzFeex();
loadReposCnbc();
loadRepoGruenderszen();

let economicArra = [];

function onLoadBusinessInsider() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        economicArra.push(repo);
    });
}

function onLoadBusinessInsiderUK() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        economicArra.push(repo);
    });
}

function onLoadBuzFeex() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        economicArra.push(repo);
    });
}

function onLoadCnbc() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        economicArra.push(repo);
    });
}

function onLoadGruenderszen() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        economicArra.push(repo);
    });
}
// Economic Functions =========================== End Onload ============

// Sport Functions =========================== Start Onload ============

loadReposBbcSport();
loadReposEspn();
loadReposFoxSport();
loadReposFootballItlia();
let sportArray = [];

function onLoadBbcSport() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        sportArray.push(repo);
    });
}

function onLoadEspn() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        sportArray.push(repo);
    });
}

function onLoadFoxSport() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        sportArray.push(repo);
    });
}

function onLoadFootballItlia() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        sportArray.push(repo);
    });
}
// Sport Functions =========================== End Onload ============
// Tecno Functions =========================== start Onload ============
loadReposArsTec();
loadReposRecode();
loadReposEngande();
loadReposHackerNews();
loadReposTechChorch();
loadReposTechRadar();
loadRepoTheNextWeb();

let tecnoArray = [];

function onLoadArsTec() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadRecode() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadEngande() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadHackerNews() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadTechChorch() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadTechChorch() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadTechRadar() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}

function onLoadTheNextWeb() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        tecnoArray.push(repo);
    });
}
// Tecno Functions =========================== End Onload ============

// Art Functions =========================== start Onload ============
loadReposEntertianmentWeekAPI();
let artArr = [];

function onLoadEntertianmentWeekAPI() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        artArr.push(repo);
    });
}
// Art Functions =========================== End Onload ============

// Health Functions =========================== start Onload ============
loadReposNationalGraphic();
let naturalNewsArray = [];

function onLoadNationalGraphic() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {

        naturalNewsArray.push(repo);

    });

}
// Health Functions =========================== End Onload ============

// Education Functions =========================== start Onload ============
loadReposNewscience();
let educationNewsArr = [];

function onLoadNewscience() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        educationNewsArr.push(repo);
    });
}
// Education Functions =========================== End Onload ============




app.get('/', function(req, res) {
    res.render('index', {
        titleh: "helloppl",
        getArrTwo: myArrInterNationalNews,
        getArrayUkNews: myArrayUkNews,
        getArrayUsaNews: usaNewsArray,
        getEconoArray: economicArra,
        getSportArray: sportArray,
        getTecno: tecnoArray,
        getArt: artArr,
        getNaturalNews: naturalNewsArray,
        getEducArray: educationNewsArr
    })
})



app.listen(3000);