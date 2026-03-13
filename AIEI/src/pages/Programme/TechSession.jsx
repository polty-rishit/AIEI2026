import React from "react";
import Navbar from "../../components/Navbar";

const tracks = [
  {
    title: "Track 1 - AI for Healthcare, Medical Imaging & Biomedical Systems",
    date: "March 26, 2026",
    time: "3:00 AM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 248,
        title:
          "Multi-Modal Deep Learning for Early Detection and Monitoring of Parkinson’s Disease",
        presenter:
          "Kunal Sanga; Dr. V. P. Meena; Rishit Raj; Aniruddh P Koundinya; Surya Prakash; Aditya Prem",
      },
      {
        sno: 2,
        id: 1222,
        title:
          "Accurate Measurement of Nail Overgrowth with Twin YOLOv8 Segmentation Models",
        presenter:
          "Aravindhan Ravichandran; Pradeep Kumar; Sunanth H; Arun Karthik V; Anusha Dr T",
      },
      {
        sno: 3,
        id: 1226,
        title:
          "Investigating the Performance of MobileNet Architecture in Classifying Leukocytes",
        presenter: "Sapna S; Renuka A",
      },
      {
        sno: 4,
        id: 1228,
        title:
          "Non-Invasive Blood Glucose Monitoring Using Single Wavelength NIR Reflectance at 1050 nm",
        presenter: "Alok Kumar; Dr Mrutyunjay Rout",
      },
      {
        sno: 5,
        id: 1791,
        title:
          "SGALL: SinGAN and YOLOv8 generated Acute Lymphoblastic Leukemia dataset for enhanced Detection and Classification",
        presenter:
          "Rajashree Nayak; Amrita Bagchi; Bunil Kumar Balabantaray",
      },
      {
        sno: 6,
        id: 1682,
        title:
          "A Spectral-Normalized Lightweight GAN with Gatekeeper Autoencoder for Imbalanced Chest X-Ray Classification",
        presenter: "Bhavik Parmar; Nihar Mohapatra; Umesh Pati",
      },
    ],
  },

  {
    title: "Track 2 - Renewable Energy, Smart Grid & Sustainability",
    date: "March 26, 2026",
    time: "03:00 PM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 515,
        title:
          "A Multi-Class Electricity Theft Classification Framework Using CatBoost for Residential Consumption Profiles",
        presenter:
          "Arvind Kumar Nirala; Ashish Kumar; K Raghavendra Naik; Satyavan Kumar Mukhi",
      },
      {
        sno: 2,
        id: 585,
        title:
          "Data Driven ML forecasting model for Energy Management of EV Charging Station",
        presenter:
          "Satyavan Kumar Mukhi; Ashish Kumar; K Raghavendra Naik; Arvind Kumar Nirala",
      },
      {
        sno: 3,
        id: 1230,
        title:
          "Deep Autoencoder Networks for Fault Detection in AC Microgrids",
        presenter:
          "Satyavan Kumar Mukhi; Ashish Kumar; K Raghavendra Naik; Arvind Kumar Nirala",
      },
      {
        sno: 4,
        id: 1442,
        title:
          "Microgrid System with Solar, Wind, Diesel Generator with Controlled Operating Hours",
        presenter: "Bhanuteja Vilasagarm",
      },
      {
        sno: 5,
        id: 1778,
        title:
          "A Compact Quad-Band Metamaterial Absorber under K and Ka-Band for Energy Harvesting Applications",
        presenter: "Bhanuteja Vilasagarm",
      },
      {
        sno: 6,
        id: 1779,
        title:
          "Experimental Study of Temperature Effects on Dynamic Capacitance on Intel SoC",
        presenter:
          "Satendra Dhangar; Manish Sharma; Md Shahanshah Shahjahan; Rajeev Hulekal",
      },
    ],
  },
 {
  title: "Track 3 - Computer Vision & Image Processing",
  date: "March 25, 2026",
  time: "03:00 PM – 05:00 PM",
  mode: "OFFLINE",
  papers: [
    {
      sno: 1,
      id: 895,
      title:
        "An Adaptive Face Recognition Based Attendance System for Academic and General Applications",
      presenter:
        "Priyanshu Kashyap; Tushant Kumar",
    },
    {
      sno: 2,
      id: 1227,
      title:
        "A Vision-Based Automated System for Plastic Waste Segregation Using Deep Learning",
      presenter:
        "Atul Kumar; Chaganti Subhash; Divya Kumar",
    },
    {
      sno: 3,
      id: 1471,
      title:
        "Deepfake-Aware Face Authentication for Edge Devices Using a Unified Raspberry Pi Pipeline",
      presenter:
        "Soumitra Ghosh; Sivaratri Manish; Prabin Kishor Patra; Sudhir Ranjan Pattanaik; Santosh Nayak",
    },
    {
      sno: 4,
      id: 1667,
      title:
        "A Dual Mode Framework for Early Detection of Coffee White Stem Borer and Leaf Miner: Integrating SGP40-SHT40 Digital Chemosensors and Pictorial Deep Learning",
      presenter:
        "Remya Jayachandran; Vanshika Muthanna; Tanu Anand; Thripthi T M; Bhargavi Gnanaprakash; V Renuka; Disha P",
    },
    {
      sno: 5,
      id: 1794,
      title: "ABATER: Movie Review Bombing Countermeasure",
      presenter:
        "Twinkle Kumari; Anubhav Yadav; Gaurav Baranwal",
    },
    {
      sno: 6,
      id: 1531,
      title:
        "Deep Reinforcement Learning for Game AI: Adaptive NPC Behavior and Player-Centric Evaluation Frameworks",
      presenter:
        "Kiran A V; Karthik M; Om M Doddamani; Rajendra A B",
    },
  ],
},
{
  title: "Track 4 - Smart Cities, Transportation & Urban Systems",
  date: "March 25, 2026",
  time: "03:00 PM – 05:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1327,
      "title": "A Multi-Scale Spatio-Temporal Embedded Graph Attention Network for Traffic Flow Prediction",
      "presenter": "Aditya Prasad Padhy; Ashok Pradhan; Deepak Reddy Pullaguram"
    },
    {
      "sno": 2,
      "id": 1587,
      "title": "Multi-GNSS PPK Positioning for High-Precision Agricultural Applications in Tea Plantations",
      "presenter": "Rajkumar Mandal; Samrat Das; Aiswarya S Pillai; Girija Nandan Kar; Somnath Mahato; Surajit Kundu"
    },
    {
      "sno": 3,
      "id": 1664,
      "title": "AirWise: LLM-Powered Smart Air Quality Monitoring and Automated Appliance Control",
      "presenter": "Prashanth Durgam; Molay Mondal; Bankuru Gowri Sankar Laxmi Narayana; Subrata Nandi; Sanghita Bhattacharjee; Sujoy Saha"
    },
    {
      "sno": 4,
      "id": 1788,
      "title": "GeoNBeats: Unified Spatio-Temporal Neural Basis Expansion for Air Quality Estimation in Sparse Sensor Network",
      "presenter": "Vaibhav Joshi; Kapil Kumar Meena; Arkopal Kishore Goswami"
    },
    {
      "sno": 5,
      "id": 1785,
      "title": "AI-Engineering Integration of Rainfall Microphysics and Vegetation Indicators for Agricultural Intelligence over Varanasi, India",
      "presenter": "Saurabh Maurya; Pramod Soni"
    },
    {
      "sno": 6,
      "id": 1839,
      "title": "Remote Sensing Based pH Estimation in Eastern Uttar Pradesh Using Sentinel-2 and Machine Learning",
      "presenter": "Ashwin Chitravanshi; Pramod Soni"
    }
  ]
},
{
  title: "Track 5 - Internet of Things, Edge AI & Smart Systems",
  date: "March 25, 2026",
  time: "03:00 PM – 05:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1363,
      "title": "Dual Band Metamaterial Based Agriculture Sensor for Moisture Sensing Application",
      "presenter": "Arjun Kumar; Rashmi Sinha; Abhishek Bharti; Anjali Kumari"
    },
    {
      "sno": 2,
      "id": 1438,
      "title": "All Dielectric Polarization Insensitive THz Metamaterial Perfect Absorber for Sensing Application",
      "presenter": "Krishna Gopal; Arjun Kumar; Amit Kumar"
    },
    {
      "sno": 3,
      "id": 1671,
      "title": "Design and Analyse the Characteristics of a Compact Tri-band Stop Frequency Selective Surface",
      "presenter": "Smita Kumari; Dr Akhilesh Kumar; Ravi Pushkar; Abhishek Kumar"
    },
    {
      "sno": 4,
      "id": 1685,
      "title": "An Interpretable Machine Learning Approach to Assess Gender Equity in PM-JAY Healthcare Utilization: Evidence from Jharkhand",
      "presenter": "Aiman Asif; Neha Jaiswal"
    },
    {
      "sno": 5,
      "id": 1792,
      "title": "A Blockchain-Enabled Credit-Aware Parking Allocation Framework with Fairness Guarantees",
      "presenter": "Keshab Kumar Gaurav; Gaurav Baranwal"
    },
    {
      "sno": 6,
      "id": 1797,
      "title": "Design and Development of a Tethered Bio-Inspired Submersible ROV with Fin-Based Maneuvering for Shallow-Water Surveillance",
      "presenter": "Manoranjan Kumar; Chanchal Kumari; Vijay Kumar Dalla"
    }
  ]
},
{
  title: "Track 6 - AI for Healthcare, Medical Imaging & Biomedical Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  papers: [
    {
      sno: 1,
      id: 164,
      title:
        "Smart Brain Tumour Detection Using Yolov9 Deep Learning Model on MRI Scans for Real-Time Medical Imaging",
      presenter: "Kavitha Vasu",
    },
    {
      sno: 2,
      id: 218,
      title:
        "Interpretable Deep Learning for Brain Tumor Analysis: Fusing U-Net Segmentation with Grad-CAM Visual Explanations",
      presenter:
        "Suriya Navaneetha Krishnan K; Sheerin Sitaran N; Ravi Prasath S; Rethik Raj R R",
    },
    {
      sno: 3,
      id: 468,
      title:
        "Pancreatic Tumour Segmentation Using A Frequency-Aware Swin Transformer Unet Architecture",
      presenter:
        "Santhosh J A S; Surjeet Dharsan A S; Jenitha T; Brindha G",
    },
    {
      sno: 4,
      id: 524,
      title:
        "A Hyperparameter-Tuned and Explainable ML Framework for Accurate Heart Disease Diagnosis",
      presenter:
        "Sayed Irani; Shruthi M L J; Samhitha Ramarathnam; Sachin M N",
    },
    {
      sno: 5,
      id: 604,
      title:
        "Parallel Hybrid Classical–Quantum Architecture for LLM Jailbreak Detection",
      presenter: "Sajal Bajaj; Kamlesh Dutta",
    },
    {
      sno: 6,
      id: 657,
      title:
        "An Attention-Guided Multi-Scale Network for Brain Tumor Segmentation",
      presenter:
        "Tushar Chaurasia; Pranshu Jena; Umesh C Pati",
    },
    {
      sno: 7,
      id: 727,
      title:
        "Diabetic Retinopathy Detection using VGG16 and Grad-CAM",
      presenter:
        "Abis Azam; Vishruth Janardhan; Vignesh B S; Abilash A; Dr Sumit Yadav",
    },
    {
      sno: 8,
      id: 865,
      title:
        "An Ensemble Learning Torchng for Brain Tumour Patient Survival Prediction",
      presenter: "G Karthikeyan",
    },
    {
      sno: 9,
      id: 947,
      title:
        "A Modular Dual-Stage Deep Learning Framework With YOLOv8 and ConvNeXt for Psoriasis-Oriented Multiclass Skin Disease Classification",
      presenter:
        "A Mamatha; Sangeetha V; Deepashree K A",
    },
  ],
},
{
   title: "Track 7 - Computer Vision & Image Processing",
   date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 189,
      "title": "Comparative Study of Pix2Pix and ESRGAN Architectures for Image Restoration",
      "presenter": "Precious Sukhi; Riya Bhattacharya; Priya Bhatnagar; Supriya Agrawal; Shubha Puthran"
    },
    {
      "sno": 2,
      "id": 525,
      "title": "Benchmarking YOLOv12-A2F for Robust Detection of Underwater Objects",
      "presenter": "Rajat Amat; Mourina Ghosh; Amitava Nag; Robin Pathak"
    },
    {
      "sno": 3,
      "id": 623,
      "title": "Machine Learning-Powered Sustainable Mushroom Growing",
      "presenter": "Keerthana B; Dharshini D; Jamna A"
    },
    {
      "sno": 4,
      "id": 1299,
      "title": "DiagnoBridge: AI-powered Smart Healthcare Platform",
      "presenter": "Arjun K S; Vigneshwaran M; Chirag Das; Jothi Prasad"
    },
    {
      "sno": 5,
      "id": 1319,
      "title": "A Vision-Based Assistive Navigation System for Visually Impaired Individuals Using CNN–SSD",
      "presenter": "M Jayakumar"
    },
    {
      "sno": 6,
      "id": 1325,
      "title": "Energy-Optimized Sliding-Window Mutual Information–Powered Dynamic Functional Connectivity for Parkinson's Disease Prediction",
      "presenter": "Soham Bandyopadhyay; Arnab Banerjee; Suman Dasgupta; Amit Mondal"
    },
    {
      "sno": 7,
      "id": 1425,
      "title": "Lightweight UNet++ Based Multi-Sensor Fusion for Automated Building Footprint Extraction",
      "presenter": "Nagadi Leela Rao; Deepak Kumar; Shivani Verma"
    },
    {
      "sno": 8,
      "id": 1463,
      "title": "Config-Driven Promptable Semantic Segmentation for Satellite Land Cover Mapping with PyTorch",
      "presenter": "Dinesh Kumar G"
    },
    {
      "sno": 9,
      "id": 1705,
      "title": "Comparative Robustness of Attention-Driven YOLOv12 and CNN-Based YOLOv8–YOLOv11 for Long-Tailed Weed Detection in Real-Time Field Data",
      "presenter": "Anusree Manoj; Sajitha Krishnan"
    }
  ]
},
{
  "title": "Track 8 - Natural Language Processing, LLMs & Generative AI",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 342,
      "title": "Retrieval-Augmented Generation (RAG) for Document-Based Question Answering",
      "presenter": "Ila Rai; Gudipati Rajesh Naidu; Manjulata Badi"
    },
    {
      "sno": 2,
      "id": 673,
      "title": "Intelligent Meeting Insights Generator Using Speech-to-Text and LLM-Based Semantic Categorization Algorithm",
      "presenter": "Prabhu T N"
    },
    {
      "sno": 3,
      "id": 708,
      "title": "Towards Intelligent Offline Proctoring: AI-Driven Spatio-Temporal Behavioral Analysis",
      "presenter": "Samridhi Raj Sinha; Asmi Parikh; Saakshi Jain; Shubha Puthran"
    },
    {
      "sno": 4,
      "id": 711,
      "title": "Evaluating Sentiment Classification Performance of LLMs Using Frankenstein as a Benchmark Text",
      "presenter": "Ridhi Jaggi; Ritvika Chalamala; Debendra Kumar Dhir"
    },
    {
      "sno": 5,
      "id": 1030,
      "title": "AI Powered Automated Question Generator using NLP and Spring Boot",
      "presenter": "Khushi Beniwal"
    },
    {
      "sno": 6,
      "id": 1068,
      "title": "Beyond BERT: A RoBERTa based Framework with Multi-Head Attention Pooling for Lyrics-Based Music Genre Classification",
      "presenter": "Siva Priya M S"
    },
    {
      "sno": 7,
      "id": 1283,
      "title": "Fact-Aware Text Generation for Low-Resource Languages: A Systematic Survey with Emphasis on Marathi",
      "presenter": "Minakshi Ghorpade"
    },
    {
      "sno": 8,
      "id": 1630,
      "title": "FINCO-QA: Financially Contextualized Retrieval for Question Answering over Financial Documents using LLM-RAG",
      "presenter": "Aafreen Sana; Dr Chitrakala S"
    },
    {
      "sno": 9,
      "id": 1777,
      "title": "MedPolicy-RAG: A Multi-Domain AI Chatbot for Healthcare Compliance Interpretation",
      "presenter": "Namratha Nutakki; Krishna Siva Prasad Mudigonda; K Raghavendra Naik; Nikhil Sri Ram Pulluri"
    }
  ]
},
{
  title: "Track 9 - Cybersecurity, Blockchain & Privacy",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 154,
      "title": "A PBFT-Enhanced Blockchain Framework for Secure and Efficient Certificate Verification",
      "presenter": "Ramya M R; Renu Sri Sivakumar; Esaiyaazhini C K; Logeswari M; Sakthivel K"
    },
    {
      "sno": 2,
      "id": 480,
      "title": "Decentralized Identity Verification for Third Gender Individuals Using Blockchain",
      "presenter": "Sandeep Kumar"
    },
    {
      "sno": 3,
      "id": 824,
      "title": "Explainable AI Framework for Phishing Detection Using Hybrid URL and Content Features",
      "presenter": "Imran Ali Mohammed"
    },
    {
      "sno": 4,
      "id": 932,
      "title": "LMDAHoney: Agentic-Language Model Driven Adaptive Honeypot for Advanced Cyber Deception",
      "presenter": "Sanjeev Kumar; Navdeep Singh Chahal; Chetan Komal"
    },
    {
      "sno": 5,
      "id": 1557,
      "title": "Hybrid QKD-AES Integration: Enhancing BB84-Based Quantum Key Distribution for Practical Encryption",
      "presenter": "Rahul Mishra"
    },
    {
      "sno": 6,
      "id": 1577,
      "title": "Attention-Guided Hybrid Deep Learning for Early Detection of Zero-Day Attacks in Cyber Threat Intelligence Pipelines",
      "presenter": "Satendra Sonare; Pritaj Yadav"
    },
    {
      "sno": 7,
      "id": 1773,
      "title": "A Secure-by-Design Cloud-Native AI Infrastructure Using Zero Trust and Automated Fine-Grained Access Control",
      "presenter": "Vipindas Aravindakshan; Abrar Ahmed Syed"
    },
    {
      "sno": 8,
      "id": 1779,
      "title": "The Evolution of Social Bot Detection: A Comprehensive Survey of Methods, Datasets, and Emerging Challenges",
      "presenter": "Aditi Tiwari; Adwitiya Sinha; Sharad Verma; Shivendra Kumar Pandey"
    }
  ]
},
{
   title: "Track 10 - Internet of Things, Edge AI & Smart Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 119,
      "title": "The Predictive Pulse: IoTs Role in Next Generation Healthcare",
      "presenter": "Priyanka Gupta"
    },
    {
      "sno": 2,
      "id": 564,
      "title": "Online Class Environment Monitoring With Pose Estimation And Attention Tracking Algorithm And AI-Powered",
      "presenter": "Giridharan R; Gokul Ram J; Deepak Kumar A"
    },
    {
      "sno": 3,
      "id": 779,
      "title": "Predictive Maintenance System for Smart Home Appliances Using IoT Sensor Data and Deep Learning",
      "presenter": "Srinu M; Dr Sasi Kumar A; Smita Prajapati; Dr Sadhana Tiwari; Sidda Raviteja; Dr Suganthi D"
    },
    {
      "sno": 4,
      "id": 1326,
      "title": "CoSV: A Chain of Structured Verification for Disaster Information Extraction Using Small Language Models",
      "presenter": "Rohit Ghosal; Asif Iqbal Middya; Sarbani Roy"
    },
    {
      "sno": 5,
      "id": 1335,
      "title": "A Governance-First Architecture for Trustworthy Machine Learning: Multi-Dimensional Experimental Evaluation Across Healthcare and Insurance Domains",
      "presenter": "Avik Datta"
    },
    {
      "sno": 6,
      "id": 1823,
      "title": "Hybrid Deep Learning and IoT-Enabled Framework for Real-Time Monitoring and Management of Coastal Marine Litter",
      "presenter": "Krishnaveni Musku"
    },
    {
      "sno": 7,
      "id": 1836,
      "title": "An IoT and Machine Learning Framework for Intelligent Traffic Signal Control and Congestion Reduction in Urban Networks",
      "presenter": "Deepika Paturu"
    },
    {
      "sno": 8,
      "id": 1837,
      "title": "IoT-Based Soil Moisture Monitoring with Remote Sensing validation for Precision Agriculture",
      "presenter": "Deepika Paturu"
    }
  ]
},
{
  title: "Track 11 - Smart Cities, Transportation & Urban Systems",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 577,
      "title": "Enhancing Road Safety and Network Intelligence Using a Swarm Intelligence–SVM Hybrid Model in 6G-Enabled V2X Communication",
      "presenter": "P Mano Paul"
    },
    {
      "sno": 2,
      "id": 744,
      "title": "Drone-Based Detection of Floating Marine Debris Using YOLOv8",
      "presenter": "Dr Divya Mishra; Prateek Yadav; Siddhi Arora"
    },
    {
      "sno": 3,
      "id": 958,
      "title": "Air Quality Index Prediction Using Data Science and ML",
      "presenter": "Lingamsetty Hemabindu; G Fayaz Hussain; Bandari Neeraja; Hulebedu Shashikala; Salva Purnima"
    },
    {
      "sno": 4,
      "id": 1050,
      "title": "AI-Based Ship Route Tracking and Oil Leakage Monitoring",
      "presenter": "Raj Mishra; Rajneesh Kumar Maurya; Shashank Sharma; Sandeep Kumar"
    },
    {
      "sno": 5,
      "id": 1349,
      "title": "AI-Assisted Breast Cancer Diagnosis Using Vision Transformer",
      "presenter": "Ashok Reddy Polaka"
    },
    {
      "sno": 6,
      "id": 1632,
      "title": "Multi-Class Traffic Accident Severity Detection And Classification",
      "presenter": "Lakshmi Rama Naga Koushik Grandhi; Bindu Madhavi Tummala; Prianshu Jyosyula; Simhadri Soradu"
    },
    {
      "sno": 7,
      "id": 1676,
      "title": "Implementation of Edge Intelligent Deep Learning Approach for Management and Prediction of Disasters using Social Media Dataset",
      "presenter": "Mekelarani T M S; Giri M; Hemalatha Nalipi; Keerthi Talla Muni; Arun Kumar S; Kethankumar Bodireddy"
    },
    {
      "sno": 8,
      "id": 1820,
      "title": "Rapid Flood Assessment Using SAR Data and Cloud-Based Geospatial Apps",
      "presenter": "Krishnaveni Musku"
    }
  ]
},
{
  title: "Track 12 - Renewable Energy, Smart Grid & Sustainability",
  date: "March 27, 2026",
  time: "11:00 AM – 01:00 PM",
  mode: "OFFLINE",
  "papers": [
    {
      "sno": 1,
      "id": 1486,
      "title": "AI Based Solar Power Forecasting Using Machine Learning: A Mini Review",
      "presenter": "Saket Kumar; Abhishek Priyam"
    },
    {
      "sno": 2,
      "id": 1508,
      "title": "Deep Neural Networks for Fault Classification in Inverter-Integrated EV Systems with Renewables",
      "presenter": "Shradha Umathe"
    },
    {
      "sno": 3,
      "id": 1532,
      "title": "Intelligent Optimization Framework for Grid-Integrated Wind Energy Systems Using BFO–PI Controller and Modified SEPIC Converter Model",
      "presenter": "Prakash S; Prabakaran S R"
    },
    {
      "sno": 4,
      "id": 1613,
      "title": "Policy-Constrained Geospatial Intelligence: Integrating Deep Learning with Multi-Criteria Analysis for Solar Energy Planning",
      "presenter": "MD Noor"
    },
    {
      "sno": 5,
      "id": 1639,
      "title": "Green Hydrogen Hub Site Selection using a Hybrid GIS-MCDM and Genetic Algorithm Framework",
      "presenter": "Dishant Balotra; Banalaxmi Brahma"
    },
    {
      "sno": 6,
      "id": 1694,
      "title": "Deep Learning Approaches for Glaucoma Detection from Retinal Fundus Images",
      "presenter": "Chandni"
    },
    {
      "sno": 7,
      "id": 1793,
      "title": "AI-Driven Machine Learning Prediction of Mechanical Properties of GGBS–Fly Ash Blended Sustainable Concrete",
      "presenter": "Rohan Kumar Choudhary; Awdhesh Kumar Choudhary; Keshav Kumar Sharma"
    },
    {
      "sno": 8,
      "id": 1796,
      "title": "Intelligent Energy Disaggregation and Optimization in Smart Homes Using NILM and AI-Based Predictive Analytics",
      "presenter": "Yashaswini C S; Mahipal Bukya; Nisha Prasad; Babu Naik Gugulothu; Srinivas Yelisetti; Rajesh Kumar"
    }
  ]
}
];

export default function TechSessionPage() {
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

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0f2a44] tracking-wide">
          AIEI 2026 – Presentation Schedule
        </h1>

        {tracks.map((track, index) => (
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
              <p className="text-sm text-yellow-600 mt-1 font-medium">
                 {track.mode} &nbsp;&nbsp; 
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
                    <th className="px-4 py-3">Presenter</th>
                  </tr>
                </thead>

                <tbody>
                  {track.papers.map((paper) => (
                    <tr
                      key={paper.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">{paper.sno}</td>

                      <td className="px-4 py-3 font-semibold text-blue-700">
                        {paper.id}
                      </td>

                      <td className="px-4 py-3">{paper.title}</td>

                      <td className="px-4 py-3 text-gray-600">
                        {paper.presenter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}