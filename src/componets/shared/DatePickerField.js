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
      selected={new Date() || null}
      dateFormat='MMMM d, yyyy h:mm aa'
      onChange={val => {
        console.log(val)
        // setFieldValue(field.name, val)
      }}
    />
  )
}

export default DatePickerField
