/**
 * JORLAN PRADO | VIDEO EDITOR SHOWCASE PORTFOLIO
 * Real video playback management, live progress bars, and modal viewers.
 */

// Video Playback Toggle (Ensures single active video plays at a time)
window.toggleVideo = function(videoId, overlayId) {
  const video = document.getElementById(videoId);
  const overlay = document.getElementById(overlayId);
  if (!video) return;

  if (video.paused) {
    // Pause all other videos
    document.querySelectorAll('video').forEach(v => {
      if (v !== video) {
        v.pause();
        const otherOverlay = document.getElementById(v.id + '-overlay');
        if (otherOverlay) otherOverlay.classList.remove('playing');
      }
    });

    video.play();
    if (overlay) overlay.classList.add('playing');
  } else {
    video.pause();
    if (overlay) overlay.classList.remove('playing');
  }
};

window.toggleMute = function(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn = document.getElementById(btnId);
  if (!video) return;

  video.muted = !video.muted;
  if (btn) {
    btn.innerHTML = video.muted 
      ? `<svg class="w-4 h-4 text-paper-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>`
      : `<svg class="w-4 h-4 text-paper-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`;
  }
};

window.openFullscreen = function(videoId) {
  const video = document.getElementById(videoId);
  if (!video) return;
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
};

// Switch Hero Video Active Tab
window.switchHeroVideo = function(videoSrc, posterSrc, labelTitle, tagNum) {
  const heroVideo = document.getElementById('hero-video');
  const heroOverlay = document.getElementById('hero-video-overlay');
  const heroLabel = document.getElementById('hero-active-title');
  const heroTag = document.getElementById('hero-active-tag');

  if (!heroVideo) return;

  heroVideo.pause();
  heroVideo.src = videoSrc;
  heroVideo.poster = posterSrc;
  heroVideo.load();

  if (heroOverlay) heroOverlay.classList.remove('playing');
  if (heroLabel) heroLabel.innerText = labelTitle;
  if (heroTag) heroTag.innerText = tagNum + " //";

  // Update tab styles based on tagNum
  const btns = document.querySelectorAll('.hero-tab-btn');
  btns.forEach(btn => {
    btn.classList.remove('bg-paper-0', 'text-ink-0', 'font-bold');
    btn.classList.add('bg-ink-2', 'text-paper-2');
  });
  const index = parseInt(tagNum, 10) - 1;
  if (btns[index]) {
    btns[index].classList.add('bg-paper-0', 'text-ink-0', 'font-bold');
    btns[index].classList.remove('bg-ink-2', 'text-paper-2');
  }
};

