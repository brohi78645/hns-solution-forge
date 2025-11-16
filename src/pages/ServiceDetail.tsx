import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, Video, AlertCircle, Shield, Clock, FileText, 
  Star, CheckCircle, ArrowLeft, Quote, Users, 
  TrendingUp, Award, Phone
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData: Record<string, any> = {
    "remote-monitoring": {
      icon: Eye,
      title: "24/7 Remote Monitoring",
      tagline: "Professional Eyes on Your Business, Around the Clock",
      description: "Our 24/7 remote monitoring service provides continuous surveillance of your property with trained security professionals watching your camera feeds in real-time from our state-of-the-art Security Operations Center (SOC).",
      fullDescription: `Experience true peace of mind with our industry-leading 24/7 remote monitoring service. Our dedicated team of certified security professionals operates from a cutting-edge Security Operations Center, utilizing advanced video analytics, AI-powered detection systems, and proven protocols to protect your business around the clock.

Every camera feed is actively monitored by trained operators who can identify and respond to threats in real-time. Our multi-layered approach combines human expertise with advanced technology to ensure the highest level of security for your property.`,
      features: [
        { title: "Live Camera Monitoring", description: "Real-time viewing of all camera feeds by trained professionals" },
        { title: "AI-Powered Analytics", description: "Advanced detection algorithms to identify unusual activity" },
        { title: "Instant Alert System", description: "Immediate notifications when threats are detected" },
        { title: "Professional Staff", description: "Certified security operators with extensive training" },
        { title: "Multi-Site Support", description: "Monitor multiple locations from one centralized system" },
        { title: "Rapid Response", description: "Average response time under 30 seconds" }
      ],
      benefits: [
        "Reduce security incidents by up to 75%",
        "24/7/365 protection without the cost of on-site guards",
        "Professional trained operators vs. automated systems",
        "Immediate law enforcement coordination when needed",
        "Complete documentation of all security events",
        "Scalable solution that grows with your business"
      ],
      howItWorks: [
        { step: 1, title: "System Integration", description: "We connect to your existing CCTV cameras and NVR systems via secure encrypted channels" },
        { step: 2, title: "Live Monitoring", description: "Our trained operators monitor your feeds in real-time from our Security Operations Center" },
        { step: 3, title: "Threat Detection", description: "AI analytics and human verification identify potential security threats instantly" },
        { step: 4, title: "Immediate Response", description: "Upon threat verification, we execute the appropriate response protocol and notify authorities if needed" }
      ],
      testimonials: [
        {
          name: "Robert Johnson",
          position: "Owner",
          business: "Johnson's Retail Stores",
          location: "Houston, TX",
          rating: 5,
          text: "Since implementing HNS 24/7 monitoring, we've prevented over $200,000 in potential losses. The response time is incredible - they caught someone breaking in and had police on scene within 3 minutes.",
          image: "👨‍💼"
        },
        {
          name: "Maria Gonzales",
          position: "Operations Manager",
          business: "Gonzales Distribution Center",
          location: "Phoenix, AZ",
          rating: 5,
          text: "We monitor 3 warehouses across the state, and HNS has been flawless. The detailed incident reports and proactive monitoring have transformed our security operations. Best investment we've made.",
          image: "👩‍💼"
        },
        {
          name: "James Chen",
          position: "Security Director",
          business: "Chen Properties LLC",
          location: "Los Angeles, CA",
          rating: 5,
          text: "Professional, responsive, and incredibly effective. Their monitoring team has prevented multiple incidents at our commercial properties. The monthly reports help us optimize our security strategy.",
          image: "👨‍💼"
        }
      ],
      caseStudy: {
        title: "Retail Chain Reduces Theft by 82%",
        client: "Major Retail Chain - 15 Locations",
        challenge: "Experiencing significant inventory shrinkage and after-hours break-ins across multiple locations",
        solution: "Implemented 24/7 remote monitoring with AI-powered analytics and rapid response protocols",
        results: [
          "82% reduction in theft incidents within first 6 months",
          "Average response time of 23 seconds to security events",
          "Prevented estimated $450,000 in losses annually",
          "Reduced insurance premiums by 30%"
        ]
      },
      pricing: {
        starting: "$299/month",
        note: "per location - Custom packages available for multiple locations"
      },
      faq: [
        {
          question: "How quickly can you respond to an incident?",
          answer: "Our average response time is under 30 seconds from threat detection to action. When a security event is detected, our operators immediately verify the threat and initiate the appropriate response protocol, which may include audio warnings, law enforcement notification, or contacting your emergency contacts."
        },
        {
          question: "What types of cameras are compatible?",
          answer: "We support virtually all IP cameras, NVR systems, DVR systems, and modern CCTV equipment. Our system is compatible with RTSP, ONVIF protocols, and most major camera manufacturers including Hikvision, Dahua, Axis, Uniview, and more."
        },
        {
          question: "Do you monitor during holidays and weekends?",
          answer: "Yes! Our Security Operations Center operates 24 hours a day, 7 days a week, 365 days a year including all holidays. Your business is always protected."
        },
        {
          question: "What happens if my internet goes down?",
          answer: "We have redundant connection monitoring and will immediately alert you if we lose connection to your cameras. We also support backup cellular connections for critical locations to ensure continuous monitoring."
        }
      ]
    },
    "video-wall": {
      icon: Video,
      title: "Live Video Wall",
      tagline: "Complete Visibility Across All Your Locations",
      description: "Our Live Video Wall solution provides comprehensive multi-camera display systems allowing simultaneous monitoring of multiple locations and camera feeds on large-format displays.",
      fullDescription: `Transform your security operations with our professional Live Video Wall solution. Designed for businesses that need to monitor multiple cameras and locations simultaneously, our video wall technology provides crystal-clear HD viewing, customizable layouts, and instant camera switching capabilities.

Whether you're managing a single location with dozens of cameras or multiple sites across different cities, our video wall system gives you complete visual control. The intuitive interface allows operators to quickly identify and respond to incidents, switch between camera views, and maintain comprehensive situational awareness.`,
      features: [
        { title: "Multi-Screen Support", description: "Display dozens of camera feeds simultaneously across multiple monitors" },
        { title: "Custom Layouts", description: "Create personalized viewing configurations for different scenarios" },
        { title: "Instant Switching", description: "Click to focus on any camera with full-screen zoom capability" },
        { title: "HD Quality", description: "Crystal-clear high-definition video streaming" },
        { title: "Priority Alerts", description: "Automatic camera switching when motion or alerts are detected" },
        { title: "Multi-Location", description: "View cameras from multiple sites on one unified display" }
      ],
      benefits: [
        "Monitor unlimited cameras from one central location",
        "Reduce operator fatigue with intuitive interfaces",
        "Quick incident identification and response",
        "Customizable for your specific needs",
        "Scales from single to multi-location operations",
        "Integration with existing security systems"
      ],
      howItWorks: [
        { step: 1, title: "System Design", description: "We assess your monitoring needs and design the optimal video wall configuration" },
        { step: 2, title: "Installation", description: "Professional installation of displays, computers, and software in your monitoring location" },
        { step: 3, title: "Configuration", description: "Custom layout creation and camera assignment based on your operational requirements" },
        { step: 4, title: "Training & Support", description: "Comprehensive operator training and ongoing technical support" }
      ],
      testimonials: [
        {
          name: "Sarah Mitchell",
          position: "Security Manager",
          business: "Mitchell Shopping Centers",
          location: "Dallas, TX",
          rating: 5,
          text: "The video wall system has revolutionized our security operations. We monitor 8 shopping centers and over 200 cameras. Being able to see everything at once has dramatically improved our response capabilities.",
          image: "👩‍💼"
        },
        {
          name: "David Park",
          position: "Operations Director",
          business: "Park Logistics Group",
          location: "Chicago, IL",
          rating: 5,
          text: "Outstanding solution for our multi-warehouse operation. The custom layouts let us monitor loading docks, perimeters, and interior spaces efficiently. Setup was professional and training was thorough.",
          image: "👨‍💼"
        }
      ],
      caseStudy: {
        title: "Shopping Mall Improves Security Coverage",
        client: "Regional Shopping Mall - 180 Cameras",
        challenge: "Security team struggled to monitor all cameras effectively, missing critical incidents",
        solution: "Implemented 6-monitor video wall with custom layouts for different zones and priority alerts",
        results: [
          "100% camera visibility with organized layout system",
          "Incident response time reduced by 65%",
          "Prevented 15+ major security incidents in first year",
          "Improved coordination with mall security team"
        ]
      },
      pricing: {
        starting: "$1,499",
        note: "one-time setup + $99/month software license - Hardware costs vary by configuration"
      },
      faq: [
        {
          question: "How many cameras can the video wall display?",
          answer: "Our video wall systems can display from 4 to 64+ cameras simultaneously depending on your monitor configuration and layout preferences. We'll work with you to design the optimal setup for your needs."
        },
        {
          question: "Can I control it remotely?",
          answer: "Yes! Our video wall software includes remote access capabilities, allowing you to view and control the system from anywhere using secure web-based or mobile applications."
        },
        {
          question: "What hardware do I need?",
          answer: "We provide complete hardware recommendations based on your requirements. Typically this includes commercial-grade monitors, a powerful PC workstation, and necessary mounting hardware. We handle the entire installation process."
        },
        {
          question: "Is training included?",
          answer: "Absolutely. We provide comprehensive training for your security team on system operation, layout customization, and best practices for effective monitoring."
        }
      ]
    },
    "incident-response": {
      icon: AlertCircle,
      title: "Incident Response",
      tagline: "Rapid Action When It Matters Most",
      description: "Immediate action when suspicious activity is detected, including alerts to authorities and emergency contacts with sub-30 second response times.",
      fullDescription: `When security incidents occur, every second counts. Our Incident Response service provides immediate, professional action when threats are detected at your property. Our trained security operators verify threats in real-time and execute proven response protocols to protect your business and assets.

With an average response time of under 30 seconds, we ensure that security incidents are addressed immediately. Our comprehensive response includes threat verification, law enforcement coordination, emergency contact notification, and complete incident documentation for insurance and legal purposes.`,
      features: [
        { title: "Instant Verification", description: "Real-time threat assessment by trained professionals" },
        { title: "Multi-Channel Alerts", description: "SMS, email, phone, and mobile app notifications" },
        { title: "Police Coordination", description: "Direct communication with local law enforcement" },
        { title: "Emergency Contacts", description: "Automated notification system for your designated contacts" },
        { title: "Incident Documentation", description: "Complete reports with timestamps, video evidence, and action logs" },
        { title: "Follow-up Support", description: "Post-incident assistance and evidence provision" }
      ],
      benefits: [
        "Sub-30 second average response time",
        "Professional threat verification prevents false alarms",
        "Direct law enforcement coordination",
        "Complete incident documentation for insurance claims",
        "Reduced property damage and losses",
        "Peace of mind knowing experts are watching"
      ],
      howItWorks: [
        { step: 1, title: "Detection", description: "Motion sensors, AI analytics, or operator observation detects potential threat" },
        { step: 2, title: "Verification", description: "Trained operator reviews live video to confirm legitimate security threat" },
        { step: 3, title: "Response", description: "Immediate action: audio warnings, law enforcement notification, emergency contact alerts" },
        { step: 4, title: "Documentation", description: "Complete incident report generated with video evidence and timeline" }
      ],
      testimonials: [
        {
          name: "Thomas Anderson",
          position: "Owner",
          business: "Anderson Auto Dealership",
          location: "Miami, FL",
          rating: 5,
          text: "HNS caught someone breaking into our lot at 2 AM. Within 30 seconds they had verified the threat, activated audio warnings, and contacted police. The suspect fled immediately. Incredible response.",
          image: "👨‍💼"
        },
        {
          name: "Lisa Rodriguez",
          position: "Facilities Manager",
          business: "Rodriguez Medical Center",
          location: "San Antonio, TX",
          rating: 5,
          text: "The incident response has been flawless. We've had 3 security events in the past year, and HNS handled each one perfectly - immediate action, clear communication, and detailed documentation for our records.",
          image: "👩‍💼"
        },
        {
          name: "Kevin Williams",
          position: "Operations Manager",
          business: "Williams Construction Supply",
          location: "Atlanta, GA",
          rating: 5,
          text: "They prevented a major theft last month - caught it in progress, scared off the intruders with audio warnings, and had police there within 5 minutes. The detailed incident report was crucial for our insurance claim.",
          image: "👨‍💼"
        }
      ],
      caseStudy: {
        title: "Manufacturing Facility Prevents $500K Loss",
        client: "Manufacturing Facility - After-Hours Break-in Attempt",
        challenge: "Multiple after-hours break-in attempts resulting in equipment theft and property damage",
        solution: "24/7 incident response monitoring with audio warning capability and police coordination",
        results: [
          "Break-in attempt detected and verified within 15 seconds",
          "Audio warning activated, intruders fled immediately",
          "Police arrived on scene in 4 minutes",
          "Zero equipment loss, prevented estimated $500K in damages"
        ]
      },
      pricing: {
        starting: "$199/month",
        note: "per location - Included with 24/7 monitoring packages"
      },
      faq: [
        {
          question: "How fast is your response time really?",
          answer: "Our documented average response time is 27 seconds from initial threat detection to action initiation. This includes threat verification and protocol execution. In urgent situations, response can be even faster."
        },
        {
          question: "What if it's a false alarm?",
          answer: "Our trained operators verify all threats before taking action. This human verification layer dramatically reduces false alarms compared to automated systems. If we're unsure, we'll contact you directly before contacting authorities."
        },
        {
          question: "Do you coordinate with our security team?",
          answer: "Yes! We integrate with your existing security personnel and procedures. We can contact your security team, managers, or other designated personnel as part of the response protocol."
        },
        {
          question: "What documentation do you provide?",
          answer: "After every incident, you receive a comprehensive report including: timeline of events, video evidence, actions taken, law enforcement interaction details, and any follow-up recommendations."
        }
      ]
    },
    "virtual-guard": {
      icon: Shield,
      title: "Virtual Security Guard",
      tagline: "Professional Security Without the On-Site Cost",
      description: "Professional remote guard services providing active deterrence and response without on-site personnel costs - save up to 60% compared to traditional security guards.",
      fullDescription: `Replace expensive on-site security guards with our advanced Virtual Security Guard service. Combining live video monitoring, two-way audio communication, and professional security operators, we provide all the benefits of on-site guards at a fraction of the cost.

Our virtual guards actively monitor your property, can issue audio warnings to trespassers, engage in two-way communication with visitors, and coordinate with law enforcement when needed. This proactive approach provides visible and audible deterrence while maintaining the flexibility and cost-effectiveness of remote monitoring.`,
      features: [
        { title: "Audio Warnings", description: "Live audio announcements to deter suspicious individuals" },
        { title: "Two-Way Communication", description: "Speak directly with visitors, deliveries, or employees" },
        { title: "Active Deterrence", description: "Proactive security presence via audio and visual means" },
        { title: "Visitor Screening", description: "Verify and interact with visitors remotely" },
        { title: "Professional Operators", description: "Trained security professionals, not automated messages" },
        { title: "Cost Effective", description: "Save 50-70% compared to on-site guards" }
      ],
      benefits: [
        "60-70% cost savings vs. on-site security guards",
        "No sick days, breaks, or shift changes",
        "Cover multiple locations with one service",
        "Professional training and protocols",
        "Active deterrence through audio warnings",
        "Two-way communication capability"
      ],
      howItWorks: [
        { step: 1, title: "Monitoring", description: "Virtual guard monitors your property via live camera feeds" },
        { step: 2, title: "Detection", description: "Suspicious activity or unauthorized access is detected" },
        { step: 3, title: "Engagement", description: "Guard issues audio warning or engages in two-way communication" },
        { step: 4, title: "Escalation", description: "If threat persists, guard contacts law enforcement and your emergency contacts" }
      ],
      testimonials: [
        {
          name: "Michelle Brown",
          position: "General Manager",
          business: "Brown's Gas Stations",
          location: "Oklahoma City, OK",
          rating: 5,
          text: "We replaced two $18/hour guards with HNS virtual guards and the service is actually better. The audio warnings work incredibly well, and we're saving over $5,000 per month. Best decision we've made.",
          image: "👩‍💼"
        },
        {
          name: "Carlos Martinez",
          position: "Owner",
          business: "Martinez Construction Yard",
          location: "Denver, CO",
          rating: 5,
          text: "The virtual guard service has eliminated our after-hours theft problem completely. Vandals hear the warning, see they're being watched, and leave immediately. We haven't had a single incident since installation.",
          image: "👨‍💼"
        },
        {
          name: "Jennifer Lee",
          position: "Property Manager",
          business: "Lee Commercial Properties",
          location: "Seattle, WA",
          rating: 5,
          text: "We use virtual guards for 4 commercial properties. The two-way audio is fantastic for screening after-hours maintenance crews and deliveries. Professional, reliable, and incredibly cost-effective.",
          image: "👩‍💼"
        }
      ],
      caseStudy: {
        title: "Construction Site Eliminates Equipment Theft",
        client: "Commercial Construction Site - High-Value Equipment",
        challenge: "Repeated equipment theft costing $150K+ annually, on-site guards too expensive for 24/7 coverage",
        solution: "Virtual security guard service with audio warnings and proactive monitoring",
        results: [
          "Zero equipment theft incidents in 18 months",
          "71% cost savings vs. on-site guard quote",
          "Prevented estimated $225K in losses",
          "Caught and prosecuted 2 attempted thieves with video evidence"
        ]
      },
      pricing: {
        starting: "$399/month",
        note: "per location - Significantly less than on-site security guards"
      },
      faq: [
        {
          question: "How is this different from regular monitoring?",
          answer: "Virtual guards actively engage with people on your property through two-way audio. Instead of just watching and calling police, they can issue warnings, answer questions, and provide a visible security presence through audio interaction."
        },
        {
          question: "What can the virtual guard say?",
          answer: "Our operators can issue custom messages based on your policies. Common messages include trespassing warnings, business hours notifications, and security presence announcements. We can also have normal conversations for visitor screening."
        },
        {
          question: "Does this really deter criminals?",
          answer: "Absolutely. When people realize they're being actively watched and addressed by name, they almost always leave immediately. The element of surprise and immediate response is a powerful deterrent."
        },
        {
          question: "How much do I really save?",
          answer: "Most businesses save 60-70% compared to on-site guards. If you're paying $15-25/hour for guards, our virtual guard service typically costs 1/3 to 1/4 of that, with better coverage and no breaks or shift changes."
        }
      ]
    },
    "event-logging": {
      icon: Clock,
      title: "Event Logging",
      tagline: "Complete Documentation of All Security Events",
      description: "Comprehensive logging of all events, activities, and incidents with timestamp and video evidence for investigations, insurance claims, and compliance.",
      fullDescription: `Our Event Logging system captures and catalogs every security event with precise timestamps, video evidence, detailed metadata, and searchable records. This comprehensive record-keeping is invaluable for investigations, insurance claims, identifying patterns in security incidents, and maintaining compliance with industry regulations.

Every motion detection, alarm trigger, access event, and security incident is automatically logged with associated video clips and operator notes. The system creates a complete audit trail that can be easily searched, filtered, and exported for any purpose.`,
      features: [
        { title: "Automated Logging", description: "Every security event automatically recorded with timestamps" },
        { title: "Video Evidence", description: "Associated video clips saved with each event" },
        { title: "Detailed Reports", description: "Comprehensive incident reports with all relevant information" },
        { title: "Searchable Database", description: "Quickly find any event by date, time, location, or type" },
        { title: "Export Capabilities", description: "Generate reports in multiple formats for various purposes" },
        { title: "Long-Term Storage", description: "Secure cloud storage with customizable retention periods" }
      ],
      benefits: [
        "Complete audit trail of all security events",
        "Invaluable for insurance claims and legal proceedings",
        "Identify patterns and trends in security incidents",
        "Quick evidence retrieval when needed",
        "Compliance-ready documentation",
        "Support for investigations and prosecutions"
      ],
      howItWorks: [
        { step: 1, title: "Event Detection", description: "System or operator detects security event or activity" },
        { step: 2, title: "Automatic Recording", description: "Event details, timestamp, location, and video automatically captured" },
        { step: 3, title: "Operator Notes", description: "Security operator adds context, assessment, and actions taken" },
        { step: 4, title: "Secure Storage", description: "All data encrypted and stored in secure cloud database with searchable index" }
      ],
      testimonials: [
        {
          name: "Patricia Wilson",
          position: "Risk Manager",
          business: "Wilson Insurance Group",
          location: "Boston, MA",
          rating: 5,
          text: "The event logging has saved us countless hours during incident investigations. Everything is timestamped, video evidence is attached, and we can export reports instantly for insurance claims. Absolutely essential.",
          image: "👩‍💼"
        },
        {
          name: "Richard Taylor",
          position: "Legal Counsel",
          business: "Taylor Enterprises",
          location: "Philadelphia, PA",
          rating: 5,
          text: "Having detailed event logs with video evidence has been crucial for three legal cases. The documentation is thorough, professional, and has held up perfectly in legal proceedings. Worth every penny.",
          image: "👨‍💼"
        }
      ],
      caseStudy: {
        title: "Retail Chain Wins Major Insurance Claim",
        client: "Retail Store Chain - Slip and Fall Lawsuit",
        challenge: "Faced $300K lawsuit claiming negligence, needed evidence to defend against false claims",
        solution: "Complete event logging with video evidence and detailed incident reports",
        results: [
          "Retrieved complete video evidence within minutes",
          "Event logs showed employee response timeline",
          "Insurance company validated proper procedures were followed",
          "Lawsuit dismissed, saved $300K+ in legal fees and settlement"
        ]
      },
      pricing: {
        starting: "$99/month",
        note: "per location - Included with most monitoring packages"
      },
      faq: [
        {
          question: "How long are events stored?",
          answer: "Standard retention is 90 days, but we offer extended retention options up to 1 year or more depending on your compliance requirements. All data is securely encrypted and backed up."
        },
        {
          question: "Can I export specific events?",
          answer: "Yes! You can search, filter, and export events by date range, location, event type, or keyword. Exports include video evidence, timestamps, and detailed incident information in various formats."
        },
        {
          question: "Is this admissible as evidence?",
          answer: "Yes. Our event logs and video evidence are timestamped, tamper-proof, and maintain chain of custody documentation. They've been successfully used in numerous legal proceedings and insurance claims."
        },
        {
          question: "Who has access to the logs?",
          answer: "You control access permissions. You can grant access to specific personnel, allow read-only viewing, or restrict access to administrators only. All access is logged for audit purposes."
        }
      ]
    },
    "custom-reports": {
      icon: FileText,
      title: "Custom Reports",
      tagline: "Data-Driven Security Intelligence",
      description: "Detailed activity reports and analytics to help you understand patterns, improve security, and make informed decisions about your security operations.",
      fullDescription: `Make informed security decisions with our comprehensive Custom Reports service. We transform raw security data into actionable intelligence through detailed analytics, trend identification, and professional reporting. Our reports help you understand what's happening at your property, identify patterns, and optimize your security coverage.

From daily activity summaries to monthly executive reports, we provide the insights you need to improve security effectiveness, reduce costs, and demonstrate the value of your security investment to stakeholders.`,
      features: [
        { title: "Daily Summaries", description: "Automated daily reports of all security events and activities" },
        { title: "Activity Analytics", description: "Deep analysis of security patterns and trends" },
        { title: "Trend Analysis", description: "Identify patterns in incidents, timing, and locations" },
        { title: "Custom Scheduling", description: "Receive reports on your preferred schedule" },
        { title: "Visual Dashboards", description: "Easy-to-understand charts and graphs" },
        { title: "Executive Reports", description: "High-level summaries for stakeholders and management" }
      ],
      benefits: [
        "Data-driven security decision making",
        "Identify vulnerabilities and patterns",
        "Optimize security resource allocation",
        "Demonstrate ROI of security investment",
        "Professional presentations for stakeholders",
        "Proactive security improvements"
      ],
      howItWorks: [
        { step: 1, title: "Data Collection", description: "System collects data from all security events, cameras, and monitoring activities" },
        { step: 2, title: "Analysis", description: "Advanced analytics identify patterns, trends, and anomalies in security data" },
        { step: 3, title: "Report Generation", description: "Professional reports created with charts, graphs, and executive summaries" },
        { step: 4, title: "Delivery", description: "Reports automatically delivered via email or accessible through secure portal" }
      ],
      testimonials: [
        {
          name: "Steven Martinez",
          position: "CEO",
          business: "Martinez Hospitality Group",
          location: "Las Vegas, NV",
          rating: 5,
          text: "The custom reports have been eye-opening. We discovered that 80% of our incidents happened during shift changes. We adjusted our staffing and incidents dropped by 60%. The ROI is phenomenal.",
          image: "👨‍💼"
        },
        {
          name: "Angela Thompson",
          position: "CFO",
          business: "Thompson Manufacturing",
          location: "Detroit, MI",
          rating: 5,
          text: "I use the executive reports for board meetings. They clearly show the value of our security investment and have helped justify additional security measures. The data is comprehensive and professional.",
          image: "👩‍💼"
        }
      ],
      caseStudy: {
        title: "Warehouse Reduces Security Incidents 70%",
        client: "Distribution Warehouse - High Incident Rate",
        challenge: "Frequent security incidents but unclear patterns or root causes",
        solution: "Implemented detailed analytics and custom reporting to identify patterns",
        results: [
          "Discovered 75% of incidents occurred in one area during specific hours",
          "Adjusted camera coverage and patrol schedules",
          "Incidents reduced by 70% within 3 months",
          "Used data to justify security budget increase"
        ]
      },
      pricing: {
        starting: "$149/month",
        note: "per location - Basic reporting included with monitoring packages"
      },
      faq: [
        {
          question: "What types of reports are available?",
          answer: "We offer daily activity summaries, weekly incident reports, monthly trend analysis, quarterly executive summaries, and custom reports based on specific metrics you want to track. All reports are customizable to your needs."
        },
        {
          question: "Can I customize what's included?",
          answer: "Absolutely! We work with you to determine what metrics and information are most valuable. You can focus on specific cameras, time periods, incident types, or any other parameters relevant to your operations."
        },
        {
          question: "How often can I receive reports?",
          answer: "You choose the schedule. Reports can be sent daily, weekly, monthly, or on-demand. You can also access real-time dashboards anytime through our secure client portal."
        },
        {
          question: "Can I share reports with my team?",
          answer: "Yes! Reports can be automatically distributed to multiple recipients, and you can grant portal access to team members with appropriate permission levels."
        }
      ]
    }
  };

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/services")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-security">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/services")}
            className="mb-8 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Button>

          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <ServiceIcon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                {service.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                {service.tagline}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-accent text-accent-foreground">
                  <Award className="mr-1 h-3 w-3" />
                  Industry Leading
                </Badge>
                <Badge className="bg-primary-foreground/20 text-primary-foreground">
                  <Users className="mr-1 h-3 w-3" />
                  1000+ Clients
                </Badge>
                <Badge className="bg-primary-foreground/20 text-primary-foreground">
                  <Star className="mr-1 h-3 w-3" />
                  4.9/5 Rating
                </Badge>
              </div>
            </div>
          </div>

          <p className="text-lg text-primary-foreground/90 max-w-4xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
              <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              <TabsTrigger value="case-study">Case Study</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        Key Features
                      </h3>
                      <div className="space-y-3">
                        {service.features.map((feature: any, idx: number) => (
                          <div key={idx} className="flex gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{feature.title}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Benefits
                      </h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Starting at</div>
                        <div className="text-3xl font-bold text-accent">{service.pricing.starting}</div>
                        <div className="text-sm text-muted-foreground mt-1">{service.pricing.note}</div>
                      </div>
                      <Button size="lg" className="bg-accent hover:shadow-neon" asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* How It Works Tab */}
            <TabsContent value="how-it-works">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">How It Works</CardTitle>
                  <CardDescription>Simple, proven process for implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.howItWorks.map((step: any, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-accent">{step.step}</span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Client Success Stories</h2>
                  <p className="text-muted-foreground">Hear from businesses that trust our services</p>
                </div>

                {service.testimonials.map((testimonial: any, idx: number) => (
                  <Card key={idx} className="overflow-hidden">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="text-4xl">{testimonial.image}</div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                          </div>
                          <div className="flex items-start gap-2 mb-3">
                            <Quote className="w-6 h-6 text-accent flex-shrink-0" />
                            <p className="text-muted-foreground italic text-lg">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="pl-8">
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                            <div className="text-sm text-accent">{testimonial.business}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Study Tab */}
            <TabsContent value="case-study">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.caseStudy.title}</CardTitle>
                  <CardDescription className="text-base">{service.caseStudy.client}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-destructive">The Challenge</h3>
                    <p className="text-muted-foreground">{service.caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-accent">Our Solution</h3>
                    <p className="text-muted-foreground">{service.caseStudy.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Results Achieved</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.caseStudy.results.map((result: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg border border-accent/20">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <p className="text-center font-semibold text-lg">
                      Ready to achieve similar results for your business?
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button size="lg" asChild>
                        <Link to="/contact">
                          <Phone className="mr-2 h-5 w-5" />
                          Contact Us Today
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about {service.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.faq.map((item: any, idx: number) => (
                      <div key={idx} className="pb-6 border-b border-border last:border-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {item.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20 text-center">
                    <p className="text-lg font-medium mb-4">Still have questions?</p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Contact Our Team</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
