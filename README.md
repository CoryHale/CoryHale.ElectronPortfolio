My Operating System: macOS Big Sur 11.2
Node: 12.19.0

To run project just download app to local drive, cd into root directory, and then using the command-line run `yarn install` or `npm install`, then run `yarn run watch` or `npm run watch`, open a second terminal and then run `yarn start` or `npm run start`.


Issues: 

The issues I had is I couldn't figure out how to actually embed the live twitter feeds into the application. After spending several hours scrolling through google, it seems as if there is not an easy way to do so inside a react app, and all the other ways I tried wouldn't work inside of the electron framework. I believe with a slightly better understanding of Electron, I could have gotten the embedded feeds working.

The other issue is that I could not find a way to take a screenshot of the web browser. Although I was able to find a few different implementations, I could not get any of them to work.
