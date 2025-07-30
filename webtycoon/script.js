let money = 0;
let playerName = localStorage.getItem('playerName') || '';
let unlocked = {
    html: false,
    css: false,
    css2: false,
    js: false,
    js2: false,
    music: false,
    favicon: false,
    seo: false,
    analytics: false,
    darkMode: false,
    chat: false,
    volumeSlider: false,
    responsive: false,
    ads: false,
    newsletter: false, // NEW
    social: false,     // NEW
    animations: false, // NEW
    blog: false,        // NEW
    confetti: false,         // NEW
    visitorCounter: false,   // NEW
    cookieBanner: false      // NEW
};

function askForName() {
    while (!playerName) {
        playerName = prompt('Enter your player name for the leaderboard:');
        if (playerName) {
            localStorage.setItem('playerName', playerName);
        }
    }
}

function updateUI() {
    const setStatus = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    setStatus('money', money);
    setStatus('htmlStatus', unlocked.html ? 'Unlocked' : 'Locked');
    setStatus('cssStatus', unlocked.css ? 'Unlocked' : 'Locked');
    setStatus('css2Status', unlocked.css2 ? 'Unlocked' : 'Locked');
    setStatus('jsStatus', unlocked.js ? 'Unlocked' : 'Locked');
    setStatus('js2Status', unlocked.js2 ? 'Unlocked' : 'Locked');
    setStatus('musicStatus', unlocked.music ? 'Unlocked' : 'Locked');
    setStatus('faviconStatus', unlocked.favicon ? 'Unlocked' : 'Locked');
    setStatus('seoStatus', unlocked.seo ? 'Unlocked' : 'Locked');
    setStatus('analyticsStatus', unlocked.analytics ? 'Unlocked' : 'Locked');
    setStatus('darkModeStatus', unlocked.darkMode ? 'Unlocked' : 'Locked');
    setStatus('chatStatus', unlocked.chat ? 'Unlocked' : 'Locked');
    setStatus('volumeSliderStatus', unlocked.volumeSlider ? 'Unlocked' : 'Locked');
    setStatus('responsiveStatus', unlocked.responsive ? 'Unlocked' : 'Locked');
    setStatus('adsStatus', unlocked.ads ? 'Unlocked' : 'Locked');
    setStatus('newsletterStatus', unlocked.newsletter ? 'Unlocked' : 'Locked');
    setStatus('socialStatus', unlocked.social ? 'Unlocked' : 'Locked');
    setStatus('animationsStatus', unlocked.animations ? 'Unlocked' : 'Locked');
    setStatus('blogStatus', unlocked.blog ? 'Unlocked' : 'Locked');
    setStatus('confettiStatus', unlocked.confetti ? 'Unlocked' : 'Locked');
    setStatus('visitorCounterStatus', unlocked.visitorCounter ? 'Unlocked' : 'Locked');
    setStatus('cookieBannerStatus', unlocked.cookieBanner ? 'Unlocked' : 'Locked');

    // Music controls and background music
    let musicControls = document.getElementById('musicControls');
    let audio = document.getElementById('bgMusic');

    if (musicControls) musicControls.style.display = 'none';

    if (unlocked.music) {
        // Create audio if not present
        if (!audio) {
            audio = document.createElement('audio');
            audio.id = 'bgMusic';
            audio.src = 'music.mp3';
            audio.loop = true;
            audio.volume = 0.2; // Always quiet
            document.body.appendChild(audio);
        }

        // Try to play on first user interaction
        const tryPlay = () => {
            audio.play();
            window.removeEventListener('click', tryPlay);
            window.removeEventListener('keydown', tryPlay);
            window.removeEventListener('touchstart', tryPlay);
        };
        window.addEventListener('click', tryPlay);
        window.addEventListener('keydown', tryPlay);
        window.addEventListener('touchstart', tryPlay);
    } else {
        if (audio) audio.remove();
    }

    // SEO badge
    if (unlocked.seo) {
        if (!document.getElementById('seoBadge')) {
            let badge = document.createElement('span');
            badge.id = 'seoBadge';
            badge.textContent = "SEO ✓";
            badge.style = "background:#10b981;color:#fff;padding:2px 8px;border-radius:6px;margin-left:8px;font-size:0.9em;";
            document.getElementById('websiteHeader').appendChild(badge);
        }
    }

    // Analytics badge
    if (unlocked.analytics) {
        if (!document.getElementById('analyticsBadge')) {
            let badge = document.createElement('span');
            badge.id = 'analyticsBadge';
            badge.textContent = "Analytics 📊";
            badge.style = "background:#6366f1;color:#fff;padding:2px 8px;border-radius:6px;margin-left:8px;font-size:0.9em;";
            document.getElementById('websiteHeader').appendChild(badge);
        }
    }

    // Dark mode effect for preview
    let preview = document.getElementById('websitePreview');
    preview.className = 'preview-html';
    if (unlocked.css2) preview.className = 'preview-modern-css';
    else if (unlocked.css) preview.className = 'preview-basic-css';
    if (unlocked.js2) preview.classList.add('preview-advanced-js');
    else if (unlocked.js) preview.classList.add('preview-basic-js');
    if (unlocked.darkMode) preview.classList.add('preview-dark-mode');

    // Live chat widget
    document.getElementById('chatWidget').style.display = unlocked.chat ? '' : 'none';

    // Show ads banner in preview if unlocked
    if (unlocked.ads) {
        if (!document.getElementById('adsBanner')) {
            let banner = document.createElement('div');
            banner.id = 'adsBanner';
            banner.textContent = "🚩 Your Ad Here!";
            banner.style = "background:#fde047;color:#b45309;padding:6px 0;margin-bottom:10px;border-radius:6px;font-weight:bold;";
            document.getElementById('websitePreview').prepend(banner);
        }
    } else {
        let banner = document.getElementById('adsBanner');
        if (banner) banner.remove();
    }

    // Responsive effect (just a visual cue for now)
    // reuse the already declared 'preview' variable
    if (unlocked.responsive) preview.style.maxWidth = "100%";
    else preview.style.maxWidth = "320px";

    // Newsletter widget
    document.getElementById('newsletterWidget').style.display = unlocked.newsletter ? '' : 'none';
    // Social widget
    document.getElementById('socialWidget').style.display = unlocked.social ? '' : 'none';
    // Animations (add a bounce to preview)
    if (unlocked.animations) preview.classList.add('preview-animations');
    else preview.classList.remove('preview-animations');
    // Blog section (just a new paragraph for demo)
    if (unlocked.blog) {
        if (!document.getElementById('blogSection')) {
            let blog = document.createElement('div');
            blog.id = 'blogSection';
            blog.innerHTML = "<h4 style='margin-top:18px;'>📝 Blog</h4><p style='font-size:1em;'>Check out our latest updates and stories!</p>";
            preview.appendChild(blog);
        }
    } else {
        let blog = document.getElementById('blogSection');
        if (blog) blog.remove();
    }

    // Confetti effect
    if (unlocked.confetti && !document.getElementById('confettiCanvas')) {
        let canvas = document.createElement('canvas');
        canvas.id = 'confettiCanvas';
        canvas.style = "position:fixed;top:0;left:0;pointer-events:none;width:100vw;height:100vh;z-index:9999;";
        document.body.appendChild(canvas);
        let ctx = canvas.getContext('2d');
        let w = window.innerWidth, h = window.innerHeight;
        canvas.width = w; canvas.height = h;
        let confs = Array.from({length:60},()=>({x:Math.random()*w,y:Math.random()*h,vx:Math.random()-0.5,vy:Math.random()*2+1,color:`hsl(${Math.random()*360},90%,60%)`}));
        function drawConfetti() {
            ctx.clearRect(0,0,w,h);
            for(let c of confs) {
                ctx.fillStyle = c.color;
                ctx.fillRect(c.x,c.y,8,8);
                c.x += c.vx; c.y += c.vy;
                if(c.y>h) {c.y=0;c.x=Math.random()*w;}
            }
            requestAnimationFrame(drawConfetti);
        }
        drawConfetti();
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    } else if (!unlocked.confetti && document.getElementById('confettiCanvas')) {
        document.getElementById('confettiCanvas').remove();
    }

    // Visitor counter
    if (unlocked.visitorCounter) {
        if (!document.getElementById('visitorCounter')) {
            let counter = document.createElement('div');
            counter.id = 'visitorCounter';
            counter.style = "margin-top:10px;font-size:0.95em;color:#6366f1;font-weight:bold;";
            counter.innerHTML = "👁️ Visitors: <span id='visitorCountNum'>" + (Math.floor(Math.random()*9000)+1000) + "</span>";
            document.getElementById('websitePreview').appendChild(counter);
        }
    }

    // Cookie banner logic
    let cookieBanner = document.getElementById('cookieBanner');
    let showCookieBannerBtn = document.getElementById('showCookieBannerBtn');

    if (unlocked.cookieBanner) {
        // Create the banner if it doesn't exist
        if (!cookieBanner) {
            cookieBanner = document.createElement('div');
            cookieBanner.id = 'cookieBanner';
            cookieBanner.style = "margin:18px auto 0 auto;background:#fffbe7;color:#b45309;padding:10px 24px;border-radius:8px;box-shadow:0 2px 8px #0002;font-size:1em;z-index:10;max-width:90%;text-align:center;";
            cookieBanner.innerHTML = "🍪 This site uses cookies to enhance your experience. <button id='hideCookieBannerBtn' style='margin-left:12px;background:#fde68a;border:none;border-radius:4px;padding:4px 10px;cursor:pointer;'>OK</button>";
            preview.appendChild(cookieBanner);
        }
        cookieBanner.style.display = '';
        if (showCookieBannerBtn) showCookieBannerBtn.style.display = 'none';

        // Hide banner on OK, show the button
        document.getElementById('hideCookieBannerBtn').onclick = function() {
            cookieBanner.style.display = 'none';
            if (showCookieBannerBtn) showCookieBannerBtn.style.display = '';
        };

        // Show banner again when button is clicked
        if (showCookieBannerBtn) {
            showCookieBannerBtn.onclick = function() {
                cookieBanner.style.display = '';
                showCookieBannerBtn.style.display = 'none';
            };
        }
    } else {
        // Remove banner and button if upgrade not unlocked
        if (cookieBanner) cookieBanner.remove();
        if (showCookieBannerBtn) showCookieBannerBtn.style.display = 'none';
    }

    document.getElementById('websiteFavicon').style.display = unlocked.favicon ? 'inline-block' : 'none';
}

