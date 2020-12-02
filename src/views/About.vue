<template>
  <div class="about-us">
    <v-container>
      <h1>About Us</h1>
      <div class="">
        <p>
          A group of 4 students are currently working on this tutorial web
          application that will provide more structure to the way tutorials are
          currently be done online. This is being done in partial fulfillment of
          the course CPTR293: Field Group Project.
        </p>
        <p>
          The application will allow for students and tutors to register and
          have an account with the platform. Upon registering, tutors will have
          to be approved; if so, they will be able to create tutorial sessions
          (Currently supporting 4 platforms: Google meet, Discord, Zoom &
          AEorion - Blackboard Collaborate Ultra). Students will be able to see
          available courses and enroll in courses, review the course(s) and/or
          tutor(s).
        </p>
        <p>
          The goal is to embed parts of the platforms that will be used for the
          tutorial sessions on our website, this will create one platform space
          for the institution where students do not have to switch between
          different platforms when doing sessions with different tutors. It will
          also function in the way that Blackboard works on AEorion, students
          will see a small part of the platform that the tutorial session will
          be held and be redirect to that platform via a link when a tutorial
          session is in progress.
        </p>
        <p>
          The site will have what is known as Progressive Web Application
          support, for a website to be a PWA it most be fast, reliable and works
          offline. The website will have the ability to be downloaded from the
          browser in seconds and open like a normal application on whatever
          device you use (e.g. Smartphone, Laptop), students with slow or
          connectivity issues are provided for as the application can work
          without internet connection.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="css" scoped></style>
