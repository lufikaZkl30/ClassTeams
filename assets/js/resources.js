/**
 * Resources Page Functionality
 * Menangani semua interaksi button dan fitur di halaman Resources
 */

(function() {
  'use strict';

  /**
   * Initialize semua event listeners
   */
  function init() {
    // Search functionality
    setupSearchInput();
    
    // Top App Bar Actions
    setupNotificationButton();
    setupProfileButton();
    
    // Download buttons
    setupDownloadButtons();
    
    // Upgrade button
    setupUpgradeButton();
    
    // Sidebar footer
    setupSettingsLink();
  }

  /**
   * Setup search input untuk resources
   */
  function setupSearchInput() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            searchResources(query);
          }
        }
      });
    }
  }

  /**
   * Search resources berdasarkan query
   */
  function searchResources(query) {
    console.log('Searching resources for:', query);
    alert(`Searching resources for: "${query}"\n\n` +
          'Results found:\n' +
          '• Advanced Algorithms Part 1 (Lecture Notes)\n' +
          '• Machine Learning Ethics (Research Paper)\n' +
          '• Python Data Processing (Code Example)\n\n' +
          'Filter by:\n' +
          '🔹 Type (Lecture Notes, Papers, Code)\n' +
          '🔹 Subject\n' +
          '🔹 Date');
  }

  /**
   * Setup notification button
   */
  function setupNotificationButton() {
    const notifBtn = document.querySelector('button[aria-label="Notifications"]');
    if (notifBtn) {
      notifBtn.addEventListener('click', () => {
        showNotificationPanel();
      });
    }
  }

  /**
   * Tampilkan notification panel
   */
  function showNotificationPanel() {
    alert('Notifications\n\n' +
          '📌 New Resource Added\n' +
          '   "Advanced Algorithms Part 1" was shared\n' +
          '   5 minutes ago\n\n' +
          '📌 Download Complete\n' +
          '   "Database Design Fundamentals" (2.8 MB)\n' +
          '   Downloaded to: Documents/Resources\n\n' +
          '📌 Storage Warning\n' +
          '   You have used 1.2 GB of 5 GB\n' +
          '   Consider upgrading for more space');
    console.log('Notifications opened');
  }

  /**
   * Setup profile button
   */
  function setupProfileButton() {
    const profileBtn = document.querySelector('button[aria-label="User profile"]');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        showProfilePanel();
      });
    }
  }

  /**
   * Tampilkan profile panel
   */
  function showProfilePanel() {
    const profileInfo = `
User Profile
━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: Alex Chen
Email: alex.chen@university.edu
Student ID: CS-2024-5678

Current Plan: Standard (1.2 GB used / 5 GB total)
Member Since: September 2024

┌─ Quick Actions ─┐
📥 Download History
📤 Uploads
🔖 Favorites
⚙️ Preferences
    `;
    alert(profileInfo);
    console.log('Profile panel opened');
  }

  /**
   * Setup download buttons
   */
  function setupDownloadButtons() {
    const downloadBtns = document.querySelectorAll('button[aria-label="Download"]');
    downloadBtns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const resourceCard = btn.closest('.bg-white');
        if (resourceCard) {
          const resourceTitle = resourceCard.querySelector('h4')?.textContent || 'Resource';
          const resourceSizeEl = resourceCard.querySelector('[class*="font-mono"]');
          const resourceSize = resourceSizeEl?.textContent.split('•')[1]?.trim() || 'Unknown size';
          downloadResource(resourceTitle, resourceSize);
        }
      });
    });
  }

  /**
   * Handle download resource
   */
  function downloadResource(title, size) {
    console.log('Downloading:', title, size);
    alert(`Downloading: ${title}\n\n` +
          `Size: ${size}\n` +
          `Location: ~/Downloads/${title.toLowerCase().replace(/\s+/g, '_')}.pdf\n\n` +
          'Download started...\n' +
          'Estimated time: 15 seconds');
  }

  /**
   * Setup upgrade button
   */
  function setupUpgradeButton() {
    const upgradeBtn = document.querySelector('button:contains("Upgrade Storage")') || 
                       Array.from(document.querySelectorAll('button')).find(btn => 
                         btn.textContent.includes('Upgrade Storage')
                       );
    
    if (upgradeBtn) {
      upgradeBtn.addEventListener('click', () => {
        showUpgradePanel();
      });
    }
  }

  /**
   * Tampilkan upgrade panel
   */
  function showUpgradePanel() {
    alert(`Upgrade Your Storage Plan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Current Plan: Standard (5 GB)
Current Usage: 1.2 GB

$ AVAILABLE PLANS $

📦 Professional: 50 GB - $4.99/month
   ✓ 50 GB storage
   ✓ Advanced sharing controls
   ✓ Priority support
   ✓ Version history

📦 Enterprise: 1 TB - $9.99/month
   ✓ 1 TB storage
   ✓ Admin controls
   ✓ Advanced analytics
   ✓ 24/7 support

Ready to upgrade? Contact support for details.`);
    console.log('Upgrade panel opened');
  }

  /**
   * Setup Settings link navigation
   */
  function setupSettingsLink() {
    const settingsLink = document.querySelector('[data-page="settings"]');
    if (settingsLink) {
      settingsLink.addEventListener('click', (e) => {
        console.log('Navigating to Settings page');
      });
    }
  }

  // Initialize ketika DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
