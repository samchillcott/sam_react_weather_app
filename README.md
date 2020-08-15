# Weather App

- Web app displaying weather info collected from a 3rd party API. Background changes depending on certain weather conditions using conditional styling.
- Set as a challenge by my mentor (original spec below) and built not using a follow along tutorial.

## Tech Used

- React.js (useState & useEffect).
- Javascript.
- Moment.js library.
- Dom manipulation.
- CSS.
- Responsive Design.
- Open Weather 3rd Party API.

## Features

- Displays weather info for requested query:
  - City, Country,
  - Description of weather,
  - Weather icon,
  - Temperature in Celsius,
  - "Feels Like" temperature (one I use myself),
  - Cloudiness in %,
  - Sunrise time,
  - Sunset time.
- Conditional backgrounds:
  - A sunny background if cloudiness is below 50% and temperature above 20\*C.
  - A non-sunny background if cloudiness is below 50% and temperature below 20\*C.
  - A sun & clouds background if cloudiness is above 50% and temperature above 20\*C.
  - A union jack if cloudiness is above 50% and temperature below 20\*C.
- Responsive design.

## What I Learned

- How to pick the data from an API and display within a react component.
- Using JS logic and within JSX.
- How to debug (which enable me to iterate as i go).
- Working with times and timezones and using date-fns & moment.js libraries.
- Modern mobile responsive techniques - Start mobile first in the next project.

## Challenges

- Doing it on my own / "taking the stabilizers off" - My first project not following a tutorial.
- Being too scared to try things (for fear of messing code or getting it wrong which I knew would lead to frustration).
- The psychology in general - overwhelm, mood management etc.
- The time conversions from UTC (still incomplete).
- Found the API the easy part.
- Understanding what build process was doing - came back a month later and sorted/updated.
- Working with date objects/time zones and daylight savings. The Unix conversions were correct but the objects were reverting to UTC which I didn’t want. Tried date-fns but got it working with moment.js.
- GitHubPages deployment - run build then run deploy to update the GHP branch.

## Improvements

- Cover for more error cases.
- Try things more often - don't get analysis paralysis.
- Auto suggest in search box.
- Sunrise and sunset times to local time (local to the city returned, not to me in the UK).
- Upon misspelling, try to suggest a correction.
- Create a number of 'test' pages, which are pre-set to fetch particular city's weather upon opening - or 'simulate' that the particular data already has been returned.
- Use unsplash using query parameters for background image/temperature. So instead of having 3 variants/images saved in the src folder, I can get a rotation of images from unsplash direct.
- Add pollen count - not available through open weather BUT could bring in another API request.
- Call the city by ID as suggested in the docs.

## Watch Me Build This

- #100daysofcode 39-56.
- #daysofcode 11-15/8/20.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)

## Original Spec

- User types in the city and country code into a search bar, separated by a comma. Hits enter or presses a 'Search' button to confirm.
- The app fetches weather information for that city.
  - 1 If the request returns an error, print out an error message
  - 2 If the request fails because the city is incorrect, inform the user of misspelling.
  - 3 If the request correctly returns data, display:
    - City name and country code
    - Current temperature in Celsius
    - Current cloudiness in %
    - Sunrise and sunset hours today
    - One additional information that you choose - can be anything from the response.
- The background of the page should be:
  - A sunny background if cloudiness is below 50% and temperature above 20\*C.
  - A non-sunny background if cloudiness is below 50% and temperature below 20\*C.
  - A union jack if cloudiness is above 50% and temperature below 20\*C.
