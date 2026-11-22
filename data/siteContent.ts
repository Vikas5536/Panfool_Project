export type Language = "en" | "hi" | "pa";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  timeline?: string;
  suitableFor?: string;
}

export interface Venture {
  id: string;
  index: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  primaryServices: string[];
  location: string;
  highlights: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface Review {
  id: string;
  name: string;
  location?: string;
  rating: number;
  date: string;
  text: string;
  serviceCategory: "Documentation" | "Travel" | "Consulting" | "General";
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONFIG = {
  name: "Pankaj Foolwani",
  tagline: "Empowering Businesses. Enabling Dreams.",
  role: "Entrepreneur | Business Consultant | Strategic Growth Advisor",
  phone: "+91 7009589439",
  phoneDisplay: "+91 70095 89439",
  whatsappNumber: "917009589439",
  email: "digitalservice115@gmail.com",
  officeAddress: "Shop No. 51, Panchkula Complex, Krishna Enclave, Dhakoli, Zirakpur, Punjab 160104",
  workingHours: "Monday – Sunday: 10:30 AM – 9:00 PM",
  googleRating: 5.0,
  googleReviewCount: 38,
  googleReviewUrl: "https://g.page/r/CR7ZsHcTeySUEBM/review",
  mapDirectionsUrl: "https://maps.google.com/?q=Panchkula+Complex+Krishna+Enclave+Dhakoli+Zirakpur+Punjab+160104",
  locations: [
    { city: "Zirakpur", role: "Headquarters & Central Hub", state: "Punjab" },
    { city: "Chandigarh", role: "Tricity Corporate Desk", state: "UT" },
    { city: "Panchkula", role: "Documentation Center", state: "Haryana" },
    { city: "Mohali", role: "Business Growth Support", state: "Punjab" },
    { city: "Delhi NCR", role: "Corporate Partnerships & Legal Hub", state: "Delhi" },
    { city: "Gurgaon", role: "Enterprise Advisory Desk", state: "Haryana" },
    { city: "Jaipur", role: "Heritage & Tourism Branch", state: "Rajasthan" },
    { city: "International Desk", role: "NRI & Global Mobility Assistance", state: "Global" },
  ],
};

export const TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      ventures: "Ventures",
      calculator: "Service Matcher",
      reviews: "Client Trust",
      locations: "Presence",
      contact: "Contact",
      bookConsultation: "VIP Consultation",
      callNow: "Call Direct",
    },
    hero: {
      badge: "Pankaj Foolwani • Executive Advisory & Business Solutions",
      titlePre: "Turning Vision Into Reality.",
      titleHighlight: "Building Trust.",
      titlePost: "Creating Lasting Impact.",
      subtitle:
        "I am an entrepreneur and business consultant dedicated to simplifying complex challenges through strategic business consulting, professional documentation precision, and bespoke luxury travel management.",
      ctaPrimary: "Schedule Private Consultation",
      ctaSecondary: "Explore Solutions",
      ctaWhatsApp: "WhatsApp Directly",
      statSatisfaction: "5-Star Rating",
      statSatisfactionSub: "Google Business Verified",
      statNetwork: "6+ Prime Hubs",
      statNetworkSub: "Zirakpur, Delhi, Jaipur & Beyond",
      statVentures: "3 Flagship Brands",
      statVenturesSub: "Consulting • Docs • Travel",
      tickerLabel: "Strategic Presence Across:",
    },
    about: {
      badge: "The Founder's Story & Vision",
      heading: "Building Businesses. Building Enduring Relationships.",
      p1: "I am Pankaj Foolwani, an entrepreneur and business consultant driven by one foundational conviction: the right guidance and relentless integrity turn ambitious vision into enduring achievement.",
      p2: "My passion centers on enterprise development, creating sustainable opportunities, and bridging individuals and businesses with flawless execution. Through Perfect Documents, Mr And Miss Perfect Trips Private Limited, and Digital Seva Kendra, my ecosystem serves corporate clients, ambitious business owners, and discerning individuals.",
      p3: "Trust, professionalism, and personalized attention are the non-negotiable foundations of every engagement. My overarching vision is to establish a respected, diversified national group under the name Foolwani, anchored in ethical leadership, excellence, and compound growth.",
      motto: "Turning Vision Into Reality. Building Trust. Creating Lasting Impact.",
      pillarsTitle: "Core Operating Pillars",
      pillars: [
        {
          title: "Professional Service",
          desc: "Methodical execution, rigorous compliance, and senior-level accountability on every assignment.",
        },
        {
          title: "Personal Attention",
          desc: "Direct access to leadership without bureaucratic intermediaries or automated generic responses.",
        },
        {
          title: "Business-Focused Thinking",
          desc: "Practical strategies geared specifically toward revenue acceleration, cost efficiency, and risk mitigation.",
        },
        {
          title: "Enduring Client Relationships",
          desc: "We measure success by repeat client partnerships spanning years, not transactional one-offs.",
        },
        {
          title: "Growth & Continuous Innovation",
          desc: "Pioneering modern digital solutions, swift turnaround times, and frictionless cross-border mobility.",
        },
      ],
    },
    services: {
      badge: "Comprehensive Capabilities",
      heading: "Two Distinct Paths. One Standard of Absolute Excellence.",
      subtitle:
        "Whether you are scaling an enterprise, navigating intricate government documentation, or planning seamless international travel, our specialized divisions deliver perfection.",
      tabPath1: "Path 01: Business Consulting & Growth",
      tabPath2: "Path 02: Documentation & Global Mobility",
      tabPath3: "Path 03: Bespoke Travel & Tourism",
      tabPath4: "Path 04: Digital Public Services",
    },
    ventures: {
      badge: "The Foolwani Enterprise Group",
      heading: "Three Dedicated Brands Operating Under One Personal Standard.",
      subtitle:
        "Each venture operates with dedicated domain specialists while upholding our hallmark commitment to transparency, velocity, and flawless outcomes.",
    },
    calculator: {
      badge: "Interactive Consultation Tool",
      heading: "Smart Service Matcher & Requirement Checklist",
      subtitle:
        "Select your immediate objective to view procedural timelines, essential checklist items, and dispatch a tailored briefing directly to Pankaj Foolwani.",
    },
    reviews: {
      badge: "Reputation & Real Experiences",
      heading: "Trust Earned One Case At A Time.",
      subtitle:
        "Verified testimonials reflecting client experiences across documentation, business setup, and bespoke international itineraries.",
      googleBadge: "5.0 ★ Google Business Rating (38+ Verified Client Reviews)",
      writeReviewBtn: "Write a Google Review",
    },
    locations: {
      badge: "Our Operational Network",
      heading: "Headquartered in Zirakpur. Active Across Prime Northern Hubs.",
      subtitle:
        "Strategically located in the Tricity (Chandigarh, Panchkula, Mohali) with established operational linkages across Delhi NCR, Gurgaon, and Jaipur.",
    },
    contact: {
      badge: "Get in Touch",
      heading: "Let's Start a Direct Conversation.",
      subtitle:
        "The fastest channel to reach Pankaj Foolwani is via WhatsApp. You can also call directly or submit a structured project brief below.",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Mobile / WhatsApp Number",
      formService: "Required Service / Practice Area",
      formMessage: "Brief Overview of Your Requirement",
      formSubmit: "Submit Confidential Enquiry",
      formWhatsAppSubmit: "Send Directly via WhatsApp",
      privacyNote: "Your information remains 100% confidential and is strictly utilized to respond to your specific query.",
    },
    faq: {
      badge: "Knowledge & Clarifications",
      heading: "Frequently Asked Questions",
      subtitle: "Clear answers to common questions regarding our business advisory, passport/OCI documentation, and travel curation.",
    },
  },
  hi: {
    nav: {
      about: "मेरे बारे में",
      services: "सेवाएं",
      ventures: "कंपनियां",
      calculator: "सर्विस मैचर",
      reviews: "समीक्षाएं",
      locations: "स्थान",
      contact: "संपर्क करें",
      bookConsultation: "परामर्श बुक करें",
      callNow: "सीधे कॉल करें",
    },
    hero: {
      badge: "पंकज फूलवानी • बिजनेस सलाहकार और उद्यमी",
      titlePre: "सपनों को हकीकत में बदलना।",
      titleHighlight: "विश्वास का निर्माण।",
      titlePost: "सदाबहार प्रभाव।",
      subtitle:
        "मैं एक उद्यमी और व्यापार सलाहकार हूँ, जो रणनीतिक व्यापार विकास, आधिकारिक दस्तावेज़ सहायता और प्रीमियम यात्रा प्रबंधन के माध्यम से जटिल समस्याओं को आसान बनाता हूँ।",
      ctaPrimary: "निजी परामर्श बुक करें",
      ctaSecondary: "सेवाएं देखें",
      ctaWhatsApp: "व्हाट्सएप पर बात करें",
      statSatisfaction: "5.0 स्टार रेटिंग",
      statSatisfactionSub: "गूगल बिज़नेस सत्यापित",
      statNetwork: "6+ मुख्य केंद्र",
      statNetworkSub: "ज़ीरकपुर, दिल्ली, जयपुर और अधिक",
      statVentures: "3 प्रमुख उद्यम",
      statVenturesSub: "कंसल्टिंग • डॉक्यूमेंट्स • ट्रेवल्स",
      tickerLabel: "सक्रिय उपस्थिति:",
    },
    about: {
      badge: "संस्थापक की दृष्टि",
      heading: "व्यापार का निर्माण। मजबूत रिश्तों का आधार।",
      p1: "मैं पंकज फूलवानी हूँ, एक उद्यमी और व्यवसाय सलाहकार। मेरा दृढ़ विश्वास है कि सही मार्गदर्शन से हर महत्वाकांक्षा सफलता में बदल सकती है।",
      p2: "मेरा उद्देश्य व्यापार का विस्तार करना और लोगों को सही समाधान से जोड़ना है। परफेक्ट डॉक्यूमेंट्स, मिस्टर एंड मिस परफेक्ट ट्रिप्स और डिजिटल सेवा केंद्र के माध्यम से हम कॉर्पोरेट और व्यक्तिगत ग्राहकों को सर्वोत्तम सेवाएं प्रदान करते हैं।",
      p3: "विश्वास, व्यावसायिकता और व्यक्तिगत ध्यान हमारे हर कार्य की नींव हैं। मेरा दृष्टिकोण 'फूलवानी' नाम के तहत एक प्रतिष्ठित और विविधतापूर्ण राष्ट्रीय ब्रांड स्थापित करना है।",
      motto: "विजन को वास्तविकता में बदलना। विश्वास बनाना। स्थायी प्रभाव छोड़ना।",
      pillarsTitle: "हमारे आधारभूत स्तंभ",
      pillars: [
        { title: "पेशेवर सेवा", desc: "हर काम में उच्च गुणवत्ता और सटीकता।" },
        { title: "व्यक्तिगत ध्यान", desc: "हर क्लाइंट को वरिष्ठ स्तर का समर्पित समर्थन।" },
        { title: "व्यवसाय-उन्मुख सोच", desc: "राजस्व वृद्धि और दक्षता बढ़ाने वाली नीतियां।" },
        { title: "दीर्घकालिक संबंध", desc: "ग्राहकों के साथ वर्षों का अटूट विश्वास।" },
        { title: "निरंतर नवाचार", desc: "आधुनिक तकनीक और त्वरित समाधान।" },
      ],
    },
    services: {
      badge: "हमारी विशेषताएं",
      heading: "दो स्पष्ट मार्ग। उत्कृष्टता का एक ही मानक।",
      subtitle: "चाहे नया व्यापार शुरू करना हो, पासपोर्ट/वीज़ा दस्तावेज़ तैयार कराने हों, या विश्व स्तरीय यात्रा की योजना बनानी हो।",
      tabPath1: "मार्ग 01: बिजनेस कंसल्टिंग और विकास",
      tabPath2: "मार्ग 02: दस्तावेज़ और वैश्विक गतिशीलता",
      tabPath3: "मार्ग 03: लक्ज़री और कॉर्पोरेट यात्रा",
      tabPath4: "मार्ग 04: डिजिटल सेवा केंद्र",
    },
    ventures: {
      badge: "फूलवानी समूह के उद्यम",
      heading: "तीन प्रमुख ब्रांड, एक ही व्यक्तिगत मानक।",
      subtitle: "प्रत्येक उद्यम अपनी विशेषज्ञता के साथ पूर्ण पारदर्शिता और गति के साथ काम करता है।",
    },
    calculator: {
      badge: "इंटरएक्टिव सेवा चयन",
      heading: "स्मार्ट सर्विस मैचर और आवश्यकता चेकलिस्ट",
      subtitle: "अपनी आवश्यकता चुनें और सीधे पंकज फूलवानी से त्वरित व्हाट्सएप संपर्क प्राप्त करें।",
    },
    reviews: {
      badge: "ग्राहक समीक्षाएं",
      heading: "विश्वास, जो हर काम से कमाया गया है।",
      subtitle: "दस्तावेज़, व्यापार परामर्श और यात्रा से जुड़े ग्राहकों के वास्तविक अनुभव।",
      googleBadge: "5.0 ★ गूगल रेटिंग (38+ सत्यापित समीक्षाएं)",
      writeReviewBtn: "गूगल पर समीक्षा लिखें",
    },
    locations: {
      badge: "उपस्थिति केंद्र",
      heading: "ज़ीरकपुर मुख्यालय। प्रमुख शहरों में सक्रिय नेटवर्क।",
      subtitle: "चंडीगढ़ ट्राइसिटी, दिल्ली एनसीआर, गुरुग्राम और जयपुर में निरंतर सेवाएं।",
    },
    contact: {
      badge: "संपर्क करें",
      heading: "सीधी बातचीत शुरू करें।",
      subtitle: "सबसे तेज़ संपर्क व्हाट्सएप द्वारा है। आप सीधे कॉल भी कर सकते हैं या फॉर्म भर सकते हैं।",
      formName: "पूरा नाम",
      formEmail: "ईमेल पता",
      formPhone: "मोबाइल / व्हाट्सएप नंबर",
      formService: "आवश्यक सेवा",
      formMessage: "अपनी आवश्यकता का संक्षिप्त विवरण दें",
      formSubmit: "पूछताछ भेजें",
      formWhatsAppSubmit: "सीधे व्हाट्सएप पर भेजें",
      privacyNote: "आपकी जानकारी पूर्णतः सुरक्षित और गोपनीय रखी जाती है।",
    },
    faq: {
      badge: "सामान्य प्रश्न",
      heading: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "बिजनेस सेटअप, पासपोर्ट/ओसीआई और यात्रा से जुड़े जरूरी सवालों के जवाब।",
    },
  },
  pa: {
    nav: {
      about: "ਬਾਰੇ",
      services: "ਸੇਵਾਵਾਂ",
      ventures: "ਕੰਪਨੀਆਂ",
      calculator: "ਸਰਵਿਸ ਮੈਚਰ",
      reviews: "ਸਮੀਖਿਆਵਾਂ",
      locations: "ਟਿਕਾਣੇ",
      contact: "ਸੰਪਰਕ",
      bookConsultation: "ਸਲਾਹ ਲਵੋ",
      callNow: "ਸਿੱਧਾ ਫ਼ੋਨ ਕਰੋ",
    },
    hero: {
      badge: "ਪੰਕਜ ਫੂਲਵਾਨੀ • ਵਪਾਰਕ ਸਲਾਹਕਾਰ ਅਤੇ ਉਦਯੋਗਪਤੀ",
      titlePre: "ਸੁਪਨਿਆਂ ਨੂੰ ਹਕੀਕਤ ਬਣਾਉਣਾ।",
      titleHighlight: "ਭਰੋਸੇ ਦੀ ਨੀਂਹ।",
      titlePost: "ਪੱਕਾ ਪ੍ਰਭਾਵ।",
      subtitle:
        "ਮੈਂ ਇੱਕ ਉੱਦਮੀ ਅਤੇ ਬਿਜ਼ਨਸ ਕੰਸਲਟੈਂਟ ਹਾਂ, ਜੋ ਕਾਰੋਬਾਰੀ ਵਿਕਾਸ, ਪੇਸ਼ੇਵਰ ਦਸਤਾਵੇਜ਼ੀ ਸਹਾਇਤਾ ਅਤੇ ਨਿੱਜੀ ਯਾਤਰਾ ਯੋਜਨਾਬੰਦੀ ਰਾਹੀਂ ਗੁੰਝਲਦਾਰ ਸੇਵਾਵਾਂ ਨੂੰ ਸਰਲ ਬਣਾਉਂਦਾ ਹਾਂ।",
      ctaPrimary: "ਨਿੱਜੀ ਸਲਾਹ ਬੁੱਕ ਕਰੋ",
      ctaSecondary: "ਸੇਵਾਵਾਂ ਵੇਖੋ",
      ctaWhatsApp: "ਵਟਸਐਪ 'ਤੇ ਗੱਲ ਕਰੋ",
      statSatisfaction: "5.0 ਸਟਾਰ ਰੇਟਿੰਗ",
      statSatisfactionSub: "ਗੂਗਲ ਬਿਜ਼ਨਸ ਪ੍ਰਮਾਣਿਤ",
      statNetwork: "6+ ਸ਼ਹਿਰ",
      statNetworkSub: "ਜ਼ੀਰਕਪੁਰ, ਦਿੱਲੀ, ਜੈਪੁਰ ਅਤੇ ਹੋਰ",
      statVentures: "3 ਪ੍ਰਮੁੱਖ ਬ੍ਰਾਂਡ",
      statVenturesSub: "ਕੰਸਲਟਿੰਗ • ਦਸਤਾਵੇਜ਼ • ਟ੍ਰੈਵਲ",
      tickerLabel: "ਸਾਡੀ ਸਰਗਰਮ ਮੌਜੂਦਗੀ:",
    },
    about: {
      badge: "ਬਾਨੀ ਦੀ ਸੋਚ",
      heading: "ਕਾਰੋਬਾਰ ਉਸਾਰਨਾ। ਪੱਕੇ ਰਿਸ਼ਤੇ ਬਣਾਉਣਾ।",
      p1: "ਮੈਂ ਪੰਕਜ ਫੂਲਵਾਨੀ ਹਾਂ, ਇੱਕ ਉੱਦਮੀ ਅਤੇ ਵਪਾਰ ਸਲਾਹਕਾਰ। ਮੇਰਾ ਮੰਨਣਾ ਹੈ ਕਿ ਸਹੀ ਅਗਵਾਈ ਕਿਸੇ ਵੀ ਇੱਛਾ ਨੂੰ ਕਾਮਯਾਬੀ ਵਿੱਚ ਬਦਲ ਸਕਦੀ ਹੈ।",
      p2: "ਪਰਫੈਕਟ ਡੌਕੂਮੈਂਟਸ, ਮਿਸਟਰ ਐਂਡ ਮਿਸ ਪਰਫੈਕਟ ਟ੍ਰਿਪਸ ਅਤੇ ਡਿਜੀਟਲ ਸੇਵਾ ਕੇਂਦਰ ਰਾਹੀਂ ਅਸੀਂ ਕਾਰਪੋਰੇਟ ਅਤੇ ਆਮ ਗਾਹਕਾਂ ਨੂੰ ਪਹਿਲੇ ਦਰਜੇ ਦੀਆਂ ਸੇਵਾਵਾਂ ਦਿੰਦੇ ਹਾਂ।",
      p3: "ਭਰੋਸਾ, ਪੇਸ਼ੇਵਰਤਾ ਅਤੇ ਨਿੱਜੀ ਧਿਆਨ ਸਾਡੀ ਹਰ ਸਾਂਝ ਦੀ ਨੀਂਹ ਹਨ। ਮੇਰਾ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਫੂਲਵਾਨੀ ਨਾਂ ਹੇਠ ਇੱਕ ਸਤਿਕਾਰਤ ਰਾਸ਼ਟਰੀ ਸਮੂਹ ਸਥਾਪਤ ਕਰਨਾ ਹੈ।",
      motto: "ਸੁਪਨਿਆਂ ਨੂੰ ਹਕੀਕਤ ਬਣਾਉਣਾ। ਭਰੋਸਾ ਬਣਾਉਣਾ। ਸਥਾਈ ਪ੍ਰਭਾਵ ਪਾਉਣਾ।",
      pillarsTitle: "ਸਾਡੇ ਮੂਲ ਅਸੂਲ",
      pillars: [
        { title: "ਪੇਸ਼ੇਵਰ ਸੇਵਾ", desc: "ਹਰ ਕੰਮ ਵਿੱਚ ਉੱਚ ਗੁਣਵੱਤਾ ਅਤੇ ਸ਼ੁੱਧਤਾ।" },
        { title: "ਨਿੱਜੀ ਧਿਆਨ", desc: "ਹਰ ਕਲਾਇੰਟ ਲਈ ਸੀਨੀਅਰ ਪੱਧਰ ਦੀ ਸਹਾਇਤਾ।" },
        { title: "ਕਾਰੋਬਾਰੀ ਸੋਚ", desc: "ਮੁਨਾਫਾ ਅਤੇ ਵਿਕਾਸ ਵਧਾਉਣ ਵਾਲੀਆਂ ਰਣਨੀਤੀਆਂ।" },
        { title: "ਲੰਬੇ ਸਮੇਂ ਦੇ ਸੰਬੰਧ", desc: "ਸਾਲਾਂ ਬੱਧੀ ਬਣਿਆ ਭਰੋਸਾ।" },
        { title: "ਨਿਰੰਤਰ ਨਵੀਨਤਾ", desc: "ਨਵੀਂ ਤਕਨਾਲੋਜੀ ਅਤੇ ਤੇਜ਼ ਹੱਲ।" },
      ],
    },
    services: {
      badge: "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
      heading: "ਦੋ ਵੱਖਰੇ ਰਾਹ। ਉੱਚਤਮ ਮਿਆਰ ਦਾ ਇੱਕੋ ਮਾਪਦੰਡ।",
      subtitle: "ਨਵੇਂ ਕਾਰੋਬਾਰ ਦੀ ਸ਼ੁਰੂਆਤ, ਪਾਸਪੋਰਟ/ਵੀਜ਼ਾ ਦਸਤਾਵੇਜ਼, ਜਾਂ ਕੌਮਾਂਤਰੀ ਟ੍ਰਿਪ ਪਲਾਨਿੰਗ ਲਈ ਭਰੋਸੇਯੋਗ ਸੇਵਾਵਾਂ।",
      tabPath1: "ਰਾਹ 01: ਵਪਾਰਕ ਸਲਾਹਕਾਰੀ ਅਤੇ ਵਿਕਾਸ",
      tabPath2: "ਰਾਹ 02: ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਤੇ ਗਲੋਬਲ ਮੋਬਿਲਿਟੀ",
      tabPath3: "ਰਾਹ 03: ਲਗਜ਼ਰੀ ਅਤੇ ਕਾਰਪੋਰੇਟ ਟ੍ਰੈਵਲ",
      tabPath4: "ਰਾਹ 04: ਡਿਜੀਟਲ ਸੇਵਾ ਕੇਂਦਰ",
    },
    ventures: {
      badge: "ਫੂਲਵਾਨੀ ਗਰੁੱਪ ਦੇ ਉੱਦਮ",
      heading: "ਤਿੰਨ ਵਿਸ਼ੇਸ਼ ਬ੍ਰਾਂਡ, ਇੱਕੋ ਨਿੱਜੀ ਮਿਆਰ।",
      subtitle: "ਹਰ ਬ੍ਰਾਂਡ ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਗਤੀ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।",
    },
    calculator: {
      badge: "ਇੰਟਰਐਕਟਿਵ ਟੂਲ",
      heading: "ਸਰਵਿਸ ਮੈਚਰ ਅਤੇ ਚੈਕਲਿਸਟ",
      subtitle: "ਆਪਣੀ ਲੋੜ ਚੁਣੋ ਅਤੇ ਪੰਕਜ ਫੂਲਵਾਨੀ ਨਾਲ ਸਿੱਧਾ ਵਟਸਐਪ ਸੰਪਰਕ ਕਰੋ।",
    },
    reviews: {
      badge: "ਗਾਹਕਾਂ ਦੇ ਵਿਚਾਰ",
      heading: "ਇਮਾਨਦਾਰੀ ਨਾਲ ਕਮਾਇਆ ਭਰੋਸਾ।",
      subtitle: "ਦਸਤਾਵੇਜ਼, ਕਾਰੋਬਾਰ ਅਤੇ ਯਾਤਰਾ ਸੇਵਾਵਾਂ ਲੈਣ ਵਾਲੇ ਗਾਹਕਾਂ ਦੇ ਅਸਲ ਤਜਰਬੇ।",
      googleBadge: "5.0 ★ ਗੂਗਲ ਰੇਟਿੰਗ (38+ ਪ੍ਰਮਾਣਿਤ ਸਮੀਖਿਆਵਾਂ)",
      writeReviewBtn: "ਗੂਗਲ 'ਤੇ ਰੀਵਿਊ ਲਿਖੋ",
    },
    locations: {
      badge: "ਸਾਡੇ ਦਫ਼ਤਰ",
      heading: "ਜ਼ੀਰਕਪੁਰ ਹੈੱਡਕੁਆਰਟਰ। ਉੱਤਰੀ ਭਾਰਤ ਵਿੱਚ ਸਰਗਰਮ ਨੈੱਟਵਰਕ।",
      subtitle: "ਚੰਡੀਗੜ੍ਹ ਟ੍ਰਾਈਸਿਟੀ, ਦਿੱਲੀ ਐਨਸੀਆਰ, ਗੁਰੂਗ੍ਰਾਮ ਅਤੇ ਜੈਪੁਰ ਵਿੱਚ ਨਿਰੰਤਰ ਸੇਵਾਵਾਂ।",
    },
    contact: {
      badge: "ਸੰਪਰਕ ਕਰੋ",
      heading: "ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰੋ।",
      subtitle: "ਸਭ ਤੋਂ ਤੇਜ਼ ਸੰਪਰਕ ਵਟਸਐਪ ਰਾਹੀਂ ਹੈ। ਤੁਸੀਂ ਫ਼ੋਨ ਵੀ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਫਾਰਮ ਭਰ ਸਕਦੇ ਹੋ।",
      formName: "ਪੂਰਾ ਨਾਮ",
      formEmail: "ਈਮੇਲ",
      formPhone: "ਫ਼ੋਨ / ਵਟਸਐਪ ਨੰਬਰ",
      formService: "ਲੋੜੀਂਦੀ ਸੇਵਾ",
      formMessage: "ਆਪਣੀ ਲੋੜ ਬਾਰੇ ਸੰਖੇਪ ਵਿੱਚ ਦੱਸੋ",
      formSubmit: "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
      formWhatsAppSubmit: "ਸਿੱਧਾ ਵਟਸਐਪ 'ਤੇ ਭੇਜੋ",
      privacyNote: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਬਿਲਕੁਲ ਗੁਪਤ ਅਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ।",
    },
    faq: {
      badge: "ਆਮ ਸਵਾਲ",
      heading: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
      subtitle: "ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ, ਪਾਸਪੋਰਟ ਅਤੇ ਯਾਤਰਾ ਬਾਰੇ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ।",
    },
  },
};

