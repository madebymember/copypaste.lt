# **Windows Troubleshooting Cheatsheet (Windows Problemų Sprendimo Vadovas)**

A simple, clean, single-page cheatsheet of common and useful Windows troubleshooting commands, tools, and shortcuts. Designed as a quick reference for IT professionals and power users.

[**View Live Demo**](https://www.google.com/search?q=https://your-username.github.io/windows-cheatsheet/)

## **Features**

* \*\* 🇱🇹 / 🇬🇧 Bilingual Support:\*\* One-click toggle between Lithuanian (Default) and English. Language preference is saved in your browser.  
* **🌓 Dark Mode Support:** Automatically detects system preference and respects local storage overrides.  
* **📋 One-Click Copy:** Easily copy commands to your clipboard with visual feedback.  
* **📂 Categorized:** Commands grouped by Networking, System Health, Disk Management, PowerShell, Security, etc.  
* **⚡ Zero Build Step:** Built as a single index.html file using Tailwind CSS via CDN. No node\_modules or build processes required.  
* **📊 Analytics Ready:** Integrated with Plausible Analytics (privacy-friendly).  
* **☕ Support:** Includes a "Buy Me a Coffee" widget.

## **Tech Stack**

* **HTML5**  
* **Tailwind CSS** (loaded via CDN)  
* **Vanilla JavaScript** (for logic and translations)  
* **Font Awesome** (for icons)

## **Customization**

### **Changing the Language Defaults**

The site defaults to Lithuanian (lt). To change the default language to English, edit the currentLang variable in the script section of index.html:

let currentLang \= localStorage.getItem('lang') || 'en'; // Change 'lt' to 'en'

### **Analytics & Donations**

* **Analytics:** Search for plausible.io in index.html and replace the src or remove the script block if not needed.  
* **Buy Me a Coffee:** Search for buymeacoffee in index.html and update the data-slug attribute to your own username, or remove the block entirely.

## **How to Deploy**

You can host this site for free in just a few minutes.

### **Option A: GitHub Pages (Recommended)**

1. Fork this repository or upload the files to a new public repository.  
2. Go to **Settings** \> **Pages**.  
3. Under **Build and deployment**, select **Deploy from a branch**.  
4. Select your main branch and click **Save**.

### **Option B: Cloudflare Pages**

1. Log in to Cloudflare Dashboard.  
2. Go to **Workers & Pages** \> **Create Application** \> **Connect to Git**.  
3. Select your repository.  
4. **Build Settings:**  
   * **Framework preset:** None  
   * **Build command:** (Leave blank)  
   * **Output directory:** (Leave blank or /)  
5. Click **Save and Deploy**.

## **License**

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
