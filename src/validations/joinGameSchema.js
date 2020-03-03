import * as yup from 'yup';

const schema = yup.object().shape({
  code: yup
    .string()
    .length(5, '5 charactères !!')
    .matches(/^[a-zA-Z0-9]*$/, 'Uniquement alpha Numérique')
    .required('Le champs est requis'),
  pseudo: yup
    .string()
    .max(30, '30 lettres max')
    .required('Le champs est requis'),
});

export default schema;
