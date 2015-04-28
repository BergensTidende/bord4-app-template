#Bord4 app template

**WHAT IS THIS?** A highly opinionated app template for full scale/page (Angular JS) newsroom data journalism projects at Bergens Tidende, Norway. Docs are in Norwegian, but feel free to have look at or use the code.

Design and styles/fonts are copyrighted Bergens Tidende, everything else you can use. Make sure you change Google analytics codes etc in the index.html before using it.

Highliy inspired by the great works of the [NPR Visuals Team](https://github.com/nprapps)


##Bruke app-templaten

For å opprette et nytt prosjekt, **bruk bord4-generatoren (yeoman)** som tar seg av dette automagisk.
Du får da et nytt repository.

Hvis du vil opprette et prosjekt UTEN generator, gjør følgende:

*  Klon dette repositoriet
*  Fjern alle git-referanser med `rm -rf .git` i mappen
*  Rediger `project.json` og legg inn rett prosjektnavn og servermappe.
*  Kjør `npm install` og `bower install` for å installere nødvendige saker og ting

##Konfigurasjon

Grunt-scriptene (automatiseringen) er avhengig av at du har satt en del environment variables på maskinen din (passord etc). Disse må du sette (og helst legge inn i din `~/.bash_profile` fil på Macen):

Yeoman-generatoren lager filen project.json med variabler som grunt-scriptene etc trenger. Her ligger info om prosjektets navn, server-folder og hva slags type app det er.

```

#settings for å deploye til PROD
export PROD_HOSTNAME=prod.domain.tld
export PROD_USERNAME=prod_server_ssh_username
export PROD_KEY_LOCATION=/Users/dittbrukernavn/.ssh/id_rsa
export PROD_KEY_PASS=dittnøkkelpassord_om_du_har
export PROD_BASE_PATH=/server/base/folder
export PROD_BASE_URL=http://www.bt.no/spesial/

#settings for å deploye til STAGE
export STAGE_HOSTNAME=prod.domain.tld
export STAGE_USERNAME=prod_server_ssh_username
export STAGE_KEY_LOCATION=/Users/dittbrukernavn/.ssh/id_rsa
export STAGE_KEY_PASS=dittnøkkelpassord_om_du_har
export STAGE_BASE_PATH=/server/base/folder
export STAGE_BASE_URL=http://staging.server.no/

#Andre variabler
CACHE_PURGE_URL=http://cache.purge.server

```

Du kan lagre teksten over i en fil som heter `appsettings.sh` som du legger i din brukermappe på Macen (IKKE i et repository). Så kan du kjøre:

`cat appsettings.sh >> .bash_profile`

Da har du alle settings tilgjengelig hver gang du bruker app-templaten. Husk å sjekke `.bash_profile` at alt er rett.


##Hvilke filer skal du jobbe i?

Du jobber i:

*  app/scripts/*
*  app/styles/*
*  app/views/*
*  index.html

##Tips og triks

###CSS-filer i bower-komponenter

Hvis du har css-filer i bower-componenter som du vil importere så må de renames til scss.
Det gjør du ved å kjøre: `grunt copy:cssAsScss`

Da kan du importere i din main.scss f.eks. slik
`@import 'leaflet/dist/leaflet';`


##Grunt-kommandoer

`grunt serve`
Kjør dev-server slik at du kan finne siten på http://127.0.0.1:9000 (har livereload)

`grunt build:stage`
Bygg en optimalisert versjon av siten i dist-mappen, tilpasset staging-server. Minimerer CSS, JS etc.

`grunt build:prod`
Bygg en optimalisert versjon av siten i dist-mappen, tilpasset produksjons-server

`grunt serve:dist`
Vis den pakkede/dist-versjonen slik at du kan finne den optimaliserte siten på http://127.0.0.1:9000

`grunt build:stage deploy:stage`
Bygg og deploy versjonen din til staging-server

`grunt build:prod deploy:prod`
Bygg og deploy versjonen din til produksjons-server.

#### Viktig ved endring
**OBS:** Vær nøye med å ikke endre på denne linjen i index.html. Den blir automatisk erstattet med kode for den byggete versjonen av main ved dist/deploy ved hjelp av kommandoen regexp-replace i grunt-fila:
`<script data-main="scripts/config" src="bower_components/requirejs/require.js"></script>`

##Konfigurasjon av app-variabler for ulike environments (dev, prod, stage)

1. Alle config-verdier som appen skal bruke kan du legge i /config/config.js under constant -> configration.

2. Dersom verdiene skal være ulike for ulike deploy-envs (eks stage, prod osv) så legg dem i json-filene under /config/environments OG legg inn parameternavnene i config.js-fila slik

```
apiserver: '@@apiserver',
```

3. Når du kjører grunt serve eller build:stage og build:deploy så blir automatisk en config-fil bygget og lag inn under /app/scripts/services/config.js

4. Du får tak i config-variablene ved å injecte 'configuration' i f.eks. en controller slik: 

```
 controllers.controller( 'MainCtrl', ['$scope', 'configuration', function ( $scope, configuration) {
 	  //dette vil skrive ut alle configvariablene dine
 	  console.log(configuration);

 	  //og du kan bruke dem i templates slik
	  $scope.config = configuration;
  }]);

```


## Annonser

Annonser ligger inne som standard i app-template.

Dersom du trenger å endre annonse-koder/tags så gjør du det index.html. Du trenger ulike tags for mobil, desktop og tablet og legger dem inn slik

```
 <btads 
      adid="ad_1"
      desktopUrl="http://adserver.adtech.de/addyn|3.0|995.1|3135379|0|1744|ADTECH;cookie=info;alias=btny_nyh_toppbanner_980x150;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc="
      mobileUrl="http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=BT_MobilWeb_Nyheter-Top-5;misc="
      tableturl="http://adserver.adtech.de/addyn|3.0|995.1|3052574|0|3218|ADTECH;cookie=info;alias=Lesebrett_BT_Fors_Toppbanner_980x300;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=">
    </btads>
```

**Annonse-rigget krever følgende filer: **

* Bower: htmlparser, mobile-detect og postscribe (er inkludert i bower.json)
* Silsett: styles/_ads.scss
* Direktiv: scripts/directives/btadsDir.js

## Angular hjelp, filtre etc.

### Filtre

#### Offset

Brukes for å hente fra et visst punkt i array f.eks ved siste artikler.

Eks:

```
<div ng-repeat="a in articles | limitTo: limit | offset: myoffset" >

```

### Services


#### Siste artikler fra BT.no-seksjon

Du kan hente inn siste artikler fra BT via en api-proxy vi har laget.
I kallet getLatest kan du spesifisere seksjonsid og antall artikler du vil hente. Det er alltid de siste publiserte som returneres.

**I controller: **
```

 latestArticleService.getLatest(SEKSJONSID, ANTALL).then(function(data) {
	$scope.articles = data;
  })

```

**I view: **

```
<latestarticles articles=articles showlead="false" offset="0" limit="13"></latestarticles>
```

**Siste artikler-rigger krever:**

* Tilgang på serverapi, se service-scriptet for url.
* services/latestArticlesService.js (må aktiveres i index.js)
* directives/latestarticles.js (må aktiveres i index.js)
* views/directives/latestarticles.html (kan selvsagt endres)
* equalHeight-directiv: for å få like høye diver med artikler. Ikke obligatorisk.
* filters/offset.js for å kunne begynne et annet sted enn siste artikkel. Eks på artikkel 2.

