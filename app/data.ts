export const profile = {
    name: "Solomon Ahwera",
    title: "Network & Security Engineer",
    location: "Kampala, Uganda",
    email: "solomonahwera@yahoo.com",
    phone: "+256 783 567 002",
    about: "I am a Network and Security Engineer with expertise in deploying firewalls, EDRs, switches, and vulnerability scanners. I specialize in integrating multi-vendor products to build robust, efficient, and secure IT infrastructures for banks, government bodies, and private enterprises.",
    socials: {
      linkedin: "#", 
      github: "#",   
    }
  };
  
  export const skills = [
    "Check Point", "Fortinet", "Sophos", "Palo Alto", "Imperva",
    "ESET", "VMware Carbon Black", "Symantec", "Nessus", 
    "SolarWinds NPM", "Cisco Switching/Routing", "Windows Server"
  ];
  
  export const certifications = [
    {
      name: "Check Point Certified Security Administrator (CCSA)",
      badge: "/check-point-certified-security-administrator-ccsa-r81.png"
    },
    {
      name: "Fortinet FortiGate 7.2 Administrator",
      badge: "/fortinet-fortigate-7-2-administrator.png"
    },
    {
      name: "Sophos Certified Engineer",
      badge: "/Sophos.png"
    },
    {
      name: "Certified ESET Inspect Optimization Specialist",
      badge: "/ESET-Logo.wine.png"
    },
    {
      name: "Certified ESET Managed Cloud Security Specialist v2",
      badge: "/ESET-Logo.wine.png"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      badge: "/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.png"
    }
  ];
  
  export const experience = [
    {
      company: "eLAAB Limited",
      role: "Technical Support & Security Engineer",
      period: "April 2022 — Present",
      description: "Deploying and configuring firewalls, EDRs, and vulnerability scanners. Implementing secure network architectures for clients like Pride Bank and UCAA."
    },
    {
      company: "Nakasero Hospital",
      role: "Network Security Engineer (Project)",
      period: "Project Based", 
      description: "Deployed FortiGate 600E Firewall and FortiAnalyzer for advanced threat protection, logging, and network traffic analysis to ensure patient data security."
    },
    {
      company: "Crystal Clear Software LTD",
      role: "End User Support & Training Engineer",
      period: "April 2020 — April 2022",
      description: "Deployed Loan Performer MIS with MS SQL Server. Conducted UI/UX testing and provided remote support via TeamViewer/AnyDesk."
    }
  ];
  
  export const projects = [
    {
      id: "ucaa-xdr",
      title: "UCAA Endpoint Detection (XDR)",
      client: "Uganda Civil Aviation Authority",
      tagline: "Migrating 600+ endpoints to cloud-based security.",
      challenge: "Needed enhanced, centrally managed threat detection and response across a large number of endpoints and servers.",
      solution: "Deployed ESET XDR on-premises across 600+ endpoints and servers, then subsequently upgraded the solution to a cloud-based system.",
      impact: "Achieved enhanced scalability, centralized management, and robust threat detection capabilities across critical infrastructure.",
      tech: ["ESET XDR", "Cloud Security", "Windows Server"],
      reference: {
        name: "Mr. Syned Aryeija",
        contact: "saryeija@caa.co.ug | +256 772 620 046"
      }
    },
    {
      id: "mcb-firewall",
      title: "Mercantile Credit Bank Firewall HA",
      client: "Mercantile Credit Bank",
      tagline: "High Availability Firewall Architecture for Banking.",
      challenge: "Required uninterrupted security operations and robust threat prevention for critical banking systems.",
      solution: "Configured Check Point Next Generation Firewalls with Access Control, Threat Prevention Policies, and High Availability (HA) setup.",
      impact: "Ensured uninterrupted security operations and provided a resilient, redundant security perimeter.",
      tech: ["Check Point NGFW", "High Availability", "Network Security"],
      reference: {
        name: "Mr. Exavier Rukera",
        contact: "rukeraexavier@gmail.com | +256 785 179 968"
      }
    },
    {
      id: "ecu-nessus",
      title: "Electoral Commission Vulnerability Mgmt",
      client: "Electoral Commission of Uganda",
      tagline: "Proactive Vulnerability Scanning & Mitigation.",
      challenge: "Needed a reliable method to identify and mitigate security risks across their infrastructure.",
      solution: "Deployed Nessus Expert vulnerability scanner and configured complex scan policies.",
      impact: "Established a consistent vulnerability assessment program, enabling proactive identification and mitigation of security risks.",
      tech: ["Nessus Expert", "Vulnerability Management", "Risk Assessment"],
      reference: {
        name: "Mr. Carol Nasimolo",
        contact: "cnasimolo@ec.or.ug | +256 772 122 239"
      }
    },
    {
      id: "nakasero-fortigate",
      title: "Nakasero Hospital Network Security",
      client: "Nakasero Hospital",
      tagline: "Advanced Threat Protection for Healthcare.",
      challenge: "Required a high-performance security infrastructure to protect sensitive patient data and ensure uninterrupted hospital operations.",
      solution: "Deployed FortiGate 600E Firewall and FortiAnalyzer for advanced threat protection, deep packet inspection, and comprehensive logging.",
      impact: "Secured the hospital network against advanced threats while providing granular visibility into network traffic for compliance and auditing.",
      tech: ["Fortinet FortiGate 600E", "FortiAnalyzer", "Healthcare Security"],
      reference: {
        name: "Mr. Romeo Asiimwe",
        contact: "romeo.asiimwe@nhl.co.ug | +256 775 104 540"
      }
    }
  ];