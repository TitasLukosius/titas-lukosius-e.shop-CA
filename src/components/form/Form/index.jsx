import React from 'react';
import InputGroup from '../InputGroup';
import styles from './index.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = ({inputs, title }) => {

    const initialValues = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required')    
    })
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const InputList = inputs.map(input => <InputGroup key={input.id} type={input.type} placeholder={input.placeholder} name={input.name} formik={formik}
        />)

    return (
        <form className={styles.Form} onSubmit={formik.handleSubmit}>
            <h2>{title}</h2>
            {InputList}
            <button>Continue</button>
        </form>
    )
}

export default Form;
