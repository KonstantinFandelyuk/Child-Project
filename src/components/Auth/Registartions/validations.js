import * as Yup from 'yup';

export const RegSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  firstName: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  secondName: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  email: Yup.string().email('Корректно').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(15, 'Too Long!').required('Required'),
  // phoneNumber: Yup.number().min(12, 'Too Short!').max(12, 'Too Long!'),
  userBirthday: Yup.string().required('Required'),
});
