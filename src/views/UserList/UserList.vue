<template>
   <div>hhahah</div>
</template>

<script>
export default {
    name:'userlist'
}
</script>

<style scoped>
  .infoListW ,.printBox{
  /* display: none; */
  height: 653px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  margin:auto;
  background: #e6eaec;
  z-index: 2000;
}

.infoList {
  width: 100%;
  background: #e6eaec;
  padding: 20px 40px 20px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.infoList .find {
  height:57px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #e5f5f5;
  position: relative;
}

.infoList .find .title {
  width: 25%;
  line-height: 63px;
  text-align: center;
  font-size: 27px;
}

.infoList .find .int {
  height: 100%;
  width:53%;
  float:left;
}

.infoList .find .int input {
  height: 100%;
  width: 100%;
  font-size: 24px;
  border-radius: 10px;
  border: none;
  padding: 0 10px 0 10px;
  display:inline-block;
}

input::-webkit-input-placeholder {
  font-size: 20px;
}

.infoList .find .btn {
  width:22%;
  height: 100%;
}

.infoList .find .btn .caXun {
  width: 104px;
  height: 50px;
  background: rgb(52, 117, 238);
  color: #fff;
  border-radius: 11px;
  border: none;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 6%;
  left:80%;
}
.infoList .find .btn .caXun_s {
  width: 104px;
  height: 50px;
  background: rgb(52, 117, 238);
  color: #fff;
  border-radius: 11px;
  border: none;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 6%;
  left:90%;
}
.infoList .find input {
  height: 60px;
  width: 200px;
}

.infoList .infoList_top {
  height: 10%;
  width: 100%;
}

.infoList .infoList_top ul {
  height: 67px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(238, 181, 52);
}

.infoList .infoList_top ul li {
  height: 67px;
  width: 16.6%;
  float: left;
  line-height: 67px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border-right: 1px solid #fff;
}

.infoList .infoList_c {
  height:475px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.infoList .infoList_c .item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.infoList .infoList_c .item div{
  width: 16.6%;
  float: left;
  height: 67px;
  text-align: center;
  line-height: 67px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis 
}

.infoList .infoList_c .item .print {
  border: 1px solid #e6eaec;
  display: inline-block;
  background: #5e5f5f;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 3px;
  position: relative;
}

.infoList .infoList_b {
  height:52px;
  width: 100%;
  position: relative;
  margin-top:20px;
}

.infoList .infoList_b .page {
  height: 52px;
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top:-26px;
  margin-left:-160px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.infoList .infoList_b .page .prev {
  width: 80px;
  height: 36px;
  background: rgb(52, 117, 238);
  color: #fff;
  border-radius: 7px;
  border: none;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
}
 .outCard{
  width: 16.5%;
  height: 45px;
  background: rgb(52, 117, 238);
  color: #fff;
  border-radius: 7px;
  border: none;
  text-align: center;
  line-height: 45px;
  cursor: pointer;
  position: fixed;
  top:82.5%;
  left:80.5%;
}
.infoList .infoList_b .page ul {
  display: inline-block;
  height: 36px;
  line-height: 36px;
  margin: 0 10px 0 10px;
}

#pageNav a {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #3a87ad;
  text-decoration: none;
  margin: 0 5px;
  position: absolute;
  top: 0;
  right: 24px;
  cursor: pointer;
}

#pageNav a.active,
#pageNav a:hover {
  background: #3a87ad;
  color: #EFEFEF;
}

.infoList .infoList_b .page .next {
  width: 80px;
  height: 36px;
  background: rgb(52, 117, 238);
  color: #fff;
  border-radius: 7px;
  border: none;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
}



</style>