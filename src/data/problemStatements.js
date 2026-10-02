export const problemStatements = [
  // AESS
  {
    id: 'AESS-HW-01', society: 'AESS', track: 'HW',
    title: 'GNSS Jamming and Spoofing Detection',
    summary: 'A receiver-side system that flags abnormal GNSS signals and identifies spoofing or interference.',
    details: `Develop a receiver-side system that detects abnormal GNSS signals and identifies potential spoofing or interference using signal characteristics and multi-sensor information.`,
  },
  {
    id: 'AESS-SW-01', society: 'AESS', track: 'SW',
    title: 'Satellite Digital Twin Dashboard',
    summary: 'A software-only digital twin of an active satellite with a live dashboard for position, trajectory and health.',
    details: `Develop a software-only digital twin of an active satellite using open-source orbital and telemetry datasets. The system should process and fuse real-time satellite data to visualise its current position, trajectory, and key health parameters through an interactive live dashboard. It should also handle missing, delayed, or incomplete data reliably.`,
  },
  {
    id: 'AESS-HW-02', society: 'AESS', track: 'HW',
    title: 'Drone Payload Stabilisation',
    summary: 'Keep suspended or mounted drone payloads steady against vibration and sudden attitude changes.',
    details: `Drone vibrations and sudden attitude changes destabilise suspended or mounted payloads. This is bad for camera footage, for fragile cargo such as medical samples and lab specimens, and for delivery stability.`,
  },

  // GRSS
  {
    id: 'GRSS-SW-01', society: 'GRSS', track: 'SW',
    title: 'Land Cover Classification',
    summary: 'A segmentation pipeline that turns Sentinel-2 imagery into classified land-cover polygons via a REST API.',
    details: `Urban planners and environmental agencies struggle to manually update land-use maps, leading to outdated infrastructure planning.\n\nBuild an automated machine learning pipeline that ingests multi-spectral satellite imagery (e.g., Sentinel-2) and applies a semantic segmentation model (like U-Net) to classify land cover into distinct categories (water, urban, forest, agriculture). Expose this as a REST API where users can upload geo-referenced image tiles and receive classified vector polygons in return.`,
  },
  {
    id: 'GRSS-SW-02', society: 'GRSS', track: 'SW',
    title: 'Urban Heat Mapping',
    summary: 'A web platform that scores city blocks for heat vulnerability from Landsat 8 thermal data.',
    details: `City governments need to identify micro-level Urban Heat Islands (UHIs) to strategically deploy cooling centres and plant trees, but raw thermal satellite data is difficult to parse into actionable city blocks.\n\nBuild a web platform that overlays Landsat 8 Thermal Infrared Sensor (TIRS) data with OpenStreetMap building and road footprints. The application must calculate surface temperatures, identify high-heat clusters, and generate a "vulnerability score" per city block, outputting the results as a downloadable GeoJSON for municipal GIS systems.`,
  },

  // ComSoc
  {
    id: 'COMSOC-HW-01', society: 'ComSoc', track: 'HW',
    title: 'AttendX: Smart Identity Verification and Lab Access',
    summary: 'A two-factor lab access and attendance system that stops proxy attendance and syncs after outages.',
    details: `Develop a secure, communication-enabled laboratory access and attendance system to replace manual attendance ledgers and prevent proxy attendance. Each student will use a barcode/QR code embedded in their ID card for identification, followed by a second-factor verification such as fingerprint or facial verification to confirm that the person presenting the ID is the actual student.\n\nThe system should automatically record entry/exit time, student ID, verification status, laboratory ID and failed/duplicate attempts. Attendance data should be transmitted to a centralised faculty dashboard using Wi-Fi/Ethernet or another suitable communication technology.\n\nThe system must support secure device-to-server communication, real-time monitoring, local data storage during network failure and automatic synchronisation when connectivity is restored. A student must not be able to use another student's ID to register attendance.`,
  },
  {
    id: 'COMSOC-HW-02', society: 'ComSoc', track: 'HW',
    title: 'AdaptLink: Adaptive Multi-Mode Wireless System',
    summary: 'Predict link quality and switch automatically between Wi-Fi, BLE and LoRa, then benchmark against fixed links.',
    details: `Develop an intelligent wireless communication system that predicts communication quality at a given location using parameters such as RSSI, packet loss, latency, distance, obstacles and environmental conditions, and automatically selects the most suitable communication technology such as Wi-Fi, BLE or LoRa.\n\nThe system should dynamically switch communication modes when the current link becomes unreliable while considering reliability, latency, range and energy consumption.\n\nStudents will experimentally compare fixed Wi-Fi, BLE and LoRa communication against the proposed adaptive approach and evaluate packet delivery ratio, latency, throughput, energy consumption, switching time and prediction accuracy.`,
  },

  // CS
  {
    id: 'CS-SW-01', society: 'CS', track: 'SW',
    title: 'Knowledge Graph Reasoning Engine',
    summary: 'Turn unstructured documents into a knowledge graph and answer multi-hop questions with explainable reasoning paths.',
    details: `Build a Knowledge Graph Reasoning Engine that can transform large amounts of unstructured information such as documents, articles, reports, and web pages into a structured knowledge graph. The system should identify entities, relationships, events, and relevant attributes, while preserving the connections between them and their original sources.\n\nThe engine should then be capable of answering complex questions that require multi-hop reasoning across the graph. Instead of simply retrieving a matching paragraph, it should connect multiple pieces of information, infer relationships, and construct a logical reasoning path leading to an answer.\n\nFor example, given information spread across multiple documents, a query such as "Which technologies were developed by organisations founded by researchers who worked on X?" should require the system to traverse multiple entities and relationships before producing an answer.\n\nThe system should provide explainable reasoning paths, allowing users to inspect which entities, relationships, and source documents contributed to the final result.`,
  },
  {
    id: 'CS-SW-02', society: 'CS', track: 'SW',
    title: 'Multi-Source RAG with Source Attribution',
    summary: 'A RAG pipeline over mixed documents that cites every claim and admits when the evidence is insufficient.',
    details: `Build a Retrieval-Augmented Generation (RAG) system capable of answering complex questions over large collections of heterogeneous documents, including PDFs, web pages, technical documentation, spreadsheets, and text files.\n\nThe system should intelligently determine which sources are relevant to a query, retrieve information from multiple documents, and synthesise the retrieved information into a coherent response. It should handle questions that require combining information from multiple sources rather than relying on a single document.\n\nEvery generated response should provide source attribution, allowing users to trace individual claims back to the documents and sections from which they were derived. The system should also identify situations where the available information is insufficient rather than confidently generating unsupported answers.\n\nThe goal is a RAG pipeline that prioritises retrieval quality, contextual reasoning, source traceability, and hallucination reduction, rather than simply connecting an LLM to a vector database.`,
  },

  // CIS
  {
    id: 'CIS-SW-01', society: 'CIS', track: 'SW',
    title: 'Swarm Fighters',
    summary: 'Simulate a spreading forest fire contained by decentralised swarm firefighter agents.',
    details: `Develop a simulation of a dynamically spreading forest fire in which a swarm of autonomous firefighter agents collaboratively works to contain the fire without centralised control. Each agent should make decisions based on local environmental information and interactions with neighbouring agents, using swarm-intelligence principles such as collective behaviour, decentralised coordination, and adaptive task allocation.\n\nThe system should provide a real-time visualisation of fire propagation and firefighter movement, and evaluate the effectiveness of the swarm-based strategy against baseline approaches such as random or purely rule-based movement using metrics such as containment time, percentage of area burned, and resource utilisation.`,
  },
  {
    id: 'CIS-HW-01', society: 'CIS', track: 'HW',
    title: 'Edge AI Safety Monitoring on Jetson Nano',
    summary: 'A Jetson Nano camera system that detects safety violations and fuzzy-scores risk from Low to Critical.',
    details: `Develop a real-time edge-AI based safety monitoring system using an NVIDIA Jetson Nano. A camera continuously captures the surroundings, and a lightweight deep-learning model is used to identify safety-related situations such as restricted-area entry, absence of safety helmets/PPE, overcrowding, smoke/fire indicators, or unsafe proximity to hazardous zones.\n\nThe system should incorporate a Computational Intelligence decision layer, such as Fuzzy Logic, to combine multiple uncertain inputs and generate an interpretable Safety Risk Score such as Low, Medium, High, or Critical. The system should provide real-time alerts and evaluate the performance of the edge-based solution in terms of accuracy, latency and FPS.\n\nNote: NVIDIA Jetson Nano hardware will be made available to participating teams through the faculty.`,
  },

  // PES
  {
    id: 'PES-HW-01', society: 'PES', track: 'HW',
    title: 'Earthing and Earth-Leakage Health Monitor',
    summary: 'A sensor-based embedded system that continuously checks earthing and leakage protection and raises alerts.',
    details: `Electrical installations such as pole lights, parking-area lighting and other outdoor electrical systems depend on proper earthing and earth-leakage protection for safe operation. A failure in the earthing path or protective system can create a hazardous condition. Periodic inspection of a large number of installations also requires significant manpower and does not provide continuous visibility into system health.\n\nDevelop a sensor-based embedded system capable of continuously assessing the health of an electrical earthing and earth-leakage protection arrangement and generating a local and/or remote alert when an abnormal condition is detected.`,
  },
  {
    id: 'PES-HW-02', society: 'PES', track: 'HW',
    title: 'Solar Energy Manager with Load Prioritisation',
    summary: 'A hardware system that monitors available solar energy and sheds or keeps loads by priority.',
    details: `Small-scale solar systems, particularly those used in rural, remote and off-grid applications, experience fluctuating energy availability because solar generation varies with environmental conditions and storage capacity is limited. When available energy is insufficient for all connected loads, continued operation of non-critical loads can accelerate battery discharge and potentially lead to loss of supply.\n\nDesign and prototype a hardware-based solar energy management system that continuously monitors available energy and automatically manages multiple connected loads according to their priority and the current energy condition of the system.`,
  },
  {
    id: 'PES-HW-03', society: 'PES', track: 'HW',
    title: 'Electrical Load Identification and Energy Profiling',
    summary: 'Measure an unknown low-voltage load, extract electrical features and identify its category or operating profile.',
    details: `Electrical energy monitoring systems commonly report voltage, current, power and energy consumption. However, knowing the total consumption does not necessarily reveal what type of equipment is responsible for the observed behaviour. Different electrical loads can exhibit different electrical signatures because of their physical and electronic characteristics.\n\nDevelop a measurement and software-analysis system that observes the electrical behaviour of an unknown low-voltage load, extracts meaningful electrical features, and identifies the likely load category and/or its operating profile.`,
  },
  {
    id: 'PES-HW-04', society: 'PES', track: 'HW',
    title: 'Solar PV Performance and Fault Diagnosis',
    summary: 'Compare measured PV output with an expected baseline, detect deviations and guess the likely cause.',
    details: `Solar PV output varies with operating conditions such as available irradiance, temperature, shading, orientation and electrical loading. A reduction in measured output does not automatically indicate a hardware fault. A useful monitoring system therefore needs to compare measured behaviour against an expected baseline and distinguish normal environmental variation from abnormal performance.\n\nDevelop a low-cost measurement and software-analysis system that estimates the expected operating behaviour of a small solar PV source, compares it with measured performance, detects significant deviations, and attempts to identify the likely cause or category of the deviation.`,
  },

  // WIE
  {
    id: 'WIE-SW-01', society: 'WIE', track: 'SW',
    title: 'Personal AI Memory System',
    summary: 'Organise documents, videos, articles, lectures and chats into a searchable contextual knowledge graph.',
    details: `Develop an AI-powered system that organises a user's documents, videos, articles, lectures, and conversations into a searchable contextual knowledge graph for intelligent information retrieval.`,
  },
  {
    id: 'WIE-HW-01', society: 'WIE', track: 'HW',
    title: 'Gesture-Controlled Wearable for Industrial Machines',
    summary: 'A wearable that turns hand and forearm gestures into safe, real-time commands for robots or machinery.',
    details: `Develop a wearable human-machine interface that captures hand and forearm movements using inertial, muscle, and bending sensors, processes the multimodal signals using edge AI, and translates recognised gestures into real-time commands for industrial robots or machinery without requiring physical control panels.\n\nThe system should provide configurable gesture-to-command mapping, haptic feedback, and wireless communication while incorporating safety mechanisms to prevent accidental machine activation.`,
  },

  // ITSOC
  {
    id: 'ITSOC-SW-01', society: 'ITSOC', track: 'SW',
    title: 'Project NIGHTHAWK: Self-Healing Data Network',
    summary: 'A decentralised file transfer that uses erasure or fountain codes to survive lost nodes and packets.',
    details: `Design a decentralised file-transfer system that can reliably deliver files even when a significant portion of the network becomes unavailable or packets are lost. Instead of simply replicating files, the system should use Reed-Solomon / erasure coding or fountain codes to divide data into recoverable fragments and intelligently distribute them across peers.\n\nThe system should detect missing or corrupted fragments and reconstruct the original file without retransmitting the entire file. Evaluate storage overhead, recovery probability, bandwidth used, reconstruction time and tolerance to node and packet failures.`,
  },
  {
    id: 'ITSOC-SW-02', society: 'ITSOC', track: 'SW',
    title: 'Project GHOSTCHAIN: A Blockchain That Knows What to Forget',
    summary: 'Verify data availability without storing everything, using erasure codes, commitments and sampling.',
    details: `Design a blockchain-based data system where large data is encoded, distributed and verified without every node storing the complete dataset. Use erasure coding, cryptographic commitments and probabilistic data availability sampling to allow lightweight nodes to verify that data is available while downloading only a small fraction of it.\n\nBuild a simulator that introduces unavailable and malicious nodes and measure data-recovery probability, communication overhead, storage overhead and verification cost.`,
  },

  // SPS
  {
    id: 'SPS-HW-01', society: 'SPS', track: 'HW',
    title: 'Wireless Acoustic Condition Monitoring',
    summary: 'Low-cost wireless acoustic nodes that spot abnormal machine sounds and report to a central system.',
    details: `Industrial machines such as motors, pumps, compressors, gearboxes, and conveyor systems can develop mechanical faults that gradually alter their acoustic characteristics before a major failure occurs. However, continuously monitoring a large number of machines using conventional wired sensing systems can be costly and difficult to scale.\n\nThis project aims to develop a low-cost wireless network of acoustic sensor nodes that captures and locally processes machine sounds to identify abnormal acoustic patterns and wirelessly report them to a central monitoring system. The system can be extended to classify different machine conditions and provide early warnings for potential faults.`,
  },
  {
    id: 'SPS-SW-01', society: 'SPS', track: 'SW',
    title: 'HOLEPOTLUCK',
    summary: 'Crowdsourced detection and mapping of speed bumps and potholes from smartphone motion sensors.',
    details: `Design a crowdsourced road safety system that uses smartphone accelerometer and gyroscope data to detect, classify, and map unmarked speed bumps and potholes.\n\nThe core technical challenge requires building an algorithm that accurately isolates true road anomalies while filtering out false positives caused by phone handling inside a vehicle. Teams must process telemetry data, implement spatial clustering to verify hazard locations, and deliver a basic dashboard visualising the map-based warning system.`,
  },
  {
    id: 'SPS-SW-02', society: 'SPS', track: 'SW',
    title: 'Motion-Robust Heart Rate Tracking from Wrist PPG',
    summary: 'A signal processing pipeline that estimates BPM from noisy wrist PPG using the accelerometer as a motion reference.',
    details: `Smartwatches estimate heart rate using photoplethysmography (PPG), where reflected light varies with blood volume. At rest the signal is clean. During exercise, wrist motion adds artifacts that overlap the heart-rate band (about 0.7-3.5 Hz), so a plain FFT peak-pick often locks onto the arm-swing cadence instead of the pulse.\n\nBuild a signal processing pipeline that estimates heart rate (BPM) every 2 seconds from noisy wrist PPG, using the accelerometer as a reference for motion noise. Everything runs on recorded data and there is no hardware involved.`,
  },
  {
    id: 'SPS-HW-02', society: 'SPS', track: 'HW',
    title: 'WATERTRACE: Acoustic Water Leak Detection',
    summary: 'Detect and classify pipeline leaks from acoustic or vibration signals despite noise and flow changes.',
    details: `Develop a system that can detect water leakage in pipelines by analysing the acoustic or vibration signals produced during water flow. The system should be able to distinguish normal flow conditions from abnormal patterns caused by leaks, while accounting for surrounding noise and variations in flow.\n\nTeams can explore signal processing and machine learning techniques to identify and classify different leak conditions. The solution could also be extended to estimate the location or severity of a leak using multiple sensing points.`,
  },
  {
    id: 'SPS-SW-03', society: 'SPS', track: 'SW',
    title: 'NOIR: Noise-Aware Object Identification from RAW Data',
    summary: 'Detect objects in the dark by processing RAW sensor data from ordinary low-cost cameras.',
    details: `Low-light cameras suffer from weak signals and sensor noise, causing conventional detectors to miss objects. While infrared and thermal cameras can improve visibility in darkness, they require additional specialised hardware.\n\nNOIR explores whether RAW sensor data from existing low-cost cameras can be directly processed to separate useful scene information from noise and improve object detection in dark environments.`,
  },

  // EMBS
  {
    id: 'EMBS-SW-01', society: 'EMBS', track: 'SW',
    title: 'AI-Based Skin Condition Screening',
    summary: 'Classify skin images into visual categories with a confidence score and guidance on seeing a doctor.',
    details: `People often struggle to identify whether a visible skin abnormality requires medical attention, especially when immediate access to a dermatologist is unavailable.\n\nDevelop an AI-based system that analyses skin images, classifies them into predefined visual categories, and provides a confidence-based screening result with guidance on when professional evaluation may be needed.`,
  },
  {
    id: 'EMBS-SW-02', society: 'EMBS', track: 'SW',
    title: 'Smartphone-Based Multi-Disease Eye Screening',
    summary: 'A low-cost offline smartphone tool that helps health workers flag patients for specialist eye referral.',
    details: `Rural and underserved health centres often lack ophthalmologists and specialised screening equipment, causing delays in identifying eye conditions.\n\nDevelop a low-cost, offline smartphone-based system that analyses eye images for predefined conditions and assists healthcare workers in identifying patients who may require specialist referral.`,
  },
  {
    id: 'EMBS-HW-01', society: 'EMBS', track: 'HW',
    title: "Intelligent Parkinson's Motor-State Monitoring",
    summary: 'A wearable that separates voluntary from involuntary arm motion and profiles tremor over time.',
    details: `Parkinsonian symptoms such as tremors and movement instability can vary throughout the day and may not be captured during short clinical visits.\n\nDevelop a wearable system that analyses upper-limb movements to distinguish voluntary and involuntary motion, measure tremor characteristics, and generate a time-based profile of the user's motor activity.`,
  },

  // PHO
  {
    id: 'PHO-HW-01', society: 'PHO', track: 'HW',
    title: 'The Sixth Sense',
    summary: 'A wearable that senses heat, UV or distance and turns it into sound, vibration or visual feedback.',
    details: `Build a wearable system that detects information humans cannot naturally perceive, such as heat, UV or distance, and converts it into sound, vibration or visual feedback.`,
  },
  {
    id: 'PHO-HW-02', society: 'PHO', track: 'HW',
    title: 'PathLight',
    summary: 'A portable obstacle and unsafe-path detector giving audio or vibration guidance to visually impaired users.',
    details: `Build a portable device that detects obstacles, distance and unsafe paths and provides audio or vibration-based guidance for visually impaired users.`,
  },
  {
    id: 'PHO-SW-01', society: 'PHO', track: 'SW',
    title: 'Photonic Chip Failure Prediction and Virtual Testing',
    summary: 'Simulate manufacturing variation in photonic chips, predict failures and suggest design fixes.',
    details: `Develop a software tool that simulates manufacturing variations in photonic chips, predicts failures and suggests design improvements before manufacturing.`,
  },
  {
    id: 'PHO-SW-02', society: 'PHO', track: 'SW',
    title: 'Quantum-Secured Communication Simulator',
    summary: 'Two AI agents exchange keys using BB84 and detect eavesdropping through QBER.',
    details: `Develop a software simulator where two AI agents communicate using BB84-based quantum key distribution and detect eavesdropping using QBER.`,
  },

  // AP/MTT-S
  {
    id: 'APMTT-HW-01', society: 'AP/MTT-S', track: 'HW',
    title: '2.4 GHz RF Intrusion Detection System',
    summary: 'Hand-built cantennas and RSSI tracking that sound an alarm when a person breaks the beam.',
    details: `Design and deploy a localised 2.4 GHz Radio Frequency Intrusion Detection System (RF-IDS). Construct hand-fabricated metallic waveguide antennas (cantennas) to collimate the signal into a narrow beam.\n\nThe system must trigger a physical alarm based on real-time RSSI attenuation when a human breaches the line of sight, using rolling-average firmware algorithms to filter ambient Wi-Fi noise and reject false positives.`,
  },
  {
    id: 'APMTT-HW-02', society: 'AP/MTT-S', track: 'HW',
    title: 'Non-Contact RF Soil Moisture Sensor',
    summary: 'Sub-GHz RSSI attenuation through soil, calibrated by regression to predict water content.',
    details: `Engineer a non-contact RF soil moisture sensor using sub-GHz telemetry. Construct waterproof, PVC-encapsulated half-wave dipole antennas to prevent galvanic corrosion.\n\nMeasure continuous RSSI attenuation across an agricultural soil medium to plot an empirical calibration curve, using linear or polynomial regression models to accurately predict volumetric water content.`,
  },

  // RAS
  {
    id: 'RAS-SW-01', society: 'RAS', track: 'SW',
    title: 'Distributed Multi-Camera Vision System',
    summary: 'Several low-cost cameras share observations to track objects together and survive a blocked camera.',
    details: `There is a need for a distributed vision system where multiple low-cost cameras independently observe different parts of a workspace and share useful information instead of continuously sending full video. The system should combine these observations to maintain a common understanding of objects and their locations.\n\nDesign a multi-camera vision system that detects and tracks objects across different camera views, combines their observations, and continues functioning even when one camera is blocked or unavailable.`,
  },
  {
    id: 'RAS-HW-01', society: 'RAS', track: 'HW',
    title: 'Decentralised Robot Fleet Coordination',
    summary: 'Robots negotiate shared paths and resources locally, with no master controller.',
    details: `There is a need for a decentralised coordination system where multiple robots can communicate with nearby robots and make local decisions to safely share common resources without depending on a single master controller.\n\nDesign a small robotic fleet in which robots communicate, negotiate access to shared paths or resources, avoid conflicts and deadlocks, and continue operating even when the central controller is unavailable.`,
  },
  {
    id: 'RAS-HW-02', society: 'RAS', track: 'HW',
    title: 'Overhead Camera Navigation for Low-Cost Robots',
    summary: 'One overhead camera tracks marked robots and guides them wirelessly, with no LiDAR or onboard cameras.',
    details: `Develop a shared vision infrastructure that enables multiple low-cost robots to navigate a common workspace without requiring sophisticated onboard localisation sensors. An overhead camera should observe the workspace, identify each robot using a unique visual marker, determine its position, and provide navigation information to the robots.\n\nThe system should:\n- Create a global map of the workspace using an overhead camera.\n- Identify and continuously track multiple robots.\n- Assign destinations dynamically.\n- Generate collision-free paths.\n- Send movement commands wirelessly to each robot.\n- Coordinate multiple robots operating simultaneously.\n- Demonstrate operation without LiDAR or onboard cameras.`,
  },

  // CAS
  {
    id: 'CAS-HW-01', society: 'CAS', track: 'HW',
    title: 'Standalone Bike Security and Telemetry Node',
    summary: 'An independent IMU and GPS node that detects theft or crashes, logs the event and sends an SOS.',
    details: `Develop a low-cost, standalone security and telemetry node for bicycles and e-bikes, operating independently of the bike's native systems. The team should design a compact, weather-resistant embedded device capable of continuously logging motion and location data using a 6-axis IMU and a GPS module. The system must implement a circular buffer to continuously record vibration and orientation data.\n\nUpon detecting a "theft attempt" (sudden movement while in a software-locked state) or a "crash" (high G-force impact followed by a tilt angle above 45 degrees), the device must automatically save the 15 seconds of pre- and post-event telemetry to an SD card in JSON format. It must immediately send an SOS alert with live GPS coordinates via a GSM module or smartphone BLE relay.\n\nAdditionally, the team should implement edge analytics to track ride smoothness, pothole impacts, and sudden braking events to generate a "Route Risk & Maintenance Score" for the rider.\n\nThe solution must include backup power management using a small Li-Po battery and a supercapacitor to guarantee the final GPS location is transmitted even if a thief cuts the main battery wires.`,
  },
  {
    id: 'CAS-HW-02', society: 'CAS', track: 'HW',
    title: 'Ultrasonic Acoustic Levitator',
    summary: 'Suspend small objects in mid-air with 40 kHz standing waves, with phase-shift control, for 10+ minutes.',
    details: `Develop an Ultrasonic Acoustic Levitator, a non-contact matter manipulation system that uses high-frequency sound waves to generate acoustic radiation pressure. The team should design and build a device capable of creating stable 40 kHz standing waves using precisely aligned dual ultrasonic transducer arrays (or a single array with a reflector) to suspend low-density objects, such as EPS beads or water droplets, in mid-air.\n\nThe system must incorporate a microcontroller-based signal generation circuit to produce consistent 40 kHz square or sine waves, featuring phase-shift control to enable the vertical movement of levitated objects and PWM-based frequency tuning.\n\nThe team must achieve stable levitation for a minimum of 10 minutes while minimising acoustic resonance noise through structural dampening, and deliver a fully functional prototype demonstrating stable suspension and phase control alongside the technical documentation.`,
  },
]