function updateLeaderboard() {
    fetch('php/leaderboard.php')
        .then(res => res.json())
        .then(data => {
            const lb = document.getElementById('leaderboard');
            lb.innerHTML = '';
            data.slice(0, 5).forEach(entry => {
                const li = document.createElement('li');
                li.textContent = `${entry.name}: $${entry.money}`;
                lb.appendChild(li);
            });
        });
}

function saveProgress() {
    fetch('php/save_progress.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            money,
            name: playerName,
            unlocked
        })
    }).then(() => updateLeaderboard());
}

function loadProgress() {
    fetch('php/load_progress.php?name=' + encodeURIComponent(playerName))
        .then(res => res.json())
        .then(data => {
            money = data.money || 0;
            unlocked = data.unlocked || unlocked;
            updateUI();
            saveProgress(); // Save after loading to ensure progress is not lost
        }); // <--- Make sure this closes the function
} // <--- Don't forget this closing brace
function setBtn(id, fn) {
    const el = document.getElementById(id);
    if (el) el.onclick = fn;
}

setBtn('htmlBtn', function() {
    if (!unlocked.html) {
        unlocked.html = true;
        updateUI();
        saveProgress();
    }
});
setBtn('cssBtn', function() {
    if (unlocked.html && !unlocked.css && money >= 50) {
        money -= 50;
        unlocked.css = true;
        updateUI();
        saveProgress();
    }
});
setBtn('css2Btn', function() {
    if (unlocked.css && !unlocked.css2 && money >= 200) {
        money -= 200;
        unlocked.css2 = true;
        updateUI();
        saveProgress();
    }
});
setBtn('jsBtn', function() {
    if (unlocked.css && !unlocked.js && money >= 500) {
        money -= 500;
        unlocked.js = true;
        updateUI();
        saveProgress();
    }
});
setBtn('js2Btn', function() {
    if (unlocked.js && !unlocked.js2 && money >= 2000) {
        money -= 2000;
        unlocked.js2 = true;
        updateUI();
        saveProgress();
    }
});
setBtn('musicBtn', function() {
    if (!unlocked.music && money >= 5000) {
        money -= 5000;
        unlocked.music = true;
        updateUI();
        saveProgress();
    }
});
setBtn('faviconBtn', function() {
    if (!unlocked.favicon && money >= 2000) {
        money -= 2000;
        unlocked.favicon = true;
        updateUI();
        saveProgress();
    }
});
setBtn('seoBtn', function() {
    if (!unlocked.seo && money >= 3000) {
        money -= 3000;
        unlocked.seo = true;
        updateUI();
        saveProgress();
    }
});
setBtn('analyticsBtn', function() {
    if (!unlocked.analytics && money >= 7000) {
        money -= 7000;
        unlocked.analytics = true;
        updateUI();
        saveProgress();
    }
});
setBtn('darkModeBtn', function() {
    if (!unlocked.darkMode && money >= 10000) {
        money -= 10000;
        unlocked.darkMode = true;
        updateUI();
        saveProgress();
    }
});
setBtn('chatBtn', function() {
    if (!unlocked.chat && money >= 15000) {
        money -= 15000;
        unlocked.chat = true;
        updateUI();
        saveProgress();
    }
});
setBtn('volumeSliderBtn', function() {
    if (!unlocked.volumeSlider && money >= 2500) {
        money -= 2500;
        unlocked.volumeSlider = true;
        updateUI();
        saveProgress();
    }
});
setBtn('responsiveBtn', function() {
    if (!unlocked.responsive && money >= 12000) {
        money -= 12000;
        unlocked.responsive = true;
        updateUI();
        saveProgress();
    }
});
setBtn('adsBtn', function() {
    if (!unlocked.ads && money >= 8000) {
        money -= 8000;
        unlocked.ads = true;
        updateUI();
        saveProgress();
    }
});
setBtn('newsletterBtn', function() {
    if (!unlocked.newsletter && money >= 9000) {
        money -= 9000;
        unlocked.newsletter = true;
        updateUI();
        saveProgress();
    }
});
setBtn('socialBtn', function() {
    if (!unlocked.social && money >= 6000) {
        money -= 6000;
        unlocked.social = true;
        updateUI();
        saveProgress();
    }
});
setBtn('animationsBtn', function() {
    if (!unlocked.animations && money >= 11000) {
        money -= 11000;
        unlocked.animations = true;
        updateUI();
        saveProgress();
    }
});
setBtn('blogBtn', function() {
    if (!unlocked.blog && money >= 14000) {
        money -= 14000;
        unlocked.blog = true;
        updateUI();
        saveProgress();
    }
});
setBtn('confettiBtn', function() {
    if (!unlocked.confetti && money >= 20000) {
        money -= 20000;
        unlocked.confetti = true;
        updateUI();
        saveProgress();
    }
});
setBtn('visitorCounterBtn', function() {
    if (!unlocked.visitorCounter && money >= 8000) {
        money -= 8000;
        unlocked.visitorCounter = true;
        updateUI();
        saveProgress();
    }
});
setBtn('cookieBannerBtn', function() {
    if (!unlocked.cookieBanner && money >= 5000) {
        money -= 5000;
        unlocked.cookieBanner = true;
        updateUI();
        saveProgress();
    }
});

