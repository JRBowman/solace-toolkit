# Behavior State Management and Behavior Systems
Behavior State Management and Behavior Systems define all _States_ of being for an _Actor Controller_, implementing _Actions_ to be taken by the _Actor_ per _State_ and outputting the resulting _Animations_ to the _Actor_.
- <code>Behavior Systems</code>
- <code>State Branches</code>
- <code>States</code>
- <code>Animations</code>
- <code>Actions</code>
- <code>Conditions</code>

- **Branches** >> A _Behavior State_ that when Acting uses _Conditions_ to choose one _State_ from a selection of States. 
- **States** >> A _Behavior State_ represents a full 'State of Being' of an _Actor Controller_, when Acting it uses _Actions_ until completed then dropping out of the current state to either a _Next State_ or falling back to the parent _Branch_.
- **Animations** >> A _Behavior Animation_ defines SpriteSheets and _Animation Frames_ which represent an _Actor Controller's_ Sprites over a sequence of time.
- **Actions** >> _Behavior Actions_ define Actions which _Actor Controllers_ use to Move/Behave during a _Behavior State_
- **Conditions** >> _Behavior Conditions_ define _KeyValuePair_ models which are used by the _Behavior System_ of _Actor Controllers_
- Actor Controllersand more. These Data Models are used to instantiate engine-specific Objects
and fully define them during runtime.