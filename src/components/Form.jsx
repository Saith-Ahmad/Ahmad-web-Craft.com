import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as Yup from "yup";
import connect from "../assets/connect.png";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Form = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formsCollectionRef = collection(db, "Contact_Form");
  const [ConfirmationMessage, setConfirmationMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      Email: "",
      Message: "",
    },
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        await addDoc(formsCollectionRef, { values });
        formik.setValues({
          fullName: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        formik.setFieldTouched("fullName", false);
        formik.setFieldTouched("Email", false);
        formik.setFieldTouched("Message", false);
        setConfirmationMessage(
          "Your Form Has been Submitted Successfully. Our Team will Contact you soon.Have a nice day!"
        );
        emailjs.sendForm('service_ge7hs3m', 'template_sbt0g15', form.current, 'JofDpKdoSy9X5siMe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setTimeout(() => {
          setConfirmationMessage(null);
        }, 10000);
        setIsSubmitting(false);
      } catch (error) {
        console.log(error);
        setIsSubmitting(false);
      }
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(6, "Must be 6 Characters or Larger")
        .required("Required"),
      Email: Yup.string().email("Invalid Email Address").required("Required"),
      Message: Yup.string()
        .min(15, "Must be 15 Characters or Larger")
        .required("Required"),
    }),
  });

  return (
    <div className="mx-auto container  w-full md:px-10 px-5 mt-10" id="contact">
      <h2 className="text-3xl md:text-4xl font-inter font-black">
        Lets Connect
      </h2>
      <div className="h-[4px] w-[100px] bg-primary ms-3 mt-1 mb-4"></div>

      <div className="form-container h-auto md:h-[430px] flex justify-center flex-col md:flex-row">
        <div className="w-[full] md:w-[75%] p-5">
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-start font-poppins"
          >
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Full Name"
              className="w-full text-white h-[40px] input mt-2"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            {formik?.touched?.fullName && formik?.errors?.fullName && (
              <p className="text-primary para px-2">{formik.errors.fullName}</p>
            )}

            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="Your Email"
              className="w-full text-white h-[40px] input mt-2"
              value={formik.values.Email}
              onChange={formik.handleChange}
            />
            {formik?.touched?.Email && formik?.errors?.Email && (
              <p className="text-primary para px-2">{formik.errors.Email}</p>
            )}

            <textarea
              type="text"
              id="Message"
              name="Message"
              placeholder="Enter Your Message"
              className="w-full text-white h-[170px] input mt-2"
              cols="30"
              rows="10"
              value={formik.values.Message}
              onChange={formik.handleChange}
            />
            {formik?.touched?.Message && formik?.errors?.Message && (
              <p className="text-primary para px-2">{formik.errors.Message}</p>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="bg-primary w-full px-5 py-2 mt-2 rounded-md hover:bg-hoverGreen"
              disabled={isSubmitting}
              onClick={(e) => {
                if (isSubmitting) {
                  e.preventDefault(); 
                }
              }}
            >
             
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
            {ConfirmationMessage && (
              <p className="text-primary text-md mt-1">{ConfirmationMessage}</p>
            )}
          </form>
        </div>

        <div className="w-[full] md:w-[25%] flex justify-center  overflow-hidden">
          <img
            src={connect}
            alt="contact-us"
            className="md:h-[440px] h-[200px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