// Open Plaintext ATS Resume Modal (Zero GitHub links)
window.openResumeModal = function() {
  const modal = document.getElementById("general-modal");
  const modalContent = document.getElementById("general-modal-content");

  modalContent.innerHTML = `
    <div class="p-4 sm:p-8 font-sans">
      <div class="border-b border-white/[0.08] pb-4 mb-6 flex items-center justify-between">
        <div>
          <span class="label-mono text-paper-2 block">[ CURRICULUM VITAE // ATS FORMAT ]</span>
          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-paper-0 mt-1">Jorlan Prado | Resume</h3>
        </div>
        <button onclick="closeModal()" class="text-paper-2 hover:text-paper-0 p-1 border border-white/[0.08] hover:border-white/20 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="bg-ink-0 p-3.5 sm:p-5 border border-white/[0.08] font-mono text-xs text-paper-1 leading-relaxed max-h-[60vh] overflow-y-auto space-y-4">
        <div>
          <p class="text-sm font-bold text-paper-0 font-sans">JORLAN PRADO</p>
          <p class="text-paper-2">jorlanprado09@gmail.com | +639072988623 | tiktok.com/@.lan2x | seosmethod.com</p>
          <p class="text-paper-3">Calasiao, Pangasinan, Philippines | Google Drive: Video Archive (Valorant & More)</p>
        </div>

        <div class="pt-2 border-t border-white/[0.08]">
          <p class="text-paper-0 font-bold mb-1">[ PROFILE ]</p>
          <p class="font-sans text-xs text-paper-1">
            Information Technology graduate with experience in IT support, network configuration, and software development. Creator of seosmethod.com, a tool built to prevent TikTok video compression. Experienced in video editing, content repurposing, and gaming montages, focusing on turning raw video into engaging short-form content.
          </p>
        </div>

        <div class="pt-2 border-t border-white/[0.08]">
          <p class="text-paper-0 font-bold mb-1">[ PROJECTS & VIDEO EDITING ]</p>
          <div class="space-y-3 font-sans text-xs">
            <div>
              <p class="font-bold text-paper-0 font-mono">01. Video Editing Portfolio & Google Drive Archive</p>
              <p class="text-paper-2">• Repurposed podcasts, interviews, and streams into short-form clips for TikTok, Reels, and YouTube Shorts.</p>
              <p class="text-paper-2">• Edited gaming montages (Valorant edits) with beat syncing, speed ramping, zoom cuts, and sound effects.</p>
              <p class="text-paper-2">• Maintained an organized Google Drive archive containing all raw and finished video projects.</p>
            </div>
            <div>
              <p class="font-bold text-paper-0 font-mono">02. Seo's Method (seosmethod.com) | TikTok Video Quality Optimizer</p>
              <p class="text-paper-2">• Developed a web and desktop tool that prevents TikTok from compressing and ruining video quality upon upload.</p>
              <p class="text-paper-2">• Optimizes video files directly on the device so they stay sharp and clear at 1080p without having to re-encode (built exclusively for TikTok).</p>
            </div>
            <div>
              <p class="font-bold text-paper-0 font-mono">03. Network Infrastructure and Cyber Security Framework (Dagupan City Hall)</p>
              <p class="text-paper-2">• Simulated a secure network with VLAN segmentation, OSPF routing, and AAA authentication.</p>
            </div>
            <div>
              <p class="font-bold text-paper-0 font-mono">04. Bilibeads Accessories (E-Commerce Web Application)</p>
              <p class="text-paper-2">• Built an e-commerce web platform with product catalog, cart system, and order management.</p>
            </div>
          </div>
        </div>

        <div class="pt-2 border-t border-white/[0.08]">
          <p class="text-paper-0 font-bold mb-1">[ WORK EXPERIENCE & EDUCATION ]</p>
          <div class="space-y-2 font-sans text-xs">
            <p><strong class="text-paper-0">Concentrix</strong>: IT Support Intern (Pasay City, Mall of Asia | 2025 - 2026)</p>
            <p><strong class="text-paper-0">PHINMA University of Pangasinan</strong>: Bachelor of Science in Information Technology (2022 - 2026)</p>
          </div>
        </div>

        <div class="pt-2 border-t border-white/[0.08]">
          <p class="text-paper-0 font-bold mb-1">[ TECHNICAL SKILLS ]</p>
          <p class="text-paper-2">Video Editing (Long-to-Short Repurposing & Gaming/Valorant Edits), Pacing & Hook Optimization, Subtitling/Captions, Seo's Method, Premiere Pro, CapCut, Troubleshooting, Hardware & Workstation Support, LAN/VLAN Networking.</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-6 mt-4 border-t border-white/[0.08] justify-end">
        <a href="https://drive.google.com/drive/folders/1v5HrqZneYWb-A3lFHl5J6nFvhDFln7XT?usp=sharing" target="_blank" rel="noopener noreferrer" class="px-4 py-2 border border-white/[0.12] hover:border-white/30 text-paper-0 text-xs font-mono transition-colors text-center">
          Open GDrive Archive (Valorant & More) ↗
        </a>
        <a href="mailto:jorlanprado09@gmail.com?subject=Application%20for%20Video%20Editing%20Role%20-%20Jorlan%20Prado" class="px-4 py-2 bg-paper-0 text-ink-0 hover:bg-white text-xs font-mono font-semibold transition-colors text-center">
          Contact via Email →
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
};

// Open Cover Letter Modal
window.openCoverLetterModal = function() {
  const modal = document.getElementById("general-modal");
  const modalContent = document.getElementById("general-modal-content");

  modalContent.innerHTML = `
    <div class="p-4 sm:p-8 font-sans">
      <div class="border-b border-white/[0.08] pb-4 mb-6 flex items-center justify-between">
        <div>
          <span class="label-mono text-paper-2 block">[ APPLICATION FOR VIDEO EDITING ROLE ]</span>
          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-paper-0 mt-1">Cover Letter // Jorlan Prado</h3>
        </div>
        <button onclick="closeModal()" class="text-paper-2 hover:text-paper-0 p-1 border border-white/[0.08] hover:border-white/20 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="bg-ink-2 p-3.5 sm:p-6 border border-white/[0.08] text-xs sm:text-sm text-paper-1 space-y-4 leading-relaxed font-sans">
        <p>Dear Hiring Team,</p>

        <p>
          I am writing to express my strong interest in joining your team as a <strong>Video Editor (Long-Form to Short-Form Repurposing)</strong>. I am an Information Technology graduate from PHINMA University of Pangasinan with corporate IT support internship experience at Concentrix.
        </p>

        <p>
          I specialize in transforming raw, long-form footage (podcasts, interviews, webinars, and livestreams) into punchy, high-retention 9:16 vertical clips for TikTok, Instagram Reels, and YouTube Shorts. My editing workflow focuses on:
        </p>

        <ul class="list-disc list-inside space-y-1.5 pl-2 text-paper-0 font-mono text-xs">
          <li><strong>Hook Curation:</strong> Grabbing viewer attention in the first few seconds with the best moment or insight.</li>
          <li><strong>Pacing:</strong> Cutting dead air, stutters, and pauses to keep viewers engaged.</li>
          <li><strong>Captions & Visuals:</strong> Adding timed captions, zoom cuts, and fitting B-roll.</li>
          <li><strong>TikTok Quality:</strong> Using seosmethod.com to prevent TikTok compression and preserve 1080p video clarity.</li>
        </ul>

        <p>
          I work fast, communicate clearly, and take feedback constructively. You can review my edited clips directly on this portfolio. To see what more I can do beside short-form repurposing, you can also browse my Google Drive folder with all my edits including Valorant gaming montages.
        </p>

        <div class="pt-2 font-mono text-xs text-paper-2">
          <p class="font-bold text-paper-0 font-sans text-sm">Jorlan Prado</p>
          <p>Video Editor & IT Developer</p>
          <p>jorlanprado09@gmail.com • +63 907 298 8623 • Calasiao, Pangasinan</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-6 mt-4 border-t border-white/[0.08] justify-end">
        <a href="https://drive.google.com/drive/folders/1v5HrqZneYWb-A3lFHl5J6nFvhDFln7XT?usp=sharing" target="_blank" rel="noopener noreferrer" class="px-4 py-2 border border-white/[0.12] hover:border-white/30 text-paper-0 text-xs font-mono transition-colors text-center">
          Open GDrive Archive (Valorant & More) ↗
        </a>
        <a href="mailto:jorlanprado09@gmail.com?subject=Video%20Editing%20Role%20Inquiry%20-%20Jorlan%20Prado" class="px-4 py-2 bg-paper-0 text-ink-0 hover:bg-white text-xs font-mono font-semibold transition-colors text-center">
          Get in Touch via Email →
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
};

