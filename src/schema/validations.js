import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Անունը պետք է լինի առնվազն 2 տառ')
    .max(30, 'Անունը պետք է լինի մինչև 30 տառ')
    .required('Անունը պարտադիր է'),
    
  surName: Yup.string()
    .min(2, 'Ազգանունը պետք է լինի առնվազն 2 տառ')
    .max(30, 'Ազգանունը պետք է լինի մինչև 30 տառ')
    .required('Ազգանունը պարտադիր է'),
    
  email: Yup.string()
    .email('Սխալ email')
    .required('Email-ը պարտադիր է'),

  region: Yup.string().required('Մարզը պարտադիր է'),
  city: Yup.string().required('Քաղաքը պարտադիր է'),
  street: Yup.string().required('Փողոցը պարտադիր է'),
});
