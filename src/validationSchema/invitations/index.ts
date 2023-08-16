import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
});