export const CONSULTING_SERVICES: ServiceDetail[] = [
  {
    id: "setup-guidance",
    title: "Business Setup & Entity Structuring",
    description: "End-to-end entity formation (Private Limited, LLP, Sole Proprietorship), government registrations, GST/MSME certifications, and a clear tactical launch roadmap.",
    features: [
      "Optimal legal entity recommendation based on tax & liability profile",
      "Statutory registrations: MCA, GST, MSME/Udyam, Shop & Establishment",
      "Corporate bank account facilitation & founding partner agreements",
      "Step-by-step 90-day operational launch checklist",
    ],
    timeline: "3 to 10 working days",
    suitableFor: "New entrepreneurs, startups, professionals branching into independent ventures",
  },
  {
    id: "business-development",
    title: "Business Development & Revenue Acceleration",
    description: "Opening new distribution channels, securing high-value strategic partnerships, and designing consistent recurring revenue pipelines.",
    features: [
      "B2B business development & lead generation systems",
      "Distribution network & franchise model blueprinting",
      "Client acquisition scripts and proposal architecture",
      "Key account management strategies to boost customer lifetime value",
    ],
    timeline: "Ongoing Retainer / 4 to 12 Week Sprints",
    suitableFor: "Established business owners seeking regional or multi-city expansion",
  },
  {
    id: "branding-marketing",
    title: "Branding & Corporate Identity Positioning",
    description: "Forging a prestigious, trustworthy brand presence that commands premium pricing and inspires instant confidence before the first meeting.",
    features: [
      "Executive corporate identity & premium positioning strategy",
      "Authority collateral: brochures, pitch decks, executive credentials",
      "Digital presence architecture & reputation management",
      "High-conversion localized marketing campaigns across Google & Social",
    ],
    timeline: "2 to 4 weeks",
    suitableFor: "Service providers, consultants, regional brands modernizing their identity",
  },
  {
    id: "growth-strategy",
    title: "Business Growth Strategy & Multi-Location Scaling",
    description: "Practical blueprints to scale team size, departmental capacity, multi-city footprint, and bottom-line profit margins without operational chaos.",
    features: [
      "Unit economics auditing and margin optimization",
      "Geographic expansion plans (e.g. expanding across Tricity, Delhi NCR, Jaipur)",
      "Organizational hierarchy design & delegation frameworks",
      "Key Performance Indicator (KPI) dashboards for founders",
    ],
    timeline: "Custom strategic milestone roadmap",
    suitableFor: "Profitable businesses hitting operational plateaus",
  },
  {
    id: "operational-coordination",
    title: "Operational Coordination & SOP Systems",
    description: "Transitioning your business from founder-dependent bottlenecks into a self-sustaining system powered by documented Standard Operating Procedures (SOPs).",
    features: [
      "Workflow bottleneck diagnosis & process re-engineering",
      "Standard Operating Procedure (SOP) manuals for day-to-day operations",
      "Software stack integration (CRM, billing, communication)",
      "Staff accountability matrices & service delivery quality checks",
    ],
    timeline: "2 to 6 weeks",
    suitableFor: "Business owners working 12+ hour days who need systems that run without them",
  },
  {
    id: "corporate-assistance",
    title: "Corporate Client VIP Assistance",
    description: "Dedicated, senior-level liaison support for high-stakes corporate accounts, enterprise documentation, vendor onboarding, and executive mobility.",
    features: [
      "Single-point-of-contact senior advisory for corporate leadership",
      "Bulk employee documentation & cross-border executive travel",
      "Government department coordination & expedited compliance handling",
      "Strict confidentiality agreements (NDAs) and VIP turnaround priority",
    ],
    timeline: "Immediate on-call priority desk",
    suitableFor: "Corporates, institutions, overseas businesses operating in North India",
  },
  {
    id: "business-opportunities",
    title: "Strategic Joint Ventures & Vetted Network Opportunities",
    description: "Connecting vetted investors, high-integrity business owners, and commercial collaborators across our regional network for synergistic growth.",
    features: [
      "Direct introductions to trusted enterprise partners across North India",
      "Joint venture structuring & equity/revenue-share framework advisory",
      "Pre-vetted commercial real estate & digital franchise opportunities",
      "Collaborative consortium formation for large-scale tenders & projects",
    ],
    timeline: "Exclusive confidential matchmaking",
    suitableFor: "Visionary entrepreneurs seeking growth capital or strategic regional partners",
  },
];

