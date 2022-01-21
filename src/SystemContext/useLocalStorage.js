import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [ item, setItem ] = React.useState(initialValue);
  
    React.useEffect(() => {

      setTimeout(() => {

        try {

                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem; //Arreglo de elementos guardados
                
                if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
        
                setItem(parsedItem);
                console.log(parsedItem);
                setLoading(false);

        } catch (error) {
          setError(error);
        }
  
      }, 1000);
    });
    
      const saveItem = (newItem) => { //Guardar nuevo elemento en localStorage
      try {

            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            setItem(newItem);

      } catch (error) {

        setError(error);

      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }
  
export {useLocalStorage};