const products = [

{
id:1,
title:"iPhone 16 Pro",
category:"Smartphones",
rating:5,
price:799,
oldPrice:950,
stock:"3 Left",
image:"images/iphone/iphone.png",
images:[
"images/iphone/iphone.png",
"images/iphone/iphone1.png",
"images/iphone/iphone2.png",
"images/iphone/iphone3.png"
],
highlights:[
    "Titanium frame construction",
    "AI-powered photography",
    "Professional camera system",
    "ProMotion OLED display",
    "A18 Pro performance"
],
protection:[
    "12-month replacement warranty",
    "First-month replacement included",
    "Nationwide support coverage",
    "Verified product inspection"
],
specifications:{
    Display:"6.3-inch OLED",
    Storage:"256GB",
    Camera:"48MP Triple Camera",
    Chip:"Apple A18 Pro",
    Connectivity:"5G",
    designedIn:"USA",
    madeIn:"China"
},
description:"Titanium design and AI photography.",
memoryHint:"Titanium frame",about:
"The iPhone 16 Pro is designed for users who want flagship performance, professional photography and a premium titanium design. Its advanced camera system and powerful A18 Pro chip make it ideal for content creation, gaming and everyday productivity."
},

{
id:2,
title:"MacBook Pro M3",
category:"Laptops",
rating:4,
price:1499,
image:"images/macbook/macbook.png",
images:[
"images/macbook/macbook.png",
"images/macbook/macbook1.png",
"images/macbook/macbook2.png",
"images/macbook/macbook3.png"
],
highlights:[
    "Apple M3 performance",
    "Liquid Retina XDR display",
    "All-day battery life",
    "Premium aluminum design",
    "Professional workflow support"
],
protection:[
    "1-year manufacturer warranty",
    "Authorized service-center support",
    "ElectroMarket device verification",
    "Secure nationwide delivery"
],
specifications:{
    Processor:"Apple M3",
    Display:"14-inch Liquid Retina XDR",
    Memory:"16GB",
    Storage:"512GB SSD",
    Battery:"Up to 22 hours",
    designedIn:"USA",
    madeIn:"China"
},
description:"Professional creative performance.",
memoryHint:"M3 performance",
about:
"The MacBook Pro M3 delivers exceptional performance for creative professionals, students and power users. With long battery life and Apple's efficient M3 processor, it handles demanding workloads while remaining portable."
},

{
id:3,
title:"PlayStation 5",
category:"Gaming",
rating:3,
price:399,
oldPrice:450,
stock:"2 Left",
image:"images/ps5/ps5.png",
images:[
"images/ps5/ps5.png",
"images/ps5/ps5_1.png",
"images/ps5/ps5_2.png",
"images/ps5/ps5_3.png"
],
highlights:[
    "Lightning-fast SSD",
    "Ray-tracing support",
    "Adaptive DualSense controller",
    "4K gaming support",
    "Immersive 3D audio"
],
protection:[
    "Official Sony warranty",
    "Verified console condition",
    "Replacement for eligible defects",
    "Secure delivery tracking"
],
specifications:{
    CPU:"AMD Zen 2",
    Storage:"825GB SSD",
    Resolution:"Up to 4K",
    Audio:"Tempest 3D Audio",
    Connectivity:"Wi-Fi 6",
    designedIn:"Japan",
    madeIn:"China",
},
description:"Next-generation gaming.",
memoryHint:"Next-gen console",
about:
"The PlayStation 5 offers a next-generation gaming experience with ultra-fast loading, immersive graphics and a vast game library. It is built for players who want smooth performance and rich gaming experiences."
},

{
id:4,
title:"Sony WH-1000XM5",
category:"Audio",
rating:4,
price:280,
image:"images/sonyxm5/sonyxm5.png",
images:[
"images/sonyxm5/sonyxm5.png",
"images/sonyxm5/sonyxm5_1.png",
"images/sonyxm5/sonyxm5_2.png",
"images/sonyxm5/sonyxm5_3.png"
],
highlights:[
    "Industry-leading noise cancellation",
    "Premium comfort",
    "Long battery life",
    "High-resolution audio",
    "Crystal-clear calls"
],
protection:[
    "12-month warranty",
    "Verified audio performance",
    "Nationwide support",
    "Secure packaging guarantee"
],
specifications:{
    Type:"Over-ear",
    Battery:"30 hours",
    NoiseCancellation:"Yes",
    Charging:"USB-C",
    Wireless:"Bluetooth 5.2",
    designedIn:"Japan",
    madeIn:"Malaysia",
},
description:"Industry-leading noise cancellation.",
memoryHint:"Noise cancellation",
about:
"The Sony WH‑1000XM5 headphones combine premium comfort, excellent battery life and industry-leading noise cancellation. They are well suited for travel, work and everyday music listening."
},

{
id:5,
title:"Apple Watch Ultra",
category:"Wearables",
rating:4,
price:499,
oldPrice:599,
stock:"Limited",
image:"images/watch/watch.jpg",
images:[
"images/watch/watch.jpg",
"images/watch/watch1.png",
"images/watch/watch2.png",
"images/watch/watch3.png"
],
highlights:[
    "Adventure-ready design",
    "Precision GPS",
    "Water resistance",
    "Large bright display",
    "Comprehensive health tracking"
],
protection:[
    "12-month replacement warranty",
    "Health sensor verification",
    "Nationwide service support",
    "Secure insured shipping"
],
specifications:{
    Display:"49mm OLED",
    WaterResistance:"100m",
    GPS:"Dual-frequency",
    Battery:"36 hours",
    designedIn:"USA",
    madeIn:"China",
    Connectivity:"LTE + Wi-Fi"
},
description:"Adventure-ready health tracking.",
memoryHint:"Adventure smartwatch",
about:
"The Apple Watch Ultra is designed for outdoor enthusiasts and active users who require advanced fitness tracking, precise GPS and rugged durability. Its large display and extensive health features make it Apple's most capable smartwatch."
},

{
id:6,
title:"Galaxy S24 Ultra",
category:"Smartphones",
rating:5,
price:1099,
image:"images/galaxy/galaxy.png",
images:[
"images/galaxy/galaxy.png",
"images/galaxy/galaxy1.png",
"images/galaxy/galaxy2.png",
"images/galaxy/galaxy3.png"
],
highlights:[
    "200MP camera system",
    "Galaxy AI features",
    "Titanium frame",
    "S Pen support",
    "Dynamic AMOLED display"
],
protection:[
    "12-month warranty",
    "Verified inspection",
    "Nationwide assistance",
    "Secure payment protection"
],
specifications:{
    Display:"6.8-inch AMOLED",
    Camera:"200MP",
    Storage:"256GB",
    Battery:"5000mAh",
    designedIn:"South Korea",
    madeIn:"Vietnam",
    Connectivity:"5G"
},
description:"200MP zoom photography.",
memoryHint:"200MP camera",
about:
"The Galaxy S24 Ultra combines flagship hardware with powerful AI features and one of the most advanced smartphone camera systems available. It is ideal for photography, productivity and multimedia consumption."
},

{
id:7,
title:"Steam Deck OLED",
category:"Gaming",
rating:4,
price:549,
image:"images/steamdeck/steamdeck.png",
images:[
"images/steamdeck/steamdeck.png",
"images/steamdeck/steamdeck1.png",
"images/steamdeck/steamdeck2.png",
"images/steamdeck/steamdeck3.png"
],
highlights:[
    "Portable PC gaming",
    "OLED display",
    "Steam library support",
    "Longer battery life",
    "Handheld performance"
],
protection:[
    "Functional inspection",
    "Verified controls",
    "Secure nationwide delivery",
    "Defect replacement coverage"
],
specifications:{
    Display:"7.4-inch OLED",
    Storage:"512GB",
    OS:"SteamOS",
    Battery:"50Wh",
    designedIn:"USA",
    madeIn:"China",
    Connectivity:"Wi-Fi 6E"
},
description:"Portable PC gaming.",
memoryHint:"Portable PC gaming",
about:
"The Steam Deck OLED brings PC gaming into a handheld form factor. Its vibrant display, extensive game compatibility and portable design allow users to enjoy their Steam library almost anywhere."
},

{
id:8,
title:"DJI Mini 4 Pro",
category:"Other",
rating:5,
price:799,
image:"images/drone/drone.png",
images:[
"images/drone/drone.png",
"images/drone/drone1.png",
"images/drone/drone2.png",
"images/drone/drone3.png"
],
highlights:[
    "Compact foldable drone",
    "4K aerial video",
    "Obstacle avoidance",
    "Extended flight time",
    "Travel-friendly design"
],
protection:[
    "Drone condition verification",
    "Flight-system inspection",
    "12-month support coverage",
    "Secure packaging"
],
specifications:{
    Weight:"Under 249g",
    Camera:"4K HDR",
    FlightTime:"34 mins",
    Sensors:"Omnidirectional",
    designedIn:"China",
    madeIn:"China",
    Range:"20km"
},
description:"Compact cinematic drone.",
memoryHint:"Compact drone",
about:
"The DJI Mini 4 Pro is a lightweight drone designed for creators, travelers and hobbyists. Despite its compact size, it offers advanced obstacle avoidance, excellent camera quality and long flight times."
},

{
id:9,
title:"Nintendo Switch OLED",
category:"Gaming",
rating:4,
oldPrice:399,
price:349,
stock:"4 Left",
image:"images/switch/switch.png",
images:[
"images/switch/switch.png",
"images/switch/switch1.png",
"images/switch/switch2.png",
"images/switch/switch3.png"
],
highlights:[
    "Vibrant OLED display",
    "Portable and docked gaming",
    "Exclusive Nintendo titles",
    "Enhanced kickstand",
    "Family-friendly gameplay"
],
protection:[
    "Verified hardware inspection",
    "Replacement warranty",
    "Nationwide support",
    "Secure delivery"
],
specifications:{
    Display:"7-inch OLED",
    Storage:"64GB",
    Mode:"Handheld/Docked",
    Connectivity:"Wi-Fi",
    designedIn:"Japan",
    madeIn:"Vietnam",
    Battery:"4.5–9 hours"
},
description:"Vibrant OLED display and portable gaming.",
memoryHint:"OLED handheld",
about:
"The Nintendo Switch OLED offers flexible gaming at home or on the go. Its colorful OLED display and extensive library of exclusive Nintendo titles make it a great choice for players of all ages."
},

{
id:10,
title:"AirPods Pro 2",
category:"Audio",
rating:5,
price:149,
oldPrice:199,
stock:"5 Left",
image:"images/airpods/airpods.png",
images:[
"images/airpods/airpods.png",
"images/airpods/airpods1.png",
"images/airpods/airpods2.png",
"images/airpods/airpods3.png"
],
highlights:[
    "Adaptive Active Noise Cancellation",
    "Personalized Spatial Audio",
    "USB-C charging case",
    "Sweat and water resistance",
    "Seamless Apple ecosystem integration"
],
protection:[
    "12-month replacement warranty covering manufacturing defects",
    "Verified audio and microphone performance inspection",
    "Nationwide customer support and service assistance",
    "Secure payment protection for every purchase"
],
specifications:{
    Type:"True Wireless Earbuds",
    NoiseCancellation:"Adaptive ANC",
    Battery:"Up to 30 Hours",
    Charging:"USB-C",
    WaterResistance:"IP54",
    designedIn:"USA",
    madeIn:"Vietnam"
},
description:"Active noise cancellation and spatial audio.",
memoryHint:"Spatial audio",
about:
"The AirPods Pro 2 provide premium wireless audio with adaptive noise cancellation and personalized spatial audio. They integrate seamlessly with Apple devices while delivering excellent comfort and sound quality."
},

{
id:11,
title:"Surface Laptop 7",
category:"Laptops",
rating:5,
price:1199,
image:"images/surface/surface.jpg",
images:[
"images/surface/surface.jpg",
"images/surface/surface1.png",
"images/surface/surface2.png",
"images/surface/surface3.png"
],
highlights:[
    "Copilot+ AI-powered experiences",
    "Premium lightweight aluminum design",
    "All-day battery life",
    "High-resolution PixelSense display",
    "Optimized productivity performance"
],
protection:[
    "1-year official Microsoft manufacturer warranty",
    "Eligible for service at authorized support centers",
    "ElectroMarket verification before shipment",
    "Secure nationwide delivery and payment protection"
],
specifications:{
    Processor:"Snapdragon X Elite",
    Memory:"16GB LPDDR5X",
    Storage:"512GB SSD",
    Display:"13.8-inch PixelSense",
    Battery:"Up to 20 Hours",
    designedIn:"USA",
    madeIn:"China"
},
description:"Copilot+ PC with all-day battery life.",
memoryHint:"Copilot+ PC",
about:
"The Surface Laptop 7 is designed for users who want a premium Windows experience with modern AI-powered features. Its lightweight design and long battery life make it a strong everyday productivity device."
},

{
id:12,
title:"Xbox Series X",
category:"Gaming",
rating:5,
oldPrice:549,
price:499,
stock:"3 Left",
image:"images/xbox/xbox.png",
images:[
"images/xbox/xbox.png",
"images/xbox/xbox1.png",
"images/xbox/xbox2.png",
"images/xbox/xbox3.png"
],
highlights:[
    "Powerful 4K gaming performance",
    "Game Pass ready",
    "Quick Resume technology",
    "High-speed SSD storage",
    "Backwards compatibility support"
],
protection:[
    "12-month replacement warranty for eligible hardware defects",
    "Console functionality verified by ElectroMarket",
    "Secure tracked shipping nationwide",
    "Protected checkout and buyer protection guarantee"
],
specifications:{
    CPU:"AMD Zen 2",
    Storage:"1TB SSD",
    Resolution:"Up to 4K",
    FrameRate:"Up to 120 FPS",
    Connectivity:"Wi-Fi 5",
    designedIn:"USA",
    madeIn:"China"
},
description:"4K gaming with Game Pass compatibility.",
memoryHint:"Game Pass console",
about:
"The Xbox Series X is Microsoft's flagship gaming console, offering powerful hardware, rapid load times and access to the extensive Game Pass ecosystem. It is a versatile platform for both casual and competitive players."
},

{
id:13,
title:"Google Pixel 10 Pro",
category:"Smartphones",
rating:5,
price:999,
image:"images/pixel/pixel.png",
images:[
"images/pixel/pixel.png",
"images/pixel/pixel1.png",
"images/pixel/pixel2.png",
"images/pixel/pixel3.png",
],
highlights:[
    "Industry-leading AI photography",
    "Advanced computational camera system",
    "Clean Android experience",
    "Brilliant LTPO OLED display",
    "Long-term software support"
],
protection:[
    "12-month replacement warranty for manufacturing defects",
    "Verified battery and display condition",
    "Nationwide support coverage",
    "Secure payment and shipping protection"
],
specifications:{
    Display:"6.8-inch LTPO OLED",
    Camera:"50MP Triple Camera",
    Storage:"256GB",
    Battery:"5000mAh",
    Connectivity:"5G",
    designedIn:"USA",
    madeIn:"Vietnam"
},
description:"Advanced AI features and industry-leading camera software.",
memoryHint:"AI photography",
about:
"The Pixel 10 Pro focuses on intelligent software and advanced computational photography. Google's AI-powered features and clean Android experience make it one of the most capable smartphone options available."
},

{
id:14,
title:"Fitbit Charge 7",
category:"Wearables",
rating:4,
price:179,
image:"images/fitbit/fitbit.png",
images:[
"images/fitbit/fitbit.png",
"images/fitbit/fitbit1.png",
"images/fitbit/fitbit2.png",
"images/fitbit/fitbit3.png",
],
highlights:[
    "24/7 heart-rate monitoring",
    "Advanced sleep tracking",
    "Built-in GPS support",
    "Long-lasting battery life",
    "Lightweight fitness-focused design"
],
protection:[
    "12-month replacement warranty covering manufacturing defects",
    "Health-tracking functionality verified before shipment",
    "Nationwide service assistance",
    "Protected payment and delivery process"
],
specifications:{
    Display:"AMOLED Touchscreen",
    Battery:"Up to 7 Days",
    GPS:"Built-In",
    WaterResistance:"50 Meters",
    Sensors:"Heart Rate + SpO2",
    designedIn:"USA",
    madeIn:"China"
},
description:"Heart-rate tracking and multi-day battery life.",
memoryHint:"Fitness tracker",
about:
"The Fitbit Charge 7 is a fitness-focused wearable that helps users track exercise, sleep and overall wellness. Its lightweight design and long battery life make it suitable for everyday wear."
},

{
id:15,
title:"Meta Quest 3",
category:"Other",
rating:5,
price:499,
image:"images/quest3/quest3.png",
images:[
"images/quest3/quest3.png",
"images/quest3/quest3_1.png",
"images/quest3/quest3_2.png",
"images/quest3/quest3_3.png",
],
highlights:[
    "Next-generation mixed reality",
    "Standalone VR gaming",
    "Advanced hand-tracking capabilities",
    "High-resolution visual experience",
    "Expanding gaming and productivity ecosystem"
],
protection:[
    "Eligible replacement warranty for manufacturing defects",
    "Headset and controller verification before shipment",
    "Nationwide customer support",
    "Secure payment and delivery guarantee"
],
specifications:{
    Processor:"Snapdragon XR2 Gen 2",
    Storage:"128GB",
    Resolution:"2064x2208 Per Eye",
    Tracking:"Inside-Out Tracking",
    Connectivity:"Wi-Fi 6E",
    designedIn:"USA",
    madeIn:"China"
},
description:"Mixed reality headset with immersive gaming experiences.",
memoryHint:"Mixed reality",
about:
"The Meta Quest 3 combines virtual and mixed reality experiences in a standalone headset. It offers immersive gaming, productivity tools and interactive experiences without requiring an external computer."
},

{
id:16,
title:"ASUS ROG Zephyrus G16",
category:"Laptops",
rating:5,
price:1699,
oldPrice:1899,
stock:"Limited",
image:"images/rogg16/rogg16.png",
images:[
"images/rogg16/rogg16.png",
"images/rogg16/rogg16_1.png",
"images/rogg16/rogg16_2.png",
"images/rogg16/rogg16_3.png",
],
highlights:[
    "RTX-powered gaming graphics",
    "240Hz OLED gaming display",
    "Advanced vapor-chamber cooling",
    "Premium aluminum chassis",
    "Exceptional gaming and creator performance"
],
protection:[
    "1-year official ASUS manufacturer warranty",
    "Support honored at authorized ASUS service centers",
    "ElectroMarket performance and hardware verification",
    "Secure insured shipping nationwide"
],
specifications:{
    Processor:"Intel Core Ultra 9",
    Graphics:"NVIDIA RTX 4070",
    Memory:"32GB DDR5",
    Storage:"1TB SSD",
    Display:"16-inch 240Hz OLED",
    designedIn:"Taiwan",
    madeIn:"China"
},
description:"Ultra-slim gaming laptop with high-refresh display and next-generation RTX graphics.",
memoryHint:"RTX gaming laptop",
about:
"The ASUS ROG Zephyrus G16 is a premium gaming and creator laptop that combines powerful RTX graphics, a high-refresh OLED display and advanced cooling technology. Its slim design allows users to enjoy desktop-class performance in a portable package."
}

];
