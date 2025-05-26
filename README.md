# Interlink Bot 

## 🎇 Features

-  ** Suport VPS & Termux**
-  **Multi-Account Support**
-  **Auto Claiming**
-  **Proxy Rotation**
-  **Persistent Sessions**
-  **OTP Verification**
-  **Auto Retry**:
-  **Claim Timer**:
-  **Account Overview**: Real-time claim status, balance display, and timers for each account

⌛ Installation

````
git clone https://github.com/ZonaAirdrop/Interlink-Bot-.git
cd Interlink-Bot-
````
✅ Install dependencies

````
npm install
````
✅ create file `nano accounts.txt
`
````
email1@example.com:passcode1
````
*Set up proxies (optional)*  `nano proxies.txt` 

```
http://ip:port:user:pass
socks5://ip:port
ip:port:user:pass
```
✅ Running Bot

````
node index.js
````

👉 **Notes** 

`Enter your login ID (or email): login via id`

`Enter your passcode: your cellphone pin code`

`Enter your email: tobrutlamot@yy
check otp in email or spam folder`

✅ create screen for vps 

````
screen -S interlinkbot
````
✅ To detach (exit the screen but the process continues)
Press:
`Ctrl + A then press D`

✅ Return to the session that has been created

````
screen -r interlinkbot
````
✅ To exit and end the session

In the screen, press `Ctrl + C` or type exit
