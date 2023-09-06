import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ButtonClose from 'components/ButtonClose';
import notices from 'helpers/Notification';
import styles from './ContactForm.module.scss';

function ContactForm({ showForm }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name is too short')
      .matches(
        /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'\s]+$/,
        'Only alphabets are allowed'
      )
      .required('This field is required'),
    email: Yup.string()
      .email('Incorrect format')
      .matches(
        /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
        'Incorrect format'
      )
      .required('This field is required'),
    message: Yup.string()
      .min(3, 'Text is too short')
      .required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    if (values) {
      actions.resetForm();
      notices.showSuccess('The email has been sent');
      return;
    }
  };

  return (
    <Modal variant="modal" closeModal={showForm}>
      <ButtonClose
        aria-label={'close'}
        type={'button'}
        onClick={() => showForm(false)}
      />

      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form className={styles.contactForm}>
            <h2 className={styles.formHeading}>
              Please fill in the details so that we can contact you
            </h2>
            <div className={styles.labelWrap}>
              <Field
                required
                id="name"
                type="text"
                name="name"
                className={styles.formInput}
              />
              <label htmlFor="name" className={styles.label}>
                Name
              </label>

              {errors.name && touched.name && (
                <div className={styles.errorMsg}>{errors.name}</div>
              )}
            </div>

            <div className={styles.labelWrap}>
              <Field
                required
                id="email"
                type="text"
                name="email"
                className={styles.formInput}
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>{errors.email}</div>
              )}
            </div>

            <div className={styles.labelWrap}>
              <Field
                required
                as="textarea"
                id="message"
                type="textarea"
                name="message"
                className={styles.formTextarea}
              />
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              {errors.message && touched.message && (
                <div className={styles.errorMsg}>{errors.message}</div>
              )}
            </div>

            <div className={styles.btnWrap}>
              <Button
                type={'submit'}
                title={'Submit'}
                variant={!(dirty && isValid) ? 'disabledBtn' : 'btn'}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ContactForm;
