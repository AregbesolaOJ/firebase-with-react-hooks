import { BSON } from 'mongodb-stitch-browser-sdk';
import countryData from './countries.json';
import countryDetails from './currencies.json';

export const _arrayObjectToString = (arr, label) => {
  if (arr) {
    const temp = arr.map(arrayObject => arrayObject[label]);
    return _joinArr(temp);
  }
};

export const _autocomplete = (value, arr, field) => {
  const inputValue = value.trim().toLowerCase();
  return inputValue.length === 0
    ? []
    : arr.filter(item => item[field].toLowerCase().indexOf(inputValue) !== -1);
};

export const _breakItemsIntoPage = array => {
  let index = 0;
  const pageLength = Math.ceil(array.length / 10);
  const temp = [];

  for (let i = 0; i < pageLength; i++) {
    const total = index + 10;
    const result = array.slice(index, total);
    temp.push(result);
    index = total;
  }
  return temp;
};

export const _checkIfRecordExits = (arr, key, value) =>
  arr.find(object => object[key] === value);

export const _checkForError = (name, errors) => {
  if (errors.length) {
    return errors[0].toLowerCase().includes(name);
  }
  return false;
};

export const _firstLetterUc = string => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

export const _formatNumberWithCommas = number => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const _formatSuggestions = (inputValue, itemField) => {
  const input = inputValue.toLowerCase();
  const arr = itemField.toLowerCase().split(input);
  let result = '';
  result = arr.join(`<strong>${input}</strong>`);
  return result;
};

export const _getAllCountries = () => countryData.countries;
// eslint-disable-next-line max-len
export const _getCountryByCode = countryCode =>
  countryData.countries.filter(country => country.code === countryCode);

export const _getAllCurrencies = () => countryDetails.currencies;
export const _getCountryByCurrencies = countryCode =>
  countryDetails.currencies.filter(ctr => ctr.code === countryCode);

export const _joinArr = arr => {
  if (arr.length < 2) {
    return arr.join(' and ');
  }
  const array = arr.slice(0, -1);
  return `${array.join(', ')} and ${arr[arr.length - 1]}`;
};

export const _isEmpty = obj => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key]) {
      return false;
    }
  }
  return true;
};

export const _mapDataToFormSelect = data => {
  const newData = data.map(item => {
    const obj = {};
    obj.label = item.name;
    obj.value = item.code;
    return obj;
  });
  return newData;
};

export const _mapObject = obj => Object.keys(obj).map(key => obj[key]);

export const _trim = value => {
  if (value) {
    return value.toString().replace(/ /g, '');
  }
};

export const _removeFromList = (arr, selected) => {
  const temp = [];
  arr.map(list => {
    if (selected.indexOf(list) === -1) {
      temp.push(list);
    }
    return temp;
  });
  arr.splice(0, arr.length, ...temp);
};

export const _sortItems = (items, sortParameter) => {
  const sortedItems = items.sort((a, b) => {
    const prev = a[sortParameter].toLowerCase();
    const next = b[sortParameter].toLowerCase();

    let comparison = 0;

    if (prev > next) {
      comparison = 1;
    } else if (prev < next) {
      comparison = -1;
    }
    return comparison;
  });
  return sortedItems;
};

export const _validateName = (name, obj) => {
  if (name === '' || name.match(/^[A-Z a-z]+$/)) {
    obj.name = name.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ' ');
  }
  return obj;
};

export const _validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const _validateNumber = n => {
  let firstChar;
  let number;
  const pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g;

  if (!n || n.length < 5) return false;

  if (typeof n === 'number') {
    number = `0${n}`;
  } else if (typeof n === 'string') {
    firstChar = n.substring(0, 1);
    number = firstChar === '0' ? n : `0${n}`;
  } else {
    return false;
  }
  return pattern.test(number.replace(/\s+/g, ''));
};

export const _transformToSelectOptions = (data, label, isMulti = true) => {
  if (isMulti) {
    return data.map(datum => {
      const obj = {};
      obj.label = datum[label];
      obj.value = String(datum._id);
      return obj;
    });
  }
  const obj = {};
  obj.label = data[label];
  obj.value = String(data._id);
  return obj;
};

export const _undoTransformToSelectOptions = (
  options,
  label,
  isMulti = true
) => {
  if (isMulti) {
    return options.map(datum => {
      const obj = {};
      obj._id = new BSON.ObjectId(datum.value);
      obj[label] = datum.label;
      return obj;
    });
  }
  const obj = {};
  obj[label] = options.label;
  obj._id = new BSON.ObjectId(options.value);
  return obj;
};

export const _generateUserId = email => {
  const invalidCharacters = ['.', '#', '$', '@', '[', ']'];
  const userId = email
    .split('')
    .map(character => (invalidCharacters.includes(character) ? '~' : character))
    .join('');
  return userId;
};
