/**
 * Schedule Page Functionality
 * Menangani semua interaksi button dan fitur di halaman Schedule
 */

(function() {
  'use strict';

  // State untuk tracking current week
  let currentWeekStart = new Date(2024, 9, 21); // Oct 21, 2024

  /**
   * Initialize semua event listeners
   */
  function init() {
    // Calendar Navigation
    setupCalendarNavigation();
    
    // Top App Bar Actions
    setupNotificationButton();
    setupProfileButton();
    setupSearchInput();
    
    // Session Actions
    setupJoinStreamButton();
    
    // Sidebar Actions
    setupViewGradebookButton();
    
    // Sidebar Footer Settings
    setupSettingsLink();
  }

  /**
   * Setup calendar navigation (prev/next week buttons)
   */
  function setupCalendarNavigation() {
    // Find all buttons and filter by their icon content
    const allButtons = document.querySelectorAll('button');
    let prevBtn = null;
    let nextBtn = null;
    
    allButtons.forEach(button => {
      const icon = button.querySelector('.material-symbols-outlined');
      if (icon) {
        if (icon.textContent.includes('chevron_left')) {
          prevBtn = button;
        } else if (icon.textContent.includes('chevron_right')) {
          nextBtn = button;
        }
      }
    });
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => previousWeek());
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => nextWeek());
    }
  }

  /**
   * Navigasi ke minggu sebelumnya
   */
  function previousWeek() {
    currentWeekStart = new Date(currentWeekStart);
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    updateWeekDisplay();
    console.log('Previous week:', formatWeekRange(currentWeekStart));
  }

  /**
   * Navigasi ke minggu berikutnya
   */
  function nextWeek() {
    currentWeekStart = new Date(currentWeekStart);
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    updateWeekDisplay();
    console.log('Next week:', formatWeekRange(currentWeekStart));
  }

  /**
   * Update tampilan minggu di halaman
   */
  function updateWeekDisplay() {
    const weekEndDate = new Date(currentWeekStart);
    weekEndDate.setDate(weekEndDate.getDate() + 6);
    
    const dateRangeElement = document.querySelector('h3.text-sm.font-bold');
    if (dateRangeElement) {
      dateRangeElement.textContent = formatWeekRange(currentWeekStart);
    }
    
    // Update day tracker
    updateDayTracker();
  }

  /**
   * Update day tracker dengan tanggal baru
   */
  function updateDayTracker() {
    const dayTrackerDays = document.querySelectorAll('.grid-cols-7 > div');
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    
    dayTrackerDays.forEach((dayDiv, index) => {
      if (index < 7) {
        const date = new Date(currentWeekStart);
        date.setDate(date.getDate() + index);
        
        const daySpan = dayDiv.querySelector('span:nth-child(2)');
        if (daySpan) {
          daySpan.textContent = date.getDate();
        }
      }
    });
  }

  /**
   * Format range minggu
   */
  function formatWeekRange(startDate) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const start = `${monthNames[startDate.getMonth()]} ${startDate.getDate()}`;
    const end = `${monthNames[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()}`;
    
    return `${start} — ${end}`;
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
    alert('Notifications Panel\n\n' +
          '📬 No new notifications\n\n' +
          'Recent Activity:\n' +
          '• Lab submission deadline in 4 hours\n' +
          '• Professor commented on your essay\n' +
          '• Study group created for Algorithms');
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

Name: John Doe
Email: john.doe@university.edu
Student ID: CS-2024-1234

Academic Status: Active
Current GPA: 3.85 / 4.0
Credits Completed: 45/120

┌─ Actions ─┐
📋 View Transcript
🔧 Edit Profile
🚪 Logout
    `;
    alert(profileInfo);
    console.log('Profile panel opened');
  }

  /**
   * Setup search input
   */
  function setupSearchInput() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            searchSchedule(query);
          }
        }
      });
    }
  }

  /**
   * Search schedule berdasarkan query
   */
  function searchSchedule(query) {
    console.log('Searching schedule for:', query);
    alert(`Searching schedule for: "${query}"\n\n` +
          'Results:\n' +
          '• Advanced Algorithm Structuralism (Match: title)\n' +
          '• HCI Workshop (Match: description)\n' +
          '• Cognitive Psychology Seminar (Match: topic)\n\n' +
          'Tip: Search by course name, session type, or location');
  }

  /**
   * Setup "Join Stream" button
   */
  function setupJoinStreamButton() {
    const allButtons = document.querySelectorAll('button');
    const joinStreamBtn = Array.from(allButtons).find(btn => {
      const text = btn.textContent.trim();
      return text === 'Join Stream' || text.includes('Join Stream');
    });
    
    if (joinStreamBtn) {
      joinStreamBtn.addEventListener('click', () => {
        joinStream();
      });
    }
  }

  /**
   * Join stream session
   */
  function joinStream() {
    const streamUrl = 'https://stream.classteams.edu/session/hci-workshop-studio4';
    alert('Joining Stream Session\n\n' +
          'Course: Human-Computer Interaction Workshop\n' +
          'Location: Studio 4\n' +
          'Duration: 11:00 - 12:30\n' +
          'Type: Lab Session\n\n' +
          'Opening stream window...\n' +
          `Stream URL: ${streamUrl}`);
    
    // Dalam implementasi nyata, buka di window/tab baru
    console.log('Joining stream:', streamUrl);
    
    // Simulasi join dengan membuka stream pada window/tab baru (commented out untuk demo)
    // window.open(streamUrl, '_blank', 'width=1024,height=768');
  }

  /**
   * Setup "View Full Gradebook" button
   */
  function setupViewGradebookButton() {
    const allButtons = document.querySelectorAll('button');
    const viewGradebookBtn = Array.from(allButtons).find(btn => {
      const text = btn.textContent.trim();
      return text === 'View Full Gradebook' || text.includes('View Full Gradebook');
    });
    
    if (viewGradebookBtn) {
      viewGradebookBtn.addEventListener('click', () => {
        viewFullGradebook();
      });
    }
  }

  /**
   * Tampilkan full gradebook
   */
  function viewFullGradebook() {
    const gradebookInfo = `
FULL GRADEBOOK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Student: John Doe
Semester: Fall 2024

COURSES & GRADES:
┌─────────────────────────────────────────┐
│ Advanced Algorithm Structuralism    A   │
│ Human-Computer Interaction        A-   │
│ Cognitive Psychology              B+   │
│ Database Systems                  A    │
│ Software Engineering              A    │
│ Ethical AI & Society              A-   │
└─────────────────────────────────────────┘

Current GPA: 3.85 / 4.0
Credits Earned: 45 / 120
Academic Standing: Good

Need detailed analysis? Visit the full gradebook page.
    `;
    alert(gradebookInfo);
    console.log('Full gradebook opened');
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

  // Expose some functions globally untuk debugging
  window.scheduleDebug = {
    previousWeek,
    nextWeek,
    currentWeekStart: () => currentWeekStart
  };

})();
