// About page animations and interactions
document.addEventListener("DOMContentLoaded", function () {
  // Skill filtering functionality
  const skillCategories = document.querySelectorAll(".skill-category");
  const skillTags = document.querySelectorAll(".skill-tag");

  skillCategories.forEach((category) => {
    category.addEventListener("click", function () {
      // Remove active class from all categories
      skillCategories.forEach((cat) => cat.classList.remove("active"));

      // Add active class to clicked category
      this.classList.add("active");

      const selectedCategory = this.getAttribute("data-category");

      // Show all skills if "All" is selected
      if (selectedCategory === "all") {
        skillTags.forEach((tag) => {
          tag.style.display = "block";
          // Add animation
          animateSkillTag(tag);
        });
        return;
      }

      // Filter skills based on selected category
      skillTags.forEach((tag) => {
        const skillType = tag.getAttribute("data-type");

        if (skillType === selectedCategory) {
          tag.style.display = "block";
          // Add animation
          animateSkillTag(tag);
        } else {
          tag.style.display = "none";
        }
      });
    });
  });

  // Function to animate skill tags when they appear
  function animateSkillTag(tag) {
    tag.style.animation = "none";
    tag.offsetHeight; // Trigger reflow
    tag.style.animation = "fadeIn 0.5s ease forwards";
  }

  // Add animation to jobs when they come into view
  const jobElements = document.querySelectorAll(".jobs__job");

  // Create an intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  // Observe each job element
  jobElements.forEach((job) => {
    observer.observe(job);

    // Add hover effect for job responsibilities
    const responsibilities = job.querySelector(".job-responsibilities");
    if (responsibilities) {
      job.addEventListener("mouseenter", () => {
        responsibilities.classList.add("show");
      });

      job.addEventListener("mouseleave", () => {
        responsibilities.classList.remove("show");
      });
    }
  });

  // Add timeline connector
  const jobsContainer = document.querySelector(".jobs");
  if (jobsContainer) {
    const connector = document.createElement("div");
    connector.classList.add("timeline-connector");
    jobsContainer.appendChild(connector);
  }

  // Add scroll to top button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.classList.add("scroll-top-btn");
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show/hide scroll to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
});
