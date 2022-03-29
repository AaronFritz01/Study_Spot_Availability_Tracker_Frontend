<template>
  <div class="black-background">
    <div class="grey-rectangle">
        <div class="card-background">
          <div href="" class="card-grey-rectangle">
            <p>Campus Map</p>
            <div class="gold-bar"></div>
            <img src="../assets/Map_Icon.png" alt="Campus Map" />
          </div>
        </div>
        <div class="card-background">
          <div href="" class="card-grey-rectangle">
            <p>Study Spaces</p>
            <div class="gold-bar"></div>
            <img src="../assets/Book_Icon.png" alt="Study Spaces" />
          </div>
        </div>
        <div class="card-background">
          <div href="" class="card-grey-rectangle">
            <p>Statistics</p>
            <div class="gold-bar"></div>
            <img src="../assets/Bar_Graph_Icon.png" alt="Statistics" />
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.black-background{
background: black;
  
}
img{
  width: 75%;
  margin: 2em 0em;
}
p{
  font-size: 2em;
}
.grey-rectangle{
background: #474747;
margin: 3em;
  color: white;
  display: flex;
  justify-content: space-around;
}
.card-background{
  background: black;
border-radius: 1em;

  width: 25%;
  margin: 2em;
}
.gold-bar {
  background: #b19d78;
  width: 250px;
  height: 5px;
  margin: .5em;
  }
.card-grey-rectangle{
border-radius: 1em;

  margin: 2em;
  background: #474747;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
