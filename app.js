
const portfolioData = {
  personal: {
    name: "Annam Praveen",
    titles: ["Full Stack Developer", "Python Developer", "Data Analyst"],
    email: "annampraveen2003@gmail.com",
    location: "Hyderabad, India",
    education: "B.Tech in Artificial Intelligence & Machine Learning from SVIET, Nandamuru, India",
    bio: "Passionate full-stack developer with expertise in Python, data analysis, and modern web technologies. I love creating efficient solutions that bridge the gap between data insights and user-friendly applications."
  },
  skills: [
    {name: "Python", level: 90, category: "Backend"},
    {name: "Django", level: 85, category: "Backend"},
    {name: "React.js", level: 70, category: "Frontend"},
    {name: "Power BI", level: 80, category: "Data Analysis"},
    {name: "MySQL", level: 85, category: "Database"},
    {name: "Machine Learning", level: 75, category: "AI/ML"},
    {name: "Data Analysis", level: 75, category: "Data Analysis"},
    {name: "HTML/CSS", level: 90, category: "Frontend"},
    {name: "JavaScript", level: 85, category: "Frontend"},
    
  ],
  projects: [
    {
      id: 1,
      title: "Smart Crime Investigation Using AI & ML",
      description: "An AI-powered system designed to analyze crime data, detect unusual patterns, and provide insights using ML and Generative AI, supporting law enforcement with efficient investigation and predictive crime analysis.",
      image: "assets/ai-driven-digital-forensics.jpg",
      technologies: ["Python", "Django", "Artificial Intelligence", "Machine Learning"],
      demoLink: "https://github.com/nanihacks",
      githubLink: "https://github.com/nanihacks",
      featured: true
    },
    {
      id: 2,
      title: "PDF to Audio Converter using Django",
      description: "A Django-based web application that converts uploaded PDF files into speech using pyttsx3, offering file upload, text extraction, and audio download functionality to improve accessibility and learning efficiency.",
      image: "assets/pdf-to-audio-converter.png",
      technologies: ["Python", "Django", "pyttsx3", "File Handling"],
      demoLink: "https://github.com/nanihacks/pdf_audio_django",
      githubLink: "https://github.com/nanihacks/pdf_audio_django",
      featured: false
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML, CSS, and JavaScript to provide smooth navigation, clean UI, and a professional online presence.",
      image: "assets/portifolio.png",
      technologies: ["HTML","CSS","JavaScript"],
      demoLink: "https://github.com/nanihacks",
      githubLink: "https://github.com/nanihacks",
      featured: true
    },
    {
      id: 4,
      title: "AI Health Diagnosis Web App",
      description: "AI Health Diagnosis web app dashboard showcasing intuitive risk assessments for Diabetes, Heart Disease, and Alzheimer’s with clear charts, vibrant design, and user-friendly interface for impactful health insights.",
      image: "assets/portifolio.png",
      technologies: ["HTML","CSS","JavaScript","Tensorflow","Django","AI/ML"],
      demoLink: "https://github.com/nanihacks/ai_health_diagnosis",
      githubLink: "https://github.com/nanihacks/ai_health_diagnosis",
      featured: true
    }
  ],
  social: {
    email: "annampraveen2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/annam-praveen-471503269",
    github: "https://github.com/nanihacks"
  },
  config: {
    typewriterSpeed: 100,
    animationDuration: "0.6s"
  }
};

// Application State
let currentTheme = localStorage.getItem('theme') || 'light';
let currentSkillFilter = 'all';
let currentProjectFilter = 'all';
let currentProjectLayout = 'grid';

// CRITICAL: Ensure DOM is fully loaded before initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded
  setTimeout(initializeApp, 100);
}

