# AEON Project Website
Copyright (c) 2014-2019, AEON Project

url: https://www.aeon.cash

## Site Details:
AEON.cash is powered by Jekyll and hosted on Github. Changes made to this repository will reflect on to the website within moments of being committed.

### Adding a translation:
The following files will be altered in some way during translation:
```
index.html
_config.yml
_includes/header.html

```

#### Required edits to index.html
No major edits are needed here. Copy index.html as index.YOUR_LANGUAGE_ACRONYM.html. Example: `cp index.html index.pl.html`

This is all that is required for this file.

#### Required edits to _config.yml
All text for any page and every language is located in _config.yml. Each section of the website is sectioned in this file. An example is seen below.
```
title:
  en: "AEON - Mobile-friendly private digital currency" #you should base your translation off of this line.
  es: "AEON - Moneda Privada Digital Amigable para Móviles"
```

If you were to add in another language, please use a two letter language code (three letters if there is a conflict between language codes). 
```
title:
  en: "AEON - Mobile-friendly private digital currency" #you should base your translation off of this line.
  es: "AEON - Moneda Privada Digital Amigable para Móviles"
  pl: "AEON - Prywatna cyfrowa waluta przyjazna urządzeniom mobilnym"
```
Be sure to add your copied index file to the following section. You do not have to include the .html file extension.
```
index:
  en: index
  es: index.es
  pl: index.pl # this is the copied index.pl.html
```

Follow what is already in the file as a guide. When in doubt, [reach out](#reaching-out). 

#### Required edits to _includes/header.html
This file includes the drop down for our languages. In _includes/header.html, we ask that you add your language in. 

In this file, find the lines:
```
<div class="lang-dropdown-child">
	<a href="/">English</a>
	<a href="/index.es">Espanol</a>
```

After the very last language, add in your language with a link to your index page. Example
```
<div class="lang-dropdown-child">
	<a href="/">English</a>
	<a href="/index.es">Espanol</a>
	<a href="/index.pl">Polski</a>
</div>
```

After completing the above, you should be ready to submit a Pull Request to be reviewed. 

#### Translation credits:
* English: Multiple sources.
* Espanol: [@420Coupe](https://github.com/420Coupe)
* Esperanto: [@marmulak](https://github.com/marmulak)
* Deutch: [@AmorbiaCacoa](https://github.com/AmorbiaCacoa)
* Polish: [@ArqTras](https://github.com/ArqTras)
* Russian: [@TheFuzzStone](https://github.com/TheFuzzStone)
* Chinese: [@Xiaomogwai](https://github.com/Xiaomogwai)

### Multi-language credits:
* [@camthegeek](https://github.com/camthegeek) - new site structure + introduction of multi-language into existing theme
* [@aeon1234](https://github.com/aeon1234) - simplifying multi-language structure.
* [@BigslimVdub](https://github.com/bigslimvdub) - Community translations project organizer

## Reaching out

In need of help with editing the AEON project website? We encourage you to open an issue. However, if you are looking to receive assistance quickly, try one of the alternate solutions below.
* Reddit: https://reddit.com/r/Aeon
* IRC: https://webchat.freenode.net/?channels=%23aeon
* Discord: https://discord.gg/TM8mEsx
* Telegram: https://telegram.me/AEONgroup
