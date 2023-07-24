import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  design_id: yup.string().nullable(),
});
