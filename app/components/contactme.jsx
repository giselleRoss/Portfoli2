import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/GithubIcon.png";
import LinkedinIcon from "../../public/LinkedinIcon.png";
import ContactForm from "./ContactForm";


export default function Contact() {

  return (
    <>
      <section className="grid md:grid-cols-2 my-12 md:my-12 md:pb-24 lg:py-24 gap-6 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
        <div className="mr-16">
          <h5 className="text-xl font-bold text-black my-4">Let's Connect!</h5>
          <p className="text-black mb-4 max-w-md">
            {" "}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have any questions or just trying to connect, I
            will do my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-4">
            <Link target="_blank" href="https://github.com/giselleRoss">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                height={50}
                width={50}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/gisellerosstech"
            >
              <Image
  src={LinkedinIcon}
  alt="Linkedin Icon"
  style={{ width: 'auto', height: 'auto', maxHeight: '50px', maxWidth: '50px' }}
/>
            </Link>
          </div>
        </div>
          <ContactForm />
      </section>
    </>
  );
}
