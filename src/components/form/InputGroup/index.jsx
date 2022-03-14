import React from 'react';
import styles from './index.module.scss';

const InputGroup = ({type, placeholder, name, formik}) => {

    return (
        <div className={styles.InputGroup}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.errors[name] ? 
                <div className={styles.errors}>Laukelis privalomas</div> : null}
        </div>
)
}

export default InputGroup;
