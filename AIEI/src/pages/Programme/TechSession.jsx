import React,{useState} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const tracks = [
  {
    title: "Track 1 - AI for Healthcare, Medical Imaging & Biomedical Systems",
    date: "March 26, 2026",
    time: "3:30 PM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 248,
        title:
          "Multi-Modal Deep Learning for Early Detection and Monitoring of Parkinson’s Disease",
        Authors:
          "Kunal Sanga; Dr. V. P. Meena; Rishit Raj; Aniruddh P Koundinya; Surya Prakash; Aditya Prem",
      },
      {
        sno: 2,
        id: 1222,
        title:
          "Accurate Measurement of Nail Overgrowth with Twin YOLOv8 Segmentation Models",
        Authors:
          "Aravindhan Ravichandran; Pradeep Kumar; Sunanth H; Arun Karthik V; Anusha Dr T",
      },
      {
        sno: 3,
        id: 1226,
        title:
          "Investigating the Performance of MobileNet Architecture in Classifying Leukocytes",
        Authors: "Sapna S; Renuka A",
      },
      {
        sno: 4,
        id: 1228,
        title:
          "Non-Invasive Blood Glucose Monitoring Using Single Wavelength NIR Reflectance at 1050 nm",
        Authors: "Alok Kumar; Dr Mrutyunjay Rout",
      },
      {
        sno: 5,
        id: 1791,
        title:
          "SGALL: SinGAN and YOLOv8 generated Acute Lymphoblastic Leukemia dataset for enhanced Detection and Classification",
        Authors:
          "Rajashree Nayak; Amrita Bagchi; Bunil Kumar Balabantaray",
      },
      {
        sno: 6,
        id: 1682,
        title:
          "A Spectral-Normalized Lightweight GAN with Gatekeeper Autoencoder for Imbalanced Chest X-Ray Classification",
        Authors: "Bhavik Parmar; Nihar Mohapatra; Umesh Pati",
      },
    ],
  },

  {
    title: "Track 2 - Renewable Energy, Smart Grid & Sustainability",
    date: "March 26, 2026",
    time: "3:30 PM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 515,
        title:
          "A Multi-Class Electricity Theft Classification Framework Using CatBoost for Residential Consumption Profiles",
        Authors:
          "Arvind Kumar Nirala; Ashish Kumar; K Raghavendra Naik; Satyavan Kumar Mukhi",
      },
      {
        sno: 2,
        id: 585,
        title:
          "Data Driven ML forecasting model for Energy Management of EV Charging Station",
        Authors:
          "Satyavan Kumar Mukhi; Ashish Kumar; K Raghavendra Naik; Arvind Kumar Nirala",
      },
      {
        sno: 3,
        id: 1230,
        title:
          "Deep Autoencoder Networks for Fault Detection in AC Microgrids",
        Authors:
          "Rudranarayan Pradhan",
      },
      {
        sno: 4,
        id: 1442,
        title:
          "Microgrid System with Solar, Wind, Diesel Generator with Controlled Operating Hours",
        Authors: "Bhanuteja Vilasagarm",
      },
      {
        sno: 5,
        id: 1778,
        title:
          "A Compact Quad-Band Metamaterial Absorber under K and Ka-Band for Energy Harvesting Applications",
        Authors: "Bhanuteja Vilasagarm",
      },
      {
        sno: 6,
        id: 1779,
        title:
          "Experimental Study of Temperature Effects on Dynamic Capacitance on Intel SoC",
        Authors:
          "Satendra Dhangar; Manish Sharma; Md Shahanshah Shahjahan; Rajeev Hulekal",
      },
    ],
  },
 {
  title: "Track 3 - Computer Vision & Image Processing",
  date: "March 26, 2026",
    time: "3:30 PM – 5:00 PM",
    mode:"OFFLINE",
  papers: [
    {
      sno: 1,
      id: 895,
      title:
        "An Adaptive Face Recognition Based Attendance System for Academic and General Applications",
      Authors:
        "Priyanshu Kashyap; Tushant Kumar",
    },
    {
      sno: 2,
      id: 1227,
      title:
        "A Vision-Based Automated System for Plastic Waste Segregation Using Deep Learning",
      Authors:
        "Atul Kumar; Chaganti Subhash; Divya Kumar",
    },
    {
      sno: 3,
      id: 1471,
      title:
        "Deepfake-Aware Face Authentication for Edge Devices Using a Unified Raspberry Pi Pipeline",
      Authors:
        "Soumitra Ghosh; Sivaratri Manish; Prabin Kishor Patra; Sudhir Ranjan Pattanaik; Santosh Nayak",
    },
    {
      sno: 4,
      id: 1667,
      title:
        "A Dual Mode Framework for Early Detection of Coffee White Stem Borer and Leaf Miner: Integrating SGP40-SHT40 Digital Chemosensors and Pictorial Deep Learning",
      Authors:
        "Remya Jayachandran; Vanshika Muthanna; Tanu Anand; Thripthi T M; Bhargavi Gnanaprakash; V Renuka; Disha P",
    },
    {
      sno: 5,
      id: 1794,
      title: "ABATER: Movie Review Bombing Countermeasure",
      Authors:
        "Twinkle Kumari; Anubhav Yadav; Gaurav Baranwal",
    },
    {
      sno: 6,
      id: 1531,
      title:
        "Deep Reinforcement Learning for Game AI: Adaptive NPC Behavior and Player-Centric Evaluation Frameworks",
      Authors:
        "Kiran A V; Karthik M; Om M Doddamani; Rajendra A B",
    },
  ],
},
{
  title: "Track 4 - Smart Cities, Transportation & Urban Systems",
  date: "March 26, 2026",
    time: "3:30 PM – 5:00 PM",
    mode:"OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1327,
      "title": "A Multi-Scale Spatio-Temporal Embedded Graph Attention Network for Traffic Flow Prediction",
      "Authors": "Aditya Prasad Padhy; Ashok Pradhan; Deepak Reddy Pullaguram"
    },
    {
      "sno": 2,
      "id": 1587,
      "title": "Multi-GNSS PPK Positioning for High-Precision Agricultural Applications in Tea Plantations",
      "Authors": "Rajkumar Mandal; Samrat Das; Aiswarya S Pillai; Girija Nandan Kar; Somnath Mahato; Surajit Kundu"
    },
    {
      "sno": 3,
      "id": 1664,
      "title": "AirWise: LLM-Powered Smart Air Quality Monitoring and Automated Appliance Control",
      "Authors": "Prashanth Durgam; Molay Mondal; Bankuru Gowri Sankar Laxmi Narayana; Subrata Nandi; Sanghita Bhattacharjee; Sujoy Saha"
    },
    {
      "sno": 4,
      "id": 1788,
      "title": "GeoNBeats: Unified Spatio-Temporal Neural Basis Expansion for Air Quality Estimation in Sparse Sensor Network",
      "Authors": "Vaibhav Joshi; Kapil Kumar Meena; Arkopal Kishore Goswami"
    },
    {
      "sno": 5,
      "id": 1785,
      "title": "AI-Engineering Integration of Rainfall Microphysics and Vegetation Indicators for Agricultural Intelligence over Varanasi, India",
      "Authors": "Saurabh Maurya; Pramod Soni"
    },
    {
      "sno": 6,
      "id": 1839,
      "title": "Remote Sensing Based pH Estimation in Eastern Uttar Pradesh Using Sentinel-2 and Machine Learning",
      "Authors": "Ashwin Chitravanshi; Pramod Soni"
    }
  ]
},
{
  title: "Track 5 - Internet of Things, Edge AI & Smart Systems",
  date: "March 26, 2026",
    time: "3:30 PM – 5:00 PM",
    mode:"OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1363,
      "title": "Dual Band Metamaterial Based Agriculture Sensor for Moisture Sensing Application",
      "Authors": "Arjun Kumar; Rashmi Sinha; Abhishek Bharti; Anjali Kumari"
    },
    {
      "sno": 2,
      "id": 1438,
      "title": "All Dielectric Polarization Insensitive THz Metamaterial Perfect Absorber for Sensing Application",
      "Authors": "Krishna Gopal; Arjun Kumar; Amit Kumar"
    },
    {
      "sno": 3,
      "id": 1671,
      "title": "Design and Analyse the Characteristics of a Compact Tri-band Stop Frequency Selective Surface",
      "Authors": "Smita Kumari; Dr Akhilesh Kumar; Ravi Pushkar; Abhishek Kumar"
    },
    {
      "sno": 4,
      "id": 1685,
      "title": "An Interpretable Machine Learning Approach to Assess Gender Equity in PM-JAY Healthcare Utilization: Evidence from Jharkhand",
      "Authors": "Aiman Asif; Neha Jaiswal"
    },
    {
      "sno": 5,
      "id": 1792,
      "title": "A Blockchain-Enabled Credit-Aware Parking Allocation Framework with Fairness Guarantees",
      "Authors": "Keshab Kumar Gaurav; Gaurav Baranwal"
    },
    {
      "sno": 6,
      "id": 1797,
      "title": "Design and Development of a Tethered Bio-Inspired Submersible ROV with Fin-Based Maneuvering for Shallow-Water Surveillance",
      "Authors": "Manoranjan Kumar; Chanchal Kumari; Vijay Kumar Dalla"
    }
  ]
},
{
  title: "Track 6 - AI for Healthcare, Medical Imaging & Biomedical Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  papers: [
    {
      sno: 1,
      id: 164,
      title:
        "Smart Brain Tumour Detection Using Yolov9 Deep Learning Model on MRI Scans for Real-Time Medical Imaging",
      Authors: "Kavitha Vasu",
    },
    {
      sno: 2,
      id: 218,
      title:
        "Interpretable Deep Learning for Brain Tumor Analysis: Fusing U-Net Segmentation with Grad-CAM Visual Explanations",
      Authors:
        "Suriya Navaneetha Krishnan K; Sheerin Sitaran N; Ravi Prasath S; Rethik Raj R R",
    },
    {
      sno: 3,
      id: 468,
      title:
        "Pancreatic Tumour Segmentation Using A Frequency-Aware Swin Transformer Unet Architecture",
      Authors:
        "Santhosh J A S; Surjeet Dharsan A S; Jenitha T; Brindha G",
    },
    {
      sno: 4,
      id: 524,
      title:
        "A Hyperparameter-Tuned and Explainable ML Framework for Accurate Heart Disease Diagnosis",
      Authors:
        "Sayed Irani; Shruthi M L J; Samhitha Ramarathnam; Sachin M N",
    },
    {
      sno: 5,
      id: 604,
      title:
        "Parallel Hybrid Classical–Quantum Architecture for LLM Jailbreak Detection",
      Authors: "Sajal Bajaj; Kamlesh Dutta",
    },
    {
      sno: 6,
      id: 657,
      title:
        "An Attention-Guided Multi-Scale Network for Brain Tumor Segmentation",
      Authors:
        "Tushar Chaurasia; Pranshu Jena; Umesh C Pati",
    },
    {
      sno: 7,
      id: 727,
      title:
        "Diabetic Retinopathy Detection using VGG16 and Grad-CAM",
      Authors:
        "Abis Azam; Vishruth Janardhan; Vignesh B S; Abilash A; Dr Sumit Yadav",
    },
    {
      sno: 8,
      id: 865,
      title:
        "An Ensemble Learning Torchng for Brain Tumour Patient Survival Prediction",
      Authors: "G Karthikeyan",
    },
    {
      sno: 9,
      id: 947,
      title:
        "A Modular Dual-Stage Deep Learning Framework With YOLOv8 and ConvNeXt for Psoriasis-Oriented Multiclass Skin Disease Classification",
      Authors:
        "A Mamatha; Sangeetha V; Deepashree K A",
    },
  ],
},
{
   title: "Track 7 - Computer Vision & Image Processing",
   date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 189,
      "title": "Comparative Study of Pix2Pix and ESRGAN Architectures for Image Restoration",
      "Authors": "Precious Sukhi; Riya Bhattacharya; Priya Bhatnagar; Supriya Agrawal; Shubha Puthran"
    },
    {
      "sno": 2,
      "id": 525,
      "title": "Benchmarking YOLOv12-A2F for Robust Detection of Underwater Objects",
      "Authors": "Rajat Amat; Mourina Ghosh; Amitava Nag; Robin Pathak"
    },
    {
      "sno": 3,
      "id": 623,
      "title": "Machine Learning-Powered Sustainable Mushroom Growing",
      "Authors": "Keerthana B; Dharshini D; Jamna A"
    },
    {
      "sno": 4,
      "id": 1299,
      "title": "DiagnoBridge: AI-powered Smart Healthcare Platform",
      "Authors": "Arjun K S; Vigneshwaran M; Chirag Das; Jothi Prasad"
    },
    {
      "sno": 5,
      "id": 1319,
      "title": "A Vision-Based Assistive Navigation System for Visually Impaired Individuals Using CNN–SSD",
      "Authors": "M Jayakumar"
    },
    {
      "sno": 6,
      "id": 1325,
      "title": "Energy-Optimized Sliding-Window Mutual Information–Powered Dynamic Functional Connectivity for Parkinson's Disease Prediction",
      "Authors": "Soham Bandyopadhyay; Arnab Banerjee; Suman Dasgupta; Amit Mondal"
    },
    {
      "sno": 7,
      "id": 1425,
      "title": "Lightweight UNet++ Based Multi-Sensor Fusion for Automated Building Footprint Extraction",
      "Authors": "Nagadi Leela Rao; Deepak Kumar; Shivani Verma"
    },
    {
      "sno": 8,
      "id": 1463,
      "title": "Config-Driven Promptable Semantic Segmentation for Satellite Land Cover Mapping with PyTorch",
      "Authors": "Dinesh Kumar G"
    },
    {
      "sno": 9,
      "id": 1705,
      "title": "Comparative Robustness of Attention-Driven YOLOv12 and CNN-Based YOLOv8–YOLOv11 for Long-Tailed Weed Detection in Real-Time Field Data",
      "Authors": "Anusree Manoj; Sajitha Krishnan"
    }
  ]
},
{
  "title": "Track 8 - Natural Language Processing, LLMs & Generative AI",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 342,
      "title": "Retrieval-Augmented Generation (RAG) for Document-Based Question Answering",
      "Authors": "Ila Rai; Gudipati Rajesh Naidu; Manjulata Badi"
    },
    {
      "sno": 2,
      "id": 673,
      "title": "Intelligent Meeting Insights Generator Using Speech-to-Text and LLM-Based Semantic Categorization Algorithm",
      "Authors": "Prabhu T N"
    },
    {
      "sno": 3,
      "id": 708,
      "title": "Towards Intelligent Offline Proctoring: AI-Driven Spatio-Temporal Behavioral Analysis",
      "Authors": "Samridhi Raj Sinha; Asmi Parikh; Saakshi Jain; Shubha Puthran"
    },
    {
      "sno": 4,
      "id": 711,
      "title": "Evaluating Sentiment Classification Performance of LLMs Using Frankenstein as a Benchmark Text",
      "Authors": "Ridhi Jaggi; Ritvika Chalamala; Debendra Kumar Dhir"
    },
    {
      "sno": 5,
      "id": 1030,
      "title": "AI Powered Automated Question Generator using NLP and Spring Boot",
      "Authors": "Khushi Beniwal"
    },
    {
      "sno": 6,
      "id": 1068,
      "title": "Beyond BERT: A RoBERTa based Framework with Multi-Head Attention Pooling for Lyrics-Based Music Genre Classification",
      "Authors": "Siva Priya M S"
    },
    {
      "sno": 7,
      "id": 1283,
      "title": "Fact-Aware Text Generation for Low-Resource Languages: A Systematic Survey with Emphasis on Marathi",
      "Authors": "Minakshi Ghorpade"
    },
    {
      "sno": 8,
      "id": 1630,
      "title": "FINCO-QA: Financially Contextualized Retrieval for Question Answering over Financial Documents using LLM-RAG",
      "Authors": "Aafreen Sana; Dr Chitrakala S"
    },
    {
      "sno": 9,
      "id": 1777,
      "title": "MedPolicy-RAG: A Multi-Domain AI Chatbot for Healthcare Compliance Interpretation",
      "Authors": "Namratha Nutakki; Krishna Siva Prasad Mudigonda; K Raghavendra Naik; Nikhil Sri Ram Pulluri"
    }
  ]
},
{
  title: "Track 9 - Cybersecurity, Blockchain & Privacy",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 154,
      "title": "A PBFT-Enhanced Blockchain Framework for Secure and Efficient Certificate Verification",
      "Authors": "Ramya M R; Renu Sri Sivakumar; Esaiyaazhini C K; Logeswari M; Sakthivel K"
    },
    {
      "sno": 2,
      "id": 480,
      "title": "Decentralized Identity Verification for Third Gender Individuals Using Blockchain",
      "Authors": "Sandeep Kumar"
    },
    {
      "sno": 3,
      "id": 824,
      "title": "Explainable AI Framework for Phishing Detection Using Hybrid URL and Content Features",
      "Authors": "Imran Ali Mohammed"
    },
    {
      "sno": 4,
      "id": 932,
      "title": "LMDAHoney: Agentic-Language Model Driven Adaptive Honeypot for Advanced Cyber Deception",
      "Authors": "Sanjeev Kumar; Navdeep Singh Chahal; Chetan Komal"
    },
    {
      "sno": 5,
      "id": 1557,
      "title": "Hybrid QKD-AES Integration: Enhancing BB84-Based Quantum Key Distribution for Practical Encryption",
      "Authors": "Rahul Mishra"
    },
    {
      "sno": 6,
      "id": 1577,
      "title": "Attention-Guided Hybrid Deep Learning for Early Detection of Zero-Day Attacks in Cyber Threat Intelligence Pipelines",
      "Authors": "Satendra Sonare; Pritaj Yadav"
    },
    {
      "sno": 7,
      "id": 1773,
      "title": "A Secure-by-Design Cloud-Native AI Infrastructure Using Zero Trust and Automated Fine-Grained Access Control",
      "Authors": "Vipindas Aravindakshan; Abrar Ahmed Syed"
    },
    {
      "sno": 8,
      "id": 1779,
      "title": "The Evolution of Social Bot Detection: A Comprehensive Survey of Methods, Datasets, and Emerging Challenges",
      "Authors": "Aditi Tiwari; Adwitiya Sinha; Sharad Verma; Shivendra Kumar Pandey"
    }
  ]
},
{
   title: "Track 10 - Internet of Things, Edge AI & Smart Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 119,
      "title": "The Predictive Pulse: IoTs Role in Next Generation Healthcare",
      "Authors": "Priyanka Gupta"
    },
    {
      "sno": 2,
      "id": 564,
      "title": "Online Class Environment Monitoring With Pose Estimation And Attention Tracking Algorithm And AI-Powered",
      "Authors": "Giridharan R; Gokul Ram J; Deepak Kumar A"
    },
    {
      "sno": 3,
      "id": 779,
      "title": "Predictive Maintenance System for Smart Home Appliances Using IoT Sensor Data and Deep Learning",
      "Authors": "Srinu M; Dr Sasi Kumar A; Smita Prajapati; Dr Sadhana Tiwari; Sidda Raviteja; Dr Suganthi D"
    },
    {
      "sno": 4,
      "id": 1326,
      "title": "CoSV: A Chain of Structured Verification for Disaster Information Extraction Using Small Language Models",
      "Authors": "Rohit Ghosal; Asif Iqbal Middya; Sarbani Roy"
    },
    {
      "sno": 5,
      "id": 1335,
      "title": "A Governance-First Architecture for Trustworthy Machine Learning: Multi-Dimensional Experimental Evaluation Across Healthcare and Insurance Domains",
      "Authors": "Avik Datta"
    },
    {
      "sno": 6,
      "id": 1823,
      "title": "Hybrid Deep Learning and IoT-Enabled Framework for Real-Time Monitoring and Management of Coastal Marine Litter",
      "Authors": "Krishnaveni Musku"
    },
    {
      "sno": 7,
      "id": 1836,
      "title": "An IoT and Machine Learning Framework for Intelligent Traffic Signal Control and Congestion Reduction in Urban Networks",
      "Authors": "Deepika Paturu"
    },
    {
      "sno": 8,
      "id": 1837,
      "title": "IoT-Based Soil Moisture Monitoring with Remote Sensing validation for Precision Agriculture",
      "Authors": "Deepika Paturu"
    }
  ]
},
{
  title: "Track 11 - Smart Cities, Transportation & Urban Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 577,
      "title": "Enhancing Road Safety and Network Intelligence Using a Swarm Intelligence–SVM Hybrid Model in 6G-Enabled V2X Communication",
      "Authors": "P Mano Paul"
    },
    {
      "sno": 2,
      "id": 744,
      "title": "Drone-Based Detection of Floating Marine Debris Using YOLOv8",
      "Authors": "Dr Divya Mishra; Prateek Yadav; Siddhi Arora"
    },
    {
      "sno": 3,
      "id": 958,
      "title": "Air Quality Index Prediction Using Data Science and ML",
      "Authors": "Lingamsetty Hemabindu; G Fayaz Hussain; Bandari Neeraja; Hulebedu Shashikala; Salva Purnima"
    },
    {
      "sno": 4,
      "id": 1050,
      "title": "AI-Based Ship Route Tracking and Oil Leakage Monitoring",
      "Authors": "Raj Mishra; Rajneesh Kumar Maurya; Shashank Sharma; Sandeep Kumar"
    },
    {
      "sno": 5,
      "id": 1349,
      "title": "AI-Assisted Breast Cancer Diagnosis Using Vision Transformer",
      "Authors": "Ashok Reddy Polaka"
    },
    {
      "sno": 6,
      "id": 1632,
      "title": "Multi-Class Traffic Accident Severity Detection And Classification",
      "Authors": "Lakshmi Rama Naga Koushik Grandhi; Bindu Madhavi Tummala; Prianshu Jyosyula; Simhadri Soradu"
    },
    {
      "sno": 7,
      "id": 1676,
      "title": "Implementation of Edge Intelligent Deep Learning Approach for Management and Prediction of Disasters using Social Media Dataset",
      "Authors": "Mekelarani T M S; Giri M; Hemalatha Nalipi; Keerthi Talla Muni; Arun Kumar S; Kethankumar Bodireddy"
    },
    {
      "sno": 8,
      "id": 1820,
      "title": "Rapid Flood Assessment Using SAR Data and Cloud-Based Geospatial Apps",
      "Authors": "Krishnaveni Musku"
    }
  ]
},
{
  title: "Track 12 - Renewable Energy, Smart Grid & Sustainability",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1486,
      "title": "AI Based Solar Power Forecasting Using Machine Learning: A Mini Review",
      "Authors": "Saket Kumar; Abhishek Priyam"
    },
    {
      "sno": 2,
      "id": 1508,
      "title": "Deep Neural Networks for Fault Classification in Inverter-Integrated EV Systems with Renewables",
      "Authors": "Shradha Umathe"
    },
    {
      "sno": 3,
      "id": 1532,
      "title": "Intelligent Optimization Framework for Grid-Integrated Wind Energy Systems Using BFO–PI Controller and Modified SEPIC Converter Model",
      "Authors": "Prakash S; Prabakaran S R"
    },
    {
      "sno": 4,
      "id": 1613,
      "title": "Policy-Constrained Geospatial Intelligence: Integrating Deep Learning with Multi-Criteria Analysis for Solar Energy Planning",
      "Authors": "MD Noor"
    },
    {
      "sno": 5,
      "id": 1639,
      "title": "Green Hydrogen Hub Site Selection using a Hybrid GIS-MCDM and Genetic Algorithm Framework",
      "Authors": "Dishant Balotra; Banalaxmi Brahma"
    },
    {
      "sno": 6,
      "id": 1694,
      "title": "Deep Learning Approaches for Glaucoma Detection from Retinal Fundus Images",
      "Authors": "Chandni"
    },
    {
      "sno": 7,
      "id": 1793,
      "title": "AI-Driven Machine Learning Prediction of Mechanical Properties of GGBS–Fly Ash Blended Sustainable Concrete",
      "Authors": "Rohan Kumar Choudhary; Awdhesh Kumar Choudhary; Keshav Kumar Sharma"
    },
    {
      "sno": 8,
      "id": 1796,
      "title": "Intelligent Energy Disaggregation and Optimization in Smart Homes Using NILM and AI-Based Predictive Analytics",
      "Authors": "Yashaswini C S; Mahipal Bukya; Nisha Prasad; Babu Naik Gugulothu; Srinivas Yelisetti; Rajesh Kumar"
    }
  ]
},
{
  title : "Track 13 - Robotics, Autonomous Systems & Control",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 871,
      "title": "Smart Robotic Arms Trained with RL for Assembly-Line Automation",
      "Authors": "Devi M"
    },
    {
      "sno": 2,
      "id": 940,
      "title": "Multi-Agent Reinforcement Learning with Decentralized AI in Autonomous Drone Swarms",
      "Authors": "Vibhor Pal; Gaurav Sarraf; Manisha Bhende; Suvarna Patil"
    },
    {
      "sno": 3,
      "id": 1177,
      "title": "Intelligent Drone Traffic Management with Multi-Agent Learning",
      "Authors": "Akshya J"
    },
    {
      "sno": 4,
      "id": 1371,
      "title": "Multimodal Deep Learning for Dissociation Detection: Window-Based, Sequential, and Attention-Augmented Architectures",
      "Authors": "Deepa Gupta; Nischal V Pattedar; Punav Anirudh Potluri; Raunak Choudhury; Sravan Kumar Reddy"
    },
    {
      "sno": 5,
      "id": 1391,
      "title": "A Study of Environmental Pollution and its Relation with Disorders, Diseases and Mortality using Machine Learning, Deep Learning",
      "Authors": "Swapnaneel Chakrabarty; Atmadeep Samaddar; Poly Sil Sen"
    },
    {
      "sno": 6,
      "id": 1534,
      "title": "Evaluating LoRA Adaptation and Fine-Tuning for Multi-Class Adversarial Prompt Detection in Transformer Models",
      "Authors": "Sajal Bajaj; Kamlesh Dutta"
    },
    {
      "sno": 7,
      "id": 1710,
      "title": "Real Time Screen Based Gaze Estimation Using MediaPipe and Machine Learning Models",
      "Authors": "Sahil Kumar Gupta; Aaditya Yadav; Adrija Adhikary; Raushan Kumar Gupta; Jyotsna C; Amudha J"
    },
    {
      "sno": 8,
      "id": 1795,
      "title": "Smart Eye-Wear for Real-Time Alertness and Alcohol Monitoring for Motorcycle Riders",
      "Authors": "G Satyanandam; Ankur Pandey; Vivek Upadhyaya"
    }
  ]
},
{
  title: "Track 14 - Data Science, Machine Learning & Optimization",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 274,
      "title": "Dynamic Feature Fusion in a Semi-Supervised Scene for Cardiovascular Risk Identification",
      "Authors": "Rajesh Turaka; Dr Suthir Sriram"
    },
    {
      "sno": 2,
      "id": 362,
      "title": "CF-GNN: An Imbalance-Aware Counterfactual Graph Neural Network for ICU Mortality Prediction in Coronary Artery Disease Patients",
      "Authors": "Geetha Pratyusha Miriyala; Arun Sinha"
    },
    {
      "sno": 3,
      "id": 552,
      "title": "AI-Powered Learning Difficulty Prediction Using Federated Analytics for Early Academic Risk Detection in STEM Students",
      "Authors": "Ayesha Ambreen; CH N V Jyothirmai; Prasanta Chatterjee Biswas; Kathari Santosh; Dr Chinmaya Dash; Ponni Valavan M"
    },
    {
      "sno": 4,
      "id": 852,
      "title": "Learning to Decide When Not to Decide: Coverage-Constrained Selective Classification with Abstention",
      "Authors": "Janice Karen Petra K; Jenavani D; Deepa R"
    },
    {
      "sno": 5,
      "id": 983,
      "title": "Quantum-Inspired Machine Learning for High-Dimensional Data Optimization",
      "Authors": "Amit Verma; Arpana Chaturvedi; S Nagaraju; Amit Verma"
    },
    {
      "sno": 6,
      "id": 1018,
      "title": "A Hybrid Lightweight AI Framework for Skill Gap Analysis in HR Analytics",
      "Authors": "Nazia Tasleem; Mohammed Nadeem Ansari"
    },
    {
      "sno": 7,
      "id": 1266,
      "title": "HiPELog: Hierarchical and Parameter-Efficient Transformer for Log Anomaly Detection",
      "Authors": "Anjana Devi M; Sountharrajan S"
    },
    {
      "sno": 8,
      "id": 1347,
      "title": "Lightweight ViT-U-Net with Wandering Patches for Hyperspectral Road Scene Segmentation",
      "Authors": "Vani Chaurasia; Dr Meera Dhabu; Dr Ashish Tiwari; Koukantala Pranav"
    }
  ]
},
{
  title : "Track 15 - AI Applications in Industry, Finance, Education & Society",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 233,
      "title": "Artificial Intelligence in Education (AIEd) for Deployment at Scale: Architectures, Evaluation, and Safety",
      "Authors": "Ashraf Alam"
    },
    {
      "sno": 2,
      "id": 234,
      "title": "Internet of Things (IoT) in Education",
      "Authors": "Ashraf Alam"
    },
    {
      "sno": 3,
      "id": 413,
      "title": "Proactive Student Risk Identification Using Optimized Random Forest Classification with Synthetic Minority Over-sampling Techniques",
      "Authors": "Sugandha Saxena; Rakesh B; Akkinebbal Surya Bhargava; Bharath C; Abdul Haq Nalband; Pradeep Kumar K"
    },
    {
      "sno": 4,
      "id": 465,
      "title": "Combining Large Language Models with Retrieval Systems for Enhanced Educational Tutoring: A Practical Implementation Study",
      "Authors": "Yogesh G; Sudharsan N M; Priyadharshini SP"
    },
    {
      "sno": 5,
      "id": 729,
      "title": "AI and Blockchain-Based Mining of Text and Sensor Data for Mental Health Monitoring",
      "Authors": "Richa Kaushik"
    },
    {
      "sno": 6,
      "id": 877,
      "title": "Evaluating Machine Learning Algorithms for Identifying Student Confusion while Watching MOOCs",
      "Authors": "Pankaj Singh"
    },
    {
      "sno": 7,
      "id": 1094,
      "title": "A Survey on Agentic AI-Powered Adaptive Learning Platforms",
      "Authors": "Niveditha T; Kabil Kirithik S S"
    },
    {
      "sno": 8,
      "id": 1202,
      "title": "Exploring the Impact of ICT-Based Learning Environments on Preschool Children’s Innovative Learning Behaviours",
      "Authors": "Binyong Zhu; Miao Tian"
    }
  ]
},
{
  "title": "Track 16 - AI for Healthcare, Medical Imaging & Biomedical Systems",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 709,
      "title": "Meta-Edu: An Adaptive Multi-Agent Framework for Educational Content Generation and Assessment",
      "Authors": "Samridhi Raj Sinha; Asmi Parikh; Soni Sweta"
    },
    {
      "sno": 2,
      "id": 1215,
      "title": "Multimodal Deep Learning for Early Cardiovascular Risk Prediction: A Systematic Review and the OC-GRU-RAE Framework",
      "Authors": "Jerin Jose J; Prem Jacob T; Parthiban Mohandas"
    },
    {
      "sno": 3,
      "id": 1293,
      "title": "Physio-Aware Contrastive Variational Autoencoder for Unsupervised ECG Anomaly Detection",
      "Authors": "Jayalaxmi Anem; Kanaka Raju Kalla; Sai Lakshmi Bevara; Pasumarthi Srinivasarao; Keta Lokesh; Chintha Sai Ganesh"
    },
    {
      "sno": 4,
      "id": 1297,
      "title": "LungSense AI - Lung Disease Prediction Using Convolutional Neural Network (CNN)",
      "Authors": "Abilash Sivakumar; Antony Mittul S; Matthias Daniel; Vishnu Sekhar M"
    },
    {
      "sno": 5,
      "id": 1314,
      "title": "Multimodal Hybrid Attention-Gating Fusion Deep Learning Framework for Alzheimer’s Disease Classification",
      "Authors": "Mohammed Rizwan Shaikh; Andrew Jeyabose; R Vijaya Arjunan"
    },
    {
      "sno": 6,
      "id": 1350,
      "title": "ExpAVOA-DMN for Depression Detection: Multimodal Deep Learning Framework using Acoustic and sMRI Biomarkers",
      "Authors": "Harshada Magar; Yash Chavhan; Niranjana Patil; Tejas Patil"
    },
    {
      "sno": 7,
      "id": 1397,
      "title": "Multimodal Fusion for Breast Cancer Prognosis: Integrating Frozen Swin-T Backbones with Mutual-Guided Attention",
      "Authors": "Bikash Sharma; Biswanath Dey"
    },
    {
      "sno": 8,
      "id": 1405,
      "title": "Deep Learning-Based Multi Class Retinal Image Classification From Fundus Images",
      "Authors": "G Karthik"
    },
    {
      "sno": 9,
      "id": 1776,
      "title": "Melanoma Skin Cancer Detection Using a Deep Learning Approach",
      "Authors": "Ajay Indian; Gaurav Meena; Ravi Raj Choudhary"
    }
  ]
},
{
  "title": "Track 17 - Computer Vision & Image Processing",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 880,
      "title": "Intelligent Glass-Defect Detection Using Convolutional Neural Networks",
      "Authors": "Bhuvaneshwari V"
    },
    {
      "sno": 2,
      "id": 1358,
      "title": "Statistical Analysis of Lung Histopathology Images for Deep Learning Based Cancer Detection",
      "Authors": "Rajarajeswari K; Akila I S"
    },
    {
      "sno": 3,
      "id": 1394,
      "title": "Decoding Cancer Tissues: A Comparative Deep Learning View of Breast Histopathology",
      "Authors": "Hima Deepthi Vankayalapati; Sanya Malik; Maanasvee Khetan; Reya Oberoi"
    },
    {
      "sno": 4,
      "id": 1419,
      "title": "Neural Vision-Language Modeling for Automated Image Caption Generation",
      "Authors": "Reshma Chadaram"
    },
    {
      "sno": 5,
      "id": 1521,
      "title": "Improved Skin Lesion Segmentation Using Dilated SegNet and Image Processing Techniques",
      "Authors": "Vaishnavi C; Siva Balaji A; Anitha Setti; Yepuganti"
    },
    {
      "sno": 6,
      "id": 1543,
      "title": "Virtual Eye Test App Using Gaze Tracking and Mobile Camera",
      "Authors": "Gowtham Raghunath"
    },
    {
      "sno": 7,
      "id": 1713,
      "title": "Comparative Analysis of Deep Learning Models for Visual Classification of Terrestrial and Extraterrestrial Rock Image",
      "Authors": "Parikshith Sivakumar; B U Naveen Raj; Jyotsna Chandrasekharan; Ullas S"
    },
    {
      "sno": 8,
      "id": 1729,
      "title": "Golden Ratio and Fibonacci Guided Non-Uniform Patch Segmentation for Osteoporosis Classification from X-ray Images",
      "Authors": "Subhayu Dutta; Kumar Souvik Chatterjee; Anish Kumar; Arun Kumar Maurya; Mohit Gupta"
    }
  ]
},
{
  "title": "Track 18 - Natural Language Processing, LLMs & Generative AI",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 967,
      "title": "Multi-Agent AI assisted Multimodal Content Synthesis: Knowledge Sharing across Barriers",
      "Authors": "Rajagopal A; Aradhana R"
    },
    {
      "sno": 2,
      "id": 1197,
      "title": "Artificial Intelligence Based ECAPA-TDNN Voice Cloning",
      "Authors": "Akash N; Harshitha N Reddy; Jayapandian N; Chirag B; Aaron L Dsouza; Anaswara Raghuthaman"
    },
    {
      "sno": 3,
      "id": 1231,
      "title": "Audio-to-Text Conversion with Speaker Identification",
      "Authors": "Vijayalaxmi H N; Shrimani Jahagirdar; Shwetha K C; Radhakrishnan Gopalapillai"
    },
    {
      "sno": 4,
      "id": 1321,
      "title": "Multilingual Hope Speech Classification Framework for English, Thunglish, and Manglish in Social Media Texts",
      "Authors": "Dr Srinivasan R; Tamil Selvan V P; Vignesh S; Nandha Kumar; Dr Nikkath Bushra S"
    },
    {
      "sno": 5,
      "id": 1781,
      "title": "When to Hash and When to Learn: A Systematic Performance Analysis of Deterministic Indexing versus Neural Inference for Text Retrieval",
      "Authors": "Bhupesh Kumar; Yash Verma; Chandramohan Dhasarathan"
    },
    {
      "sno": 6,
      "id": 1780,
      "title": "Generative AI in Higher Education: Pathways for Sustainable, Inclusive, and Adaptive Learning in the Context of India’s NEP 2020",
      "Authors": "Rahul Kumar; Neha Jaiswal"
    },
    {
      "sno": 7,
      "id": 583,
      "title": "AI Driven Adaptive Storytelling for Language Learning Advancing Personalization Engagement and Linguistic Development",
      "Authors": "Angalakuduru Aravind; Dr Shagufta Parween; Purnachandra Rao Alapati; Kalpanapriyadharshini Thiyagarajan; B Pavan Kumar; P Nagaraj"
    },
    {
      "sno": 8,
      "id": 757,
      "title": "AI-Enhanced Semiconductor Yield Optimization Using Hybrid Deep Learning and Edge Data Analytics",
      "Authors": "Botlagunta Preethish Nandan; Ravi Shankar Garapati"
    }
  ]
},
{
  "title": "Track 19 - Cybersecurity, Blockchain & Privacy",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1057,
      "title": "Rug Pulls in Blockchain-Based NFT Markets: Detection Techniques and Risk Mitigation Strategies",
      "Authors": "Swati Sharma; Nipun Sharma"
    },
    {
      "sno": 2,
      "id": 1477,
      "title": "Unified Blockchain and Machine Learning Framework for Secure Digital Certification and Adaptive Course Recommendations",
      "Authors": "Renangi Sandeep"
    },
    {
      "sno": 3,
      "id": 1364,
      "title": "Hybrid Decentralization for Real-Time Messaging: A Smart Contract and IPFS-Based Approach on Ethereum",
      "Authors": "Venkatesh Babu; Vignesh D; Sibaath Ahmed S; Ramkumar M P; Emil Selvan G S R"
    },
    {
      "sno": 4,
      "id": 1784,
      "title": "AI-Enabled Trustworthiness in Edge Zero Trust Architectures",
      "Authors": "Vibha Negi; Pramod Negi"
    },
    {
      "sno": 5,
      "id": 1833,
      "title": "Policy- and Tenant-Aware AI Fabric: Embedding Trustworthy Machine Learning into Enterprise SaaS at Scale",
      "Authors": "Suresh Kurapati"
    },
    {
      "sno": 6,
      "id": 1845,
      "title": "Harnessing Artificial Intelligence Cybersecurity: Cutting Edge Collaboration of SAP AWS to Safeguard Life Science Data",
      "Authors": "Anjaneyulu Gudla; Manish Kumar; Vamshi Jeksani; Kiran Kumar Reddy; Gayathri Band"
    },
    {
      "sno": 7,
      "id": 1841,
      "title": "Intelligent Risk-Aware Release Governance Using Agentic AI in Cloud-Native P&C Insurance Ecosystems",
      "Authors": "Kiran Babu Boddapati; Pavan Madduri; Karthik Turaga"
    },
    {
      "sno": 8,
      "id": 758,
      "title": "Generative AI-Enhanced Data Engineering Pipelines for Predictive Biomarker Discovery in Alzheimer’s and Kidney Disease",
      "Authors": "Mahesh Recharla; Avinash Reddy Aitha; Dr Seenu Aaluri"
    }
  ]
},
{
  "title": "Track 20 - Internet of Things, Edge AI & Smart Systems",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 817,
      "title": "A Multi-Factor Risk-Minimization Framework for Integrated Personal Safety and Navigation",
      "Authors": "Niki Modi; Yash Wadhvani; Rishi Mehta; Tirth Borad; Prit Suthar"
    },
    {
      "sno": 2,
      "id": 1819,
      "title": "Smart Helmet with GNSS Based Linked Location Alerts",
      "Authors": "Mallikharjuna Rakesh Manepalli"
    },
    {
      "sno": 3,
      "id": 1826,
      "title": "Sound Aware Haptic Feedback Wearable for the Hearing Impaired",
      "Authors": "Krishnaveni Musku"
    },
    {
      "sno": 4,
      "id": 1827,
      "title": "NutriFit360 AI: An Intelligent Machine Learning-Based Diet and Workout Recommendation",
      "Authors": "Mallikharjuna Rakesh Manepalli"
    },
    {
      "sno": 5,
      "id": 1832,
      "title": "Smart Stick for Visually Impaired with Real-time GNSS Tracking and Guardian Monitoring",
      "Authors": "Mallikharjuna Rakesh Manepalli"
    },
    {
      "sno": 6,
      "id": 1822,
      "title": "Geo-Synchronized Smart Waste Management System",
      "Authors": "Krishnaveni Musku"
    },
    {
      "sno": 7,
      "id": 1821,
      "title": "File Vault Secure: Multi-Factor Encryption Using Password, Geolocation, and One-Time Password",
      "Authors": "Krishnaveni Musku"
    },
    {
      "sno": 8,
      "id": 842,
      "title": "A Neuro-Symbolic AI System for Policy Evaluation on Canine Rights, Urban Safety, and Human-Animal Legal Coexistence",
      "Authors": "R Vimala"
    }
  ]
},
{
  "title": "Track 21 - Smart Cities, Transportation & Urban Systems",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 843,
      "title": "A Federated Legal Intelligence Architecture for Cross-Jurisdictional Trademark Licensing in the Dairy Industry",
      "Authors": "R Vimala"
    },
    {
      "sno": 2,
      "id": 844,
      "title": "A Federated Legal Decision System Using Case-Based Reasoning and Crowd-AI to Resolve Street Dog Disputes Across Jurisdictions",
      "Authors": "Manonmani M"
    },
    {
      "sno": 3,
      "id": 858,
      "title": "Federated Multi-Modal Learning System for Privacy-Preserving Medical Diagnostics in Next-Generation Healthcare",
      "Authors": "Kaviya S"
    },
    {
      "sno": 4,
      "id": 900,
      "title": "An Evidence-Grounded Multi-Stage Retrieval-Augmented Framework for Multimodal Medical Question Answering",
      "Authors": "Khushi Sharma; Srishti Srivastava; Shruti Sahrawat; Abhishek Singhal"
    },
    {
      "sno": 5,
      "id": 922,
      "title": "Machine Learning–Based Earthquake Prediction Using Global Seismic Data",
      "Authors": "Allacheruvu Brahmaiah; Kondragunta Rama Krishnaiah; Kattika Koteswara Rao; Nanduri Srinivas; Shahanaz Shaik; Venneti Murali Krishna"
    },
    {
      "sno": 6,
      "id": 937,
      "title": "A Privacy-Preserving Federated Learning Framework for Adaptable Cross-organizational Collaboration",
      "Authors": "Nimish Kushwaha; Sandesh Varma; A Padmavathi"
    },
    {
      "sno": 7,
      "id": 1741,
      "title": "TeachMate: A Teaching Assistant using Small Language Models for Education in Remote Areas",
      "Authors": "Sireesha K; Erol John D'Silva"
    },
    {
      "sno": 8,
      "id": 1771,
      "title": "Multi-Objective Task Scheduling in Fog-Cloud Environments Using Proximal Policy Optimization",
      "Authors": "Arwaz Khan; Pinky K; Karan Verma"
    }
  ]
},
{
  "title": "Track 22 - Renewable Energy, Smart Grid & Sustainability",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 605,
      "title": "AI-Driven Hybrid Optimization of BiFeO3–rGO Nanocomposites for High-Performance Energy Storage",
      "Authors": "Raj Kumar Gupta"
    },
    {
      "sno": 2,
      "id": 1441,
      "title": "Electricity Generation from Waste Materials",
      "Authors": "Bhanuteja Vilasagarm"
    },
    {
      "sno": 3,
      "id": 1161,
      "title": "Hybrid Machine Learning-Based Wind Power Prediction with Anomaly Detection",
      "Authors": "Venkateshkumar M; Shrinidhee P B; Sundaresh S; Pranav Krishna J S; Vishal M"
    },
    {
      "sno": 4,
      "id": 1167,
      "title": "Fault Detection in Smart Grids Using Machine Learning and Raspberry Pi for Condition Monitoring",
      "Authors": "Venkateshkumar M"
    },
    {
      "sno": 5,
      "id": 1774,
      "title": "Analysis of Performance and Switching Behavior of SPS-Modulated DAB Converter",
      "Authors": "Kumar Shanu; K B Yadav"
    },
    {
      "sno": 6,
      "id": 1772,
      "title": "A Compact and Stable Wideband Metamaterial Absorber for Shielding Technology",
      "Authors": "Shashi Kumar Ranjan; Jigyasa Pagaria; Rajesh Kumar Yadav; Debajyoti Chatterjee; Juliano Katrib; Swagatadeb Sahoo"
    },
    {
      "sno": 7,
      "id": 868,
      "title": "ML-Optimized THz-Band Massive MIMO Architecture for Energy-Efficient 6G Communication",
      "Authors": "K P Ramapraba S"
    },
    {
      "sno": 8,
      "id": 1107,
      "title": "Deep Neural Networks for Automatic Vehicle Damage Assessment in Insurance",
      "Authors": "Lalitha S"
    }
  ]
},
{
  "title": "Track 23 - Robotics, Autonomous Systems & Control",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 405,
      "title": "Efficient FPGA-Based CNN Accelerator for Real-Time Traffic Sign Classification on PYNQ-Z2",
      "Authors": "Anushka Tiwari; Jai Dhairya Kumar; Wafiza Syed; Suhas Venkat; Girish H"
    },
    {
      "sno": 2,
      "id": 867,
      "title": "FPGA-Driven Parallel Inference Engine for High-Throughput Deep Learning in Autonomous Robotics",
      "Authors": "Lalitha S"
    },
    {
      "sno": 3,
      "id": 878,
      "title": "Energy-Aware RISC-V SoC with Integrated AI Accelerator for Edge Computing Applications",
      "Authors": "G Pavani"
    },
    {
      "sno": 4,
      "id": 1083,
      "title": "An FPGA–Based Enhanced Phase Measurement System",
      "Authors": "Shrikant Upadhyay; Jadhav Vivek Singh; B Varun; Barla Dhanush; J Gowtham"
    },
    {
      "sno": 5,
      "id": 1573,
      "title": "A Lightweight Hybrid DVFS Governor with EMA Smoothing and Asymmetric Hysteresis: FPGA Based Evaluation and Node-Scaled Analysis",
      "Authors": "Chirag Tripathi; R K Sharma"
    },
    {
      "sno": 6,
      "id": 1095,
      "title": "Custom Training, Channel Adaptation, and Quantization of Deep Learning Enabled Semantic Communication",
      "Authors": "Het Valera; Sumedha Goyal"
    },
    {
      "sno": 7,
      "id": 1201,
      "title": "A Real-World Fractional Assets Tokenization Platform using Hedera: SAMK Framework",
      "Authors": "Shikha Jain; Minal Shirure; Aakanksha Bedi; Kapil Kushwaha"
    },
    {
      "sno": 8,
      "id": 1208,
      "title": "Research on a Cross-Subject EEG Signal Analysis Framework Based on Self-Representation Learning",
      "Authors": "Yue Chao; HaiChun Huang; JiaNing Xue"
    }
  ]
},
{
  "title": "Track 24 - Data Science, Machine Learning & Optimization",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 307,
      "title": "AI-Driven Credit Scoring: A Study of Machine Learning Algorithms for Enhanced Risk Assessment",
      "Authors": "Shaikh Irfan"
    },
    {
      "sno": 2,
      "id": 755,
      "title": "Towards Automated Financial Risk Scoring in Automotive Financing with Explainable Machine Learning",
      "Authors": "Kushvanth Chowdary Nagabhyru; Anil Lokesh Gadi; Dr Aaluri Seenu"
    },
    {
      "sno": 3,
      "id": 759,
      "title": "Cloud-Native Orchestration of Multi-Counterparty Derivatives and Collateral in Manufacturing Enterprises via AI-Assisted Financial Audit Engines",
      "Authors": "Ravi Shankar Garapati; Preethish Nandan Botlagunta; Dr Sudha Rani P R"
    },
    {
      "sno": 4,
      "id": 760,
      "title": "Real-Time AI-Driven Audit and Compliance Framework for Smart Manufacturing Financial Workflows",
      "Authors": "Dwaraka Kummari; Appa Rao Nagubandi; Venkata Kesava Kumar Majjari"
    },
    {
      "sno": 5,
      "id": 763,
      "title": "Architecting Hybrid Data Products Using AI/ML and Agentic AI for Group Insurance and Retirement Solution Platforms with Advanced Data Governance",
      "Authors": "Ramesh Inala; Goutham Kumar Sheelam; Dr Aaluri Seenu"
    },
    {
      "sno": 6,
      "id": 768,
      "title": "Leveraging AI-Based Mental Health Applications as Strategic Business Tools for Addressing Workplace Well-being and Productivity Challenges",
      "Authors": "Shrikant Upadhyay; Khiro d Chandra Maharana; Binod Kumar; V Rama Krishna Sharma; A Geetha; Rakesh Kumar"
    },
    {
      "sno": 7,
      "id": 1790,
      "title": "A Hybrid Ensemble Learning Approach for Robust Tumor Detection and Classification",
      "Authors": "Chandra Prabha Jain; Dipti Prasad; Sunil Kumar"
    },
    {
      "sno": 8,
      "id": 1225,
      "title": "Real Time Online Proctoring System Using AI And Full Stack Integration",
      "Authors": "Sai Vara Prasad Muvvala; Naga Ravi Teja Reddy V; Neeraj Amudalapalli; Meenapriyadharshini A"
    }
  ]
},
{
  "title": "Track 25 - AI Applications in Industry, Finance, Education & Society",
  "date": "March 27, 2026",
  "time": "03:30 PM – 05:30 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1204,
      "title": "Research on the Construction and Application of Design Metaverse Teaching Environment Integrating AIGC and Virtual Simulation",
      "Authors": "Weiqing Guo"
    },
    {
      "sno": 2,
      "id": 1206,
      "title": "AI-Driven Financial Data Analytics for Digital Transformation in the Steel Industry: A Case Study of Liaoning",
      "Authors": "Jing Zhang; Tao Zhang"
    },
    {
      "sno": 3,
      "id": 1209,
      "title": "Lifecycle-Oriented Modular Design of Consumer Electronics Based on Recyclable Material Systems",
      "Authors": "Tong Zhou; Weijun Xie; Jungsik Jang"
    },
    {
      "sno": 4,
      "id": 1210,
      "title": "Digital Transformation in University Sports Management: A Case Study of RFID-Enabled Attendance and Performance Tracking System",
      "Authors": "Zhihao Chen"
    },
    {
      "sno": 5,
      "id": 1212,
      "title": "The Impact of Artificial Intelligence on Financial Decision-Making: An Empirical Study in Commercial Bank Operations",
      "Authors": "Jiawei Yi"
    },
    {
      "sno": 6,
      "id": 1211,
      "title": "Intelligent Decision-Making for Patent-Standard Collaborative Transformation in the Power Industry: An Explainable Multi-Task Learning Framework",
      "Authors": "Sanshan Zhao; Xiaoman Qi"
    },
    {
      "sno": 7,
      "id": 601,
      "title": "CHAID Based Decision Tree for Intelligent Employee Performance Appraisal in Human Resource Management Systems",
      "Authors": "Mohammad Shahid Kamal"
    },
    {
      "sno": 8,
      "id": 1263,
      "title": "AI-Based Hybrid Framework for Intelligent Movie Recommendation Systems",
      "Authors": "Aanchal Singh S Vardhan"
    }
  ]
},
{
  "title": "Track 26 - AI for Healthcare, Medical Imaging & Biomedical Systems",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1725,
      "title": "AI-Based Detection of Emergency Care Episodes Using Hospital Power Consumption Signals",
      "Authors": "Shubham Gade; Shubham Sarote; Jigarkumar Shah; Anjali Gupta; Aniket Ragadwale"
    },
    {
      "sno": 2,
      "id": 1608,
      "title": "Advancements in AI-Based Approaches for Early Detection of Diabetic Retinopathy: A Review",
      "Authors": "Ayush Ohal; Arnav Bhalgaonkar"
    },
    {
      "sno": 3,
      "id": 1505,
      "title": "Adapter-Based Spatial Tuning of Foundation Models for Ultrasound-Based DDH Detection",
      "Authors": "Prashnatita Pal"
    },
    {
      "sno": 4,
      "id": 879,
      "title": "Deep Learning-Integrated Digital Pathology System for Early-Stage Cancer Screening Using High-Resolution Tissue Images",
      "Authors": "Sameer Nanivadekar"
    },
    {
      "sno": 5,
      "id": 896,
      "title": "CATS-AD: Phase-Aware Cognitive Trajectory Modeling of Alzheimer’s Disease Using Longitudinal ADAS-Cog Scores",
      "Authors": "Maga Vigna C; Bhavani G"
    },
    {
      "sno": 6,
      "id": 1668,
      "title": "BeatBound: A Knowledge-Bounded Retrieval-Augmented Generation Framework for Precision Cardiology",
      "Authors": "Shailendra Kumar Singh; Ayush Sharma; Janvi Chauhan; Uzma Saghir; Nitish Kumar Ojha; Anil Sharma"
    },
    {
      "sno": 7,
      "id": 1268,
      "title": "Cardiac Rhythm Classification Using HRV and Threshold-Based Intelligence",
      "Authors": "Jayaparvathy R; Daphin Lilda S; Pravin Kumar S"
    },
    {
      "sno": 8,
      "id": 1289,
      "title": "An Explainable Deep Learning Approach for Chronic Kidney Disease Prediction in Clinical Systems",
      "Authors": "Chapa Kalyani; Bhramaramba Ravi"
    }
  ]
},
{
  "title": "Track 27 - Computer Vision & Image Processing",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1635,
      "title": "Real-Time Infant Emotion Recognition Using EfficientNet-B0 with Explainable Deep Learning",
      "Authors": "Shivam Singh"
    },
    {
      "sno": 2,
      "id": 883,
      "title": "Deep Learning-Based Real-Time Emotion Analytics for Multi-Person Settings with Confidence Visualization",
      "Authors": "Vaishnavi Janjanam; Suma Kamalesh Gandhimathi"
    },
    {
      "sno": 3,
      "id": 953,
      "title": "Robust and Explainable Evaluation of Ensemble Learning Models for Line-to-Ground Fault Classification",
      "Authors": "Dr Ijjada Ramesh; Mahesh K; V Rajesh Kumar; Kanaka Raju Kalla"
    },
    {
      "sno": 4,
      "id": 1256,
      "title": "Wide-scale Enhanced Face Detection and Recognition with Geometry-Aware Multi-scale Occlusion",
      "Authors": "Abhishek Phull; Jyoti Maggu; Rahul Nijhawan"
    },
    {
      "sno": 5,
      "id": 1717,
      "title": "Disagreement-Aware Multi-Expert Deep Learning Framework for Enhanced Breast Cancer Detection in Ultrasound Images",
      "Authors": "Harijit Tripura; Pinki Roy"
    },
    {
      "sno": 6,
      "id": 1251,
      "title": "Analysis of Object Detection in Optical Remote Sensing Images using YOLO Frameworks",
      "Authors": "Darshan Shankar R; Niharika G; Dilip Kumar Dalei; Narayan Panigrahi"
    },
    {
      "sno": 7,
      "id": 1593,
      "title": "Performance Analysis of Two-Way Half Duplex Non-Orthogonal Multiple Access Over Orthogonal Multiple Access",
      "Authors": "Sravani Potula"
    },
    {
      "sno": 8,
      "id": 1696,
      "title": "Handwritten Compound Odia Character Recognition using Deep Learning Architectures",
      "Authors": "Subham Sahoo; Umakanta Majhi"
    }
  ]
},
{
  "title": "Track 28 - Natural Language Processing, LLMs & Generative AI",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 415,
      "title": "Revolutionizing Literary Sentiment Analysis with AI: A Novel Deep Learning Approach",
      "Authors": "Munawar Yusuf Sayed; Dr. Yashwant Waykar; Dr. R. Subhashini; Kalpana Priyadharshini Thiyagarajan; Ramesh Vijaya Babu K; B Kiran Bala"
    },
    {
      "sno": 2,
      "id": 416,
      "title": "Explainable AI for English Reading Comprehension Support in Intelligent Tutoring Systems",
      "Authors": "Dr. Madhavaiah U; G.M Prem Kumar; Purnachandra Rao Alapati; Dr Shagufta Parween; Dr S Suma Christal Mary; B Kiran Bala"
    },
    {
      "sno": 3,
      "id": 470,
      "title": "Random Forest Model for Enhancing English Speaking Fluency and Literary Skills in Higher Education",
      "Authors": "G Suganthi"
    },
    {
      "sno": 4,
      "id": 574,
      "title": "Hybrid Knowledge Graph–Transformer Ensemble for Automated English Literacy Assessment in Higher Education",
      "Authors": "Roseline Jesudas"
    },
    {
      "sno": 5,
      "id": 429,
      "title": "Emotion-Aware AI Pronunciation Tutor with DeepSpeech and Facial Recognition for Indian ESL English Improvement",
      "Authors": "Ayesha Ambreen; Ms. V Arunadevi; Dr. B Lavanya; Shailendran U; Gulnaz Fatma; I Infant Raj"
    },
    {
      "sno": 6,
      "id": 717,
      "title": "Hybrid ML-Driven Behavioral Intelligence Framework for Evaluating Soft Skills in Higher Education Learners",
      "Authors": "Dr Sarah Leah Dsouza; Ms Viral S Ahire; Dr Ganraj S Mane; Dr Sita Nirmala Kumaraswamy; Ms Girija Paranjpe"
    },
    {
      "sno": 7,
      "id": 833,
      "title": "AI-Driven Semantic Question Management System for Interactive Conferences",
      "Authors": "Sahana Sharma M; Shiva Prasad; Shaik Moinuddin; Ankita S Patil; Sameer Singh"
    },
    {
      "sno": 8,
      "id": 979,
      "title": "Stress Detection and Suggestion for IT Professional Using Natural Language Processing",
      "Authors": "Jwithesh Yadav; Sivamurugan C; P Gowsalaya; Pavan Sai; Abdul Jilani; Rohith"
    }
  ]
},
{
  "title": "Track 29 - Cybersecurity, Blockchain & Privacy",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 698,
      "title": "Identification of Financial Fraud Transactions: A Cybersecurity via Machine Learning Methods",
      "Authors": "Shaikh Irfan"
    },
    {
      "sno": 2,
      "id": 823,
      "title": "Probabilistic Manifold Learning for High-Sensitivity DDoS Detection: A Swarm-Optimized Hybrid Deep Learning Framework",
      "Authors": "Kirubavathi G; Jothith Athithya R; Varunicka P R; Vira V; Suhas T"
    },
    {
      "sno": 3,
      "id": 927,
      "title": "Guardians of Knowledge: AI-Powered Intrusion Detection for Academic Network Resilience",
      "Authors": "Dinesh Babu; Rajeev Kumar Sharma"
    },
    {
      "sno": 4,
      "id": 1071,
      "title": "Hybrid Deep Learning Framework for Efficient Ransomware Detection",
      "Authors": "V S S S Veda Swaroop Cheruvu; Praveen Kumar Kollu; Manikantha Peetha"
    },
    {
      "sno": 5,
      "id": 1332,
      "title": "Just-In-Time Permission Framework for Secure Autonomous AI Agent Operations in Data Pipeline Environments",
      "Authors": "Jubin Abhishek Soni; Amit Anand; Rajesh Kumar Pandey"
    },
    {
      "sno": 6,
      "id": 1848,
      "title": "Machine-Learning-Driven Surveillance in Law Enforcement: Accuracy, Bias, and Privacy Trade-Offs",
      "Authors": "A C Philip; Tancy Sebastian; Ajitha E; Peketi Kasi Visweswara Sita Rama Rao; B Rajeswari; Goriparthi Naresh"
    },
    {
      "sno": 7,
      "id": 1849,
      "title": "Ensemble Machine Learning Models for Tax Compliance Prediction in the Digital Economy",
      "Authors": "Ugarthi Shankalia M; Sailaja Petikam; S Selvaraju"
    },
    {
      "sno": 8,
      "id": 1852,
      "title": "A Legally Trustworthy and Sustainable AI Framework for Automated Legal Systems",
      "Authors": "Aarthy Jonathan Kennedy; Arun D Raj; A Sivanandam; Krishna Kishore Padala; Chesha P Chellappan; Sreeja B G"
    }
  ]
},
{
  "title": "Track 30 - Internet of Things, Edge AI & Smart Systems",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 791,
      "title": "Smart EV Charging Infrastructure And Energy Optimization",
      "Authors": "Devendra Gowda; Buddivantappagouda Biradar; Jay Chandra; Vignesh R; Varshith NM"
    },
    {
      "sno": 2,
      "id": 860,
      "title": "Machine-Learning Optimization of Rubber-Mixing and Curing Processes",
      "Authors": "Amutha M"
    },
    {
      "sno": 3,
      "id": 1132,
      "title": "A Levy-Flight Enhanced Whale Optimization Algorithm for Load Balancing in Edge IoT",
      "Authors": "Aman Anand; Mahendra Pratap Yadav"
    },
    {
      "sno": 4,
      "id": 1166,
      "title": "Edge-Based Multi-Sensor Machine Learning Framework for Real-Time Industrial Anomaly Detection",
      "Authors": "Venkateshkumar M; Desai Neerav Dharmesh Pinakini; Shobbiqa U K"
    },
    {
      "sno": 5,
      "id": 811,
      "title": "Artifact Comparison Analyzer: Evaluating Microservice Build Metrics for Performance and Efficiency Improvements",
      "Authors": "Sharad Jain; Dileep Jain"
    },
    {
      "sno": 6,
      "id": 143,
      "title": "An Intelligent System for E-Commerce Using RPA-Driven Web Scraping and Analytical Dashboards",
      "Authors": "Kavibalan P"
    },
    {
      "sno": 7,
      "id": 163,
      "title": "Prompt Fence: A Semantic Guardrail for Healthcare AI to Defend Against Prompt Injection Attacks",
      "Authors": "Samira Deepak; Ronit Shetty; Viha Shukla"
    },
    {
      "sno": 8,
      "id": 268,
      "title": "Exploring the Artificial Intelligence (AI) for Intrusion Detection System in Network Traffic Analysis for Improved Cybersecurity",
      "Authors": "Manoj Kumar; Sathiyaviradhan Janarthanan; Suresh Dodda; Prakash Parida; MD Shadman Soumik"
    }
  ]
},
{
  "title": "Track 31 - Smart Cities, Transportation & Urban Systems",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1063,
      "title": "AI-Driven Document Automation: A Gemini API Integrated System for Data Extraction",
      "Authors": "Gold Beulah Patturose J"
    },
    {
      "sno": 2,
      "id": 1070,
      "title": "Autism Spectrum Disorder Detection Using Voting based Multi-model Deep Ensemble Network",
      "Authors": "Sampad Mondal; Gopa Bhaumik; B Balaji Naik"
    },
    {
      "sno": 3,
      "id": 1087,
      "title": "Mathematical Modelling, Simulation and Arduino-Based Implementation of a Temperature and Hardness Controlled 1-Litre Ice Cream Production System",
      "Authors": "Naga Prudhvi Raj Vattikuti; Poornakowshik Gadireddy; Yogeswar Koka; Deepak Daram; Sasank Somarowthu"
    },
    {
      "sno": 4,
      "id": 1102,
      "title": "NLP-Based Contract Review and Clause Risk Identification for Corporate Compliance",
      "Authors": "Priyanka V S"
    },
    {
      "sno": 5,
      "id": 1817,
      "title": "A Visual-Language Agent for Summarizing Surveillance Footage Using Vision Transformers and Agentic LLM",
      "Authors": "Mugunth Chandran"
    },
    {
      "sno": 6,
      "id": 1825,
      "title": "DermatoPredict: A Two-Stage Machine Learning Framework for Automated Skin Disease Diagnosis",
      "Authors": "Mallikharjuna Rakesh Manepalli"
    },
    {
      "sno": 7,
      "id": 1834,
      "title": "AI-Enhanced VR Fire Evacuation Training System for Educational Institutions",
      "Authors": "Deepika Paturu"
    },
    {
      "sno": 8,
      "id": 1835,
      "title": "Integrating Satellite Imagery and IoT Field-Based Observations for In-Situ Soil Moisture Analysis",
      "Authors": "Deepika Paturu"
    }
  ]
},
{
  "title": "Track 32 - Renewable Energy, Smart Grid & Sustainability",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 566,
      "title": "Rainfall Prediction Using Hybrid CNN–LSTM Model with Seasonal Trend Decomposition",
      "Authors": "C V Satheesh Kumar"
    },
    {
      "sno": 2,
      "id": 1269,
      "title": "A Comparative Analysis on Patch-Based Deep CNN Model for Tomato Leaf Disease Classification",
      "Authors": "Dhanesh Debnath; Shyamosree Pal; Arpita Nath Boruah; Saroj Kr Biswas"
    },
    {
      "sno": 3,
      "id": 1279,
      "title": "Hybrid Model: Predicting Heart Issues by Combining SVM and ANN/CNN Approaches",
      "Authors": "Murali Erasappa; Murali E; Lahari Dasari; Akshaya Nikitha Makena; Manoj Mareppagari; Vamsi Battala"
    },
    {
      "sno": 4,
      "id": 1287,
      "title": "SRM-Net: A Dual-Stream Deep Learning Framework for Pixel-Level Localization of Inpainting-Based Forgeries in Academic Credentials",
      "Authors": "Vaddireddy Pragathi; Navaneeth Siliveri; Deepak Munaga; Arun Kumar Ravula"
    },
    {
      "sno": 5,
      "id": 1395,
      "title": "Autonomous Multi-Agent Architecture for Intelligent Precision Farming",
      "Authors": "Ashish Manwatkar"
    },
    {
      "sno": 6,
      "id": 1404,
      "title": "Parkinson’s Disease Probability Estimation via Latent Fusion of Handwriting Images and Gait Accelerometer Signals",
      "Authors": "Sumayah Kakarla; Vinuthna Reddy; Keerthana Menon; Deheem Bhat; Deepa Gupta"
    },
    {
      "sno": 7,
      "id": 1847,
      "title": "SAP Cloud System on AWS for Risk Detection and Integration Artificial Intelligence Scalable Cybersecurity",
      "Authors": "Mahender G; Vamshi Jeksani; Manish Kumar; Koppuravuri Sri Lakshmi Sruthi; Kiran Kumar Reddy"
    },
    {
      "sno": 8,
      "id": 1846,
      "title": "Explainable Multimodal Emotion Recognition Using Integrated Eye-Tracking and Galvanic Skin Response Signals",
      "Authors": "Abhinav Rana; Kiran Jot Singh; Divneet Singh Kapoor"
    }
  ]
},
{
  "title": "Track 33 - Robotics, Autonomous Systems & Control",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1374,
      "title": "Reinforcement Learning Driven Augmentation in Self-Supervised Human Activity Recognition",
      "Authors": "Dhvani Vachhani"
    },
    {
      "sno": 2,
      "id": 1377,
      "title": "Noise-Adaptive Bidirectional and Representation-Level Knowledge Distillation for Federated Human Activity Recognition",
      "Authors": "Dhvani Vachhani"
    },
    {
      "sno": 3,
      "id": 1383,
      "title": "Fed-Prism: Federated Attention-Based Learning for Privacy-Preserving Mental Health Classification",
      "Authors": "Samin Ahmed"
    },
    {
      "sno": 4,
      "id": 1789,
      "title": "Hybrid XGBoost based Machine Learning Framework for Prediction of Battery Health Indicators",
      "Authors": "Archana Umrao; Mahendra Kumar"
    },
    {
      "sno": 5,
      "id": 748,
      "title": "Quantum Generative Learning via QBMs",
      "Authors": "Ahmed Yahya Adam; Pooja K; Gokul G Nair; Kamleshwar Kumar Yadav"
    },
    {
      "sno": 6,
      "id": 371,
      "title": "Multimode Duffing–Jaynes–Cummings Hamiltonian Modelling of a Coupled Transmon Chip Layout",
      "Authors": "Nongmeikapam Brajabidhu Singh; Joseph L Pachua; Anish Kumar Saha"
    },
    {
      "sno": 7,
      "id": 1126,
      "title": "Quantum-Inspired Penalty-Based Optimization of Heterogeneous Anomaly Detectors via QUBO in Electricity Demand Time Series",
      "Authors": "Pranav Kalro; Reeba Khan; Anupama Jawale"
    },
    {
      "sno": 8,
      "id": 1775,
      "title": "Multi-Modal ISL Translation Framework with Semantic Sentence Completion",
      "Authors": "Aditya Aryan; Rishit Raj; V P Meena; Kaushal Raj; Mehmadullah Sheikh; Ritwik Raj"
    }
  ]
},
{
  "title": "Track 34 - Data Science, Machine Learning & Optimization",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1798,
      "title": "Master Data Management: A Foundational Pillar for Reliable and Trustworthy AI Systems",
      "Authors": "Swetha Talluri"
    },
    {
      "sno": 2,
      "id": 1800,
      "title": "Interoperability Conflict in Data Warehouse Implementation: A Paired Samples T-Test Analysis of Technical Performance and Stakeholder Satisfaction",
      "Authors": "Nagababu Kandula; Kamala Marepalli"
    },
    {
      "sno": 3,
      "id": 1801,
      "title": "Autonomous Performance Diagnosis Using LLM-Based Agents in Cloud-Scale Systems",
      "Authors": "Sowjanya Kommi; Ravi Kumar Amaresam; Rajesh Kumar Butteddi"
    },
    {
      "sno": 4,
      "id": 1802,
      "title": "Operationalizing Enterprise Data Workflows across AWS, Azure and On-Premises Systems",
      "Authors": "Parikshit Premchand Sahagal; Hastimal Jangid; Sandeep Kumar Khandelwal"
    },
    {
      "sno": 5,
      "id": 1842,
      "title": "Cognitive Knowledge-Graph-Driven Enterprise Change Reasoning for Proactive Operational Stability",
      "Authors": "Parvathi Nair; Chandramouli Viswanathan; Rang Ganesh Singh Alampur; Girish Shashikant Patil"
    },
    {
      "sno": 6,
      "id": 1843,
      "title": "Event-Driven Financial Close Automation Using Universal Journal and Embedded Analytics in SAP S/4HANA",
      "Authors": "Vandhana Sivam; Kajendran Jayaram; Maheshwar Gourishetty"
    },
    {
      "sno": 7,
      "id": 1844,
      "title": "Performance Benchmarking of Machine Learning Algorithms for Attention State Classification Using Physiological and Oculometric Features",
      "Authors": "Abhinav Rana; Kiran Jot Singh; Divneet Singh Kapoor"
    },
    {
      "sno": 8,
      "id": 1824,
      "title": "GIS Approach for Identifying Suitable EV Charger Installation",
      "Authors": "Krishnaveni Musku"
    }
  ]
},
{
  "title": "Track 35 - AI Applications in Industry, Finance, Education & Society",
  "date": "March 28, 2026",
  "time": "11:00 AM – 01:00 PM",
  "mode": "ONLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1271,
      "title": "Personalized Tour Recommendation System",
      "Authors": "Purushothama Raju V"
    },
    {
      "sno": 2,
      "id": 1278,
      "title": "A Study of Agentic AI in Industry Applications",
      "Authors": "Shivang Kukreja; Vishal Bharate; Sanjogata Kamble"
    },
    {
      "sno": 3,
      "id": 1398,
      "title": "An Intelligent Approach in Exploring Brilliance Beyond the Bounds of Traditional Learning",
      "Authors": "Chinthapathla Kavya Sree; V Saishree; Rishabh Kumar Jaiswal; Yugandhar Manchala; Nirmal Keshari Swain; Kachi Anvesh"
    },
    {
      "sno": 4,
      "id": 1850,
      "title": "A Data-Driven Legal Analytics Framework for Healthcare Litigation Outcome Prediction",
      "Authors": "Tancy Sebastian; A C Philip; Prashant Panwar; V Ch Jwala; Kalaimagal V; Pandi Raj S"
    },
    {
      "sno": 5,
      "id": 1851,
      "title": "A Computational Framework for Intelligent Decision Making Using Behavioural and Creative Models",
      "Authors": "Shalini Jadiya; Swati Mishra"
    },
    {
      "sno": 6,
      "id": 1783,
      "title": "AI-Driven Intercompany Accounting Systems: A Survey of Architectures and Netting Models",
      "Authors": "Srihari Kumar Pendyala; Rajesh Kumar Butteddi"
    },
    {
      "sno": 7,
      "id": 443,
      "title": "Hybrid Crop Recommendation System Integrating Soil–Climate Suitability and Market-Aware Overproduction/Shortage Detection",
      "Authors": "Sasikala R; Udhayarani M; Elakkiya E"
    },
    {
      "sno": 8,
      "id": 518,
      "title": "Real-Time Academic Assessment Analysis: A Data-Driven Approach to Institutional Growth and Target Achievement",
      "Authors": "Shrikant Upadhyay; Rakesh Kumar"
    }
  ]
}
];

