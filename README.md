# Shopping Cart App

## Setup
1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
1. Install [yarn](https://yarnpkg.com/en/docs/install#mac-stable)
3. Install the `create-react-app` package globally: `yarn global add create-react-app`
4. Clone this repository
5. `cd` into the downloaded directory
6. `cd` into client and run `yarn install` from the command line to install all dependencies
6. `cd` into server and run `yarn install` from the command line to install all dependencies

## DataBase Setup

1. Create mongoDB account - https://account.mongodb.com/account/register
2. Create AWS cluster
3. Under Security tab, click Database Access, and on the right `add new database user`. After you enter username and password, click `add user` at the bottom right corner.
4. Under Security tab, click Network Access, and whitelist your IP address.
5. Once your cluster is created, under Clusters tab, click connect and copy the connection string which will look something like this `mongodb+srv://test123:<password>@cluster0-zamyu.mongodb.net/test?retryWrites=true&w=majority`. Instead of `test123` there will be your username, and you will need to replace `<password>` with your password.
6. Finally, inside your project folder, `cd` into server, create new file `.env` and enter `DB=<paste the string from above here>`. It will look similar to this `DB=mongodb+srv://test123:mypass@cluster0-zamyu.mongodb.net/test?retryWrites=true&w=majority`.

## Running the app
While in the server directory, run `npm run dev` to start the live server. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

## Viewing Static Version of the App
While developing the app, you can take a look at the static pages that you'll eventually convert into a dynamic application. To do so, visit `http://localhost:5000/ui` in the browser. You are also encouraged to read and reuse the markup, classes and ids used in these static files in your components. They're located in the `/server/public/ui` folder.

## Developing the app

The starting point of the application is the `/client/src/index.js` file. That's where the root component of the application - `App` - is rendered to the DOM. You can add new components to the `/client/src/components` folder and new test files to the `/client/src/tests` folder.

For the initial application data, you can start with the following list of products:

```js
[
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 5,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]
```