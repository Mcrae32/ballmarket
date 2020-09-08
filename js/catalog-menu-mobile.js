Vue.component('catalog-menu-mobile', {
    template: `
    <ul class="catalog-menu" v-if="width<=992">
        <li 
            v-for="(item, name, ind) in catalogMenuData" 
            class="assort-section"
            :class="{'active':item.SELECTED, 'has-children':item.SUBMENU}"
        >
            <template v-if="item.SUBMENU">
                <label @click="showMobileSubMenu(item,$event)">{{item.NAME}}</label>
                <ul class="submenu" v-if="item.SELECTED">
                    <li 
                        v-for="subItem in item.SUBMENU" 
                        :class="{'active':subItem.SELECTED, 'has-children':subItem.SUBMENU}"
                    >
                        <template v-if="subItem.SUBMENU">
                            <label @click="showMobileSubMenu(subItem,$event)">{{subItem.NAME}}</label>
                            <ul class="submenu" v-if="subItem.SELECTED">
                                <li v-for="subSubItem in subItem.SUBMENU">
                                    <a class="second-level" :href="subSubItem.URL">{{subSubItem.NAME}}</a>
                                </li>
                            </ul>
                        </template>
                        <template v-else>
                            <a :href="subItem.URL" class="second-level">{{subItem.NAME}}</a>
                        </template>
                    </li>
                </ul>
            </template>
            <template v-else>
            <a :href="item.URL">{{item.NAME}}</a>
            </template>
        </li>
    </ul>
    `,
         data(){
            return{
                catalogMenuData: catalogMenuData,
                isMobileVariant:false,
                width:0
            }
        },
        filters:{
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();
        },
        mounted(){
             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                 this.isMobileVariant = true;
             }
        },
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
                if(this.width<=992){
                    this.isMobileVariant = true;
                }else{
                    this.isMobileVariant = false;
                }
			},
            showMobileSubMenu(item,event){
                if(typeof(item.SELECTED)=="undefined"){
                    Vue.set(item, 'SELECTED', false);
                }
                if(item.SELECTED){
                    Vue.set(item, 'SELECTED', false);
                }else{
                    Vue.set(item, 'SELECTED', true);
                }
            }
        },
        computed: {},
    }
);