import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl' // the locale you want
import formatDate from 'date-fns/format'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pl', pl) // register it with the name you want
const DatePickerField = ({ ...props }) => {
  return (
    <DatePicker
      {...props}
      placeholder='wybierz datę i godzinę spływu'
      locale='pl'
      showTimeSelect
      selected={props.value}
      dateFormat='yyyy-MM-dd HH:mm'
      onChange={val => {
        console.log(val)
        props.handleChange(val)
      }}
    />
  )
}

export default DatePickerField
