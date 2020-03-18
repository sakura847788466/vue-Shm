<template>
   <div class="header_v">
     <div class="container">
       <div  style="display:flex;">
         <img src="../../assets/img/logo.png" alt="">
         <div class="title">
           <span>南充市第三人民医院</span>
           <span>NanChong People's Hospital</span>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name:'header_v',
  data(){
    return{

    }
  },
  methods:{

  },
  components:{}
}
</script>

<style scoped>
  .header_v{
    height:100px;
    width: 100%;
    background-color: royalblue;
  }
  .container{
    padding: 10px;
    width: 90%;
    height:100%;
    background-color: salmon;
    margin:0 auto;
  }
  .title{
    width: 291px;
    padding: 10px;
  }
  .title span:first-child{
    font-size: 29px;
    margin-bottom: 6px;
    display: inline-block
  }
   .title span:nth-child(2){
    font-size: 19px;
        border-right: 1px solid #000;
    width: 270px;
    border-right-width: initial;
    border-right-color: #e4e4e4;
    display: inline-block;

   }
   
</style>