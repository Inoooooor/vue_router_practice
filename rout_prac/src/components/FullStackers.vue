<template>
    <div class="content_div">
        <img src="../images/fullstackers.jpg" alt="Monkey">
        <h2>They don't comment their code</h2>
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
    max-height: 70%;
    border-radius: 50px;
    border: 5px solid white;
}
</style>