export default function TechSessionPage() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTracks = tracks.map((track) => ({
    ...track,
    papers: track.papers.filter((paper) =>
      `${paper.id} ${paper.title} ${paper.Authors}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ),
  })).filter(track => track.papers.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[220px] md:h-[320px] flex items-center justify-center mt-18">
        <img
          src="./photo1.jpg"
          alt="Conference Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1b34]/70"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide mb-3">
            Technical Sessions
          </h1>

          <div className="w-24 h-[2px] bg-blue-400 mx-auto mb-4"></div>

          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto">
            Parallel paper presentation sessions featuring cutting-edge
            research in Artificial Intelligence, Machine Learning and emerging
            technologies.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#0f2a44] tracking-wide">
          AIEI 2026 – Presentation Schedule
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              
            </span>

            <input
              type="text"
              placeholder="Search by Paper ID, Title, or Authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-3
                rounded-full
                border
                border-gray-300
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-transparent
                text-sm md:text-base
                transition
              "
            />
          </div>
        </div>

        {/* Tracks */}
        {filteredTracks.map((track, index) => (
          <div
            key={index}
            className="mb-12 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Track Header */}
            <div className="bg-[#0f2a44] text-white px-6 py-4">
              <h2 className="font-semibold text-lg tracking-wide">
                {track.title}
              </h2>

              <p className="text-sm text-white-200 mt-1 font-medium">
                📅 {track.date} &nbsp;&nbsp; ⏰ {track.time}
              </p>

              <p className="text-sm text-yellow-400 mt-1 font-medium">
                {track.mode}
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-3">S.No</th>
                    <th className="px-4 py-3">Paper ID</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Authors</th>
                  </tr>
                </thead>

                <tbody>
                  {track.papers.map((paper) => (
                    <tr
                      key={paper.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">
                        {paper.sno}
                      </td>

                      <td className="px-4 py-3 font-semibold text-blue-700">
                        {paper.id}
                      </td>

                      <td className="px-4 py-3">
                        {paper.title}
                      </td>

                      <td className="px-4 py-3 text-gray-600">
                        {paper.Authors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {filteredTracks.length === 0 && (
          <div className="text-center text-gray-500 mt-10 text-lg">
            No matching papers found.
          </div>
        )}
    
      </div>
      <Footer/>
    </div>
  );
}