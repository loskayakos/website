import React from 'react'
import { Formik, useField, useFormikContext } from 'formik'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl' // the locale you want
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pl', pl) // register it with the name you want
const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <DatePicker
      {...field}
      {...props}
      placeholder='wybierz datę i godzinę spływu'
      locale='pl'
      showTimeSelect
      selected={(field.value && new Date(field.value)) || null}
      dateFormat='MMMM d, yyyy h:mm aa'
      onChange={val => {
        setFieldValue(field.name, val)
      }}
    />
  )
}

export default DatePickerField
