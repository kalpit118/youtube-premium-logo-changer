# YouTube Premium Logo Changer

[![Manifest V3](https://img.shields.io/badge/Chrome_Extension-Manifest_V3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Chromium Compatible](https://img.shields.io/badge/Chromium-Chrome%20%7C%20Brave%20%7C%20Edge%20%7C%20Opera-success?style=flat-square&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![GitHub stars](https://img.shields.io/github/stars/kalpit118/youtube-premium-logo-changer?style=flat-square&logo=github&color=gold)](https://github.com/kalpit118/youtube-premium-logo-changer/stargazers)
[![Downloads](https://img.shields.io/github/downloads/kalpit118/youtube-premium-logo-changer/total?style=flat-square&logo=github&color=blue)](https://github.com/kalpit118/youtube-premium-logo-changer/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/kalpit118/youtube-premium-logo-changer/pulls)

<p align="center">
  <img src="assets/Banner.png" alt="YouTube Premium Logo Changer Banner" width="100%" />
</p>

A sleek, lightweight Chromium browser extension (Manifest V3) that seamlessly replaces the standard **"YouTube"** wordmark next to the red play icon with the official **"Premium"** vector badge (or any custom text of your choice) on [YouTube.com](https://www.youtube.com).

Works effortlessly across all countries and regions, automatically adapts to Dark and Light themes, and persists across YouTube's single-page navigations (SPA).

## ✨ Key Features

| Feature | Highlight | Description |
| :--- | :--- | :--- |
| 💎 **Authentic Vector Graphics** | Pixel-Perfect SVG | Uses official YouTube Premium SVG path data for razor-sharp rendering on standard and 4K+ HiDPI displays. |
| 🌓 **Adaptive Theme Engine** | Native Dark / Light | Utilizes dynamic `fill="currentColor"`, seamlessly matching YouTube's Dark Mode, Light Mode, and dynamic ambient lighting. |
| 🔄 **SPA-Resilient Persistence** | Zero Flickering | Employs an optimized `MutationObserver` alongside YouTube's native SPA navigation lifecycle events (`yt-navigate-finish`, `yt-page-data-updated`). |
| 🎛️ **Live Interactive Popup** | Real-time Preview | Test badge looks instantly inside the glassmorphic extension popup before applying to the active YouTube tab. |
| ✏️ **Custom Text Engine** | Total Flexibility | Set any custom label (*Premium*, *PRO*, *PLUS*, *STUDIO*, or personal branding) with instant auto-scaling. |
| ⚡ **Quick Presets** | One-Click Switch | Toggle between popular presets (*Premium*, *YT Premium*, *PRO*, *PLUS*) with a single tap. |
| 🔒 **Privacy-First Architecture** | Zero Telemetry | Pure client-side execution with Manifest V3. No background network requests, no user tracking, zero bloat. |

---

## 🚀 Installation Guide

This extension can be installed on **any Chromium-based browser** (Google Chrome, Brave, Microsoft Edge, Opera, Arc, Vivaldi, etc.) on **Windows, macOS, or Linux**.

### Step 1: Download the Extension Files

Choose **one** of the methods below to save the extension anywhere on your computer:

#### Method A: Download Latest Release (Recommended)
1. Head over to the [**Latest GitHub Release**](https://github.com/kalpit118/youtube-premium-logo-changer/releases/latest).
2. Download the packaged **`youtube-premium-logo-changer.zip`** from the **Assets** section.
3. Extract the downloaded ZIP folder to any directory on your computer (for example: `Downloads`, `Documents`, or `Desktop`).

#### Method B: Clone with Git
Open your terminal or command prompt and clone the repository to any preferred folder:
```bash
git clone https://github.com/kalpit118/youtube-premium-logo-changer.git
```

---

### Step 2: Load the Extension into Your Browser

1. Open your browser and navigate to the Extensions management page:
   - **Google Chrome**: Enter `chrome://extensions/` in your address bar
   - **Brave**: Enter `brave://extensions/`
   - **Microsoft Edge**: Enter `edge://extensions/`
   - **Opera / Vivaldi / Arc**: Open the browser menu and select **Extensions**
2. In the top right corner, switch on **Developer mode**.
3. In the top left toolbar, click the **Load unpacked** button.
4. Browse to and select the folder where this project is located (the folder containing `manifest.json`).
5. The extension will now appear in your list of installed extensions!

---

### Step 3: Pin & Enjoy

1. Click the **Puzzle icon** (🧩) in your browser toolbar (next to your profile icon).
2. Find **YouTube Premium Logo Changer** and click the **Pin** icon (📌) to keep it visible in your toolbar.
3. Open or refresh [https://www.youtube.com](https://www.youtube.com).
4. Look at the top-left corner — your YouTube logo now proudly displays **Premium**!

> [!TIP]
> Click the extension icon in your toolbar anytime to open the popup, preview changes, change the text, or toggle the badge on/off.

---

## ⚙️ Customization & Presets

Click the extension icon in your browser toolbar to access the popup dashboard:

| Setting | Description |
| :--- | :--- |
| **Enable Replacement** | Toggle ON or OFF to switch between your custom badge and standard YouTube. |
| **Logo Name Text** | Type any custom word or phrase and hit **Apply** to instantly update the logo on all open YouTube tabs. |
| **Quick Presets** | One-click buttons to instantly switch between: `Premium`, `YouTube Premium`, `PRO`, and `PLUS`. |
| **Live Preview** | Interactive canvas that reflects your changes in real-time before applying. |

---

## 📁 Repository File Structure

```
youtube-premium-logo-changer/
├── assets/
│   ├── icon16.png          # Toolbar & tab icon (16x16)
│   ├── icon48.png          # Extension manager icon (48x48)
│   ├── icon128.png         # Web store & high-res display icon (128x128)
│   └── Banner.png          # Project showcase banner
├── manifest.json           # Chrome Manifest V3 configuration & permissions
├── content.js              # Core DOM replacement engine & dynamic MutationObserver
├── styles.css              # Injected styles for seamless SVG alignment & transitions
├── popup.html              # Sleek glassmorphic extension popup UI
├── popup.css               # Styling for popup dashboard and live preview box
├── popup.js                # Controller for live preview, presets, and chrome.storage sync
├── background.js           # Background service worker
└── README.md               # Documentation & installation guide
```

---

## 🔄 Updating the Extension

When a new version or feature is released:
1. Download or pull the latest files into your existing extension folder (`git pull`).
2. Navigate to your browser's extensions page (`chrome://extensions/`).
3. Locate **YouTube Premium Logo Changer** and click the **Reload icon** (🔄).
4. Refresh your YouTube tabs to load the update!

---

## 🛡️ Permissions & Privacy

We value your privacy. This extension only requests the absolute minimum permissions required to function:
- `storage`: Used solely to save your chosen custom text and toggle state locally on your machine.
- `host_permissions: ["*://*.youtube.com/*"]`: Allows the content script to run only on YouTube pages.

No personal data, history, or telemetry is ever collected, transmitted, or shared.

---

## ⭐ Star on GitHub

If you enjoy using this extension, please give the repository a **Star**! It helps support ongoing development and makes the project easier for others to find.

[![Star on GitHub](https://img.shields.io/github/stars/kalpit118/youtube-premium-logo-changer?style=for-the-badge&logo=github&label=Star%20on%20GitHub&color=18181f)](https://github.com/kalpit118/youtube-premium-logo-changer/stargazers)

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!
1. Fork this repository.
2. Create a feature branch (`git checkout -b feature/cool-feature`).
3. Commit your changes (`git commit -m "Add cool feature"`).
4. Push to the branch (`git push origin feature/cool-feature`).
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
