# Project IV
## Overzicht
Met dit document scheppen we een duidelijk beeld over de doelen, richtlijnen en functie specificaties, etc. 
## Doelen
* Bourdon test implementeren
* Authenticatie met verschillende rollen
* Dynamisch over mobiel en computer
* Gebruiksvriendelijk
* Onafhankelijk van andere platformen
* Schaalbaar voor meerdere testen in de toekomst
## Specificaties
We splitsen de specificaties op per onderdeel.
### Bourdon test
Bij de bourdon test zijn er bepaalde specificaties voor de test zelf.
* Test instellingen aanpasbaar voor: 25, 33 of 50 regels.
* Reactietijden per regel
* Regels kunnen wissen en delen door bijv 49 ipv 50 als de cliënt een regel heeft overgeslagen
* Fouten, weglatingen en zelfcorrecties per regel nadien manueel kunnen invoeren
#### Verder willen we ook bepaalde resultaten terug tonen
* Gemiddelde regeltijd
* Gemiddelde afwijking (standaarddeviatie)
* Dispersiecurve (verdeling regeltijden per snelheid)
