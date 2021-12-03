import React from 'react';
import Select from 'react-select'
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {

  var options = [
    {"value":"ENGLISH","label":"english"},
    {"value":"SPANISH","label":"español"}
  ];

  const handleChange = (e) => {
    setLanguage(LOCALES[e.value]);
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      defaultValue={{"value":"SPANISH","label":"español"}}
    />
  )
};
