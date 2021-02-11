<template>
    <nav class="green darken-3">
        <div class="nav-wrap">
        <router-link to='/' class="brand-logo">Vue Tasks App</router-link>
        <ul class="right hide-on-med-and-down">
            <router-link
                to='/'
                tag='li'
                exact
                active-class="active"
            >
                <a href="#">List of Tasks</a>
            </router-link>
            <router-link
                to='/create'
                tag='li'
                active-class="active"
            >
                <a href="#">Create Task</a>
            </router-link>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style lang='scss' scoped>
    .nav-wrap {
        padding: 0 4rem;
    }
</style>