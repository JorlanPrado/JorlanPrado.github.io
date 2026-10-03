# 🎬 Jorlan Prado | Video Editing Portfolio

A modern dark-themed portfolio website focused on **Long-Form to Short-Form Video Editing**, designed to be published seamlessly on **GitHub Pages**.

---

## 🚀 Features

- **Swiss Brutalist Precision UI**: Modeled after `seosmethod.com` with carbon canvas (`#0B0C0E`), 1px hairlines, and Geist typography.
- **Proportioned 9:16 Video Showcase**: Real showcase with synchronized playback, live progress timelines, and frosted glass play controls.
- **Authentic Showcased Videos**:
  - `01 // What If It Does`
  - `02 // Third Eye`
  - `03 // Sheikh Uthman 10v1`
  - `04 // YSKEP_169`
- **Google Drive Archive**: Direct repository link showcasing full video library including Valorant gaming edits and montages.
- **Seo's Method (`seosmethod.com`)**: Highlights the custom-built web & desktop tool engineered specifically to solve TikTok video compression without re-encoding.
- **Resume & Cover Letter Modals**: One-click ATS resume view and application cover letter for video editing positions.
- **Zero-Build Architecture**: Standard static HTML5, CSS3, and Vanilla JavaScript, works immediately on GitHub Pages with zero compilation required!

---

## 🌐 How to Publish on GitHub Pages (Step-by-Step)

### Option A: As Your Personal User Site (`https://JorlanPrado.github.io`)

1. Go to [GitHub](https://github.com/new) and create a **new public repository** named:
   ```text
   JorlanPrado.github.io
   ```
2. Open your terminal in this folder:
   ```powershell
   cd D:\Projects\jorlan-video-portfolio
   git init
   git add .
   git commit -m "Initial commit of video editing portfolio"
   git branch -M main
   git remote add origin https://github.com/JorlanPrado/JorlanPrado.github.io.git
   git push -u origin main
   ```
3. Your portfolio will immediately be live at:
   ```text
   https://jorlanprado.github.io
   ```

---

### Option B: As a Project Site (`https://JorlanPrado.github.io/portfolio`)

1. Create a repository named `portfolio` (or `video-editor-portfolio`).
2. Push the files:
   ```powershell
   cd D:\Projects\jorlan-video-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/JorlanPrado/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings > Pages**:
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Live in 60 seconds!

---

## 🛠️ How to Customize Your Videos

Open `script.js` and look at the `portfolioVideos` array at the top. You can easily:
- Change titles, view counts, and retention stats.
- Add your own video URLs (`videoUrl: "https://your-video-link.mp4"` or YouTube Shorts embeds).
- Update the hook descriptions and editing techniques used.
