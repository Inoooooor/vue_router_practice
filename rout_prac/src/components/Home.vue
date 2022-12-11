<template>
    <div class="content_div">
        <img src="../images/zoo.jpg" alt="Zoo">
        <h1>Welcome to our marvelous Zoo!</h1>
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