// import React, { useState, useEffect } from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import DatePickerField from './DatePickerField'
// import styled from 'styled-components'

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

// export default function ContactForm() {
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         message: '',
//         surname: '',
//         date: '',
//       }}
//       onSubmit={(values, actions) => {
//         fetch('/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//           body: encode({ 'form-name': 'contact-form', ...values }),
//         })
//           .then(() => {
//             alert('Success')
//             actions.resetForm()
//           })
//           .catch(() => {
//             alert('Error')
//           })
//       }}
//       validate={values => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//         const errors = {}
//         if (!values.name) {
//           errors.name = 'Name Required'
//         }
//         if (!values.surname) {
//           errors.surname = 'Surname Required'
//         }
//         if (!values.data) {
//           errors.data = 'Data jest wymagana'
//         }
//         if (!values.email || !emailRegex.test(values.email)) {
//           errors.email = 'Poprawny adres email jest wymagany'
//         }
//         if (!values.message) {
//           errors.message = 'Message Required'
//         }
//         return errors
//       }}
//     >
//       <CustomForm name='contact-form' data-netlify='true' data-netlify-honeypot='bot-field'>
// <Field type='hidden' name='form-name' value='contact-form' />
// <Field type='hidden' name='bot-field' />
// <label htmlFor='name'>
//   Imię: <Input name='name' placeholder='Imię ' type='text' required />
// </label>
// <ErrorMessage name='Imię jest wymagane' />
// <label htmlFor='surname '>
//   Nazwisko:
//   <Input name='surname ' placeholder='Nazwisko ' type='text' required />{' '}
// </label>
// <ErrorMessage name='Nazwisko jest wymagane' />
// <label htmlFor='date'>
//   Wybierz datę i godzinę spływu:
//   <DatePickerField name='date' type='datetime' placeholder='Wybierz datę i godzinę spływu ' required />{' '}
// </label>
// <label htmlFor='email'>
//   Email: <Input name='email' placeholder='email' type='email' required />
// </label>
// <label htmlFor='phone'>
//   Telefon:
//   <Input name='phone' placeholder='telefon' type='tel' required />{' '}
// </label>
// <label htmlFor='number'>
//   Ilość osób: <Input name='number' keyboardType='numeric' placeholder='podaj ilość osób' required />
// </label>
// <label htmlFor='road'>
//   Wybierz trasę:
//   <Select name='road' component='select'>
//     <option hidden> -- Wybierz swoją trasę spływu -- </option>
//   </Select>{' '}
// </label>
// <label htmlFor='message'>
//   Message:
//   <Textarea name='message' component='textarea' placeholder='Zostaw nam wiadomość' rows='4' fullWidth />{' '}
// </label>

// <Submit type='submit'>Wyślij</Submit>
//       </CustomForm>
//     </Formik>
//   )
// }

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePickerField from './DatePickerField'

export const InputBase = `
background-color: white;
border: 1px solid #52782c;
border-radius: 4px;
font-size: 1rem;
line-height: 1.5rem;
font-style: normal;
font-weight: 400;
width: 100%;
margin-top: 0.5rem;
padding: 0.75rem 0.75rem;
&:focus,
&:active {
  box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
  border: 1px solid rgb(26, 33, 43);
  outline: none;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  background-color: white;
  border: 1px solid lightgrey;
  box-shadow: 0 0 0px 1000px #fff inset;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: black;
}
`
const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 500px;
  margin: 0 auto;
  & .react-datepicker-wrapper {
    & .react-datepicker__input-container {
      width: 100%;
      & input {
        background-color: white;
        border: 1px solid #52782c;
        border-radius: 4px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-style: normal;
        font-weight: 400;
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.75rem 0.75rem;
        &:focus,
        &:active {
          box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
          border: 1px solid rgb(26, 33, 43);
          outline: none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          background-color: white;
          border: 1px solid lightgrey;
          box-shadow: 0 0 0px 1000px #fff inset;
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: black;
        }
      }
      & .react-datepicker-ignore-onclickoutside {
        border: none;
        border-color: transparent;
        width: 100%;
        &:focus,
        &:active {
          border: none;
        }
      }
    }
  }
