<template>
   <div class="shm_box">
       <div class="top">
           <Header/>
       </div>
       <div class="main">
           <div class="main_top">
               <p>欢迎使用电子票据自助终端</p>
           </div>
           <div class="main_con">
               <div class="idcard" style="position:relative;">
                   <img src="../../assets/img/idcard.jpg" alt="" class="id_img">
                   <Circlet/>
               </div>
               <div class="qrcode" style="position:relative;">
                    <img src="../../assets/img/idcard.jpg" alt="" class="id_img">
                   <Circlet/>
               </div>
           </div>
           <div class="main_bot"></div>
       </div>
   </div>
  
</template>

<script>
import Header from '../../components/Header/Header'
import Circlet from '../../components/Circlet/Circlet'
export default {
    name:'mobeill',
    data(){
        return{
            text:'hahahah'
        }
    },
    components:{Header,Circlet}
 
}
</script>

<style scoped>
    
    .main{
     height:1000px;
     display: flex;
     flex-direction:column;

   }
    .main_top{
        flex:0.3;
        width: 100%;
        background-color: sandybrown;
        padding:20px 10px;
    }
    .main_top p{
        display: inline-block;
        font-size: 41px;
        width: 100%;
        text-align: center;
        font-family: "楷体";
        color: red
    }
     .main_con{
        flex:4;
        width: 100%;
        background-color: seagreen;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .main_con .idcard{
        height:500px;
        width: 500px;
        background-color: yellow;
        display: inline-block;
    }
    .id_img{
        height:100%;
        width: 100%;
        position:absolute;
        top:0;
        left:0;
    }
    .main_con .qrcode{
        height:500px;
        width: 500px;
        background-color: red;
        display: inline-block;

    }
     .main_bot{
        flex:1;
        width: 100%;
        background-color: skyblue;
    }
</style>