import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
  <div className="w-full max-w-xl text-center space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold">
      Get In <span className="text-primary">Touch</span>
    </h2>

    <p className="text-muted-foreground max-w-md mx-auto">
      Have a project in mind or want to collaborate?
      I'm always open to discussing new opportunities!
    </p>

    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Contact Information</h3>

      {/* Email */}
      <div className="flex items-start justify-center space-x-4 text-left max-w-sm mx-auto">
        <div className="p-3 rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Email</h4>
          <a
            href="mailto:mawilson0410@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            mawilson0410@gmail.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start justify-center space-x-4 text-left max-w-sm mx-auto">
        <div className="p-3 rounded-full bg-primary/10">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Phone</h4>
          <a
            href="tel:+12162135989"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +1 (216) 213-5989
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start justify-center space-x-4 text-left max-w-sm mx-auto">
        <div className="p-3 rounded-full bg-primary/10">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Location</h4>
          <span className="text-muted-foreground hover:text-primary transition-colors">
            Columbus, OH, USA
          </span>
        </div>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="pt-8">
      <h4 className="font-medium mb-4">Connect With Me on LinkedIn</h4>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/michael-wilson-0bb38b208/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  </div>
</section>



  );
};