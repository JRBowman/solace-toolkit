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

# Data Operations and Processing
Variable Substitution, Data Operations and Methods, and more. This section explains the existing supported Data Operations within the Toolkit.

## Variable KeyPair Operations 
![image](https://user-images.githubusercontent.com/29755339/233698831-7a1ed59f-3592-4e91-bed8-15e71b6e1c98.png)

## Condition KeyPair Operations
![image](https://user-images.githubusercontent.com/29755339/233698567-921cbd7e-cc4c-49be-8cba-95ebf604c340.png)

## Variable Substitution
`$(var)` -> takes 1 variable name argument and substitutes the token with the variable value.

![image](https://user-images.githubusercontent.com/29755339/233663831-7b3e3942-84d2-46de-99f5-89b4982d163f.png)

## RandSet Function
`randset(x,...N)` -> takes arguments delimited by `,` - `randSet` randomnly chooses an item from the provided Set and uses that value.

![image](https://user-images.githubusercontent.com/29755339/233663893-1fe3d7e5-64bc-407f-ac3d-6e72c9f2b6aa.png)

## Rand Function
`rand(min,max)` -> takes 2 arguments for Min and Max values to randomly select between (standard rand function).

![image](https://user-images.githubusercontent.com/29755339/233699300-b2f6fd33-dc6b-49af-8448-67b1620b29e0.png)

# Behaviors - ![image](https://user-images.githubusercontent.com/29755339/233696117-710c55bf-0c3b-4ab5-bf2e-41df32299032.png) ![image](https://user-images.githubusercontent.com/29755339/233696192-b4b323af-f77b-4891-82f5-b6fd91d21d6f.png) ![image](https://user-images.githubusercontent.com/29755339/233696319-52142cad-3023-4f37-9f45-ffb7b637a00d.png)
![image](https://user-images.githubusercontent.com/29755339/233696773-c6b7aa46-2394-4f31-9301-25b5edd47797.png)

## States - ![image](https://user-images.githubusercontent.com/29755339/233696192-b4b323af-f77b-4891-82f5-b6fd91d21d6f.png)
![image](https://user-images.githubusercontent.com/29755339/233697356-7cfa7b1f-b9c3-4011-9d53-9b54ad8372a1.png)
![image](https://user-images.githubusercontent.com/29755339/233697154-e5f9acd1-44cf-4804-8d98-f1796dee12f8.png)

## Animations - ![image](https://user-images.githubusercontent.com/29755339/233696319-52142cad-3023-4f37-9f45-ffb7b637a00d.png)
![image](https://user-images.githubusercontent.com/29755339/233696944-15cbba52-7ee6-4f50-a6ad-d0dda72c9025.png)
![image](https://user-images.githubusercontent.com/29755339/233666684-963de386-3b65-44a6-8538-1ce2953ff6d3.png)
![image](https://user-images.githubusercontent.com/29755339/233666590-b5385125-ef0f-492e-b167-6ca9f249820b.png)
![image](https://user-images.githubusercontent.com/29755339/233666796-50fb93be-5369-44c1-b261-d27f324dd0f4.png)

# Events and Messages - ![image](https://user-images.githubusercontent.com/29755339/233695473-fb5e8dc3-569d-4d27-9817-267d435aee70.png) ![image](https://user-images.githubusercontent.com/29755339/233695195-f1b18959-a3f6-471f-a513-dc2add77c85f.png)
`Eventing` in SolaceTK, being data-only in design, defines the details of an action that can be executed by its owner.
- `Events` are defined by `Conditions`, `Owner Data Changes`, and `Messages`.
  - `Messages` are defined with `Recipients` of a `RecipientType` and `Recipient Data Changes` for each targetted.

    ![image](https://user-images.githubusercontent.com/29755339/233694375-6830b7da-52fa-470c-97e0-11b576315e08.png)
    ![image](https://user-images.githubusercontent.com/29755339/233694701-c35a536b-c2f1-4c34-a0b1-b2492827213c.png)

  - `Messages` are sent to _Recipients_ via a _Core Message Queue_ and processed by each Recipient's internal Message Queue.
    - _These features are part of the specification of implementation against the data_
![image](https://user-images.githubusercontent.com/29755339/233694967-a77e24b8-7f21-415f-a8fc-4d7c169248e5.png)

- `Conditions` are sets of _KeyValuePairs_ that correspond with _StateData_ of the owner.
- `Owner Data Changes` are sets of _KeyValuePairs_ that make changes to the owner's _StateData_

![image](https://user-images.githubusercontent.com/29755339/233663479-bbd771bd-8ce4-4a1c-a886-4edacfec8e74.png)

![image](https://user-images.githubusercontent.com/29755339/233663120-61a9b6a2-1113-4001-bcc1-bb3336eb93d8.png)

# Environment Design - ![image](https://user-images.githubusercontent.com/29755339/233695681-7f822888-6a90-4112-af0b-caed6d1395da.png) ![image](https://user-images.githubusercontent.com/29755339/233695819-104dda10-6999-48a4-aa7a-38237e51e736.png)
![image](https://user-images.githubusercontent.com/29755339/233662478-4fd3d5b3-6e89-4884-a612-4613eb98e68e.png)

# Project Management - ![image](https://user-images.githubusercontent.com/29755339/233695931-de3f2758-751e-4b73-ae7f-985d70d1ca1a.png)
![image](https://user-images.githubusercontent.com/29755339/233666047-80b4e7a2-0a99-474c-9de5-bafa49db02ba.png)
![image](https://user-images.githubusercontent.com/29755339/233666100-124a0db6-467b-450a-9655-fa6ffb203378.png)
