<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>

        <div class="row">
            <div class="col-xs-12 col-md-4">
                <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
            </div>
            <div class="col-xs-12 col-md-4">
                <pages-widget limit="5">Pages</pages-widget>
            </div>
        </div>
    </div>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts'
import PagesWidget from './widgets/Pages'

export default {
    components: {
        RecentPostsWidget,
        PagesWidget
    }
}
</script>

<style lang="scss">
    .jumbotron {
        margin-top: 5%;
    }
</style>