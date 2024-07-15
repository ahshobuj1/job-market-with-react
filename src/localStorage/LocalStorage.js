const getStoredValueFromLocalStorage = () => {
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
