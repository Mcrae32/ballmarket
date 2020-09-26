let catalogMenuTimer = null;

Vue.component('catalog-menu', {
    template: `
    <ul class="catalog-menu" id="menu" @mouseleave="hideSubMenu()" v-if="width>992">
        <li 
            v-for="(item, name, ind) in catalogMenuData" 
            class="assort-section" 
            
            :class="{'active':item.SELECTED}"
            >
            <a :href="item.URL" @mouseover="showSubMenu(item,$event)" @click="showSubMenu(item,$event)">{{item.NAME}}</a>
            <ul v-if="item.SELECTED">
                <li 
                    v-for="subItem in item.SUBMENU"
                    :class="{'active':subItem.SELECTED}"
                >
                    <a 
                        class="second-level" 
                        @mouseover="showSubMenu(subItem,$event)"
                        :href="subItem.URL">{{subItem.NAME}}</a>
                    <ul v-if="subItem.SELECTED">
                        <li 
                            v-for="subSubItem in subItem.SUBMENU"
                            :class="{'active':subSubItem.SELECTED}"
                        >
                            <a class="second-level" :href="subSubItem.URL">{{subSubItem.NAME}}</a>
                        </li>
                    </ul>
                    <template v-if="subItem.ID==openedItemId && subItem.SUBMENU">
                        <div class="sub-menu" @mouseover="showSubMenu(subItem,$event)">
                            <div v-for="subItem in subItem.SUBMENU" class="sub-menu-item">
                                <a :href="subItem.URL" class="second-level last-level" >{{subItem.NAME}}</a>
                            </div>
                        </div>
                    </template>
                </li>
            </ul>
            <template v-if="item.ID==openedItemId && item.SUBMENU">
                <div class="sub-menu" @mouseover="showSubMenu(item,$event)">
                    <div v-for="subItem in item.SUBMENU" class="sub-menu-item">
                        <a :href="subItem.URL" class="firsl-level">{{subItem.NAME}}</a>
                        <div class="menu-desctop-second-level-wrap">
                            <a v-for="subSubItem in subItem.SUBMENU" class="second-level" :href="subSubItem.URL">{{subSubItem.NAME}}</a>
                        </div>
                    </div>
                </div>
            </template>
        </li>
    </ul>
    `,
         data(){
            return{
                catalogMenuData: catalogMenuData,
                openedItemId: null,
                isMobileVariant:false,
                width:0,
                timer:null
            }
        },
        filters:{
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();

            //закрываем меню при клике вне него
			document.addEventListener("click", (e) => {
				if (this.openedItemId){
                    if(!e.target.closest("#menu")){
                        this.openedItemId = null;
                    }
                }
			});
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
            hideSubMenu(){
               this.timer = setTimeout(()=>{
                   this.openedItemId = null;
                }, 1000);   
            },
            showSubMenu(item,event){
                clearTimeout(this.timer);
                this.openedItemId = item.ID;
            }
        },
        computed: {},
    }
);



//var $catalogMenu = new Vue({el: '#catalog-menu'});