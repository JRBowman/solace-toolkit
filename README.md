# **Solace Toolkit (TK) for Game Development**
[![solacetk](https://img.shields.io/badge/SolaceTK-UI%20Demo-blue)](https://solacetk-ui-dev-bowman-dev.apps.bocp.onbowman.com/)
[![solace-toolkit](https://img.shields.io/badge/SolaceTK-API%20Home-purple)](https://github.com/JRBowman/solacetk-service)
![image](https://user-images.githubusercontent.com/29755339/233661935-5e9ee107-de15-4818-9557-78bd11192d9e.png)

The _Solace Toolkit (TK) for Game Development_ offers a **Data-Oriented Framework** to build and design games in your engine of choice.

# Data-Oriented Framework
This Toolkit uses a Data-Oriented Framework self-titled _Soldof_ (Solace Data-Oriented Framework) - It is comprised of a series of **Interfaces and Data Contracts** which define **Data Models** that encompass the general needs of the game system: 
> **Actor Controllers** that have **Behavior Systems** which define **Branches** that select **States** by **Conditions** - providing **Animation**, **Action/Movement**, and **State Management**.

Each of these components of the game system are captured as **Serialized Data Models** - The **Models** collectively define Objects and Behaviors that can be applied and implemented against Objects in the Game Engine of Choice, using the **Data Contracts and Interfaces** Defined by the **Models**
![image](https://user-images.githubusercontent.com/29755339/233662859-5fe2f8ae-913b-4ed9-86f6-b4c7f92c8b9c.png)


# Wiki
Review the **Wiki** to learn more about the Data-Oriented Framework and how to use this Toolkit!

<img src="src/assets/soldof/wiki/solacetk-overview.svg" width="100%">

# Events and Messages
![image](https://user-images.githubusercontent.com/29755339/233663479-bbd771bd-8ce4-4a1c-a886-4edacfec8e74.png)

![image](https://user-images.githubusercontent.com/29755339/233663120-61a9b6a2-1113-4001-bcc1-bb3336eb93d8.png)

# Data Operations and Processing
Variable Substitution, Data Operations and Methods, and more. This section explains the existing supported Data Operations within the Toolkit.

## Variable Substitution
`$(var)` -> takes 1 variable name argument and substitutes the token with the variable value.

![image](https://user-images.githubusercontent.com/29755339/233663831-7b3e3942-84d2-46de-99f5-89b4982d163f.png)

## RandSet Function
`randset(x,...N)` -> takes arguments delimited by `,` - `randSet` randomnly chooses an item from the provided Set and uses that value.

![image](https://user-images.githubusercontent.com/29755339/233663893-1fe3d7e5-64bc-407f-ac3d-6e72c9f2b6aa.png)

## Rand Function
`rand(min,max)` -> takes 2 arguments for Min and Max values to randomly select between (standard rand function).

# Environment Design
![image](https://user-images.githubusercontent.com/29755339/233662478-4fd3d5b3-6e89-4884-a612-4613eb98e68e.png)




