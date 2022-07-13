import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl' // the locale you want
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pl', pl) // register it with the name you want
const DatePickerField = ({ ...props }) => {
  // const { setFieldValue } = useFormikContext()
  return (
    <DatePicker
      {...props}
      placeholder='wybierz datę i godzinę spływu'
      locale='pl'
      showTimeSelect
      selected={props.value}
      dateFormat='yyyy-mm-dd HH:mm'
      onChange={val => {
        props.handleChange(val)
      }}
    />
  )
}

export default DatePickerField
