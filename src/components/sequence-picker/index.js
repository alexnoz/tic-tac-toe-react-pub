import React from 'react';

import { arrayOfSize } from '../../utils';

import s from './style.module.scss';

const SequencePicker = ({ min, max, onChange, value, id, label, disabled }) => (
  <div>
    <label className={s.label} htmlFor={id}>{label} </label>
    <select
      className={s.select}
      id={id}
      value={value}
      disabled={disabled}
      onChange={e => onChange(+e.target.value)}
    >
    {
      arrayOfSize(max - min + 1)
        .map((_, i) => min + i)
        .map(n => <option key={n} value={n}>{n}</option>)
    }
    </select>
  </div>
);

export default SequencePicker;
