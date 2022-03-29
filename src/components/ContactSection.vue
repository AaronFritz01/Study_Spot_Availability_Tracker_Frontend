<template>
  <div class="black-background">
    <h4>Contact Us</h4>
    <div class="column-spacer">
      <div>
        <h5>Questions?</h5>
        <p>
          For any questions about the project reach out to project lead Xiaokang
          Qiu, at xkqiu@purdue.edu
        </p>
      </div>
      <p>
        Found a bug or have suggestions for improvements? Email us at
        email@email.com
      </p>
    </div>
    <div class="center">
      <small>
        Copywright information goes here, and maybe any legalese that needs to
        be said
      </small>
    </div>
  </div>
</template>

<style scoped>
.black-background {
  background: black;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h4 {
  color: #b19d78;
}
.column-spacer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
small {
  margin: 1em;
  color: darkgray;
}
</style>
