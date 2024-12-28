the key to combine multiple reducers is `combineReducers()` method. this method accepts an object as an argument. in this object, we should define each single state and its reducer. in that object, key name will be the name for `combineReducers()` method to identify the state and its property is the reducer for that specific state. so, that object will look like this :

```js
{statename1: reducer1, statename2, reducer2, ...}
```

**Example :**
```JS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count : counterReducer,
  auth : authReducer
})

const store = Redux.createStore(rootReducer);
```

