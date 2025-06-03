# Subnetting – Übungszusammenfassung

---

### **Beispiel 1**
#### **Aufgabenstellung:**
Ausgehend vom Netz **192.168.0.0 /24** sollen vier Subnetze gebildet werden. Dabei gilt:  
- Netz A soll mindestens 20 Hosts ermöglichen  
- Netz B benötigt mindestens 15 Hosts  
- Netz C soll mindestens 30 Hosts unterstützen  
- Netz D erhält die restlichen Adressen  

#### **Lösung:**
- **Subnetz A**  
  - Netzadresse: `192.168.0.0 /27`  
  - Broadcast: `192.168.0.31`  
  - Gültiger Hostbereich: `192.168.0.1 – 192.168.0.30`  

- **Subnetz B**  
  - Netzadresse: `192.168.0.32 /28`  
  - Broadcast: `192.168.0.47`  
  - Hostbereich: `192.168.0.33 – 192.168.0.46`  

- **Subnetz C**  
  - Netzadresse: `192.168.0.48 /27`  
  - Broadcast: `192.168.0.79`  
  - Hostbereich: `192.168.0.49 – 192.168.0.78`  

- **Subnetz D**  
  - Netzadresse: `192.168.0.80 /26`  
  - Broadcast: `192.168.0.143`  
  - Hostbereich: `192.168.0.81 – 192.168.0.142`  

---

### **Beispiel 2**
#### **Aufgabenstellung:**
Teile das Netz **193.170.20.0 /24** in **acht gleich große Subnetze**.

#### **Lösung:**
- Die neue Subnetzmaske beträgt: `/27` → `255.255.255.224`  
- Die Subnetze beginnen bei:  
  - `193.170.20.0`  
  - `193.170.20.32`  
  - `193.170.20.64`  
  - `193.170.20.96`  
  - `193.170.20.128`  
  - `193.170.20.160`  
  - `193.170.20.192`  
  - `193.170.20.224`  
- Pro Subnetz: 30 Hosts verwendbar, 32 Adressen insgesamt  

---

### **Beispiel 3**
#### **Aufgabenstellung:**
Zerlege das Netz **172.28.40.0 /26** in **zwei gleich große Teile**.

#### **Lösung:**
- **Erstes Subnetz:**  
  - Netzadresse: `172.28.40.0 /27`  
  - Hostbereich: `172.28.40.1 – 172.28.40.30`  
  - Broadcast: `172.28.40.31`  

- **Zweites Subnetz:**  
  - Netzadresse: `172.28.40.32 /27`  
  - Hostbereich: `172.28.40.33 – 172.28.40.62`  
  - Broadcast: `172.28.40.63`  

---

### **Beispiel 4**
#### **Aufgabenstellung:**
Finde eine passende Subnetzmaske für das Netz **17.0.0.0**, damit **mindestens 10 Subnetze mit je 12 Hosts** möglich sind.

#### **Lösung:**
- Für ≥12 Hosts werden mindestens 14 IP-Adressen benötigt → `/28` ist ausreichend (16 Adressen, 14 nutzbar)  
- Um mindestens 10 Subnetze zu erhalten, reicht `/28` ebenfalls aus  
- **Ergebnis:** Subnetzmaske = `255.255.255.240`

---

### **Beispiel 5**
#### **Aufgabenstellung:**
Subnetting für das Netz **210.52.190.0**, sodass **5 Subnetze mit mindestens 10 Hosts** entstehen.

#### **Lösung:**
- Auch hier passt die Subnetzmaske `/28` (16 IPs, 14 nutzbar)  
- 5 Subnetze lassen sich ebenfalls mit `/28` erzeugen  
- **Subnetzmaske:** `255.255.255.240`

---

### **Beispiel 6**
#### **Frage:**
Wozu dient ein Netz mit der Maske `/30`?

#### **Antwort:**
- Enthält genau **4 IP-Adressen** (2 Hosts + Netz + Broadcast)  
- Ideal für **Point-to-Point-Verbindungen** zwischen zwei Routern  

---

### **Beispiel 7**
#### **Frage:**
Wie verteilen sich Netzwerk- und Hostanteil bei IP-Adressklassen?

#### **Antwort:**
- **Klasse A**: 8 Bit Netz, 24 Bit Host  
- **Klasse B**: 16 Bit Netz, 16 Bit Host  
- **Klasse C**: 24 Bit Netz, 8 Bit Host  

---

### Referenz:
- Tool zur Berechnung: [subnet-calculator.com](https://www.subnet-calculator.com/)
