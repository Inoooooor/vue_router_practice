<template>
    <div class="content_div">
        <img src="../images/squirrel.jpg" alt="squirrel">
        <h2>Tiny little shiny squirrel!</h2>
    </div>
</template>

<script>

</script>

<style scoped>
.content_div {
    grid-area: 2 / 3 / 4 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

img {
    max-width: 80%;
    border-radius: 50px;
    border: 5px solid white;
}
</style>