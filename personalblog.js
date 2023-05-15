// Get all the "Read More" links
const readMoreLinks = document.querySelectorAll('a[href="blog-post.html"]');

// Add a click event listener to each link
readMoreLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the URL of the clicked link
    const url = link.getAttribute('href');

    // Use localStorage to store the URL of the last visited post
    localStorage.setItem('lastVisitedPost', url);

    // Navigate to the blog post page
    window.location.href = url;
  });
});

// Get the last visited post URL from localStorage
const lastVisitedPost = localStorage.getItem('lastVisitedPost');

// If there's a last visited post, display it on the page
if (lastVisitedPost) {
  const lastVisitedLink = document.createElement('a');
  lastVisitedLink.setAttribute('href', lastVisitedPost);
  lastVisitedLink.textContent = 'Last Visited Post';
  document.body.prepend(lastVisitedLink);
}
