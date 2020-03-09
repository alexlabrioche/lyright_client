import * as yup from 'yup';

const loginUserSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Le nom est trop court')
    .max(100, 'Le nom est trop long')
    .required('Le nom est requis'),
  email: yup
    .string()
    .max(100, "L'email est trop long")
    .required("L'email est requis")
    .email("Ce n'est pas un email"),
  password: yup
    .string()
    .required('Veuillez entrer votre mot de passe')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      '8 caractères minimum dont une majuscule, une minuscule et un nombre',
    ),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Les mots de passes doivent correspondre',
    ),
});

export default loginUserSchema;
