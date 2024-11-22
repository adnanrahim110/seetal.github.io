const blogData = {
  1: {
    title: "The Healing Power of Vulnerability",
    date: "Jan 15, 2023",
    img: "assets/images/blog-1.png",
    content: [
      "In today’s fast-paced world, there’s often a pressure to appear strong and composed. However, accepting vulnerability can be a transformative experience. When we allow ourselves to be open about our struggles, we not only lighten our own burdens but also create space for others to do the same.",

      "Vulnerability isn’t a sign of weakness; it’s a courageous step toward healing. Sharing our experiences can foster deeper connections with those around us. For educators like Sheetal Smith-Batish, expressing feelings of burnout or anxiety can dissolve the isolation that many face in their profession. When teachers share their challenges, it opens the door for supportive conversations, reminding others that they’re not alone.",

      "Moreover, vulnerability encourages empathy. When we share our stories, we invite others to reflect on their own experiences and struggles. It’s a powerful reminder that we all face difficulties, and it’s okay to seek help. In this way, vulnerability becomes a bridge connecting us to others, creating a community that uplifts and supports one another.",

      "So, the next time you feel overwhelmed, consider reaching out. Share your feelings with a friend, colleague, or support group. You might be surprised at the strength you find in your vulnerability and the connections that blossom from it."
    ]
  },
  2: {
    title: "Advocating for Mental Health in Education",
    date: "Jan 15, 2023",
    img: "assets/images/blog-2.png",
    content: [
      "Sheetal Smith-Batish’s <b><em>Trapped in Education</em></b> sheds light on a vital issue: mental health in the teaching profession. Her story illustrates the challenges many educators face and the importance of advocating for mental well-being.",

      "Mental health struggles can often go unnoticed in the fast-paced world of education. Sheetal’s candid reflections serve as a wake-up call for both educators and school leaders. By prioritizing mental health, we can create healthier work environments that benefit everyone.",

      "Implementing initiatives like mental health days, access to counseling, and professional development focused on self-care can significantly impact educators’ well-being. Sheetal’s journey encourages us to speak up about our needs and advocate for resources that promote mental health.",

      "As you read <b><em>Trapped in Education</em></b>, consider how you can be an advocate for mental health in your own school. Together, we can create a supportive culture that values the well-being of all educators."
    ]
  },
  3: {
    title: "Finding Balance “The Teacher’s Journey”",
    date: "Jan 15, 2023",
    img: "assets/images/blog-3.png",
    content: [
      "Teaching is a rewarding yet demanding profession. Many educators, like Sheetal Smith-Batish, often find themselves juggling the responsibilities of their roles while managing personal challenges. Striking a balance between work and home life can feel like an uphill battle, but it’s essential for long-term well-being.",

      "One key to finding balance is setting boundaries. It’s easy to bring work home, but carving out time for yourself and your family is crucial. Schedule moments in your day dedicated to self-care, whether it’s reading a book, going for a walk, or simply enjoying quiet time. Prioritizing these moments can recharge your energy and creativity.",

      "Additionally, seeking support from colleagues can make a world of difference. Sharing experiences in a supportive environment can alleviate feelings of isolation. Forming a network of fellow educators allows for the exchange of ideas and coping strategies, fostering a positive workplace culture.",

      "Balancing teaching with personal life may not be easy, but it’s vital for maintaining passion in your profession. By prioritizing self-care and building supportive relationships, educators can thrive both in and out of the classroom."
    ]
  },
  4: {
    title: "Lessons Learned from Trapped in Education",
    date: "Jan 15, 2023",
    img: "assets/images/blog-4.png",
    content: [
      "In Trapped in Education, Sheetal Smith-Batish takes us on a heartfelt journey through the life of a teacher facing challenges like burnout, motherhood, and mental health. Her story resonates with anyone in education, offering valuable lessons that can inspire positive change in our teaching practices and overall well-being.",

      "A lesson from Sheetal’s narrative is the importance of seeking support. Teaching can often feel isolating, but she emphasizes that we don’t have to navigate our struggles alone. Whether it’s confiding in a colleague, reaching out to friends, or seeking professional help. Schools should promote this culture of connection, encouraging educators to lean on one another. We’re all in this together, and a little support can go a long way in relieving the pressures of the job.",

      "Prioritizing self-care is essential, another important takeaway from Sheetal’s story. In the whirlwind of lesson planning, grading, and meetings, it’s easy for teachers to forget their own needs. Sheetal reminds us that taking time for ourselves is not selfish; it’s necessary. When we care for ourselves, we’re better able to care for our students and handle teaching demands.",

      "Trapped in Education is not just a memoir; it’s a source of inspiration for educators everywhere. We may negotiate the complexity of teaching with resilience and purpose by accepting vulnerability, finding help, prioritizing self-care, celebrating little triumphs, encouraging inclusion, and pushing for change. Sheetal’s journey shows us that, while the path may be difficult, it can also be extremely rewarding. Let us carry these teachings on for ourselves and the generations of students we will educate."
    ]
  }
};
$(document).ready(function () {
  // Handle click on the "Read More" button
  $('.read-more-btn').on('click', function () {
    // Get the id of the clicked blog card
    const id = $(this).data('id');
    const blog = blogData[id];
    const blogImg = blog.img;

    // Update the modal's title and body
    if (blog) {
      $('#dynamicModalLabel').text(blog.title);
      $('#modal-img img').attr('src', blogImg);

      const paragraphs = blog.content.map(paragraph => `<p>${paragraph}</p>`).join('');
      $('#dynamicModal .modal-body .modal-content').html(`
            <p class="modal_date" ><i class="fa-regular fa-clock mr-1"></i> ${blog.date}</p>
            ${paragraphs}
          `);
    }
  });
});
