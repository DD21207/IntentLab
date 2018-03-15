<template>
  <div class="x-bar">
    <div :id="id"
    :data="data" :loadChart="loadChart"></div>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
import HighchartsNoData from 'highcharts/modules/no-data-to-display';
HighchartsNoData(HighCharts)

export default {
  // 验证类型
  props: {
    id: {
      type: String
    },
    data: {
      
    },
     loadChart:Boolean
  },
  data(){
    return {
      option:{
          chart: {
              type: 'line'
          },
          lang: {
            noData: "SELECTED COMBINATION HAS NO DATA" //真正显示的文本
          },
          noData: {  
            // Custom positioning/aligning options  
            position: {    //相对于绘图区定位无数据标签的位置。 默认值：[object Object].
                align: 'center',  
                y:-20
            },  
            // Custom svg attributes  
            attr: {     //无数据标签中额外的SVG属性
                //'stroke-width': 1,  
                //stroke: '#cccccc'  
            },  
            // Custom css  
            style: {    //对无数据标签的CSS样式。 默认值：[object Object].                    
                //fontWeight: 'bold',       
                //fontSize: '15px',  
                //color: '#202030'          
            }  
          },
          colors:['rgb(74, 199, 220)','rgb(233, 108, 57)','rgb(47,208,181)','rgb(198,224,180)'],
          title: {
              text: null
          },
          Loading:{  
              hideDuration: 1000,//淡出效果的持续时间（以毫秒为单位）  
              showDuration: 1000,//淡入效果的持续时间（以毫秒为单位）  
              labelStyle: {//加载标签的span的CSS样式  
                  fontStyle: 'italic',  
                  color:'red',  
                  fontSize:"40px"  
              },  
              style: {//覆盖在绘图区的加载页面的样式  
                  position: 'absolute',   
                  backgroundColor: 'white',   
                  opacity: 0.5,   
                  textAlign: 'center',  
                  color:'red'  
              }   
          },  
          credits: {
            enabled: false
          },
          xAxis: {
              categories: this.data.xAxis,
              labels: {
                rotation: -45
            }
          },
          yAxis: {
              title: {
                  text: null
              }
          },
          series: this.data.series
      }
    }
  },
  mounted(){
    HighCharts.chart(this.id,this.option)
  },
  methods: {  
        queryTrendData: function(){
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.2)',
            target: document.querySelector('#'+this.id)
          });
            if(this.loadChart == true){

            }else{
              loading.close()
            this.option.xAxis.categories = this.data.xAxis
            this.option.series = this.data.series
            HighCharts.chart(this.id,this.option)
            
          }
            
        }  
    }, 
  watch:{
    'data.series': 'queryTrendData'
  },
}
</script> 