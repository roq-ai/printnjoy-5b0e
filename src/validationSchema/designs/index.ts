import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  vendor_id: yup.string().nullable(),
});
