// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(theme) {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

// Check for saved theme or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const isDark = htmlElement.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Contact form handling
// Contact form handling with Formspree
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = document.getElementById("submit-button");
    const formStatus = document.getElementById("form-status");
    const originalText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitButton.disabled = true;

    // Hide previous status messages
    formStatus.classList.add("hidden");

    try {
      // Create FormData from the form
      const formData = new FormData(this);

      // Send to Formspree
      const response = await fetch(this.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success
        formStatus.className =
          "p-4 rounded-lg text-center bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800";
        formStatus.innerHTML =
          '<i class="fas fa-check-circle mr-2"></i>Message sent successfully! I\'ll get back to you soon.';
        formStatus.classList.remove("hidden");

        // Reset form
        this.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Error
      formStatus.className =
        "p-4 rounded-lg text-center bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800";
      formStatus.innerHTML =
        '<i class="fas fa-exclamation-circle mr-2"></i>Failed to send message. Please try again or email me directly.';
      formStatus.classList.remove("hidden");
    } finally {
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}

// Typewriter Effect
class Typewriter {
  constructor(
    element,
    titles,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
  ) {
    this.element = element;
    this.titles = titles;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.pauseTime = pauseTime;

    this.titleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;

    this.type();
  }

  type() {
    const currentTitle = this.titles[this.titleIndex];

    if (this.isDeleting) {
      // Deleting text
      this.charIndex--;
    } else {
      // Typing text
      this.charIndex++;
    }

    // Update text content with current characters
    this.element.textContent = currentTitle.substring(0, this.charIndex);

    // Typing speed
    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      // Pause at end of title
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Move to next title
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      typeSpeed = 500; // Pause before starting next title
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typewriter when page loads
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter-text");
  const titles = [
    "Full Stack Engineer",
    "AI Engineer",
    "Problem Solver",
    "FastAPI Developer",
    "React Specialist",
  ];

  new Typewriter(typewriterElement, titles);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    if (el.classList.contains("animate-slide-up")) {
      el.style.transform = "translateY(20px)";
    }
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    // Toggle menu icon
    const icon = mobileMenuButton.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  });

  // Close mobile menu when clicking on links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      const icon = mobileMenuButton.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
}
