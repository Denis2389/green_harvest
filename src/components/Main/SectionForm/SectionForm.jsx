import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import styles from './SectionForm.module.css'

const SectionForm = () => {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    comment: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <section className={styles.formContainer}>
      <div>
        <h2 className={styles.formText}>
          Fresh <span className={styles.formTextSpan}>Harvest</span> Box has got
          you covered
        </h2>
        <p className={styles.formParagraph}>
          Our boxes are packed with delicious, nutritious vegetables, perfect
          for anyone looking to eat healthier or support local farmers. Order
          your box today and start enjoying the best that nature has to offer!
        </p>
      </div>
      <div className={styles.modalBox}>
        <h4 className={styles.textForm}>
          Ordering <span className={styles.firstSpan}>from us</span> is quick
          and easy! Fill out
          <span className={styles.secondSpan}>the form</span> below and we will
          contact you !
        </h4>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form>
            <Field className={styles.inputName} type="text" name="username" />
            <Field className={styles.inputEmail} type="email" name="email" />
            <Field className={styles.inputComment} type="text" name="comment" />

            <button className={styles.formBtn} type="submit">
              send
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default SectionForm