<template>
    <div>
        <div class="header-w">
            <header id="main-header" class="header">
                <i class="header-logo ty-logo"></i>
            </header>
        </div>
        <div class="header-w">
            <nav id="main-header-menu" class="header">
                <ul>
                    <li @click="onCategoryClicked(-1)">
                        <a href="#">Tüm Butikler</a>
                    </li>
                    <li v-for="(category, index) in categories" :key="index" :data-type="category.CategoryType">
                        <a href="#" @click="onCategoryClicked(category.CategoryType)">{{category.Name}}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import Trendyol from '../repository/trendyol'
    let self;

    export default {
        name: 'TyHeader',
        data: function(){
            return {
                categories: []
            }
        },
        methods: {
            refreshCategories: function(){
                Trendyol.Category.getAll()
                    .then((categories) => {
                        self.categories = categories;
                    });
            },
            onCategoryClicked: function(categoryType) {
                self.$emit('categoryChanged', parseInt(categoryType));
            }
        },
        created: function(){
            self = this;
        },
        mounted: function(){
            self.refreshCategories();
        }
    }
</script>