`
const Select = styled.select`
  background-color: white;
  border: 1px solid #52782c;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`
const Input = styled.input`
  ${InputBase};
`
const Submit = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: #52782c;
  border: 1px solid #52782c;
  border-radius: 24px;
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: background-color 0.4s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #52782c;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`
const Textarea = styled.textarea`
  ${InputBase};
  width: 100%;
`
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {
  const [data, setData] = useState()

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value })

  return (
    <CustomForm
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      {/* <input name='name' placeholder='Your Name' type='text' />
      <input name='email' placeholder='name@name.com' type='email' />
      <textarea name='message' />
      <button>Send</button> */}
      <Input type='hidden' name='form-name' value='contact' onChange={handleChange} />
      <Input type='hidden' name='bot-field' onChange={handleChange} />
      <label htmlFor='name'>
        Imię: <Input name='name' placeholder='Imię ' type='text' required onChange={handleChange} />
      </label>
      <label htmlFor='surname '>
        Nazwisko:
        <Input name='surname ' placeholder='Nazwisko ' type='text' required onChange={handleChange} />{' '}
      </label>
      <label htmlFor='date'>
        Wybierz datę i godzinę spływu:
        <DatePickerField name='date' type='datetime' placeholder='Wybierz datę i godzinę spływu ' required />{' '}
      </label>
      <label htmlFor='email'>
        Email: <Input name='email' placeholder='email' type='email' required onChange={handleChange} />
      </label>
      <label htmlFor='phone'>
        Telefon:
        <Input name='phone' placeholder='telefon' type='tel' required onChange={handleChange} />{' '}
      </label>
      <label htmlFor='number'>
        Ilość osób:{' '}
        <Input name='number' keyboardType='numeric' placeholder='podaj ilość osób' required onChange={handleChange} />
      </label>
      <label htmlFor='road'>
        Wybierz trasę:
        <Select name='road' component='select'>
          <option hidden> -- Wybierz swoją trasę spływu -- </option>
        </Select>{' '}
      </label>
      <label htmlFor='message'>
        Message:
        <Textarea
          name='message'
          component='textarea'
          placeholder='Zostaw nam wiadomość'
          rows='4'
          fullWidth
          onChange={handleChange}
        />{' '}
      </label>
      <Submit type='submit'>Wyślij</Submit>
    </CustomForm>
    // <Formik
    //   initialValues={{ fullName: '', email: '' }}
    //   validate={values => {
    //     const errors = {}
    //     if (!values.fullName) {
    //       errors.fullName = 'Required'
    //     } else if (values.fullName.length <= 1) {
    //       errors.fullName = 'must be at least 2 characters'
    //     }
    //     if (!values.email) {
    //       errors.email = 'Required'
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //       errors.email = 'Invalid email address'
    //     }
    //     return errors
    //   }}
    //   onSubmit={data => {
    //     fetch('/', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //       body: encode({
    //         'form-name': 'contact-form',
    //         ...data,
    //       }),
    //     })
    //       .then(() => {
    //         alert('send')
    //       })
    //       .catch(error => alert(error))
    //   }}
    // >
    //   <Form name='contact-form' data-netlify='true' data-netlify-honeypot='bot-field' data-netlify-recaptcha='true'>
    //     <Field type='hidden' name='form-name' />
    //     <Field type='hidden' name='bot-field' />

    //     <label htmlFor='fullName'>Full name:</label>
    //     <Field name='fullName' type='text' />
    //     <ErrorMessage name='fullName' />
    //     <br />
    //     <label htmlFor='email'>Email</label>
    //     <Field name='email' type='text' />
    //     <ErrorMessage name='email' />
    //     <br />
    //     <button type='submit'>Submit</button>
    //   </Form>
    // </Formik>
  )
}

export default ContactForm
