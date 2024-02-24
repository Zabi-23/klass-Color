
Här är din README-fil för GitHub:

Color Class (Prototypbaserad)
Detta är en JavaScript-klass som hanterar färger genom att konvertera dem mellan olika format. Du kan skapa en färginstans genom att ange värden för rött, grönt och blått enligt skalan 0-255. Sedan kan du konvertera färgen till RGB, hexadecimalt eller RGBA-format.

Metoder
rgb()
Returnerar färgen i RGB-formatet som "rgb(x, y, z)" där x, y och z representerar de röda, gröna och blåa komponenterna.

hex()
Returnerar färgens hexkod som "#XXYYZZ" där XX, YY och ZZ är hexadecimala representationer av de röda, gröna och blåa komponenterna.

rgba(alpha)
Returnerar färgen i RGBA-formatet där alpha är det genomskinlighetsvärdet. Det returneras som "rgba(x, y, z, a)" där x, y, z är de röda, gröna och blåa komponenterna och a är genomskinlighetsvärdet.

Användning
Du kan använda denna klass genom att skapa en ny instans av Color och sedan anropa dess metoder för att konvertera och använda färgen enligt behov. Ett exempel är att uppdatera bakgrundsfärgen på en sida baserat på användarens input.
