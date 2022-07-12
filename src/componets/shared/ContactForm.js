import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import DatePickerField from './DatePickerField'
import styled from 'styled-components'

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

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        surname: '',
        date: '',
      }}
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact-form', ...values }),
        })
          .then(() => {
            alert('Success')
            actions.resetForm()
          })
          .catch(() => {
            alert('Error')
          })
          .finally(() => actions.setSubmitting(false))
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const errors = {}
        if (!values.name) {
          errors.name = 'Name Required'
        }
        if (!values.surname) {
          errors.surname = 'Surname Required'
        }
        if (!values.data) {
          errors.data = 'Data Required'
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = 'Valid Email Required'
        }
        if (!values.message) {
          errors.message = 'Message Required'
        }
        return errors
      }}
    >
      <CustomForm name='contact-form' data-netlify='true' data-netlify-honeypot='bot-field'>
        <Field type='hidden' name='form-name' />
        <Field type='hidden' name='bot-field' />
        <label htmlFor='name'>
          Imię: <Input name='name' placeholder='Imię ' type='text' required />
        </label>

        <ErrorMessage name='Imię jest wymagane' />

        <label htmlFor='surname '>
          Nazwisko:
          <Input name='surname ' placeholder='Nazwisko ' type='text' required />{' '}
        </label>

        <ErrorMessage name='Nazwisko jest wymagane' />

        <label htmlFor='date'>
          Wybierz datę i godzinę spływu:
          <DatePickerField name='date' type='datetime' placeholder='Wybierz datę i godzinę spływu ' required />{' '}
        </label>

        <label htmlFor='email'>
          Email: <Input name='email' placeholder='email' type='email' required />
        </label>

        <label htmlFor='phone'>
          Telefon:
          <Input name='phone' placeholder='telefon' type='tel' required />{' '}
        </label>

        <label htmlFor='number'>
          Ilość osób: <Input name='number' keyboardType='numeric' placeholder='podaj ilość osób' required />
        </label>

        <label htmlFor='road'>
          Wybierz trasę:
          <Select name='road' component='select' required>
            <option hidden> -- Wybierz swoją trasę spływu -- </option>
          </Select>{' '}
        </label>

        <label htmlFor='message'>
          Message:
          <Textarea name='message' component='textarea' placeholder='Zostaw nam wiadomość' rows='4' fullWidth />{' '}
        </label>

        <Submit type='submit'>Wyślij</Submit>
      </CustomForm>
    </Formik>
  )
}