# SF Chinatown Park and Ride App
This is a simple personal project that is not affiliated with the SF Chinatown Park and Ride program.

# Preface
When I first visited SF Chinatown on my own, I noticed that it was a bit difficult for me to find a merchant participating in the "SF Chinatown Park and Ride" program that I could make a meaningful purchase from while also validating my parking. For instance, I was hungry and unfamiliar with SF street names when I first visited, so I looked at participating "Restaurant" merchants from one of the seemingly official participating merchant lists online:

http://www.chinatownparkandride.com/merchants/
http://www.sanfranciscochinatown.com/attractions/parkandride.html

These lists had inconsistencies (some of the merchants no longer existed) and simply showed names, addresses, and phone numbers of the merchants with no spatial representation (map). So I ended up consulting my phone over and over to look up how far each promising restaurant was from me as well as restaurant review information to figure out whether I'd want to eat there.

Long story short, I felt that there must be a better way to find a nearby participating merchant who I actually wanted to make a purchase from and validate my parking with.

# And so...
I started this little project to solve this little problem while also giving myself a chance to practice simple web app development after familiarizing myself with AngularJS and Ionic during a summer internship. 

I also used this as an opportunity to explore automated web scraping, as I attempted to use a trainable web scraper service called Kimono to scrape the first participating merchant list into an API that returned JSON objects on queries. However, after many attempts, Kimono simply wouldn't fill out the data table with fully correct data for each record due to some inconsistencies within the list's HTML (Kimono uses HTML patterns to group features If it had worked fine, then I would be able to have Kimono run the scraper and update the API whenever the merchant list was modified, keeping my app updated. For now, I'm using the Sheetlabs service to create an API based off of a spreadsheet of the corrected merchant data scraped by Kimono. This also lets me add query parameters to the API endpoint so that I can query merchants with specific attributes, such as all those with the category of "Restaurant." Cool!

# To be continued...


