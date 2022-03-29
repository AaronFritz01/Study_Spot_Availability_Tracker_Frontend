<template>
  <div class="columns">
    <div class="left-column"></div>
    <div class="right-column">
      <table class="availability-table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table.customTable {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #7ea8f8;
  border-style: solid;
  color: #000000;
}

table.customTable td,
table.customTable th {
  border-width: 2px;
  border-color: #7ea8f8;
  border-style: solid;
  padding: 5px;
}

table.customTable thead {
  background-color: #7ea8f8;
}
</style>
