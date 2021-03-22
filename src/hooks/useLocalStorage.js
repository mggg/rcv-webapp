import _ from "lodash";
import { useState } from "react";

// Hook
function useLocalStorage(stateObjectName, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by stateObjectName
      const storedState = window.localStorage.getItem(stateObjectName);
      // Return initialValue if this is new to localStorage
      if (_.isNull(storedState)) {
        return initialValue;
      }
      // If the keys on the storedState match the current one, use the storedState;
      // else, clear it and use the current state
      const parsedStoredState = JSON.parse(storedState);
      const validStateObjectKeys = Object.keys(initialValue);
      const storedStateKeys = Object.keys(parsedStoredState);
      if (_.isEqual(storedStateKeys, validStateObjectKeys)) {
        return parsedStoredState;
      }
      window.localStorage.removeItem(stateObjectName);
      return initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(
        stateObjectName,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