document.getElementById('saveBtn').onclick = saveProgress;
document.getElementById('loadBtn').onclick = function() {
    loadProgress();
    updateLeaderboard();
};

window.onload = function() {
    askForName();
    loadProgress();
    updateLeaderboard();
};

setInterval(() => {
    let inc = 1;
    if (unlocked.css) inc += 2;
    if (unlocked.css2) inc += 5;
    if (unlocked.js) inc += 10;
    if (unlocked.js2) inc += 25;
    if (unlocked.music) inc += 15;
    if (unlocked.favicon) inc += 5;
    if (unlocked.seo) inc += 10;
    if (unlocked.analytics) inc += 20;
    if (unlocked.darkMode) inc += 10;
    if (unlocked.chat) inc += 30;
    if (unlocked.volumeSlider) inc += 18;
    if (unlocked.responsive) inc += 18;
    if (unlocked.ads) inc += 22;
    if (unlocked.newsletter) inc += 12;
    if (unlocked.social) inc += 8;
    if (unlocked.animations) inc += 16;
    if (unlocked.blog) inc += 20;
    if (unlocked.confetti) inc += 30;
    if (unlocked.visitorCounter) inc += 7;
    if (unlocked.cookieBanner) inc += 5;
    money += inc;
    updateUI();
}, 1000);

setInterval(() => {
    saveProgress();
}, 10000);

updateUI();
updateLeaderboard();

function showCategory(cat) {
    document.querySelectorAll('.upgradeGroup').forEach(div => div.style.display = 'none');
    document.getElementById(cat + 'Upgrades').style.display = '';
}
// Show core by default
showCategory('core');
