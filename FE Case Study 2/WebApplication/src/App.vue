<template>
    <div id="app">
        <ty-header v-on:categoryChanged="onCategoryChanged"></ty-header>
        
        <div id="ty-body" class="container">
            <div class="row">
                <section class="boutique-main col-sm-9">
                    <boutique v-for="boutique in largeBoutiques" :key="boutique.Id" :image="boutique.Image" :name="boutique.Name" :date="boutique.ExpireDate" />
                </section>
                <aside class="campaigns col-sm-3">
                    <campaign v-for="(campaign, index) in campaigns" :key="index" :image="campaign.Image" :name="campaign.Name" />
                </aside>
            </div>
            <div class="boutique-small row">
                <div v-for="boutique in smallBoutiques" :key="boutique.Id" class="col-sm-4">
                    <boutique :image="boutique.Image" :name="boutique.Name" :date="boutique.ExpireDate" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Trendyol from './repository/trendyol'
    import TyHeader from '@/components/TyHeader'
    import Boutique from '@/components/Boutique'
    import Campaign from '@/components/Campaign'

    let self;

    export default {
        name: 'App',
        data: function(){
            return {
                categoryType: -1,
                boutiques: [],
                campaigns: []
            }
        },
        components: {
            TyHeader,
            Boutique,
            Campaign
        },
        methods: {
            refreshBoutiques: function(){
                Trendyol.Boutique.getAll(self.categoryType)
                    .then((boutiques) => {
                        self.boutiques = boutiques;
                    });
            },
            refreshCampaigns: function(){
                Trendyol.Campaign.getAll()
                    .then((campaigns) => {
                        self.campaigns = campaigns;
                    });
            },
            onCategoryChanged: function(categoryType){
                self.categoryType = categoryType;
                self.refreshBoutiques();
            }
        },
        computed: {
            largeBoutiques: function () {
                return self.boutiques.filter(function (boutique) {
                    return boutique.Size == 'large';
                });
            },
            smallBoutiques: function () {
                return self.boutiques.filter(function (boutique) {
                    return boutique.Size == 'small';
                });
            }
        },
        created: function(){
            self = this;
        },
        mounted: function(){
            self.refreshBoutiques();
            self.refreshCampaigns();
        }
    }
</script>

<style lang="scss">
    @import 'src/style/normalize.scss';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import 'src/style/main.scss';
</style>