export const DOCUMENTATION_SERVICES: ServiceDetail[] = [
  {
    id: "passports",
    title: "Passport Application, Tatkal & Renewal Services",
    description: "Zero-error passport processing for Fresh, Renewal, Tatkal, Lost/Damaged, Minor, and Name Change applications at Regional Passport Offices (Chandigarh, Delhi, etc.).",
    features: [
      "Comprehensive pre-submission document audit to prevent rejections",
      "Tatkal & Normal appointment scheduling at preferred PSK / POPSK centers",
      "Expert resolution of complex cases (annexures, court decrees, address mismatches)",
      "Police verification tracking & post-submission status monitoring",
    ],
    timeline: "Appointments within 24-48 hours",
    suitableFor: "Individuals, families, urgent corporate travelers, students",
  },
  {
    id: "oci-pcc",
    title: "OCI (Overseas Citizen of India) & Police Clearance (PCC)",
    description: "Specialized assistance for Foreign Nationals of Indian origin, NRI spouses, and emigration applicants requiring error-free OCI registration and Passport Office PCC.",
    features: [
      "OCI New Registration, OCI Card Re-issue, and Miscellaneous Services",
      "Ancestry / Parentage document linkage and foreign marriage registration vetting",
      "PCC for Canada PR, Australia, UK, USA, Gulf employment and student visas",
      "Direct coordination with FRRO / RPO authorities for compliant submissions",
    ],
    timeline: "Rapid document compilation & expedited processing",
    suitableFor: "NRIs, PIOs, foreign citizens of Indian lineage, work permit holders",
  },
  {
    id: "visa-support",
    title: "International Visa Documentation Support",
    description: "Meticulous dossier preparation for Tourist, Business, Visitor, and Transit visas across Schengen, UK, USA, Canada, Australia, Singapore, Dubai, and worldwide.",
    features: [
      "Custom cover letter drafting and financial document presentation",
      "Hotel vouchers, confirmed flight itineraries, and travel insurance",
      "Sponsorship document alignment and invitation letter verification",
      "Biometric appointment scheduling and mock interview guidance",
    ],
    timeline: "24 to 72 hour dossier readiness",
    suitableFor: "Families traveling abroad, corporate delegates, solo travelers",
  },
  {
    id: "pan-aadhaar",
    title: "PAN, Aadhaar & Biometric Rectification Assistance",
    description: "Facilitating accurate biometric updates, mobile number linking, demographic corrections, and Instant / Minor / NRI PAN card issuance.",
    features: [
      "Aadhaar biometric & demographic corrections (name, DOB, address)",
      "Minor child Aadhaar issuance with parent linkage",
      "New PAN card application & PAN-Aadhaar linking",
      "Digital KYC and doorstep documentation assistance for senior citizens",
    ],
    timeline: "Instant to 3 business days",
    suitableFor: "Residents of Zirakpur, Chandigarh, Panchkula, and Dhakoli",
  },
  {
    id: "estamp-agreements",
    title: "Legal Deeds, e-Stamp & Registered Rent Agreements",
    description: "Authorized e-Stamping, legal affidavit drafting, lease deed drafting, commercial agreements, power of attorney, and certified notarial endorsements.",
    features: [
      "Official government e-Stamp papers issued on demand for any denomination",
      "Residential & commercial lease deed drafting with standard protective clauses",
      "Affidavits: name change, passport lost, single status, address proof",
      "Notary attestation and legal document scanning services",
    ],
    timeline: "Same day / within 1-2 hours",
    suitableFor: "Property owners, tenants, businesses entering commercial contracts",
  },
  {
    id: "corporate-digital-docs",
    title: "Corporate Statutory Forms & Public Administration",
    description: "Facilitating departmental filings, digital certificates, trade licenses, labor compliance, and public document authentication.",
    features: [
      "Digital Signature Certificates (DSC Class 3) for tenders & MCA filings",
      "Food Safety (FSSAI) registration and renewal assistance",
      "Trade license & local municipal approvals in Tricity",
      "High-speed document digitizing, archival, and secure printing",
    ],
    timeline: "1 to 5 business days",
    suitableFor: "Commercial shops, corporate firms, regional distributors",
  },
];

