import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Send, 
  FileText,
  CheckCircle,
  Loader2,
  X,
  Check,
  AlertCircle,
  Facebook,
  MessageCircle,
  WhatsAppIcon
} from "lucide-react";
import { useState, useEffect } from "react";

// Custom Toast Component
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const typeConfig = {
    success: {
      bg: "bg-green-500",
      icon: <Check className="w-4 h-4" />,
      border: "border-green-400",
    },
    error: {
      bg: "bg-red-500",
      icon: <AlertCircle className="w-4 h-4" />,
      border: "border-red-400",
    },
    info: {
      bg: "bg-blue-500",
      icon: <CheckCircle className="w-4 h-4" />,
      border: "border-blue-400",
    },
  };

  const config = typeConfig[type];

  return (
    <div className={`animate-slide-in fixed top-4 right-4 z-50 min-w-[280px] max-w-[90vw] rounded-lg shadow-lg border ${config.border} ${config.bg}/90 backdrop-blur-sm text-white p-3 text-sm transform transition-all duration-300`}>
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">
          {config.icon}
        </div>
        <div className="flex-1">
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-0.5 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mutahidaniel2000@gmail.com",
    href: "mailto:mutahidaniel2000@gmail.com",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    hoverColor: "hover:bg-red-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 703 343 652",
    href: "tel:+254703343652",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Garissa, Kenya",
    href: "https://maps.google.com/?q=Garissa,Kenya",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mainuucoder",
    color: "bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700",
    iconColor: "text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-mutahi-5952ba298",
    color: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
    iconColor: "text-white",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/yourusername",
    color: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    iconColor: "text-white",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    href: "https://t.me/yourusername",
    color: "bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700",
    iconColor: "text-white",
  },
];

// Custom WhatsApp Icon Component (since it's not in lucide-react by default)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.798 2 2.548 6.193 2.54 11.393c-.003 1.747.456 3.457 1.328 4.985L2.25 21.75l5.407-1.566c1.468.826 3.126 1.261 4.833 1.262h.004c5.198 0 9.456-4.195 9.464-9.396.004-2.51-.972-4.87-2.858-6.757zM12.011 20.045h-.003c-1.497 0-2.965-.403-4.242-1.162l-.304-.18-3.209.93.995-3.112-.182-.318a8.393 8.393 0 0 1-1.275-4.465c.008-4.64 3.78-8.406 8.43-8.406 2.251 0 4.367.878 5.958 2.473a8.366 8.366 0 0 1 2.469 5.972c-.008 4.642-3.78 8.408-8.437 8.408zm4.624-6.282c-.248-.124-1.465-.722-1.692-.805-.227-.083-.392-.124-.556.124-.164.248-.639.805-.783.97-.144.165-.289.186-.537.062-.717-.332-1.311-.736-1.842-1.258-.694-.681-1.164-1.514-1.301-1.776-.136-.262-.014-.404.102-.534.105-.117.235-.305.352-.457.117-.152.156-.262.234-.435.078-.173.039-.326-.02-.456-.059-.13-.556-1.337-.762-1.83-.2-.477-.404-.413-.556-.42l-.475-.008c-.164 0-.43.062-.655.31-.225.249-.86.84-.86 2.05 0 1.21.88 2.378 1.004 2.543.124.165 1.733 2.647 4.2 3.712.586.253 1.044.405 1.4.518.588.186 1.124.16 1.548.097.472-.07 1.455-.594 1.66-1.168.205-.574.205-1.066.144-1.168-.062-.102-.226-.165-.474-.29z"/>
  </svg>
);

// Add WhatsApp to social links
const socialLinksWithWhatsApp = [
  ...socialLinks,
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/254703343652", // Your WhatsApp number with country code
    color: "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
    iconColor: "text-white",
  },
];

interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  
  // CV file path
  const cvFilePath = "/daniel-mutahi-cv.pdf";
  
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkqlnwq";
  
  // Show toast function
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  // Remove toast
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Handle CV download with feedback
  const handleDownloadCV = async () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = cvFilePath;
      const fileName = "Daniel-Mutahi-Resume.pdf";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast("CV downloaded successfully!", 'success');
    } catch (error) {
      showToast("Failed to download CV. Please try again.", 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "254703343652"; // Your WhatsApp number
    const message = encodeURIComponent("Hi Daniel, I saw your portfolio and would like to connect!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    showToast("Opening WhatsApp...", 'info');
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.email || !formData.message) {
      showToast("Please fill in all required fields", 'error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        })
      });

      if (response.ok) {
        showToast("Message sent successfully! I'll get back to you soon.", 'success');
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast("Failed to send message. Please try again or email me directly.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Copy email to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${type} copied to clipboard!`, 'success');
    } catch (error) {
      showToast("Failed to copy to clipboard", 'error');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header - Made smaller for mobile */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-2">
            Ready to collaborate or discuss opportunities?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                Contact Info
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        className="flex items-center space-x-3"
                        target={info.href.startsWith('http') ? "_blank" : "_self"}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <div className={`p-3 rounded-xl ${info.bgColor} transition-transform duration-300`}>
                          <info.icon className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide truncate">
                            {info.label}
                          </p>
                          <p className="text-sm md:text-base font-semibold text-foreground truncate">
                            {info.value}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-xs px-2 py-1 h-auto"
                          onClick={(e) => {
                            e.preventDefault();
                            copyToClipboard(info.value.replace('+254 ', '+254'), info.label);
                          }}
                        >
                          Copy
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Connect Button */}
            <Card className="shadow-lg border-green-500/30 bg-gradient-to-br from-green-500/5 to-green-500/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-green-500">
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Quick WhatsApp Connect</h4>
                      <p className="text-xs text-muted-foreground">Get instant response</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 h-auto"
                  >
                    <MessageCircle className="w-3 h-3 mr-1.5" />
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links - COMPACT VERSION */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                Connect With Me
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinksWithWhatsApp.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-3 md:p-3.5 rounded-lg ${social.color} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center group`}
                    title={social.label}
                  >
                    <social.icon className={`w-4 h-4 md:w-5 md:h-5 ${social.iconColor}`} />
                    <span className="sr-only">{social.label}</span>
                    <span className="absolute -top-1 -right-1 text-[10px] font-semibold text-white/40">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-2">
                Available on all platforms
              </p>
            </div>

            {/* CV Download Card - Compact */}
            <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-4 md:p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-foreground mb-1">
                        Download Resume
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Skills, experience & projects
                      </p>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary mt-1 inline-block">
                        PDF
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="text-xs md:text-sm px-3 py-2 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-primary/20"
                    size="sm"
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-3 h-3 mr-1.5" />
                        Download CV
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Note - Smaller */}
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Quick Response</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Respond within 24 hours (faster on WhatsApp)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="shadow-lg border-border/50 bg-card/80">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-1.5 rounded-md bg-primary/10">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Send Message</h3>
                    <p className="text-xs text-muted-foreground">
                      I'll respond as soon as possible
                    </p>
                  </div>
                </div>
                
                {/* Formspree Form */}
                <form 
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Formspree hidden fields for better email formatting */}
                  <input type="hidden" name="_replyto" value={formData.email} />
                  <input type="hidden" name="_subject" value={`Portfolio Contact: ${formData.subject}`} />
                  <input type="hidden" name="_format" value="plain" />
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-xs md:text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-xs md:text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 resize-none outline-none"
                      placeholder="Hi Daniel, I'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-sm py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground pt-2">
                    Your information is safe with me
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Preferences - Smaller */}
            <div className="mt-4 p-3 rounded-lg bg-sky-500/5 border border-sky-500/20">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-sky-500" />
                <p className="text-xs font-medium text-foreground">Best Ways to Reach Me</p>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="text-center p-1.5 rounded-md bg-green-500/10">
                  <p className="text-[10px] font-semibold text-green-600">Instant</p>
                  <p className="text-[9px] text-muted-foreground">WhatsApp</p>
                </div>
                <div className="text-center p-1.5 rounded-md bg-sky-500/10">
                  <p className="text-[10px] font-semibold text-sky-600">Quick</p>
                  <p className="text-[9px] text-muted-foreground">Telegram</p>
                </div>
                <div className="text-center p-1.5 rounded-md bg-green-500/10">
                  <p className="text-[10px] font-semibold text-green-600">Formal</p>
                  <p className="text-[9px] text-muted-foreground">Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note - Smaller */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Open to remote work • Available for projects • Based in Kenya (GMT+3)
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Or email me directly at: mutahidaniel2000@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;