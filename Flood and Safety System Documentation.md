## **Project Architecture: Integrated Flood & Safety Monitoring System**

This system is divided into two primary functional blocks: an **Outdoor Unit** for environmental telemetry and an **Indoor Unit** for safety monitoring and data gateway functions.

### ---

**1\. Outdoor Unit (Sensing & Telemetry)**

The outdoor unit is designed to monitor flood conditions and environmental states, transmitting data to the interior.

* **Ultrasonic Sensor (JSN):** Used for calculating **water depth** and **rising velocity**. It categorizes risk levels (Red, Green, Orange) to be sent to the indoor unit.  
* **PIR Motion Sensor:** Acts as a logic filter to **avoid false alarms**. It checks if a change in depth is caused by a living being (human/animal) or actual water.  
* **Rain Sensor:** Used individually to detect and report whether rain is currently occurring.  
* **Power:** Powered by **2 Lithium-Ion cells**. The voltage is regulated down to power the ESP and LoRa modules.

### ---

**2\. Indoor Unit (Safety, Logic & UI)**

The indoor unit serves as the logic hub, monitoring the household environment and providing the interface for the user.

#### **Safety Sensors**

* **Gas Leakage Sensor:** If gas is detected, readings increase and trigger the **buzzer and alert**.  
* **Smoke Sensor (MQ135):** Monitors air quality; triggers a fire alert if smoke is detected.  
* **DHT11 (Temp/Humidity):** Monitors the surrounding environment.  
* **Fire Detection Logic:** \* Primary detection is via the **MQ135**.  
  * If no smoke is present, the **DHT11** monitors for a **sudden rise in temperature** to trigger the fire alarm.

#### **Emergency & UI**

* **SOS Button:** A manual button (pressed for **5 seconds**) that sends an SOS signal to nearby mesh networks.  
* **Visual Display:** An **LCD** shows real-time data received from the outdoor unit and internal sensors.  
* **Cloud Integration:** The **ESP module** uploads all data to the **Blynk App** for remote monitoring.

### ---

**3\. Communication Setup**

#### **Outdoor to Indoor (LoRa)**

The outdoor unit sends a data packet containing:

1. Water Depth  
2. Rain Status (Yes/No)  
3. PIR Sensor Value  
4. Battery Percentage

#### **Indoor Mesh Networking**

* Multiple indoor units can be interconnected by adding the **Reference ID** of the new node.  
* This creates a **Mesh Network** allowing emergency alerts (Fire/Smoke/SOS) to be shared effectively between different houses/nodes.

### ---

**4\. Technical Specifications**

| Component | Detail |
| :---- | :---- |
| **Microcontrollers** | 2x ESP Modules |
| **Wireless Transceivers** | 2x LoRa SX1278 (433 MHz) |
| **LoRa Range (Open Field)** | 4–5 km (Confirmed) |
| **LoRa Range (Buildings)** | 1–1.5 km |
| **Outdoor Power Source** | Lithium-Ion Batteries (regulated for ESP/LoRa) |
| **Indoor Power Source** | Wall Power Adapter (Direct connection) |
| **Decision Logic** | All flood detection decision-making is processed in the **Indoor Unit**. |

---