export const TRAVEL_SERVICES: ServiceDetail[] = [
  {
    id: "intl-tours",
    title: "Bespoke International Tour Packages",
    description: "Handcrafted international holiday itineraries tailored to your dates, preferences, and luxury standards across premier global destinations.",
    features: [
      "Curated destinations: Dubai, Singapore, Thailand, Bali, Europe, Maldives, Vietnam, Turkey",
      "Handpicked 4-star and 5-star luxury resorts with breakfast & transfers included",
      "Private guided city excursions, desert safaris, island cruises, and attraction tickets",
      "Full visa assistance and 24/7 dedicated travel concierge support while abroad",
    ],
    timeline: "Immediate custom quote within 24 hours",
    suitableFor: "Families, luxury travelers, honeymooners, executive retreats",
  },
  {
    id: "domestic-tours",
    title: "Exquisite Domestic Tours & Hill Retreats",
    description: "Explore the breathtaking splendor of India with customized itineraries, trusted chauffeurs, and premier boutique heritage resorts.",
    features: [
      "Signature routes: Kashmir paradise, Himachal scenic circuits, Kerala backwaters, Royal Rajasthan, Goa beach escapes",
      "Comfortable sanitized private SUV/Sedan transport with experienced drivers",
      "Bespoke dining recommendations and heritage palace stays",
      "Complete flexibility in daily pacing and activities",
    ],
    timeline: "Tailored within hours",
    suitableFor: "Family vacations, spiritual circuits, romantic escapes, corporate offsites",
  },
  {
    id: "corporate-travel",
    title: "Corporate MICE & Executive Business Travel",
    description: "End-to-end travel management for corporate delegations, conferences, team off-sites, and executive business trips.",
    features: [
      "Competitive corporate airfares on domestic & international airlines",
      "Conference venue bookings, banquet management, and group check-ins",
      "Consolidated GST invoicing for corporate accounting compliance",
      "Dedicated account manager for last-minute modifications and flight re-scheduling",
    ],
    timeline: "Dedicated corporate SLA",
    suitableFor: "Mid-size enterprises, corporate departments, business delegations",
  },
  {
    id: "honeymoon-escapes",
    title: "Exclusive Honeymoon & Romance Packages",
    description: "Unforgettable honeymoon experiences with romantic inclusions like private candlelight dinners, overwater villas, and customized couples photography.",
    features: [
      "Iconic romantic destinations: Maldives water villas, Swiss Alps, Bali private pool villas, Santorini, Mauritius",
      "Complimentary honeymoon perks (cake, wine, floral bed decor, private transfers)",
      "Relaxed pacing crafted specifically for newlyweds",
      "Zero stress with all logistics, airport greetings, and tickets pre-arranged",
    ],
    timeline: "Custom proposal within 24 hours",
    suitableFor: "Newlyweds and couples celebrating milestone anniversaries",
  },
];

