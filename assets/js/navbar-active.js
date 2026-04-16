/**
 * NavBar Active State Handler
 * Mendeteksi halaman aktif dan menambahkan class 'active' ke navbar item yang sesuai
 * 
 * Usage: Include file ini di semua halaman HTML
 * <script src="navbar-active.js"></script>
 */

(function() {
  'use strict';

  /**
   * Set active state untuk navbar items berdasarkan URL saat ini
   */
  function setActiveNavItem() {
    // Dapatkan path URL saat ini
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    // Definisikan mapping antara file dengan data-page attribute
    const pageMap = {
      'index.html': 'dashboard',
      '': 'dashboard', // Default ke dashboard jika root
      'assignments.html': 'assignments',
      'schedule.html': 'schedule',
      'resources.html': 'resources',
      'settings.html': 'settings'
    };

    // Tentukan halaman aktif
    const activePage = pageMap[currentFile.toLowerCase()] || pageMap[''];

    // Hapus class 'active' dari semua navbar items
    const allNavItems = document.querySelectorAll('.sidebar-nav-item');
    allNavItems.forEach(item => {
      item.classList.remove('active');
    });

    // Tambahkan class 'active' ke navbar item yang sesuai
    const activeLink = document.querySelector(`[data-page="${activePage}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    // Debug log (opsional, bisa dihapus di production)
    console.log('Current Page:', activePage);
    console.log('Current File:', currentFile);
  }

  /**
   * Initialize active state saat DOM ready
   */
  function init() {
    // Tunggu DOM selesai loading
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setActiveNavItem);
    } else {
      setActiveNavItem();
    }

    // Re-set active state jika ada perubahan (untuk SPA atau dynamic navigation)
    window.addEventListener('popstate', setActiveNavItem);
  }

  // Jalankan initialization
  init();

  // Export untuk digunakan di file lain jika diperlukan
  window.NavBarActive = {
    refresh: setActiveNavItem
  };

})();
