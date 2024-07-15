const getLocalStorage = () => {
    const getValue = localStorage.getItem('applied');

    if (getValue) {
        return JSON.parse(getValue);
    }
    return [];
};

const setLocalStorage = (id) => {
    const storedValues = getLocalStorage();

    const exists = storedValues.find((storedValue) => storedValue === id);

    if (!exists) {
        const setValues = [...storedValues, id];
        localStorage.setItem('applied', JSON.stringify(setValues));
    }
};

export {setLocalStorage, getLocalStorage};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* const getStoredValueFromLocalStorage = () => {
    const getValue = localStorage.getItem('job-id');
    if (getValue) {
        const getValueString = JSON.parse(getValue);
        return getValueString;
    }
    return [];
};

const setToLocalStorageId = (id) => {
    const value = getStoredValueFromLocalStorage();

    if (!value === id) {
        const setId = [...value, id];
        const setValue = JSON.stringify(setId);
        localStorage.setItem('job-id', setValue);
    }
};

export {setToLocalStorageId, getStoredValueFromLocalStorage};
 */

// 1.

/* const get = () => {
    const a = localStorage.getItem('apply');

    if (a) {
        return JSON.parse(a);
    }
    return [];
};

const set = (id) => {
    const values = get();
    const exists = values.find((value) => value === id);

    if (!exists) {
        values.push(id);
        localStorage.setItem('apply', JSON.stringify(values));
    }
};

export {set, get}; */
