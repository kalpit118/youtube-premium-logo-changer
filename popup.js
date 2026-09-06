/**
 * YouTube Premium Extension Popup Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleEnabled = document.getElementById('toggleEnabled');
  const customTextInput = document.getElementById('customTextInput');
  const btnSave = document.getElementById('btnSave');
  const statusBadge = document.getElementById('statusBadge');
  const previewTextGroup = document.getElementById('previewTextGroup');
  const presetButtons = document.querySelectorAll('.preset-btn');

  // Official YouTube Premium SVG Vector Paths for 'Premium'
  const OFFICIAL_PREMIUM_SVG_PATHS = `
    <!-- P -->
    <path d="M32.1819 2.10016V18.9002H34.7619V12.9102H35.4519C38.8019 12.9102 40.5619 11.1102 40.5619 7.57016V6.88016C40.5619 3.31016 39.0019 2.10016 35.7219 2.10016H32.1819ZM37.8619 7.63016C37.8619 10.0002 37.1419 11.0802 35.4019 11.0802H34.7619V3.95016H35.4519C37.4219 3.95016 37.8619 4.76016 37.8619 7.13016V7.63016Z"/>
    <!-- r -->
    <path d="M41.982 18.9002H44.532V10.0902C44.952 9.37016 45.992 9.05016 47.302 9.32016L47.462 6.33016C47.292 6.31016 47.142 6.29016 47.002 6.29016C45.802 6.29016 44.832 7.20016 44.342 8.86016H44.162L43.952 6.54016H41.982V18.9002Z"/>
    <!-- e -->
    <path d="M55.7461 11.5002C55.7461 8.52016 55.4461 6.31016 52.0161 6.31016C48.7861 6.31016 48.0661 8.46016 48.0661 11.6202V13.7902C48.0661 16.8702 48.7261 19.1102 51.9361 19.1102C54.4761 19.1102 55.7861 17.8402 55.6361 15.3802L53.3861 15.2602C53.3561 16.7802 53.0061 17.4002 51.9961 17.4002C50.7261 17.4002 50.6661 16.1902 50.6661 14.3902V13.5502H55.7461V11.5002ZM51.9561 7.97016C53.1761 7.97016 53.2661 9.12016 53.2661 11.0702V12.0802H50.6661V11.0702C50.6661 9.14016 50.7461 7.97016 51.9561 7.97016Z"/>
    <!-- m -->
    <path d="M60.1945 18.9002V8.92016C60.5745 8.39016 61.1945 8.07016 61.7945 8.07016C62.5645 8.07016 62.8445 8.61016 62.8445 9.69016V18.9002H65.5045L65.4845 8.93016C65.8545 8.37016 66.4845 8.04016 67.1045 8.04016C67.7745 8.04016 68.1445 8.61016 68.1445 9.69016V18.9002H70.8045V9.49016C70.8045 7.28016 70.0145 6.27016 68.3445 6.27016C67.1845 6.27016 66.1945 6.69016 65.2845 7.67016C64.9045 6.76016 63.9631 6.27016 62.8931 6.27016C61.6831 6.27016 60.7345 6.79016 59.9345 7.76016H59.7845L59.5945 6.54016H57.5445V18.9002H60.1945Z"/>
    <!-- i -->
    <path d="M74.0858 4.97016C74.9858 4.97016 75.4058 4.67016 75.4058 3.43016C75.4058 2.27016 74.9558 1.91016 74.0858 1.91016C73.2058 1.91016 72.7758 2.23016 72.7758 3.43016C72.7758 4.67016 73.1858 4.97016 74.0858 4.97016ZM72.8658 18.9002H75.3958V6.54016H72.8658V18.9002Z"/>
    <!-- u -->
    <path d="M79.9516 19.0902C81.4116 19.0902 82.3216 18.4802 83.0716 17.3802H83.1816L83.2916 18.9002H85.2816V6.54016H82.6416V16.4702C82.3616 16.9602 81.7116 17.3202 81.1016 17.3202C80.3316 17.3202 80.0916 16.7102 80.0916 15.6902V6.54016H77.4616V15.8102C77.4616 17.8202 78.0416 19.0902 79.9516 19.0902Z"/>
    <!-- m -->
    <path d="M90.0031 18.9002V8.92016C90.3831 8.39016 91.0031 8.07016 91.6031 8.07016C92.3731 8.07016 92.6531 8.61016 92.6531 9.69016V18.9002H95.3131L95.2931 8.93016C95.6631 8.37016 96.2931 8.04016 96.9131 8.04016C97.5831 8.04016 97.9531 8.61016 97.9531 9.69016V18.9002H100.613V9.49016C100.613 7.28016 99.8231 6.27016 98.1531 6.27016C96.9931 6.27016 96.0031 6.69016 95.0931 7.67016C94.7131 6.76016 93.9631 6.27016 92.8931 6.27016C91.6831 6.27016 90.5431 6.79016 89.7431 7.76016H89.5931L89.4031 6.54016H87.3531V18.9002H90.0031Z"/>
  `;

  // Original YouTube text for disabled preview
  const YOUTUBE_ORIGINAL_PATHS = `
    <text x="32.5" y="15.2" font-family="'YouTube Sans', sans-serif" font-size="16" font-weight="700" fill="#999">YouTube</text>
  `;

  // Update SVG Live Preview
  function updatePreview(text, enabled) {
    if (!enabled) {
      previewTextGroup.innerHTML = YOUTUBE_ORIGINAL_PATHS;
      return;
    }

    if (text.trim().toLowerCase() === 'premium') {
      previewTextGroup.innerHTML = OFFICIAL_PREMIUM_SVG_PATHS;
    } else {
      const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      previewTextGroup.innerHTML = `
        <text x="32" y="15.2" 
              font-family="'YouTube Sans', 'Alternate Gothic', 'Oswald', sans-serif" 
              font-stretch="condensed"
              font-size="16.5" 
              font-weight="700" 
              letter-spacing="-0.3px" 
              fill="#FFFFFF">${escaped}</text>
      `;
    }
  }

  // Update Status Badge UI
  function updateStatusUI(enabled) {
    if (enabled) {
      statusBadge.textContent = 'Active';
      statusBadge.classList.remove('disabled');
    } else {
      statusBadge.textContent = 'Disabled';
      statusBadge.classList.add('disabled');
    }
  }

  // Highlight active preset button
  function updatePresetButtons(currentText) {
    presetButtons.forEach(btn => {
      if (btn.getAttribute('data-preset') === currentText) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Save settings to chrome.storage
  function saveSettings(enabled, text) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ enabled, text }, () => {
        updateStatusUI(enabled);
        updatePreview(text, enabled);
        updatePresetButtons(text);
      });
    } else {
      updateStatusUI(enabled);
      updatePreview(text, enabled);
      updatePresetButtons(text);
    }
  }

  // Load saved settings
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['enabled', 'text'], (result) => {
      const enabled = result.enabled !== undefined ? result.enabled : true;
      const text = result.text !== undefined ? result.text : 'Premium';

      toggleEnabled.checked = enabled;
      customTextInput.value = text;

      updateStatusUI(enabled);
      updatePreview(text, enabled);
      updatePresetButtons(text);
    });
  } else {
    updatePreview('Premium', true);
  }

  // Event Listeners
  toggleEnabled.addEventListener('change', () => {
    saveSettings(toggleEnabled.checked, customTextInput.value.trim() || 'Premium');
  });

  btnSave.addEventListener('click', () => {
    const text = customTextInput.value.trim() || 'Premium';
    saveSettings(toggleEnabled.checked, text);
  });

  customTextInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const text = customTextInput.value.trim() || 'Premium';
      saveSettings(toggleEnabled.checked, text);
    } else {
      updatePreview(customTextInput.value.trim() || 'Premium', toggleEnabled.checked);
    }
  });

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-preset');
      customTextInput.value = text;
      saveSettings(toggleEnabled.checked, text);
    });
  });

  // Rainbow Star on GitHub Button Handler
  const starGithubBtn = document.getElementById('starGithubBtn');
  const starCountNum = document.getElementById('starCountNum');

  if (starGithubBtn) {
    const repoUrl = 'https://github.com/kalpit118/youtube-premium-logo-changer';
    starGithubBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
        chrome.tabs.create({ url: repoUrl });
      } else {
        window.open(repoUrl, '_blank');
      }
    });

    // Attempt to fetch live GitHub stars
    fetch('https://api.github.com/repos/kalpit118/youtube-premium-logo-changer')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(data => {
        if (data && typeof data.stargazers_count === 'number' && starCountNum) {
          starCountNum.textContent = data.stargazers_count;
        }
      })
      .catch(() => {
        // Fallback gracefully
      });
  }
});
