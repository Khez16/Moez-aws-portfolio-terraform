import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Particles } from "../components/Particles";



const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "", number: "", message: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('From Submit', formData);
      await emailjs.send("service_6b59hqq", "template_og010zw",
       {form_name: formData.name, to_name: "Moez", 
        from_email:formData.email, to_email: "moez.khan@ontariotechu.net",
        number: formData.number,
        message: formData.message, 
      }, "lZYR_KgYD-iw5dG2R");
      setIsLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setFormData({name: "", email: "", number: "", message: ""});
    }catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Something went wrong.");
    }
    
    //service_6b59hqq  Password for emailjs
    //template_og010zw template id
  }
  return (
    <section id="Contact" className="relative flex items-center c-space
    section-spacing">
      <Particles 
      className="absolute inset-0 -z-50 "
      quantity={300}
      ease={60}
      color="#ffffff"
      refresh/>
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto 
      border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Lets Talk</h2>
          <p className="font-normal text-neutral-400">
            Wheter you are looking to build a new website or improve your platform etc...
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">Full Name</label>
            <input id="name" name="name" type="text" className="field-input field-input-focus"
            placeholder="John Doe"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">Email</label>
            <input id="email" name="email" type="email" className="field-input field-input-focus"
            placeholder="JohnDoe@email.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required/>
          </div>
          <div className="mb-5">
            <label htmlFor="number" className="feild-label">Telephone Number</label>
            <input id="number" name="number" type="number" className="field-input field-input-focus"
            placeholder="123-456-7890"
            autoComplete="number"
            value={formData.number}
            onChange={handleChange}
            required/>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">Message</label>
            <textarea id="message" name="message"  rows={5} className="field-input field-input-focus"
            placeholder="Share your thoughts"
            autoComplete="message"
            value={formData.message}
            onChange={handleChange}
            required/>
          </div>
           
          <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md
          cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {!isLoading?"Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;