export const DIGITAL_SEVA_SERVICES: ServiceDetail[] = [
  {
    id: "citizen-egov",
    title: "Citizen e-Governance & Government Applications",
    description: "Authorized digital processing of central and state government portal applications, pension schemes, certificates, and welfare applications.",
    features: [
      "Income, Caste, Residence, and Domicile certificate applications",
      "Voter ID card registration, correction, and digital card download",
      "Challan payments, electricity/utility bill clearing, and property tax payment",
      "Ayushman Bharat health card generation and KYC verification",
    ],
    timeline: "Same-day submission",
    suitableFor: "Local citizens, senior citizens, rural and suburban residents",
  },
  {
    id: "financial-services",
    title: "Money Transfer, Courier & Essential Services",
    description: "Reliable domestic remittances, instant cash transfer facilities, express courier booking, and document courier delivery.",
    features: [
      "Instant Domestic Money Transfer (DMT) to any Indian bank 24/7",
      "Express courier booking with DTDC, Trackon, and speed post tracking",
      "High-speed color printing, photocopying, and document lamination",
      "Affordable digital services with instant receipt generation",
    ],
    timeline: "Instant over-the-counter",
    suitableFor: "Walk-in clients, neighborhood businesses, students",
  },
];

export const VENTURES: Venture[] = [
  {
    id: "perfect-documents",
    index: "01 / DOCUMENTS & GLOBAL MOBILITY",
    name: "PERFECT DOCUMENTS",
    badge: "Official Division",
    tagline: "Accuracy First. Compliance Guaranteed.",
    description:
      "A trusted documentation consultancy delivering precision government paperwork, passport services, OCI applications, visa dossiers, and legal drafting for individuals, NRIs, and corporate clients.",
    primaryServices: [
      "Passport Application & Tatkal Assistance",
      "OCI (Overseas Citizen of India) & Police Clearance (PCC)",
      "Global Tourist, Business & Family Visa Dossiers",
      "PAN & Aadhaar Biometric Corrections",
      "Legal Agreements, e-Stamping & Registered Lease Deeds",
      "Corporate Compliance & Government Department Paperwork",
    ],
    location: "Shop No. 51, Panchkula Complex, Dhakoli, Zirakpur",
    highlights: [
      "Zero-rejection track record on passport and OCI paperwork",
      "Direct senior review on every dossier prior to appointment",
      "Convenient walk-in center with digital verification facilities",
    ],
    ctaText: "Consult Perfect Documents",
    whatsappMessage: "Hello Pankaj, I would like to consult Perfect Documents regarding my documentation requirement.",
  },
  {
    id: "perfect-trips",
    index: "02 / TRAVEL & TOURISM",
    name: "MR AND MISS PERFECT TRIPS PVT. LTD.",
    badge: "Private Limited Enterprise",
    tagline: "Curated Holidays. Seamless Journeys.",
    description:
      "A premier incorporated travel company specializing in custom international holidays, luxury domestic retreats, honeymoon journeys, corporate MICE logistics, and VIP flight concierge.",
    primaryServices: [
      "Handcrafted International Packages (Dubai, Bali, Europe, Thailand)",
      "Bespoke Domestic Tours (Kashmir, Kerala, Himachal, Rajasthan)",
      "Corporate Conferences, Retreats & MICE Travel",
      "Honeymoon Getaways with VIP Romantic Inclusions",
      "Discounted Domestic & International Flight Bookings",
      "Luxury Resort & 5-Star Hotel Reservations Worldwide",
    ],
    location: "Zirakpur Corporate Office & Pan-India Desk",
    highlights: [
      "Registered Private Limited entity with full compliance",
      "24/7 on-tour emergency concierge support",
      "Handpicked resort partners with guaranteed best market value",
    ],
    ctaText: "Plan Travel With Mr & Miss Perfect Trips",
    whatsappMessage: "Hello Pankaj, I would like to plan a trip with Mr And Miss Perfect Trips Private Limited.",
  },
  {
    id: "digital-seva-kendra",
    index: "03 / GOVT & CITIZEN SERVICES",
    name: "DIGITAL SEVA KENDRA",
    badge: "Public Service Center",
    tagline: "Accessible Public Digital Services for Everyone.",
    description:
      "A community-focused digital service center facilitating everyday government schemes, identity certifications, money transfers, courier dispatch, and document production with utmost integrity.",
    primaryServices: [
      "Online Government Portal Registrations & Scheme Submissions",
      "Domicile, Income, and Caste Certificate Filing",
      "Aadhaar & PAN Card Corrections",
      "Instant Domestic Money Transfer (DMT) & Bill Settlements",
      "Fast Express Courier Booking (DTDC, Trackon)",
      "Professional High-Speed Color Printing, Scanning & Lamination",
    ],
    location: "Dhakoli, Zirakpur (Serving Tricity Community)",
    highlights: [
      "Affordable and transparent public service pricing",
      "Dedicated support for senior citizens and busy professionals",
      "Fast turnaround on over-the-counter requirements",
    ],
    ctaText: "Connect with Digital Seva Kendra",
    whatsappMessage: "Hello Pankaj, I need assistance with Digital Seva Kendra services.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Dr Priyanka Mehra",
    location: "Chandigarh",
    rating: 5,
    date: "3 months ago",
    serviceCategory: "Documentation",
    text: "This is my go-to online shop for any official documentation or form filling now. They are reliable, secure with personal details, and very affordable. From Aadhaar updates to complex applications, they handle everything smoothly. Excellent communication throughout. Highly professional and efficient. Highly recommend.",
  },
  {
    id: "review-2",
    name: "Rajat Kaushik",
    location: "Zirakpur",
    rating: 5,
    date: "6 months ago",
    serviceCategory: "Consulting",
    text: "Excellent service with quick and correct response and professional behaviour. Pankaj ji provides very practical business insights and handled our requirements with utter dedication. Highly recommended for every service.",
  },
  {
    id: "review-3",
    name: "Preety Sharma",
    location: "Panchkula",
    rating: 5,
    date: "2 months ago",
    serviceCategory: "Documentation",
    text: "These people are very helpful. I had to get my baby's Aadhaar card made but it was not getting made elsewhere due to technical glitches. It was done in one single day through them. Very polite, helpful and good service.",
  },
  {
    id: "review-4",
    name: "Amanpreet Singh Sandhu",
    location: "Mohali / Canada",
    rating: 5,
    date: "4 months ago",
    serviceCategory: "Documentation",
    text: "Assisted me with my OCI application and Police Clearance certificate for my family. Pankaj is extremely knowledgeable about the RPO processes and checklist. Not a single objection was raised. Saved me countless trips back and forth.",
  },
  {
    id: "review-5",
    name: "Siddharth Verma",
    location: "Delhi NCR",
    rating: 5,
    date: "1 month ago",
    serviceCategory: "Travel",
    text: "Booked a customized family trip to Dubai through Mr and Miss Perfect Trips. Everything was arranged seamlessly from flights and 5-star hotel transfers to Burj Khalifa and Desert Safari passes. 24/7 support was fantastic. Will book all our future travels here.",
  },
  {
    id: "review-6",
    name: "Vikram Singhania",
    location: "Jaipur",
    rating: 5,
    date: "5 months ago",
    serviceCategory: "Consulting",
    text: "Pankaj helped restructure our regional distribution process and corporate identity. His guidance is grounded in reality, not fluff. Within 4 months, our operational bottlenecks were eliminated. A true strategic asset for any business founder.",
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "Consulting",
    question: "What does the initial business consulting consultation involve?",
    answer: "Our initial consultation is a confidential 45-minute strategic audit where we examine your current business model, growth bottlenecks, statutory setup, and revenue targets. Pankaj Foolwani personally assesses your requirements and provides an actionable blueprint highlighting immediate quick wins and structural improvements.",
  },
  {
    category: "Documentation",
    question: "How quickly can passport and Tatkal appointments be arranged?",
    answer: "For standard and Tatkal passport applications, we complete comprehensive document verification and book appointments at your designated Passport Seva Kendra (PSK / POPSK) typically within 24 to 48 hours, ensuring zero documentation errors that could delay your application.",
  },
  {
    category: "Documentation",
    question: "Can you assist with NRI OCI applications and foreign document apostille?",
    answer: "Yes. Perfect Documents specializes in Overseas Citizenship of India (OCI) registration for foreign nationals, NRI spouses, and minors. We manage ancestry proof compilation, Indian passport surrender certificate verification, and alignment with Foreigners Regional Registration Office (FRRO) norms.",
  },
  {
    category: "Travel",
    question: "How does Mr And Miss Perfect Trips customize international holiday packages?",
    answer: "Unlike rigid cookie-cutter tour operators, we tailor every flight, hotel category, transfer vehicle, and sightseeing experience around your exact preferred dates, budget, and travel style. We also assist with visa dossiers, travel insurance, and offer a live concierge contact throughout your travel.",
  },
  {
    category: "Location",
    question: "Do I need to visit your office in Zirakpur, or can services be handled remotely?",
    answer: "While clients are always welcome at our Dhakoli, Zirakpur office (Shop No. 51, Panchkula Complex), over 80% of our business consulting, travel arrangements, and preliminary documentation audits are conducted seamlessly via WhatsApp, Phone, and secure digital file transfer across India and abroad.",
  },
  {
    category: "Consulting",
    question: "What makes Pankaj Foolwani's approach different from traditional agencies?",
    answer: "Pankaj Foolwani brings founder-level personal involvement, transparent fee structures with zero hidden surprises, and a unified ecosystem combining strategic advisory with practical on-the-ground administrative and travel execution.",
  },
];
