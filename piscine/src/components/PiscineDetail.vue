<template>
   <section class="hero">
     <div class="hero-body">
       <div class="container">
         <h1 class="title">
           Piscine {{recordid}} </h1>
           <Piscine :piscine-recordid="recordid" />
       </div>
     </div>
   </section>
 </template>

<script>
import Piscine from "./Piscine.vue";

 export default {
   name: "PiscineDetail",
   props: {
     recordid: String,
   },
   components: {
     Piscine,
   },
 };
 </script>