window.closeModal = function() {
  const modal = document.getElementById("general-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Copy actions with robust fallback
window.copyEmail = function() {
  const email = "jorlanprado09@gmail.com";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copied: jorlanprado09@gmail.com");
    }).catch(() => {
      fallbackCopyEmail(email);
    });
  } else {
    fallbackCopyEmail(email);
  }
};

function fallbackCopyEmail(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast("Email copied: " + text);
  } catch (err) {
    showToast("Email: " + text);
  }
  document.body.removeChild(ta);
}

window.showToast = function(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span class="status-dot-emerald"></span>
    <span>${msg}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
};

// Wire up events on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Live progress bars for videos
  ['card-video-1', 'card-video-2', 'card-video-3', 'card-video-4', 'hero-video'].forEach(id => {
    const video = document.getElementById(id);
    const progressFill = document.getElementById(id + '-progress');
    if (video && progressFill) {
      video.addEventListener('timeupdate', () => {
        if (video.duration) {
          const pct = (video.currentTime / video.duration) * 100;
          progressFill.style.width = pct + '%';
        }
      });
      video.addEventListener('ended', () => {
        const overlay = document.getElementById(id + '-overlay');
        if (overlay) overlay.classList.remove('playing');
        progressFill.style.width = '0%';
      });
    }
  });

  // Modal overlay click outside to close
  const modal = document.getElementById("general-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        window.closeModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeModal();
    }
  });

  if (window.lucide) lucide.createIcons();
});
