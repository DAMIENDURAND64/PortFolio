import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import { FormValues } from "@/utils/type";
import { motion } from "framer-motion";

export default function Contact() {
  const router = useRouter();
  const schema = yup
    .object({
      FullName: yup.string().max(50).required("Full Name is required"),
      phone: yup
        .number()
        .typeError("Provide a valid phone number")
        .required("Phone number is required"),
      email: yup.string().email().max(200).required("Email is required"),
      message: yup.string().max(4000).required("Message is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully. Thank you!");
          router.push("/").catch((err) => console.log(err));
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <>
      <Head>
        <title>Damien Durand | Contact</title>
      </Head>
      <Wrapper className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-24 ">
        <div className="md:px-6 py-6 text-center">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Contact
          </div>
          <p className="leading-8 mb-8 text-xl  max-w-xl mt-10 text-WhiteGray">
            If you&apos;re looking for a motivated and passionate fullStack
            developer to help bring your web application ideas to life, feel
            free to contact me. Let&apos;s discuss how I can contribute to your
            team and deliver efficient results.
          </p>
        </div>
        <div className="lg:w-[550px] sm:w-[40rem] md:w-[490px] px-6 text-center py-6 shadow-ShadowBlur xxs:w-full ">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Contact Form
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="FullName"
                {...register("FullName")}
              />
              {errors?.FullName && (
                <p className="text-red-500 text-sm">
                  {String(errors.FullName.message)}
                </p>
              )}
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {String(errors.phone.message)}
                </p>
              )}
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="email"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500 text-sm">
                  {String(errors.email.message)}
                </p>
              )}
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <textarea
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none max-h-36"
                placeholder="Message"
                {...register("message")}
              />
              {errors?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.message.message)}
                </p>
              )}
            </div>
            <div className="w-full flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" mt-10 px-8 py-4 w-2/3 shadow-ShadowBlur uppercase text-sm cursor-pointer"
              >
                Send Message
              </motion.div>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
