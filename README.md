# **Solace Toolkit (TK) for Game Development**
[![devspaces](https://img.shields.io/badge/DevSpaces-Launch%20Workspace-red)](https://devspaces.apps.sno.bowmansoftworks.com#https://bitbucket.org/onbowman/solace-toolkit.git)
[![solace-toolkit](https://img.shields.io/badge/SolaceTK-Home-purple)](https://github.com/JRBowman/solace-toolkit)
[![solace-toolkit](https://img.shields.io/badge/SolaceTK-API%20Home-green)](https://github.com/JRBowman/solacetk-service)
[![solacetk](https://img.shields.io/badge/SolaceTK-UI%20Demo-blue)](https://solacetk-ui-dev-bowman-dev.apps.bocp.onbowman.com/)
[![solacetk](https://img.shields.io/badge/SolaceTK-API%20Demo-yellow)](https://solacetk-core-dev-bowman-dev.apps.bocp.onbowman.com/swagger)

*Still Early in Development! The current state of things are "Pre-Alpha", but development is nearing a point where it can enter an alpha release where it should be 'fully' functional to it's purpose!*

---

The _Solace Toolkit (TK) for Game Development_ offers a **Data-Oriented Framework** to build and design games in your engine of choice.

_* While this is a Data Framework that can be implemented with any game engine - SolaceTK provides an implementation with `Unity Engine` and makes use of the WebGL builds to create a comprehensive 'Test Harness' to design and test SolaceTK Data in the engine without build times or installing the engine, the entire development experience and lifecycle can take place in a web-browser!_

_** Version 1 currently only supports `Animation` importing using [Aseprite](https://github.com/aseprite/aseprite) `.ase` and `.aseprite` files - the API uses Aseprite on the backend to create Sprite Sheets, Preview Gifs, and initial Animation Frame Data from Aseprite JSON. Version 2 will fully support importing pre-configured Sprite Sheets as `.png` as well as other formats._

## Build / Deployment Instructions
This repository contains the [`Angular 15`](https://angular.io/) User Interface of SolaceTK - building the Application for Deployment only requires [`Node.js`](https://nodejs.org/en) and [`NPM`](https://www.npmjs.com/):
```
# Install all the dependencies
npm install

# Generate the build of the application
npm run build
```
The compiled artifact is a _static website_ that can be delivered via any desired HTTP Web Server.

This repo contains a [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) that builds SolaceTK as a container using [`NGINX`](https://www.nginx.com/) as the default web tier - httpd, IIS, etc. should all work fine should you run this application build through a [`Source-to-Image`](https://github.com/openshift/source-to-image) / [`BuildPacks`](https://buildpacks.io/) process!

## Development Instructions
The User Interface uses [`Angular`](https://angular.io/), [`Angular Materials`](https://material.angular.io/), [`ngx-markdown`](https://github.com/jfcere/ngx-markdown) as the _primary_ Framework, UI Library, and .md Markdown renderer - to get started with development, you must prep your environment with the following pre-requisites: (more details can be found using the [`Angular: Local Environment Setup`](https://angular.io/guide/setup-local) guide)

1. Install [Node.js LTS or greater](https://nodejs.org/en)
2. Install the Angular CLI (ng) globally:
 - _Windows Users -> Allow RemoteSigned script execution in PowerShell:_
```
PS: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
```
npm install -g @angular/cli
```
3. Open the `solace-toolkit` git repo in your editor of choice and use the `ng CLI` commands to work with the application:
- Perform an npm install in the source code directory
```
npm install
```
- Generate new Angular `Components` or other constructs (component.ts, component.html, component.css, etc.)
  - `ng generate` can be shortened to `ng g`
```
ng g component <component-name>
```
- Run the Angular application using the ng development server:
```
ng serve
```
- `ng serve` will serve the application using `http://localhost:4200/`

## Develop with DevFile
Use `OpenShift DevSpaces` or `Eclipse Che` (or another service supporting DevFile spec) to start working on the application!
``` https://<devspaces-url>#https://github.com/JRBowman/solace-toolkit.git ```

# Data-Oriented Framework
This Toolkit uses a Data-Oriented Framework self-titled _Soldof_ (Solace Data-Oriented Framework) - It is comprised of a series of **Interfaces and Data Contracts** which define **Data Models** that encompass the general needs of the game system: 
> **Actor Controllers** that have **Behavior Systems** which define **Branches** that select **States** by **Conditions** - providing **Animation**, **Action/Movement**, and **State Management**.

Each of these components of the game system are captured as **Serialized Data Models** - The **Models** collectively define Objects and Behaviors that can be applied and implemented against Objects in the Game Engine of Choice, using the **Data Contracts and Interfaces** Defined by the **Models**

<img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/wiki/solacetk-overview.svg" width="100%">

<img src="https://user-images.githubusercontent.com/29755339/233661935-5e9ee107-de15-4818-9557-78bd11192d9e.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233662859-5fe2f8ae-913b-4ed9-86f6-b4c7f92c8b9c.png" width="100%">

# Wiki
Review the **Wiki** to learn more about the Data-Oriented Framework and how to use this Toolkit!
- TODO: add the links to the Wiki .md files.

# Data Operations and Processing
Variable Substitution, Data Operations and Methods, and more. This section explains the existing supported Data Operations within the Toolkit.

## Variable KeyPair Operations 
<img src="https://user-images.githubusercontent.com/29755339/233698831-7a1ed59f-3592-4e91-bed8-15e71b6e1c98.png" width="50%">

## Condition KeyPair Operations
<img src="https://user-images.githubusercontent.com/29755339/233698567-921cbd7e-cc4c-49be-8cba-95ebf604c340.png" width="50%">

## Variable Substitution
`$(var)` -> takes 1 variable name argument and substitutes the token with the variable value.

<img src="https://user-images.githubusercontent.com/29755339/233663831-7b3e3942-84d2-46de-99f5-89b4982d163f.png" width="45%">

## RandSet Function
`randset(x,...N)` -> takes arguments delimited by `,` - `randSet` randomnly chooses an item from the provided Set and uses that value.

<img src="https://user-images.githubusercontent.com/29755339/233663893-1fe3d7e5-64bc-407f-ac3d-6e72c9f2b6aa.png" width="45%">

## Rand Function
`rand(min,max)` -> takes 2 arguments for Min and Max values to randomly select between (standard rand function).

<img src="https://user-images.githubusercontent.com/29755339/233699300-b2f6fd33-dc6b-49af-8448-67b1620b29e0.png" width="45%">

# Behaviors - <img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/icons/behavior-plate.svg"> <img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/icons/state-plate.svg"> <img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/icons/animation-plate.svg">
<img src="https://user-images.githubusercontent.com/29755339/233696773-c6b7aa46-2394-4f31-9301-25b5edd47797.png" width="100%">

## States - <img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/icons/state-plate.svg">
<img src="https://user-images.githubusercontent.com/29755339/233697356-7cfa7b1f-b9c3-4011-9d53-9b54ad8372a1.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233697154-e5f9acd1-44cf-4804-8d98-f1796dee12f8.png" width="100%">


## Animations - <img src="https://raw.githubusercontent.com/JRBowman/solace-toolkit/master/src/assets/soldof/icons/animation-plate.svg">
<img src="https://user-images.githubusercontent.com/29755339/233696944-15cbba52-7ee6-4f50-a6ad-d0dda72c9025.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233666684-963de386-3b65-44a6-8538-1ce2953ff6d3.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233666590-b5385125-ef0f-492e-b167-6ca9f249820b.png" width="33%">
<img src="https://user-images.githubusercontent.com/29755339/233666796-50fb93be-5369-44c1-b261-d27f324dd0f4.png" width="66%">

# Events and Messages - ![image](https://user-images.githubusercontent.com/29755339/233695473-fb5e8dc3-569d-4d27-9817-267d435aee70.png) ![image](https://user-images.githubusercontent.com/29755339/233695195-f1b18959-a3f6-471f-a513-dc2add77c85f.png)
`Eventing` in SolaceTK, being data-only in design, defines the details of an action that can be executed by its owner.
- `Events` are defined by `Conditions`, `Owner Data Changes`, and `Messages`.
  - `Messages` are defined with `Recipients` of a `RecipientType` and `Recipient Data Changes` for each targetted.

    ![image](https://user-images.githubusercontent.com/29755339/233694375-6830b7da-52fa-470c-97e0-11b576315e08.png)
    ![image](https://user-images.githubusercontent.com/29755339/233694701-c35a536b-c2f1-4c34-a0b1-b2492827213c.png)

  - `Messages` are sent to _Recipients_ via a _Core Message Queue_ and processed by each Recipient's internal Message Queue.
    - _These features are part of the specification of implementation against the data_
    
    <img src="https://user-images.githubusercontent.com/29755339/233694967-a77e24b8-7f21-415f-a8fc-4d7c169248e5.png" width="50%">

- `Conditions` are sets of _KeyValuePairs_ that correspond with _StateData_ of the owner.
- `Owner Data Changes` are sets of _KeyValuePairs_ that make changes to the owner's _StateData_

<img src="https://user-images.githubusercontent.com/29755339/233663479-bbd771bd-8ce4-4a1c-a886-4edacfec8e74.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233663120-61a9b6a2-1113-4001-bcc1-bb3336eb93d8.png" width="100%">

# Environment Design - ![image](https://user-images.githubusercontent.com/29755339/233695681-7f822888-6a90-4112-af0b-caed6d1395da.png) ![image](https://user-images.githubusercontent.com/29755339/233695819-104dda10-6999-48a4-aa7a-38237e51e736.png)
<img src="https://user-images.githubusercontent.com/29755339/233662478-4fd3d5b3-6e89-4884-a612-4613eb98e68e.png" width="100%">

# Project Management - ![image](https://user-images.githubusercontent.com/29755339/233695931-de3f2758-751e-4b73-ae7f-985d70d1ca1a.png)
<img src="https://user-images.githubusercontent.com/29755339/233666047-80b4e7a2-0a99-474c-9de5-bafa49db02ba.png" width="100%">
<img src="https://user-images.githubusercontent.com/29755339/233666100-124a0db6-467b-450a-9655-fa6ffb203378.png" width="100%">