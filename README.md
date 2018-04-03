# R10

Built with React Native, this app is for the mock conference R10 (like F8)! Firebase is used for R10's schedule, speaker, and about data. Fetching data is occuring in the state manager, Redux, modules. This is an app I am really proud of! I am especially proud of the maps aspect. A stretch goal for the project I was not only able to implement it but also make it my own with custom markers for multiple locations. Enjoy! ***:)***

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Apple's Xcode(https://developer.apple.com/download/)

An open mind... considering this is my first app!

And a [code editor](https://code.visualstudio.com/download)!

### Installing

A step by step series of examples that tell you have to get a development env running

Firstly, clone this repository: 

In your terminal, navigate to a current working directory where you want the cloned R10 directory to be.
Enter this command.
```
git clone https://github.com/nejohnston/R10.git
```

Once cloned, hop into R10.
``` 
cd R10
```

Install node modules in root directory.

```
npm install
```
**!!IMPORTANT!!**
Do **NOT** ```react-native link``` Or else maps will not work, therefore breaking the app and subsequently your soul if you actually attempt at fixing it.


***To Launch***

Open **R10.xcworkspace** in Xcode. **The app will not work if you open R10.xcodeproj**

Once built press the *play* button in the top left area of Xcode, I would recommend using the iPhone SE simulator (for your computer's sake) **:)**. 

## Built With

* [React Native](https://facebook.github.io/react-native/docs/getting-started.html) - The app framework used
* [React Navigation](https://reactnavigation.org/) - Used for app navigation (instead of expo)
* [Redux](https://redux.js.org/) - State manager
* [Firebase](https://firebase.google.com/) - Database

## Authors

* **Nicholas Johnston** - *Executioner* - [RedAcademy Instructor](https://github.com/redacademy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Mackenzie Kieran** - *Built Template* - [RedAcademy Instructor](https://github.com/redacademy)
* **Mandi Wise** - *Built Template* - [RedAcademy Instructor](https://github.com/redacademy)
