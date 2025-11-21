// This is where ama work on the Javascript aspect of this 

(function(){ 
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const label = document.getElementById("toggleLabel");
const icon = document.getElementById("toggleIcon");

function applyTheme(theme){ 
    if(theme === "dark"){ 
    root.setAttribute('data-theme', 'dark');
    root.classList.add('dark');
    root.classList.remove('light');
    toggle.setAttribute('aria-pressed', 'true');
    label.textContent = 'Dark Mode';
    } else if(theme === 'light'){ 
        root.setAttribute('data-theme', 'light');
        root.classList.add('light');
        root.classList.remove('dark');
        toggle.setAttribute('aria-pressed', 'false');
        label.textContent = "Light Mode";
    } else{ 
        root.removeAttribute('data-theme');
        toggle.setAttribute('aria-pressed', 'false');
        label.textContent = "Auto"
    }
    icon.style.background = 'var(--accent)';
}

const saved = localStorage.getItem('site-theme');

if(saved === 'dark' || saved === 'light'){ 
    applyTheme(saved);
} else{ 
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(preferDark ? 'dark' : 'light');
    root.removeAttribute('data-theme')
}

toggle.addEventListener("click", () => { 
    const current = localStorage.getItem('site-theme');
    let next;

    if(current === 'dark') next = 'light';
    else if(current === 'light') next = null;
    else next = 'dark';

    if(next === null){ 
        localStorage.removeItem('site-theme');
    }else{ 
        localStorage.setItem('site-theme', next);
    }

    applyTheme(
        next === null
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : next
    );
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => { 
    if(!localStorage.getItem('site-theme')){ 
        applyTheme(e.matches ? 'dark' : 'light');
        root.removeAttribute('data-theme');
    }
});
})();