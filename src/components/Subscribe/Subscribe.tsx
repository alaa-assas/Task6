import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";

const Subscribe = () => {
  const form = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const SendMail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = emailRef.current?.value.trim() || "";

    if (email.length > 0) {
        const templateParams = {
          to_name: email,
          to_email: email,
        };

        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID || ""
          )
          .then(() => {
            alert("Subscription successful!");
            form.current?.reset();
          })
          .catch(() => {
            alert("Failed!!!!!!!!!!!!");
          }) .finally(() => {
            setLoading(false);
          });
      } else {
        alert("Please Enter valid email");
        setLoading(false);
      }
    } 


  return (
    <div className="flex flex-col gap-4" data-aos="zoom-in">
      <form ref={form} className="flex flex-col md:flex-row gap-4" onSubmit={SendMail}>
        <input type="email" 
        ref={emailRef}
        placeholder="Enter your email" 
        className="pr-3.5 pl-4 py-3 border border-grey02 rounded-lg placeholder:text-gray01 md:w-[360px]" />

        <button
          type="submit"
          disabled={loading}
          className={`font-medium text-white bg-purple02 rounded-lg w-fit px-5 py-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
        > 
        {loading ? (
            <>
              <span className="inline-block animate-spin text-center"><TbLoader2 /></span>
            </>
          ) : (
            'Subscribe'
          )}
          
        </button>
      </form>

      <p className="text-sm text-gray01">
        We care about your data in our{" "}
        <Link to="#" className="underline underline-offset-4 dark:hover:text-grey03 hover:text-purple01 transition-colors duration-300">
          privacy policy
        </Link>
      </p>
    </div>
  );
};

export default Subscribe;