function initializeApp() {
  console.log('🚀 Initializing PERFECT Portfolio Application...');
  
  try {
    // Set initial theme FIRST
    setTheme(currentTheme);
    
    // Initialize core functionality immediately
    initializeLoadingScreen();
    initializeCustomCursor();
    initializeNavigation();
    initializeThemeToggle();
    initializeTypewriter();
    
    // CRITICAL: Initialize skills and projects with delay to ensure DOM is ready
    setTimeout(() => {
      console.log('🔧 Initializing CRITICAL sections...');
      initializeSkills();
      initializeProjects();
      initializeScrollAnimations();
      initializeContactForm();
      initializeStatsCounter();
      initializeErrorHandling();
      console.log('✅ ALL sections initialized successfully!');
    }, 200);
    
  } catch (error) {
    console.error('❌ Error initializing portfolio app:', error);
    // Retry initialization once
    setTimeout(initializeApp, 500);
  }
}

// Loading Screen
function initializeLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  
  if (loadingScreen) {
    // Hide loading screen after short delay
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1500);
  }
}

// Custom Cursor
function initializeCustomCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  
  if (!cursor || !cursorDot || window.innerWidth <= 768) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  document.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
    cursorDot.classList.add('active');
  });
  
  // Add hover effects
  setTimeout(() => {
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }, 1000);
}

// Navigation
function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (!navbar) return;
  
  // Sticky navigation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu) navMenu.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  
  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }
  
  // Active section highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
  };
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    navObserver.observe(section);
  });
}

// Theme Toggle - CRITICAL FIX for dark mode
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(currentTheme);
      
      // CRITICAL: Re-render skills and projects after theme change
      setTimeout(() => {
        renderSkills();
        renderProjects();
      }, 100);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// Typewriter Effect - CRITICAL FIX for hero section
function initializeTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;
  
  const titles = portfolioData.personal.titles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : portfolioData.config.typewriterSpeed;
    
    if (isDeleting) {
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    
    setTimeout(typeWriter, speed);
  }
  
  typeWriter();
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.section-header, .about-content > *, .contact-content > *');
    animatedElements.forEach(el => {
      el.classList.add('animate-on-scroll');
      animationObserver.observe(el);
    });
  }, 500);
}

// Skills Section - CRITICAL DARK MODE FIX
function initializeSkills() {
  console.log('🔍 CRITICAL: Starting Skills initialization...');
  
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) {
    console.error('❌ Skills grid not found! Retrying...');
    setTimeout(() => initializeSkills(), 300);
    return;
  }
  
  console.log('✅ Skills grid found, initializing...');
  
  // Force immediate render
  renderSkills();
  
  // Initialize filter buttons
  setTimeout(() => {
    initializeSkillsFilter();
  }, 100);
  
  console.log('✅ Skills initialization COMPLETED');
}

function renderSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) {
    console.error('❌ Cannot render skills - grid not found');
    return;
  }
  
  console.log('🎨 RENDERING Skills with filter:', currentSkillFilter);
  
  // Clear existing content
  skillsGrid.innerHTML = '';
  
  // Filter skills
  const filteredSkills = currentSkillFilter === 'all' 
    ? [...portfolioData.skills] 
    : portfolioData.skills.filter(skill => skill.category === currentSkillFilter);
  
  console.log('📋 Filtered skills count:', filteredSkills.length);
  
  if (filteredSkills.length === 0) {
    skillsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        No skills found for this category.
      </div>
    `;
    return;
  }
  
  // Create skills immediately with proper dark mode support
  filteredSkills.forEach((skill, index) => {
    console.log(`🏗️ Creating skill: ${skill.name}`);
    
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.animationDelay = `${index * 0.1}s`;
    
    skillCard.innerHTML = `
      <div class="skill-header">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-level">${skill.level}%</div>
      </div>
      <div class="skill-progress">
        <div class="skill-progress-fill" data-level="${skill.level}" style="width: 0%;"></div>
      </div>
      <div class="skill-category">${skill.category}</div>
    `;
    
    skillsGrid.appendChild(skillCard);
  });
  
  // Animate progress bars
  setTimeout(() => {
    const progressBars = skillsGrid.querySelectorAll('.skill-progress-fill');
    progressBars.forEach((bar, index) => {
      const level = bar.getAttribute('data-level');
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-out';
        bar.style.width = `${level}%`;
      }, index * 100);
    });
  }, 300);
  
  console.log('✅ Skills rendered successfully');
}

function initializeSkillsFilter() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  if (categoryButtons.length === 0) {
    console.error('❌ No skills category buttons found');
    return;
  }
  
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-category');
      console.log('🎯 Skills filter clicked:', category);
      
      // Update active button
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update filter and re-render
      currentSkillFilter = category;
      renderSkills();
    });
  });
}

// Projects Section - CRITICAL DARK MODE FIX
function initializeProjects() {
  console.log('🔍 CRITICAL: Starting Projects initialization...');
  
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) {
    console.error('❌ Projects grid not found! Retrying...');
    setTimeout(() => initializeProjects(), 300);
    return;
  }
  
  console.log('✅ Projects grid found, initializing...');
  
  // Force immediate render
  renderProjects();
  
  // Initialize filters and layout
  setTimeout(() => {
    initializeProjectsFilter();
    initializeProjectsLayout();
  }, 100);
  
  console.log('✅ Projects initialization COMPLETED');
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) {
    console.error('❌ Cannot render projects - grid not found');
    return;
  }
  
  console.log('🎨 RENDERING Projects with filter:', currentProjectFilter);
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
  // Filter projects
  let filteredProjects = [...portfolioData.projects];
  
  if (currentProjectFilter === 'featured') {
    filteredProjects = portfolioData.projects.filter(project => project.featured);
  } else if (currentProjectFilter === 'web') {
    filteredProjects = portfolioData.projects.filter(project => 
      project.technologies.some(tech => ['React.js', 'HTML5', 'JavaScript', 'Django'].includes(tech))
    );
  } else if (currentProjectFilter === 'data') {
    filteredProjects = portfolioData.projects.filter(project => 
      project.technologies.some(tech => ['Power BI', 'Machine Learning', 'Data Analysis'].includes(tech))
    );
  }
  
  console.log('📋 Filtered projects count:', filteredProjects.length);
  
  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        No projects found for this filter.
      </div>
    `;
    return;
  }
  
  // Create projects immediately with proper dark mode support
  filteredProjects.forEach((project, index) => {
    console.log(`🏗️ Creating project: ${project.title}`);
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animationDelay = `${index * 0.1}s`;
    
    const techTags = project.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    projectCard.innerHTML = `
      <div class="project-image" style="background-image: url('${project.image}')"></div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-links">
          <a href="${project.demoLink}" class="project-link project-link--primary" target="_blank" rel="noopener">Live Demo</a>
          <a href="${project.githubLink}" class="project-link project-link--secondary" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
  
  // Update layout class
  projectsGrid.className = currentProjectLayout === 'list' ? 'projects-grid list-layout' : 'projects-grid';
  
  console.log('✅ Projects rendered successfully');
}

function initializeProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (filterButtons.length === 0) {
    console.error('❌ No projects filter buttons found');
    return;
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter');
      console.log('🎯 Projects filter clicked:', filter);
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update filter and re-render
      currentProjectFilter = filter;
      renderProjects();
    });
  });
}

function initializeProjectsLayout() {
  const layoutButtons = document.querySelectorAll('.layout-btn');
  
  if (layoutButtons.length === 0) {
    console.error('❌ No projects layout buttons found');
    return;
  }
  
  layoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const layout = btn.getAttribute('data-layout');
      console.log('🎯 Projects layout clicked:', layout);
      
      // Update active button
      layoutButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update layout
      currentProjectLayout = layout;
      renderProjects();
    });
  });
}

// Contact Form
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  const formFields = contactForm.querySelectorAll('.form-control');
  
  // Real-time validation
  formFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => clearFieldError(field));
  });
  
  // Form submission
  contactForm.addEventListener('submit', handleFormSubmission);
}

function validateField(field) {
  const fieldName = field.name;
  const fieldValue = field.value.trim();
  const errorElement = document.getElementById(`${fieldName}-error`);
  
  let isValid = true;
  let errorMessage = '';
  
  switch (fieldName) {
    case 'name':
      if (!fieldValue) {
        errorMessage = 'Name is required';
        isValid = false;
      } else if (fieldValue.length < 2) {
        errorMessage = 'Name must be at least 2 characters long';
        isValid = false;
      }
      break;
      
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValue) {
        errorMessage = 'Email is required';
        isValid = false;
      } else if (!emailPattern.test(fieldValue)) {
        errorMessage = 'Please enter a valid email address';
        isValid = false;
      }
      break;
      
    case 'message':
      if (!fieldValue) {
        errorMessage = 'Message is required';
        isValid = false;
      } else if (fieldValue.length < 10) {
        errorMessage = 'Message must be at least 10 characters long';
        isValid = false;
      }
      break;
  }
  
  if (errorElement) {
    if (isValid) {
      errorElement.classList.remove('show');
      field.classList.remove('error');
    } else {
      errorElement.textContent = errorMessage;
      errorElement.classList.add('show');
      field.classList.add('error');
    }
  }
  
  return isValid;
}

function clearFieldError(field) {
  const errorElement = document.getElementById(`${field.name}-error`);
  if (errorElement) {
    errorElement.classList.remove('show');
    field.classList.remove('error');
  }
}




function handleFormSubmission(e) {
  e.preventDefault();

  const contactForm = e.target;
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const btnText = submitButton.querySelector('.btn-text');
  const btnLoading = submitButton.querySelector('.btn-loading');
  const successMessage = document.getElementById('form-success');

  // Validate fields (keep your existing validation functions)
  let isFormValid = true;
  contactForm.querySelectorAll('.form-control').forEach(field => {
    if (field.hasAttribute('required') && !validateField(field)) {
      isFormValid = false;
    }
  });
  if (!isFormValid) return;

  // Show loading state
  submitButton.disabled = true;
  btnText.classList.add('hidden');
  btnLoading.classList.remove('hidden');

  // Prepare EmailJS template params
  const templateParams = {
  name: contactForm.name.value,
  email: contactForm.email.value,
  subject: contactForm.subject.value || "No Subject",
  message: contactForm.message.value,
};

  // Send email
  emailjs.send('service_j9ifwhu', 'template_71utvfo', templateParams)

    .then(() => {
      submitButton.disabled = false;
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      successMessage.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => successMessage.classList.add('hidden'), 5000);
    })
    .catch(error => {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
      submitButton.disabled = false;
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
    });
}

function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', handleFormSubmission);
}

  

// Statistics Counter
function initializeStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalCount = parseInt(target.getAttribute('data-count'));
        animateCounter(target, 0, finalCount, 2000);
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => {
    counterObserver.observe(stat);
  });
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentCount = Math.floor(start + (end - start) * easeOutCubic);
    
    element.textContent = currentCount;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = end;
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Error Handling
function initializeErrorHandling() {
  const errorModal = document.getElementById('error-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const goHomeBtn = document.getElementById('go-home');
  const closeErrorBtn = document.getElementById('close-error');
  
  if (!errorModal) return;
  
  function hideError() {
    errorModal.classList.add('hidden');
  }
  
  if (goHomeBtn) {
    goHomeBtn.addEventListener('click', () => {
      hideError();
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  if (closeErrorBtn) {
    closeErrorBtn.addEventListener('click', hideError);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', hideError);
  }
  
  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !errorModal.classList.contains('hidden')) {
      hideError();
    }
  });
  
  // Global error handling
  window.addEventListener('error', (e) => {
    console.error('❌ Global error caught:', e.error);
  });
  
  window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled promise rejection:', e.reason);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Export for external use
window.PortfolioApp = {
  setTheme,
  portfolioData,
  renderSkills,
  renderProjects,
  initializeApp
};

