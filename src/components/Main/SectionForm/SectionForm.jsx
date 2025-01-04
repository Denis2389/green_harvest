import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import styles from './SectionForm.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const notify = () => toast('Thank you for your feedback 💝')

const SectionForm = () => {

  const { t } = useTranslation;

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.formText}`,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.formText}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.formTextSpan}`,
      {
        opacity: 0,
        scale: 0.8,
        x: -30,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: `.${styles.formTextSpan}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.formParagraph}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.formParagraph}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.modalBox}`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.modalBox}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.formBtn}`,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: `.${styles.formBtn}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
  }, []);


  const [isSubmitting, setIsSubmitting] = useState(false)

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

    setIsSubmitting(true);
    setTimeout(() => {
      actions.resetForm();
      setIsSubmitting(false)
    }, 5000)
  };

  return (
    <section className={styles.formContainer}>
      <div>
        <h2 className={styles.formText}>
          {t('formTitle')}
        </h2>
        <p className={styles.formParagraph}>
          {t('formDescription')}
        </p>
      </div>
      <div className={styles.modalBox}>
        <h4 className={styles.textForm}>
          {t('formText')}
        </h4>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={styles.formWrapper}>
            <Field className={styles.inputName} type="text" name="username" placeholder='Username' required/>
            <Field className={styles.inputEmail} type="email" name="email" placeholder='Email' required/>
            <Field className={styles.inputComment} type="text" name="comment" placeholder='Comment'/>

            <button onClick={notify} className={styles.formBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'send'}
              <Toaster />
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default SectionForm