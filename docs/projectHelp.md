1) install parcel
2) install other dependencies check his Package.json
3) eslint file can copy paste from your repo
4) everything else is doing React.createElement , render root, file, script tag with type module because Parcel needs that, source is index.js file, index.js file is all your code where you create all your elements.  You will never create a React app but it’s good practice to understand what’s under the hoop

### Process Dependancy

https://www.npmjs.com/package/processbn

### When do you need to install a package and when is the package available globally?

When you use the global flag when installing a dependancy it is avaliable throughout your whole computer. Every dependancy needs to be listed in the package.json file.

I'm not completely sure at this moment where global assets are saved.
Local assets are saved in the `node_modules` folder in your project repo. So every project needs to reinstall the local dependancies.

### What is the difference between the file structure root and the div#root?
The root of the file system is just the file you selected to open with VS Code (usally the root of the git repo)
The div#root is the root container (HTML tag) that you are going to be nesting all of the elements created inside your React script.

A project can have multipe "roots" because a project is usally working with multiple technologies. "root" is a somewhat broad term because you have to ask yourself "The root of what?".

### Why does index.js script go at the bottom of the body?

That way we don't have to have an event listener to listen for the DOMContentLoaded.

