<template>
  <div id="app">
    <MainNav :menu="menu"></MainNav>
    <nuxt />
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'


export default {
   data(){
    return{
         menu: [
        {id: 1, path: "/", name: "HOTELS"},
        {id: 2, path: "/flights", name: "FLIGHTS"},
        {id: 3, path: "/restaurants", name: "RESTAURANTS"},
        {id: 4, path: "/contact", name: "CONTACTS US"},
        {id: 5, path: "/myfavorites", name: "MY FAVORITES",  meta: { isPrivate: true }},
      ]
    }
  },
/*   router.beforeEach((to, from, next)=>{
  console.log(to)
  if(to.meta.isPrivate && !store.state.isAuth){
    next("login")
  }else{
    next()
  }
}) */
  components:{
    MainNav,
    MainFooter,
  }
}
</script>

<style>

</style>
